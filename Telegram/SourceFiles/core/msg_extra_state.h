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

#include <optional>
#include <vector>

namespace Data {
class Session;
} // namespace Data

namespace MessageExtraState {

enum class HiddenSource : uchar {
	Manual = 0x01,
	BlockedPeer = 0x02,
};

struct UnhiddenMessages {
	PeerId peerId;
	std::vector<MsgId> ids;
};

[[nodiscard]] bool hide(
	PeerId peerId,
	MsgId messageId,
	HiddenSource source,
	PeerId blockedPeerId = PeerId());
[[nodiscard]] bool hide(
	not_null<HistoryItem*> item,
	HiddenSource source = HiddenSource::Manual);
[[nodiscard]] bool isHidden(PeerId peerId, MsgId messageId);
[[nodiscard]] bool isHidden(not_null<HistoryItem*> item);
[[nodiscard]] int hiddenCount(
	PeerId peerId,
	std::optional<HiddenSource> source = std::nullopt);
[[nodiscard]] std::vector<MsgId> hiddenMessageIds(
	PeerId peerId,
	std::optional<HiddenSource> source = std::nullopt);
[[nodiscard]] std::vector<MsgId> unhide(
	PeerId peerId,
	const std::vector<MsgId> &ids,
	std::optional<HiddenSource> source = std::nullopt);
[[nodiscard]] std::vector<MsgId> unhideByBlockedPeer(
	PeerId peerId,
	PeerId blockedPeerId);
[[nodiscard]] std::vector<MsgId> unhideAll(
	PeerId peerId,
	std::optional<HiddenSource> source = std::nullopt);
[[nodiscard]] std::vector<UnhiddenMessages> unhideAll(HiddenSource source);
void hideMessages(
	not_null<Data::Session*> owner,
	const MessageIdsList &ids,
	HiddenSource source = HiddenSource::Manual);
[[nodiscard]] bool shouldHideBlockedMessage(not_null<HistoryItem*> item);
[[nodiscard]] rpl::producer<PeerId> changes();

} // namespace MessageExtraState
