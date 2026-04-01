/*
This file is part of 64Gram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/TDesktop-x64/tdesktop/blob/dev/LEGAL
*/
#include <base/timer_rpl.h>
#include <ui/toast/toast.h>
#include <mainwindow.h>
#include <QJsonArray>
#include <QJsonDocument>
#include "settings/sections/settings_enhanced.h"

#include "settings/settings_common.h"
#include "settings/settings_builder.h"
#include "settings/sections/settings_chat.h"
#include "settings/sections/settings_main.h"
#include <ui/vertical_list.h>
#include "ui/wrap/vertical_layout.h"
#include "ui/wrap/slide_wrap.h"
#include "ui/widgets/buttons.h"
#include "ui/widgets/labels.h"
#include "ui/widgets/checkbox.h"
#include "ui/widgets/continuous_sliders.h"
#include "ui/text/text_utilities.h" // Ui::Text::ToUpper
#include "boxes/connection_box.h"
#include "boxes/enhanced_options_box.h"
#include "boxes/about_box.h"
#include "ui/boxes/confirm_box.h"
#include "platform/platform_specific.h"
#include "window/window_session_controller.h"
#include "lang/lang_keys.h"
#include "lang/lang_instance.h"
#include "core/update_checker.h"
#include "core/enhanced_settings.h"
#include "core/application.h"
#include "storage/localstorage.h"
#include "data/data_session.h"
#include "main/main_session.h"
#include "layout/layout_item_base.h"
#include "facades.h"
#include "styles/style_settings.h"
#include "styles/style_menu_icons.h"
#include "apiwrap.h"
#include "api/api_blocked_peers.h"

