/*
This file is part of Yukigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#pragma once

#include "history/history.h"
#include "history/history_item.h"

namespace MessageExtraState {

void hide(not_null<HistoryItem*> item);
[[nodiscard]] bool isHidden(not_null<HistoryItem*> item);

} // namespace MessageExtraState
