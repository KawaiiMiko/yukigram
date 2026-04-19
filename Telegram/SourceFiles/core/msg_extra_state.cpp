/*
This file is part of Yukigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "core/msg_extra_state.h"

#include "core/enhanced_settings.h"
#include "data/data_session.h"
#include "data/data_user.h"
#include "rpl/event_stream.h"

#include <algorithm>

namespace MessageExtraState {
namespace {

struct HiddenState {
	uchar sources = 0;
	PeerId blockedPeerId;
};

[[nodiscard]] constexpr auto SourceMask(HiddenSource source) {
	return static_cast<uchar>(source);
}

[[nodiscard]] bool Matches(
		const HiddenState &state,
		std::optional<HiddenSource> source) {
	return !source || (state.sources & SourceMask(*source));
}

std::unordered_map<PeerId, std::unordered_map<MsgId, HiddenState>> hidden;
rpl::event_stream<PeerId> changed;

} // namespace

bool hide(
		PeerId peerId,
		MsgId messageId,
		HiddenSource source,
		PeerId blockedPeerId) {
	auto &messages = hidden[peerId];
	auto &state = messages[messageId];
	const auto mask = SourceMask(source);
	if (state.sources & mask) {
		return false;
	}
	state.sources |= mask;
	if (source == HiddenSource::BlockedPeer) {
		state.blockedPeerId = blockedPeerId;
	}
	changed.fire_copy(peerId);
	return true;
}

bool hide(not_null<HistoryItem*> item, HiddenSource source) {
	const auto blockedPeerId = (source == HiddenSource::BlockedPeer)
		? item->from()->id
		: PeerId();
	return hide(
		item->history()->peer->id,
		item->id,
		source,
		blockedPeerId);
}

bool isHidden(PeerId peerId, MsgId messageId) {
	const auto peer = hidden.find(peerId);
	if (peer == hidden.end()) {
		return false;
	}
	const auto item = peer->second.find(messageId);
	return (item != peer->second.end()) && (item->second.sources != 0);
}

bool isHidden(not_null<HistoryItem*> item) {
	return isHidden(item->history()->peer->id, item->id);
}

int hiddenCount(
		PeerId peerId,
		std::optional<HiddenSource> source) {
	const auto i = hidden.find(peerId);
	if (i == hidden.end()) {
		return 0;
	}
	if (!source) {
		return int(i->second.size());
	}
	auto result = 0;
	for (const auto &[messageId, state] : i->second) {
		if (Matches(state, source)) {
			++result;
		}
	}
	return result;
}

std::vector<MsgId> hiddenMessageIds(
		PeerId peerId,
		std::optional<HiddenSource> source) {
	const auto i = hidden.find(peerId);
	if (i == hidden.end()) {
		return {};
	}
	auto result = std::vector<MsgId>();
	result.reserve(i->second.size());
	for (const auto &[messageId, state] : i->second) {
		if (Matches(state, source)) {
			result.push_back(messageId);
		}
	}
	return result;
}

std::vector<MsgId> unhide(
		PeerId peerId,
		const std::vector<MsgId> &ids,
		std::optional<HiddenSource> source) {
	const auto i = hidden.find(peerId);
	if ((i == hidden.end()) || ids.empty()) {
		return {};
	}
	auto changedIds = std::vector<MsgId>();
	changedIds.reserve(ids.size());
	auto &messages = i->second;
	for (const auto messageId : ids) {
		const auto j = messages.find(messageId);
		if (j == messages.end()) {
			continue;
		}
		auto &state = j->second;
		const auto before = state.sources;
		if (!source) {
			state.sources = 0;
			state.blockedPeerId = PeerId();
		} else {
			state.sources &= ~SourceMask(*source);
			if (*source == HiddenSource::BlockedPeer) {
				state.blockedPeerId = PeerId();
			}
		}
		if (before == state.sources) {
			continue;
		}
		changedIds.push_back(messageId);
		if (!state.sources) {
			messages.erase(j);
		}
	}
	if (messages.empty()) {
		hidden.erase(i);
	}
	if (!changedIds.empty()) {
		changed.fire_copy(peerId);
	}
	return changedIds;
}

std::vector<MsgId> unhideByBlockedPeer(PeerId peerId, PeerId blockedPeerId) {
	const auto i = hidden.find(peerId);
	if (i == hidden.end()) {
		return {};
	}
	auto ids = std::vector<MsgId>();
	ids.reserve(i->second.size());
	for (const auto &[messageId, state] : i->second) {
		if ((state.sources & SourceMask(HiddenSource::BlockedPeer))
			&& (state.blockedPeerId == blockedPeerId)) {
			ids.push_back(messageId);
		}
	}
	return unhide(peerId, ids, HiddenSource::BlockedPeer);
}

std::vector<MsgId> unhideAll(
		PeerId peerId,
		std::optional<HiddenSource> source) {
	return unhide(peerId, hiddenMessageIds(peerId, source), source);
}

std::vector<UnhiddenMessages> unhideAll(HiddenSource source) {
	auto result = std::vector<UnhiddenMessages>();
	result.reserve(hidden.size());
	auto peerIds = std::vector<PeerId>();
	peerIds.reserve(hidden.size());
	for (const auto &[peerId, _] : hidden) {
		peerIds.push_back(peerId);
	}
	for (const auto peerId : peerIds) {
		auto ids = unhideAll(peerId, source);
		if (!ids.empty()) {
			result.push_back({
				.peerId = peerId,
				.ids = std::move(ids),
			});
		}
	}
	return result;
}

void hideMessages(
		not_null<Data::Session*> owner,
		const MessageIdsList &ids,
		HiddenSource source) {
	auto expanded = MessageIdsList();
	expanded.reserve(ids.size());
	for (const auto &fullId : ids) {
		if (const auto current = owner->message(fullId)) {
			for (const auto &id : owner->itemOrItsGroup(current)) {
				if (std::find(expanded.begin(), expanded.end(), id)
					== expanded.end()) {
					expanded.push_back(id);
				}
			}
		}
	}
	auto histories = std::vector<not_null<History*>>();
	histories.reserve(expanded.size());
	for (const auto &fullId : expanded) {
		if (const auto current = owner->message(fullId)) {
			const auto history = current->history();
			static_cast<void>(hide(current, source));
			current->destroy();
			if (std::find(histories.begin(), histories.end(), history)
				== histories.end()) {
				histories.push_back(history);
			}
		}
	}
	for (const auto &history : histories) {
		history->requestChatListMessage();
	}
}

bool shouldHideBlockedMessage(not_null<HistoryItem*> item) {
	if (!GetEnhancedBool("blocked_user_spoiler_mode")
		|| !item->isRegular()
		|| item->isService()) {
		return false;
	}
	const auto from = item->from();
	return blockExist(from->id.value)
		|| (from->isUser() && from->asUser()->isBlocked());
}

rpl::producer<PeerId> changes() {
	return changed.events();
}

} // namespace MessageExtraState
