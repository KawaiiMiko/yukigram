/*
This file is part of Yukigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "core/msg_extra_state.h"

#include "rpl/event_stream.h"

namespace MessageExtraState {
namespace {

std::unordered_map<PeerId, std::unordered_set<MsgId>> hidden;
rpl::event_stream<PeerId> changed;

} // namespace

void hide(PeerId peerId, MsgId messageId) {
	if (hidden[peerId].insert(messageId).second) {
		changed.fire_copy(peerId);
	}
}

void hide(not_null<HistoryItem*> item) {
	hide(item->history()->peer->id, item->id);
}

bool isHidden(PeerId peerId, MsgId messageId) {
	const auto item = hidden.find(peerId);
	return (item != hidden.end()) && item->second.contains(messageId);
}

bool isHidden(not_null<HistoryItem*> item) {
	return isHidden(item->history()->peer->id, item->id);
}

int hiddenCount(PeerId peerId) {
	const auto i = hidden.find(peerId);
	return (i != hidden.end()) ? int(i->second.size()) : 0;
}

std::vector<MsgId> hiddenMessageIds(PeerId peerId) {
	const auto i = hidden.find(peerId);
	if (i == hidden.end()) {
		return {};
	}
	auto result = std::vector<MsgId>();
	result.reserve(i->second.size());
	for (const auto messageId : i->second) {
		result.push_back(messageId);
	}
	return result;
}

std::vector<MsgId> unhideAll(PeerId peerId) {
	const auto i = hidden.find(peerId);
	if (i == hidden.end()) {
		return {};
	}
	auto result = std::vector<MsgId>();
	result.reserve(i->second.size());
	for (const auto messageId : i->second) {
		result.push_back(messageId);
	}
	hidden.erase(i);
	changed.fire_copy(peerId);
	return result;
}

rpl::producer<PeerId> changes() {
	return changed.events();
}

} // namespace MessageExtraState
