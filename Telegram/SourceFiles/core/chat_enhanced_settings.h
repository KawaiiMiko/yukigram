/*
This file is part of Yurigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#pragma once

class PeerData;

namespace EnhancedSettings {

enum class ChatFeature {
	ForceShowWebPagePreview,
	Count,
};

enum class ChatFeatureOverride {
	Default,
	Enabled,
	Disabled,
};

[[nodiscard]] ChatFeatureOverride GetChatFeatureOverride(
	not_null<PeerData*> peer,
	ChatFeature feature);
[[nodiscard]] bool ResolveChatFeature(
	not_null<PeerData*> peer,
	ChatFeature feature);
void SetChatFeatureOverride(
	not_null<PeerData*> peer,
	ChatFeature feature,
	ChatFeatureOverride value);

} // namespace EnhancedSettings
