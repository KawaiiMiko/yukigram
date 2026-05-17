/*
This file is part of Telegram Desktop,
the official desktop application for the Telegram messaging service.

For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "history/view/controls/history_view_link_preview_box.h"

#include "base/qthelp_url.h"
#include "chat_helpers/compose/compose_show.h"
#include "lang/lang_keys.h"
#include "ui/layers/generic_box.h"
#include "ui/widgets/fields/input_field.h"
#include "styles/style_boxes.h"

namespace HistoryView::Controls {

void ShowLinkPreviewUrlBox(
		std::shared_ptr<ChatHelpers::Show> show,
		Fn<void(QString)> done) {
	if (!show || !show->valid()) {
		return;
	}
	show->show(Box([=](not_null<Ui::GenericBox*> box) {
		box->setTitle(tr::lng_link_preview_box_title());

		const auto field = box->addRow(
			object_ptr<Ui::InputField>(
				box,
				st::defaultInputField,
				tr::lng_formatting_link_url()));
		box->setFocusCallback([=] {
			field->setFocusFast();
		});

		const auto submit = [=] {
			const auto url = qthelp::validate_url(field->getLastText());
			if (url.isEmpty()) {
				field->showError();
				return;
			}
			const auto weak = base::make_weak(box.get());
			if (done) {
				done(url);
			}
			if (const auto strong = weak.get()) {
				strong->closeBox();
			}
		};
		field->submits(
		) | rpl::on_next(submit, field->lifetime());
		field->cancelled(
		) | rpl::on_next([=] {
			box->closeBox();
		}, field->lifetime());

		box->addButton(tr::lng_settings_save(), submit);
		box->addButton(tr::lng_cancel(), [=] {
			box->closeBox();
		});
	}));
}

} // namespace HistoryView::Controls