namespace Settings {

namespace {

[[maybe_unused]] const auto kEnhancedMeta = Builder::BuildHelper({
	.id = Enhanced::Id(),
	.parentId = MainId(),
	.title = &tr::lng_settings_enhanced,
	.icon = &st::menuIconManage,
}, [](Builder::SectionBuilder &builder) {
	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/network/upload-speed-boost"_q,
			.title = tr::lng_settings_net_upload_speed_boost(tr::now),
			.keywords = { u"upload"_q, u"speed"_q, u"network"_q, u"boost"_q },
			.deeplink = u"tg://settings/enhanced/network/upload-speed-boost"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-message-id"_q,
			.title = tr::lng_settings_show_message_id(tr::now),
			.keywords = { u"message"_q, u"id"_q, u"info"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-message-id"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/no-animoji"_q,
			.title = tr::lng_settings_no_animoji(tr::now),
			.keywords = { u"animated"_q, u"emoji"_q, u"animoji"_q, u"disable"_q },
			.deeplink = u"tg://settings/enhanced/messages/no-animoji"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/old-reply-layout"_q,
			.title = tr::lng_settings_old_reply_layout(tr::now),
			.keywords = { u"reply"_q, u"old"_q, u"layout"_q, u"classic"_q },
			.deeplink = u"tg://settings/enhanced/messages/old-reply-layout"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/wide-messages"_q,
			.title = tr::lng_settings_wide_messages(tr::now),
			.keywords = { u"wide"_q, u"messages"_q, u"width"_q },
			.deeplink = u"tg://settings/enhanced/messages/wide-messages"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-similar-on-joined"_q,
			.title = tr::lng_settings_show_similar_on_joined(tr::now),
			.keywords = { u"similar"_q, u"recommendations"_q, u"joined"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-similar-on-joined"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/more-right-action-comments"_q,
			.title = tr::lng_settings_more_right_action_comments(tr::now),
			.keywords = { u"context"_q, u"menu"_q, u"comments"_q },
			.deeplink = u"tg://settings/enhanced/messages/more-right-action-comments"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-repeater-option"_q,
			.title = tr::lng_settings_show_repeater_option(tr::now),
			.keywords = { u"repeater"_q, u"repeat"_q, u"forward"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-repeater-option"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-view-as-json"_q,
			.title = tr::lng_settings_show_view_as_json(tr::now),
			.keywords = { u"json"_q, u"view"_q, u"debug"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-view-as-json"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/repeater-reply-to-original"_q,
			.title = tr::lng_settings_repeater_reply_to_orig_msg(tr::now),
			.keywords = { u"repeater"_q, u"reply"_q, u"original"_q },
			.deeplink = u"tg://settings/enhanced/messages/repeater-reply-to-original"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/always-delete-for"_q,
			.title = tr::lng_settings_always_delete_for(tr::now),
			.keywords = { u"auto"_q, u"delete"_q, u"timer"_q, u"ttl"_q },
			.deeplink = u"tg://settings/enhanced/messages/always-delete-for"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/disable-cloud-draft-sync"_q,
			.title = tr::lng_settings_disable_cloud_draft_sync(tr::now),
			.keywords = { u"draft"_q, u"cloud"_q, u"sync"_q },
			.deeplink = u"tg://settings/enhanced/messages/disable-cloud-draft-sync"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/hide-classic-forward"_q,
			.title = tr::lng_settings_hide_classic_forward(tr::now),
			.keywords = { u"forward"_q, u"classic"_q, u"hide"_q },
			.deeplink = u"tg://settings/enhanced/messages/hide-classic-forward"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/disable-link-warning"_q,
			.title = tr::lng_settings_disable_link_warning(tr::now),
			.keywords = { u"link"_q, u"warning"_q, u"confirm"_q },
			.deeplink = u"tg://settings/enhanced/messages/disable-link-warning"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/disable-premium-animation"_q,
			.title = tr::lng_settings_disable_premium_animation(tr::now),
			.keywords = { u"premium"_q, u"animation"_q, u"effects"_q },
			.deeplink = u"tg://settings/enhanced/messages/disable-premium-animation"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/disable-global-search"_q,
			.title = tr::lng_settings_disable_global_search(tr::now),
			.keywords = { u"global"_q, u"search"_q, u"server"_q },
			.deeplink = u"tg://settings/enhanced/messages/disable-global-search"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-group-sender-avatar"_q,
			.title = tr::lng_settings_show_group_sender_avatar(tr::now),
			.keywords = { u"group"_q, u"sender"_q, u"avatar"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-group-sender-avatar"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/use-gt-api"_q,
			.title = tr::lng_settings_use_gt_api(tr::now),
			.keywords = { u"translate"_q, u"google"_q, u"api"_q, u"gt"_q },
			.deeplink = u"tg://settings/enhanced/messages/use-gt-api"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/translate-to-tc"_q,
			.title = tr::lng_settings_translate_to_tc(tr::now),
			.keywords = { u"translate"_q, u"traditional"_q, u"chinese"_q, u"tc"_q },
			.deeplink = u"tg://settings/enhanced/messages/translate-to-tc"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/show-seconds"_q,
			.title = tr::lng_settings_show_seconds(tr::now),
			.keywords = { u"seconds"_q, u"clock"_q, u"time"_q },
			.deeplink = u"tg://settings/enhanced/messages/show-seconds"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/messages/hide-blocked-messages"_q,
			.title = tr::lng_settings_hide_messages(tr::now),
			.keywords = { u"blocked"_q, u"messages"_q, u"spoiler"_q, u"hide"_q },
			.deeplink = u"tg://settings/enhanced/messages/hide-blocked-messages"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/buttons/show-emoji-button-as-text"_q,
			.title = tr::lng_settings_show_emoji_button_as_text(tr::now),
			.keywords = { u"emoji"_q, u"button"_q, u"text"_q },
			.deeplink = u"tg://settings/enhanced/buttons/show-emoji-button-as-text"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/buttons/show-scheduled-button"_q,
			.title = tr::lng_settings_show_scheduled_button(tr::now),
			.keywords = { u"scheduled"_q, u"schedule"_q, u"button"_q },
			.deeplink = u"tg://settings/enhanced/buttons/show-scheduled-button"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/voice-chat/radio-controller"_q,
			.title = tr::lng_settings_radio_controller(tr::now),
			.keywords = { u"radio"_q, u"voice"_q, u"controller"_q },
			.deeplink = u"tg://settings/enhanced/voice-chat/radio-controller"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/voice-chat/auto-unmute"_q,
			.title = tr::lng_settings_auto_unmute(tr::now),
			.keywords = { u"auto"_q, u"unmute"_q, u"voice"_q },
			.deeplink = u"tg://settings/enhanced/voice-chat/auto-unmute"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/voice-chat/bitrate-controller"_q,
			.title = tr::lng_bitrate_controller(tr::now),
			.keywords = { u"bitrate"_q, u"audio"_q, u"quality"_q },
			.deeplink = u"tg://settings/enhanced/voice-chat/bitrate-controller"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/voice-chat/enable-hd-video"_q,
			.title = tr::lng_settings_enable_hd_video(tr::now),
			.keywords = { u"hd"_q, u"video"_q, u"quality"_q },
			.deeplink = u"tg://settings/enhanced/voice-chat/enable-hd-video"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/voice-chat/mpris-call-hangup"_q,
			.title = tr::lng_settings_mpris_call_hangup(tr::now),
			.keywords = { u"mpris"_q, u"media"_q, u"hangup"_q },
			.deeplink = u"tg://settings/enhanced/voice-chat/mpris-call-hangup"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/show-peer-id"_q,
			.title = tr::lng_settings_show_peer_id(tr::now),
			.keywords = { u"peer"_q, u"id"_q, u"user"_q, u"chat"_q },
			.deeplink = u"tg://settings/enhanced/other/show-peer-id"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/hide-all-chats"_q,
			.title = tr::lng_settings_hide_all_chats(tr::now),
			.keywords = { u"hide"_q, u"all"_q, u"chats"_q },
			.deeplink = u"tg://settings/enhanced/other/hide-all-chats"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/replace-edit-button"_q,
			.title = tr::lng_settings_replace_edit_button(tr::now),
			.keywords = { u"edit"_q, u"button"_q, u"replace"_q },
			.deeplink = u"tg://settings/enhanced/other/replace-edit-button"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/skip-message"_q,
			.title = tr::lng_settings_skip_message(tr::now),
			.keywords = { u"skip"_q, u"message"_q, u"next"_q },
			.deeplink = u"tg://settings/enhanced/other/skip-message"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/hide-counter"_q,
			.title = tr::lng_settings_hide_counter(tr::now),
			.keywords = { u"unread"_q, u"counter"_q, u"badge"_q },
			.deeplink = u"tg://settings/enhanced/other/hide-counter"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/hide-stories"_q,
			.title = tr::lng_settings_hide_stories(tr::now),
			.keywords = { u"stories"_q, u"hide"_q },
			.deeplink = u"tg://settings/enhanced/other/hide-stories"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/hide-star-ratings"_q,
			.title = tr::lng_settings_hide_star_ratings(tr::now),
			.keywords = { u"stars"_q, u"ratings"_q, u"hide"_q },
			.deeplink = u"tg://settings/enhanced/other/hide-star-ratings"_q,
		};
	});

	builder.add(nullptr, [] {
		return Builder::SearchEntry{
			.id = u"enhanced/other/force-mobile"_q,
			.title = tr::lng_settings_force_mobile(tr::now),
			.keywords = { u"mobile"_q, u"layout"_q, u"force"_q },
			.deeplink = u"tg://settings/enhanced/other/force-mobile"_q,
		};
	});
});

} // namespace

	Type EnhancedId() {
		return Enhanced::Id();
	}

	void Enhanced::SetupEnhancedNetwork(not_null<Ui::VerticalLayout *> container) {
		const auto wrap = container->add(
				object_ptr<Ui::SlideWrap<Ui::VerticalLayout>>(
						container,
						object_ptr<Ui::VerticalLayout>(container)));
		const auto inner = wrap->entity();

		AddDividerText(inner, tr::lng_settings_restart_hint());
		AddSkip(inner);
		AddSubsectionTitle(inner, tr::lng_settings_network());

		const auto uploadBoost = AddButtonWithLabel(
				inner,
				tr::lng_settings_net_upload_speed_boost(),
				rpl::single(NetBoostBox::BoostLabel(GetEnhancedInt("net_speed_boost"))),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/network/upload-speed-boost"_q,
			uploadBoost);
		uploadBoost->addClickHandler([=] {
			Ui::show(Box<NetBoostBox>());
		});

		AddSkip(container);
	}

	void Enhanced::writeBlocklistFile() {
		QFile file(cWorkingDir() + qsl("tdata/blocklist.json"));
		if (file.open(QIODevice::WriteOnly)) {
			auto toArray = [&] {
				QJsonArray array;
				for (auto id : blockList) {
					array.append(id);
				}
				return array;
			};
			auto doc = QJsonDocument(toArray());
			file.write(doc.toJson(QJsonDocument::Compact));
			file.close();
			Ui::Toast::Show("Restart in 3 seconds!");
			QTimer::singleShot(3 * 1000, []{ Core::Restart(); });
		} else {
			Ui::Toast::Show("Failed to save blocklist.");
		}
	}

	void Enhanced::reqBlocked(int offset) {
		if (_requestId) {
			return;
		}
		_requestId = App::wnd()->sessionController()->session().api().request(MTPcontacts_GetBlocked(
				MTP_flags(0),
				MTP_int(offset),
				MTP_int(100)
		)).done([=](const MTPcontacts_Blocked &result) {
			_requestId = 0;
			result.match([&](const MTPDcontacts_blockedSlice& data) { // Incomplete list of blocked users response.
				blockCount = data.vcount().v;
				for (const auto& user : data.vusers().v) {
					blockList.append(int64(UserId(user.c_user().vid().v).bare));
				}
				if (blockCount > blockList.length()) {
					reqBlocked(offset+100);
				} else {
					writeBlocklistFile();
				}
			}, [&](const MTPDcontacts_blocked& data) { // 	Full list of blocked users response.
				for (const auto& user : data.vusers().v) {
					blockList.append(int64(UserId(user.c_user().vid().v).bare));
				}
				writeBlocklistFile();
			});
		}).fail([=] {
			_requestId = 0;
		}).send();
	}

	void Enhanced::SetupEnhancedMessages(not_null<Ui::VerticalLayout *> container) {
		AddDivider(container);
		AddSkip(container);
		AddSubsectionTitle(container, tr::lng_settings_messages());

		const auto wrap = container->add(
				object_ptr<Ui::SlideWrap<Ui::VerticalLayout>>(
						container,
						object_ptr<Ui::VerticalLayout>(container)));
		const auto inner = wrap->entity();

		const auto showMessageId = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_message_id(),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/show-message-id"_q,
			showMessageId);
		showMessageId->toggleOn(
				rpl::single(GetEnhancedBool("show_messages_id"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_messages_id"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_messages_id", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto noAnimoji = AddButtonWithIcon(
				inner,
				tr::lng_settings_no_animoji(),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/no-animoji"_q,
			noAnimoji);
		noAnimoji->toggleOn(
				rpl::single(GetEnhancedBool("no_animoji"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("no_animoji"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("no_animoji", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto oldReplyLayout = AddButtonWithIcon(
				inner,
				tr::lng_settings_old_reply_layout(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/old-reply-layout"_q,
			oldReplyLayout);
		oldReplyLayout->toggleOn(
				rpl::single(GetEnhancedBool("old_reply_layout"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("old_reply_layout"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("old_reply_layout", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto wideMessages = AddButtonWithIcon(
				inner,
				tr::lng_settings_wide_messages(),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/wide-messages"_q,
			wideMessages);
		wideMessages->toggleOn(
				rpl::single(GetEnhancedBool("wide_messages"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("wide_messages"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("wide_messages", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto showSimilarOnJoined = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_similar_on_joined(),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/show-similar-on-joined"_q,
			showSimilarOnJoined);
		showSimilarOnJoined->toggleOn(
				rpl::single(GetEnhancedBool("show_similar_on_joined"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_similar_on_joined"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_similar_on_joined", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto moreRightActionComments = AddButtonWithIcon(
				inner,
				tr::lng_settings_more_right_action_comments(),
				st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/more-right-action-comments"_q,
			moreRightActionComments);
		moreRightActionComments->toggleOn(
				rpl::single(GetEnhancedBool("more_right_action_comments"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("more_right_action_comments"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("more_right_action_comments", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto showRepeaterOption = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_repeater_option(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/show-repeater-option"_q,
			showRepeaterOption);
		showRepeaterOption->toggleOn(
				rpl::single(GetEnhancedBool("show_repeater_option"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_repeater_option"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_repeater_option", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto showViewAsJson = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_view_as_json(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/show-view-as-json"_q,
			showViewAsJson);
		showViewAsJson->toggleOn(
				rpl::single(GetEnhancedBool("show_view_as_json"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_view_as_json"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_view_as_json", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		if (GetEnhancedBool("show_repeater_option")) {
			const auto repeaterReplyToOrig = AddButtonWithIcon(
					inner,
					tr::lng_settings_repeater_reply_to_orig_msg(),
					st::settingsButtonNoIcon
			);
			registerHighlight(
				u"enhanced/messages/repeater-reply-to-original"_q,
				repeaterReplyToOrig);
			repeaterReplyToOrig->toggleOn(
					rpl::single(GetEnhancedBool("repeater_reply_to_orig_msg"))
			)->toggledChanges(
			) | rpl::filter([=](bool toggled) {
				return (toggled != GetEnhancedBool("repeater_reply_to_orig_msg"));
			}) | rpl::on_next([=](bool toggled) {
				SetEnhancedValue("repeater_reply_to_orig_msg", toggled);
				EnhancedSettings::Write();
			}, container->lifetime());
		}

		auto value = rpl::single(
				AlwaysDeleteBox::DeleteLabel(GetEnhancedInt("always_delete_for"))
		) | rpl::then(
				_AlwaysDeleteChanged.events()
		) | rpl::map([] {
			return AlwaysDeleteBox::DeleteLabel(GetEnhancedInt("always_delete_for"));
		});

		auto btn = AddButtonWithLabel(
				container,
				tr::lng_settings_always_delete_for(),
				std::move(value),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/always-delete-for"_q,
			btn);
		btn->events(
		) | rpl::on_next([=](not_null<QEvent*> e) {
			const auto event = e->type();
			if (event == QEvent::UpdateLater) _AlwaysDeleteChanged.fire({});
		}, container->lifetime());
		btn->addClickHandler([=] {
			Ui::show(Box<AlwaysDeleteBox>());
		});

		const auto disableCloudDraftSync = AddButtonWithIcon(
				inner,
				tr::lng_settings_disable_cloud_draft_sync(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/disable-cloud-draft-sync"_q,
			disableCloudDraftSync);
		disableCloudDraftSync->toggleOn(
				rpl::single(GetEnhancedBool("disable_cloud_draft_sync"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("disable_cloud_draft_sync"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("disable_cloud_draft_sync", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		AddSkip(container);

		const auto hideClassicForward = AddButtonWithIcon(
				inner,
				tr::lng_settings_hide_classic_forward(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/hide-classic-forward"_q,
			hideClassicForward);
		hideClassicForward->toggleOn(
				rpl::single(GetEnhancedBool("hide_classic_fwd"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("hide_classic_fwd"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("hide_classic_fwd", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto disableLinkWarning = AddButtonWithIcon(
				inner,
				tr::lng_settings_disable_link_warning(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/disable-link-warning"_q,
			disableLinkWarning);
		disableLinkWarning->toggleOn(
				rpl::single(GetEnhancedBool("disable_link_warning"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("disable_link_warning"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("disable_link_warning", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto disablePremiumAnimation = AddButtonWithIcon(
				inner,
				tr::lng_settings_disable_premium_animation(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/disable-premium-animation"_q,
			disablePremiumAnimation);
		disablePremiumAnimation->toggleOn(
				rpl::single(GetEnhancedBool("disable_premium_animation"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("disable_premium_animation"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("disable_premium_animation", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto disableGlobalSearch = AddButtonWithIcon(
				inner,
				tr::lng_settings_disable_global_search(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/disable-global-search"_q,
			disableGlobalSearch);
		disableGlobalSearch->toggleOn(
				rpl::single(GetEnhancedBool("disable_global_search"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("disable_global_search"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("disable_global_search", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto showGroupSenderAvatar = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_group_sender_avatar(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/show-group-sender-avatar"_q,
			showGroupSenderAvatar);
		showGroupSenderAvatar->toggleOn(
				rpl::single(GetEnhancedBool("show_group_sender_avatar"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_group_sender_avatar"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_group_sender_avatar", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto useGtApi = AddButtonWithIcon(
				inner,
				tr::lng_settings_use_gt_api(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/use-gt-api"_q,
			useGtApi);
		useGtApi->toggleOn(
				rpl::single(GetEnhancedBool("use_gt_api"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("use_gt_api"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("use_gt_api", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		QString langPackBaseId = Lang::GetInstance().baseId();
		if (langPackBaseId == "zh-hant-raw" || langPackBaseId == "zh-hans-raw") {
			const auto translateToTc = AddButtonWithIcon(
					inner,
					tr::lng_settings_translate_to_tc(),
					st::settingsButtonNoIcon
			);
			registerHighlight(
				u"enhanced/messages/translate-to-tc"_q,
				translateToTc);
			translateToTc->toggleOn(
					rpl::single(GetEnhancedBool("translate_to_tc"))
			)->toggledChanges(
			) | rpl::filter([=](bool toggled) {
				return (toggled != GetEnhancedBool("translate_to_tc"));
			}) | rpl::on_next([=](bool toggled) {
				SetEnhancedValue("translate_to_tc", toggled);
				EnhancedSettings::Write();
			}, container->lifetime());
		}

		const auto showSeconds = AddButtonWithIcon(
			inner,
			tr::lng_settings_show_seconds(),
			st::settingsAttentionButton
		);
		registerHighlight(
			u"enhanced/messages/show-seconds"_q,
			showSeconds);
		showSeconds->toggleOn(
			rpl::single(GetEnhancedBool("show_seconds"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_seconds"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_seconds", toggled);
			EnhancedSettings::Write();
			QTimer::singleShot(1 * 1000, []{ Core::Restart(); });
		}, container->lifetime());

		const auto hideBlockedMessages = AddButtonWithIcon(
			inner,
			tr::lng_settings_hide_messages(),
			st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/messages/hide-blocked-messages"_q,
			hideBlockedMessages);
		hideBlockedMessages->toggleOn(
				rpl::single(GetEnhancedBool("blocked_user_spoiler_mode"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("blocked_user_spoiler_mode"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("blocked_user_spoiler_mode", toggled);
			EnhancedSettings::Write();
			if (toggled) {
				Ui::Toast::Show("Please wait a moment, fetching blocklist...");

				App::wnd()->sessionController()->session().api().blockedPeers().slice() | rpl::take(
					1
				) | rpl::on_next([&](const Api::BlockedPeers::Slice &result) {
					if (blockList.length() == result.total) {
						return;
					}
					blockList = QList<int64>();
					reqBlocked(0);
				}, container->lifetime());
			}
		}, container->lifetime());

		AddDividerText(inner, tr::lng_settings_hide_messages_desc());
	}

	void Enhanced::SetupEnhancedButton(not_null<Ui::VerticalLayout *> container) {
		AddDivider(container);
		AddSkip(container);
		AddSubsectionTitle(container, tr::lng_settings_button());

		const auto wrap = container->add(
				object_ptr<Ui::SlideWrap<Ui::VerticalLayout>>(
						container,
						object_ptr<Ui::VerticalLayout>(container)));
		const auto inner = wrap->entity();

		const auto showEmojiButtonAsText = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_emoji_button_as_text(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/buttons/show-emoji-button-as-text"_q,
			showEmojiButtonAsText);
		showEmojiButtonAsText->toggleOn(
				rpl::single(GetEnhancedBool("show_emoji_button_as_text"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_emoji_button_as_text"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_emoji_button_as_text", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		AddDividerText(inner, tr::lng_show_emoji_button_as_text_desc());

		const auto showScheduledButton = AddButtonWithIcon(
				inner,
				tr::lng_settings_show_scheduled_button(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/buttons/show-scheduled-button"_q,
			showScheduledButton);
		showScheduledButton->toggleOn(
				rpl::single(GetEnhancedBool("show_scheduled_button"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("show_scheduled_button"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("show_scheduled_button", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		AddSkip(container);
	}

	void Enhanced::SetupEnhancedVoiceChat(not_null<Ui::VerticalLayout *> container) {
		AddDivider(container);
		AddSkip(container);
		AddSubsectionTitle(container, tr::lng_settings_voice_chat());

		const auto wrap = container->add(
				object_ptr<Ui::SlideWrap<Ui::VerticalLayout>>(
						container,
						object_ptr<Ui::VerticalLayout>(container)));
		const auto inner = wrap->entity();

		const auto radioController = AddButtonWithIcon(
				inner,
				tr::lng_settings_radio_controller(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/voice-chat/radio-controller"_q,
			radioController);
		radioController->addClickHandler([=] {
			Ui::show(Box<RadioController>());
		});

		AddDividerText(inner, tr::lng_radio_controller_desc());

		const auto autoUnmute = AddButtonWithIcon(
				inner,
				tr::lng_settings_auto_unmute(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/voice-chat/auto-unmute"_q,
			autoUnmute);
		autoUnmute->toggleOn(
				rpl::single(GetEnhancedBool("auto_unmute"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("auto_unmute"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("auto_unmute", toggled);
			EnhancedSettings::Write();
		}, container->lifetime());

		AddDividerText(inner, tr::lng_auto_unmute_desc());

		auto value = rpl::single(
				BitrateController::BitrateLabel(GetEnhancedInt("bitrate"))
		) | rpl::then(
				_BitrateChanged.events()
		) | rpl::map([=] {
			return BitrateController::BitrateLabel(GetEnhancedInt("bitrate"));
		});

		auto btn = AddButtonWithLabel(
				container,
				tr::lng_bitrate_controller(),
				std::move(value),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/voice-chat/bitrate-controller"_q,
			btn);
		btn->events(
		) | rpl::on_next([=](not_null<QEvent*> e) {
			const auto event = e->type();
			if (event == QEvent::UpdateLater) _BitrateChanged.fire({});
		}, container->lifetime());
		btn->addClickHandler([=] {
			Ui::show(Box<BitrateController>());
		});

		const auto enableHdVideo = AddButtonWithIcon(
				inner,
				tr::lng_settings_enable_hd_video(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/voice-chat/enable-hd-video"_q,
			enableHdVideo);
		enableHdVideo->toggleOn(
				rpl::single(GetEnhancedBool("hd_video"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("hd_video"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("hd_video", toggled);
			Ui::Toast::Show(tr::lng_hd_video_hint(tr::now));
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto mprisCallHangup = AddButtonWithIcon(
				container,
				tr::lng_settings_mpris_call_hangup(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/voice-chat/mpris-call-hangup"_q,
			mprisCallHangup);
		mprisCallHangup->toggleOn(
				rpl::single(GetEnhancedBool("mpris_call_hangup"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("mpris_call_hangup"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("mpris_call_hangup", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		AddSkip(container);
	}

	void Enhanced::SetupEnhancedOthers(not_null<Window::SessionController*> controller, not_null<Ui::VerticalLayout *> container) {
		AddDivider(container);
		AddSkip(container);
		AddSubsectionTitle(container, tr::lng_settings_other());

		const auto showPeerId = AddButtonWithIcon(
			container,
			tr::lng_settings_show_peer_id(),
			st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/show-peer-id"_q,
			showPeerId);
		showPeerId->toggleOn(
				rpl::single(GetEnhancedBool("show_peer_id"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("show_peer_id"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("show_peer_id", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto hideAllChats = AddButtonWithIcon(
			container,
			tr::lng_settings_hide_all_chats(),
			st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/hide-all-chats"_q,
			hideAllChats);
		hideAllChats->toggleOn(
				rpl::single(GetEnhancedBool("hide_all_chats"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("hide_all_chats"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("hide_all_chats", enabled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		const auto replaceEditButton = AddButtonWithIcon(
				container,
				tr::lng_settings_replace_edit_button(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/replace-edit-button"_q,
			replaceEditButton);
		replaceEditButton->toggleOn(
				rpl::single(GetEnhancedBool("replace_edit_button"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("replace_edit_button"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("replace_edit_button", enabled);
			EnhancedSettings::Write();
			controller->reloadFiltersMenu();
		}, container->lifetime());

		const auto skipMessage = AddButtonWithIcon(
				container,
				tr::lng_settings_skip_message(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/skip-message"_q,
			skipMessage);
		skipMessage->toggleOn(
				rpl::single(GetEnhancedBool("skip_to_next"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("skip_to_next"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("skip_to_next", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		AddDividerText(container, tr::lng_settings_skip_message_desc());

		const auto hideCounter = AddButtonWithIcon(
				container,
				tr::lng_settings_hide_counter(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/hide-counter"_q,
			hideCounter);
		hideCounter->toggleOn(
				rpl::single(GetEnhancedBool("hide_counter"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("hide_counter"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("hide_counter", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto hideStories = AddButtonWithIcon(
				container,
				tr::lng_settings_hide_stories(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/hide-stories"_q,
			hideStories);
		hideStories->toggleOn(
				rpl::single(GetEnhancedBool("hide_stories"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("hide_stories"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("hide_stories", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto hideStarRatings = AddButtonWithIcon(
				container,
				tr::lng_settings_hide_star_ratings(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/hide-star-ratings"_q,
			hideStarRatings);
		hideStarRatings->toggleOn(
				rpl::single(GetEnhancedBool("hide_star_ratings"))
		)->toggledValue(
		) | rpl::filter([](bool enabled) {
			return (enabled != GetEnhancedBool("hide_star_ratings"));
		}) | rpl::on_next([=](bool enabled) {
			SetEnhancedValue("hide_star_ratings", enabled);
			EnhancedSettings::Write();
		}, container->lifetime());

		const auto forceMobile = AddButtonWithIcon(
				container,
				tr::lng_settings_force_mobile(),
				st::settingsButtonNoIcon
		);
		registerHighlight(
			u"enhanced/other/force-mobile"_q,
			forceMobile);
		forceMobile->toggleOn(
				rpl::single(GetEnhancedBool("force_mobile"))
		)->toggledChanges(
		) | rpl::filter([=](bool toggled) {
			return (toggled != GetEnhancedBool("force_mobile"));
		}) | rpl::on_next([=](bool toggled) {
			SetEnhancedValue("force_mobile", toggled);
			EnhancedSettings::Write();
			Core::Restart();
		}, container->lifetime());

		AddSkip(container);
	}

	rpl::producer<QString> Enhanced::title() {
		return tr::lng_settings_enhanced();
	}

	Enhanced::Enhanced(
			QWidget *parent,
			not_null<Window::SessionController *> controller)
			: Section(parent, controller) {
		setupContent(controller);
	}

	void Enhanced::setupContent(not_null<Window::SessionController *> controller) {
		const auto content = Ui::CreateChild<Ui::VerticalLayout>(this);

		SetupEnhancedNetwork(content);
		SetupEnhancedMessages(content);
		SetupEnhancedButton(content);
		SetupEnhancedVoiceChat(content);
		SetupEnhancedOthers(controller, content);

		Ui::ResizeFitChild(this, content);
	}

	void Enhanced::registerHighlight(QString id, QWidget *widget) {
		if (widget) {
			_highlightControls.emplace_back(std::move(id), widget);
		}
	}

	void Enhanced::showFinished() {
		for (const auto &[id, widget] : _highlightControls) {
			if (widget) {
				controller()->checkHighlightControl(id, widget);
			}
		}
		Section<Enhanced>::showFinished();
	}
} // namespace Settings

