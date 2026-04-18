/*
This file is part of Yukigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#pragma once

#include "history/history.h"
#include "history/history_item.h"
#include "rpl/producer.h"

#include <vector>

namespace MessageExtraState {

void hide(PeerId peerId, MsgId messageId);
void hide(not_null<HistoryItem*> item);
[[nodiscard]] bool isHidden(PeerId peerId, MsgId messageId);
[[nodiscard]] bool isHidden(not_null<HistoryItem*> item);
[[nodiscard]] int hiddenCount(PeerId peerId);
[[nodiscard]] std::vector<MsgId> hiddenMessageIds(PeerId peerId);
[[nodiscard]] std::vector<MsgId> unhideAll(PeerId peerId);
[[nodiscard]] rpl::producer<PeerId> changes();

} // namespace MessageExtraState
