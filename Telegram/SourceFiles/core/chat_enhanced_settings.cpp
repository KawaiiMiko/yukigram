/*
This file is part of Yurigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "core/chat_enhanced_settings.h"

#include "data/data_chat.h"
#include "data/data_peer.h"
#include "data/data_peer_id.h"
#include "main/main_session.h"
#include "storage/storage_account.h"
#include "settings.h"

#include <array>
#include <string_view>

namespace EnhancedSettings {
namespace {

using GlobalValue = bool (*)();

struct ChatFeatureDescriptor {
	ChatFeature feature;
	std::string_view storageKey;
	GlobalValue globalValue;
};

bool ForceShowWebPagePreviewGlobalValue() {
	return GetEnhancedBool(u"force_show_webpage_preview"_q);
}

constexpr auto kChatFeatureDescriptors = std::array{
	ChatFeatureDescriptor{
		.feature = ChatFeature::ForceShowWebPagePreview,
		.storageKey = "force_show_webpage_preview",
		.globalValue = ForceShowWebPagePreviewGlobalValue,
	},
};
static_assert(
	kChatFeatureDescriptors.size()
	== static_cast<std::size_t>(ChatFeature::Count));

const ChatFeatureDescriptor &DescriptorFor(ChatFeature feature) {
	for (const auto &descriptor : kChatFeatureDescriptors) {
		if (descriptor.feature == feature) {
			return descriptor;
		}
	}
	Unexpected("Unknown ChatFeature.");
}

QByteArray StorageKeyFor(
		PeerId peerId,
		const ChatFeatureDescriptor &descriptor) {
	auto result = QByteArray("enhanced.chat.");
	result.append(QByteArray::number(SerializePeerId(peerId)));
	result.append('.');
	result.append(
		descriptor.storageKey.data(),
		static_cast<int>(descriptor.storageKey.size()));
	return result;
}

std::string_view PrefKey(const QByteArray &key) {
	return { key.constData(), static_cast<std::size_t>(key.size()) };
}

ChatFeatureOverride ReadOverride(
		not_null<PeerData*> peer,
		const ChatFeatureDescriptor &descriptor) {
	const auto canonical = peer->migrateToOrMe();
	auto &local = peer->session().local();
	const auto key = StorageKeyFor(canonical->id, descriptor);
	auto stored = local.readPrefOptional<bool>(PrefKey(key));
	if (!stored) {
		if (const auto migrated = canonical->migrateFrom()) {
			const auto migratedKey = StorageKeyFor(migrated->id, descriptor);
			stored = local.readPrefOptional<bool>(PrefKey(migratedKey));
		}
	}
	if (!stored) {
		return ChatFeatureOverride::Default;
	}
	return *stored
		? ChatFeatureOverride::Enabled
		: ChatFeatureOverride::Disabled;
}

} // namespace

ChatFeatureOverride GetChatFeatureOverride(
		not_null<PeerData*> peer,
		ChatFeature feature) {
	return ReadOverride(peer, DescriptorFor(feature));
}

bool ResolveChatFeature(
		not_null<PeerData*> peer,
		ChatFeature feature) {
	const auto &descriptor = DescriptorFor(feature);
	switch (ReadOverride(peer, descriptor)) {
	case ChatFeatureOverride::Default:
		return descriptor.globalValue();
	case ChatFeatureOverride::Enabled:
		return true;
	case ChatFeatureOverride::Disabled:
		return false;
	}
	Unexpected("Unknown ChatFeatureOverride.");
}

void SetChatFeatureOverride(
		not_null<PeerData*> peer,
		ChatFeature feature,
		ChatFeatureOverride value) {
	const auto &descriptor = DescriptorFor(feature);
	const auto canonical = peer->migrateToOrMe();
	const auto key = StorageKeyFor(canonical->id, descriptor);
	auto &local = peer->session().local();
	switch (value) {
	case ChatFeatureOverride::Default:
		local.clearPref(PrefKey(key));
		if (const auto migrated = canonical->migrateFrom()) {
			const auto migratedKey = StorageKeyFor(
				migrated->id,
				descriptor);
			local.clearPref(PrefKey(migratedKey));
		}
		return;
	case ChatFeatureOverride::Enabled:
		local.writePref<bool>(PrefKey(key), true);
		return;
	case ChatFeatureOverride::Disabled:
		local.writePref<bool>(PrefKey(key), false);
		return;
	}
	Unexpected("Unknown ChatFeatureOverride.");
}

} // namespace EnhancedSettings
