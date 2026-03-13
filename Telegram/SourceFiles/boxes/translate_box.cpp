/*
This file is part of Telegram Desktop,
the official desktop application for the Telegram messaging service.

For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "boxes/translate_box.h"
#include "boxes/translate_box_content.h"
#include "lang/translate_provider.h"

#include "core/application.h"
#include "core/core_settings.h"
#include "core/enhanced_settings.h"
#include "core/ui_integration.h"
#include "data/data_peer.h"
#include "data/data_session.h"
#include "history/history.h"
#include "lang/lang_instance.h"
#include "lang/lang_keys.h"
#include "main/main_session.h"
#include "spellcheck/platform/platform_language.h"
#include "translate/google_translate.h"
#include "ui/boxes/choose_language_box.h"
#include "ui/layers/generic_box.h"
#include "ui/widgets/multi_select.h"
#include "ui/text/text_utilities.h"

namespace Ui {
namespace {

constexpr auto kSkipAtLeastOneDuration = 3 * crl::time(1000);

enum class TranslateBoxProvider {
	Default,
	Google,
};

class GoogleTranslateProvider final : public QObject, public TranslateProvider {
public:
	[[nodiscard]] bool supportsMessageId() const override {
		return false;
	}

	void request(
			TranslateProviderRequest request,
			LanguageId to,
			Fn<void(TranslateProviderResult)> done) override {
		if (request.text.text.isEmpty()) {
			done(TranslateProviderResult{
				.error = TranslateProviderError::Unknown,
			});
			return;
		}
		_translate.translate(
			u"auto"_q,
			TranslateProviderTargetCode(to),
			request.text.text,
			[done = std::move(done)](TranslationResult result) {
				done(result.success
					? TranslateProviderResult{
						.text = TextWithEntities{ .text = result.text },
					}
					: TranslateProviderResult{
						.error = TranslateProviderError::Unknown,
					});
			});
	}

private:
	GTranslate _translate;
};

[[nodiscard]] QString TranslateProviderLabel(TranslateBoxProvider provider) {
	return (provider == TranslateBoxProvider::Google)
		? tr::lng_settings_use_gt_api(tr::now)
		: tr::lng_settings_notifications_display_default(tr::now);
}

} // namespace

void TranslateBox(
		not_null<Ui::GenericBox*> box,
		not_null<PeerData*> peer,
		MsgId msgId,
		TextWithEntities text,
	bool hasCopyRestriction) {
	struct State {
		State(not_null<Main::Session*> session)
		: defaultProvider(CreateTranslateProvider(session))
		, googleProvider(std::make_unique<GoogleTranslateProvider>()) {
		}

		std::unique_ptr<TranslateProvider> defaultProvider;
		std::unique_ptr<TranslateProvider> googleProvider;
		rpl::variable<LanguageId> to;
		rpl::variable<TranslateBoxProvider> provider;
		rpl::event_stream<> refreshRequests;
	};
	const auto state = box->lifetime().make_state<State>(&peer->session());
	state->to = ChooseTranslateTo(peer->owner().history(peer));
	state->provider = GetEnhancedBool("use_gt_api")
		? TranslateBoxProvider::Google
		: TranslateBoxProvider::Default;
	const auto requestProvider = [=]() -> not_null<TranslateProvider*> {
		return (state->provider.current() == TranslateBoxProvider::Google)
			? not_null{ state->googleProvider.get() }
			: not_null{ state->defaultProvider.get() };
	};

	TranslateBoxContent(box, {
		.text = text,
		.hasCopyRestriction = hasCopyRestriction,
		.textContext = Core::TextContext({ .session = &peer->session() }),
		.currentTo = state->to.current(),
		.to = state->to.value(),
		.provider = state->provider.value() | rpl::map([](
				TranslateBoxProvider provider) {
			return TranslateProviderLabel(provider);
		}),
		.refresh = state->refreshRequests.events(),
		.chooseTo = [=] {
			box->uiShow()->showBox(ChooseTranslateToBox(
				state->to.current(),
				crl::guard(box, [=](LanguageId id) { state->to = id; })));
		},
		.chooseProvider = GetEnhancedBool("use_gt_api")
			? Fn<void()>([=] {
				state->provider = (state->provider.current()
					== TranslateBoxProvider::Google)
					? TranslateBoxProvider::Default
					: TranslateBoxProvider::Google;
				state->refreshRequests.fire({});
			})
			: Fn<void()>(),
		.request = [=](
				LanguageId to,
				Fn<void(TranslateBoxContentResult)> done) {
			const auto provider = requestProvider();
			provider->request(
				PrepareTranslateProviderRequest(
					provider,
					peer,
					msgId,
					text),
				to,
				[done = std::move(done)](TranslateProviderResult result) {
					using ProviderError = TranslateProviderError;
					using UiError = TranslateBoxContentError;
					done(TranslateBoxContentResult{
						.text = std::move(result.text),
						.error = (result.error
								== ProviderError::LocalLanguagePackMissing)
							? UiError::LocalLanguagePackMissing
							: (result.error == ProviderError::None)
							? UiError::None
							: UiError::Unknown,
					});
				});
		},
	});
}

bool SkipTranslate(TextWithEntities textWithEntities) {
	const auto &text = textWithEntities.text;
	if (text.isEmpty()) {
		return true;
	}
	if (!Core::App().settings().translateButtonEnabled()) {
		return true;
	}
	constexpr auto kFirstChunk = size_t(100);
	auto hasLetters = (text.size() >= kFirstChunk);
	for (auto i = 0; i < kFirstChunk; i++) {
		if (i >= text.size()) {
			break;
		}
		if (text.at(i).isLetter()) {
			hasLetters = true;
			break;
		}
	}
	if (!hasLetters) {
		return true;
	}
#ifndef TDESKTOP_DISABLE_SPELLCHECK
	const auto result = Platform::Language::Recognize(text);
	const auto skip = Core::App().settings().skipTranslationLanguages();
	return result.known() && ranges::contains(skip, result);
#else
	return false;
#endif
}

object_ptr<BoxContent> EditSkipTranslationLanguages() {
	auto title = tr::lng_translate_settings_choose();
	const auto selected = std::make_shared<std::vector<LanguageId>>(
		Core::App().settings().skipTranslationLanguages());
	const auto weak = std::make_shared<base::weak_qptr<BoxContent>>();
	const auto check = [=](LanguageId id) {
		const auto already = ranges::contains(*selected, id);
		if (already) {
			selected->erase(ranges::remove(*selected, id), selected->end());
		} else {
			selected->push_back(id);
		}
		if (already && selected->empty()) {
			if (const auto strong = weak->get()) {
				strong->showToast(
					tr::lng_translate_settings_one(tr::now),
					kSkipAtLeastOneDuration);
			}
			return false;
		}
		return true;
	};
	auto result = Box(ChooseLanguageBox, std::move(title), [=](
			std::vector<LanguageId> &&list) {
		Core::App().settings().setSkipTranslationLanguages(
			std::move(list));
		Core::App().saveSettingsDelayed();
	}, *selected, true, check);
	*weak = result.data();
	return result;
}

object_ptr<BoxContent> ChooseTranslateToBox(
		LanguageId bringUp,
		Fn<void(LanguageId)> callback) {
	auto &settings = Core::App().settings();
	auto selected = std::vector<LanguageId>{
		settings.translateTo(),
	};
	for (const auto &id : settings.skipTranslationLanguages()) {
		if (id != selected.front()) {
			selected.push_back(id);
		}
	}
	if (bringUp && ranges::contains(selected, bringUp)) {
		selected.push_back(bringUp);
	}
	return Box(ChooseLanguageBox, tr::lng_languages(), [=](
			const std::vector<LanguageId> &ids) {
		Expects(!ids.empty());

		const auto id = ids.front();
		Core::App().settings().setTranslateTo(id);
		Core::App().saveSettingsDelayed();
		callback(id);
	}, selected, false, nullptr);
}

LanguageId ChooseTranslateTo(not_null<History*> history) {
	return ChooseTranslateTo(history->translateOfferedFrom());
}

LanguageId ChooseTranslateTo(LanguageId offeredFrom) {
	auto &settings = Core::App().settings();
	return ChooseTranslateTo(
		offeredFrom,
		settings.translateTo(),
		settings.skipTranslationLanguages());
}

LanguageId ChooseTranslateTo(
		not_null<History*> history,
		LanguageId savedTo,
		const std::vector<LanguageId> &skip) {
	return ChooseTranslateTo(history->translateOfferedFrom(), savedTo, skip);
}

LanguageId ChooseTranslateTo(
		LanguageId offeredFrom,
		LanguageId savedTo,
		const std::vector<LanguageId> &skip) {
	return (offeredFrom != savedTo) ? savedTo : skip.front();
}

} // namespace Ui
