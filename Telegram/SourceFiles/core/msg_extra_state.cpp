/*
This file is part of Yukigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "core/msg_extra_state.h"

namespace MessageExtraState {
namespace {

std::unordered_map<PeerId, std::unordered_set<MsgId>> hidden;

} // namespace

void hide(PeerId peerId, MsgId messageId) {
	hidden[peerId].insert(messageId);
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

} // namespace MessageExtraState
