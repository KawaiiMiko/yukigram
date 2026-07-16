/*
This file is part of 64Gram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "boxes/enhanced_options_box.h"

#include "core/application.h"
#include "core/enhanced_settings.h"
#include "data/data_histories.h"
#include "data/data_session.h"
#include <facades.h>
#include "lang/lang_keys.h"
#include "main/main_session.h"
#include "mainwindow.h"
#include "settings/sections/settings_enhanced.h"
#include "ui/boxes/confirm_box.h"
#include <ui/toast/toast.h>
#include "ui/widgets/checkbox.h"
#include "ui/widgets/continuous_sliders.h"
#include "ui/widgets/fields/input_field.h"
#include "ui/widgets/labels.h"
#include "window/window_session_controller.h"

#include "styles/style_boxes.h"
#include "styles/style_layers.h"

#include <algorithm>

namespace {

constexpr auto kRichMessagePreviewMaxIndex
	= EnhancedSettings::kRichMessagePreviewBlocksLimitMax
		- EnhancedSettings::kRichMessagePreviewBlocksLimitMin;
constexpr auto kRichMessagePreviewDefaultGapSections = 5;
constexpr auto kRichMessagePreviewDefaultIndex
	= kRichMessagePreviewMaxIndex + kRichMessagePreviewDefaultGapSections;
constexpr auto kRichMessagePreviewValuesCount
	= kRichMessagePreviewDefaultIndex + 1;

[[nodiscard]] int RichMessagePreviewLimitForIndex(int index) {
	return (index == kRichMessagePreviewDefaultIndex)
		? 0
		: (EnhancedSettings::kRichMessagePreviewBlocksLimitMin
			+ std::min(index, kRichMessagePreviewMaxIndex));
}

[[nodiscard]] int RichMessagePreviewIndexForLimit(int limit) {
	return limit
		? (limit - EnhancedSettings::kRichMessagePreviewBlocksLimitMin)
		: kRichMessagePreviewDefaultIndex;
}

[[nodiscard]] QString RichMessagePreviewBlocksLabel(int limit) {
	return tr::lng_settings_rich_message_preview_blocks_count(
		tr::now,
		lt_count,
		limit);
}

} // namespace

NetBoostBox::NetBoostBox(QWidget *parent) {
}

void NetBoostBox::prepare() {
	setTitle(tr::lng_settings_net_upload_speed_boost());

	addButton(tr::lng_settings_save(), [=] { save(); });
	addButton(tr::lng_cancel(), [=] { closeBox(); });

	auto y = st::boxOptionListPadding.top();
	_description.create(
			this,
			tr::lng_net_speed_boost_desc(tr::now),
			st::boxLabel);
	_description->moveToLeft(st::boxPadding.left(), y);
	_description->resizeToWidth(st::boxWidth - st::boxPadding.left() - st::boxPadding.right());

	y += _description->height() + st::boxMediumSkip;

	_boostGroup = std::make_shared<Ui::RadiobuttonGroup>(GetEnhancedInt("net_speed_boost"));
	

	for (int i = 0; i <= 3; i++) {
		const auto button = Ui::CreateChild<Ui::Radiobutton>(
				this,
				_boostGroup,
				i,
				BoostLabel(i),
				st::autolockButton);
		button->moveToLeft(st::boxPadding.left(), y);
		y += button->heightNoMargins() + st::boxOptionListSkip;
	}
	showChildren();
	setDimensions(st::boxWidth, y);
}

QString NetBoostBox::BoostLabel(int boost) {
	switch (boost) {
		case 0:
			return tr::lng_net_speed_boost_default(tr::now);
		case 1:
			return tr::lng_net_speed_boost_slight(tr::now);
		case 2:
			return tr::lng_net_speed_boost_medium(tr::now);
		case 3:
			return tr::lng_net_speed_boost_big(tr::now);
		default:
			Unexpected("Boost in NetBoostBox::BoostLabel.");
	}
}

void NetBoostBox::save() {
	const auto changeBoost = [=](Fn<void()> &&close) {
		SetNetworkBoost(_boostGroup->current());
		EnhancedSettings::Write();
		Core::Restart();
	};

	getDelegate()->show(Ui::MakeConfirmBox({
		.text = tr::lng_net_boost_restart_desc(tr::now),
		.confirmed = std::move(changeBoost),
		.confirmText = tr::lng_settings_restart_now(tr::now),
		.cancelText = tr::lng_cancel(tr::now),
	}));
}

ExtraContextMenuBox::ExtraContextMenuBox(QWidget *parent) {
}

void ExtraContextMenuBox::prepare() {
	setTitle(tr::lng_settings_extra_context_menu_options());

	addButton(tr::lng_box_ok(), [=] { closeBox(); });

	auto y = st::boxOptionListPadding.top() + st::boxMediumSkip;

	struct OptionEntry {
		ExtraContextMenuOption value;
		QString label;
	};
	const auto options = std::vector<OptionEntry>{
		{ ExtraContextMenuOption::Repeater, tr::lng_context_repeater(tr::now) },
		{ ExtraContextMenuOption::HideMessage, tr::lng_context_hide_message(tr::now) },
		{ ExtraContextMenuOption::ViewAsJson, tr::lng_context_view_as_json(tr::now) },
	};

	for (const auto &[optValue, label] : options) {
		const auto checked = HasExtraContextMenuOption(optValue);
		const auto checkbox = Ui::CreateChild<Ui::Checkbox>(
			this,
			label,
			checked);
		checkbox->moveToLeft(st::boxPadding.left(), y);
		y += checkbox->heightNoMargins() + st::boxOptionListSkip;
		const auto optInt = static_cast<int>(optValue);
		checkbox->checkedChanges(
		) | rpl::filter([=](bool isChecked) {
			return isChecked != HasExtraContextMenuOption(
				static_cast<ExtraContextMenuOption>(optInt));
		}) | rpl::on_next([=](bool isChecked) {
			auto list = GetEnhancedIntList("extra_context_menu_options");
			if (isChecked && !list.contains(optInt)) {
				list.append(optInt);
			} else if (!isChecked) {
				list.removeAll(optInt);
			}
			SetEnhancedValue("extra_context_menu_options",
				QVariant::fromValue(list));
			EnhancedSettings::Write();
		}, lifetime());
	}

	showChildren();
	setDimensions(st::boxWidth, y);
}

RadioController::RadioController(QWidget *parent)
		: _url(this, st::defaultInputField, tr::lng_formatting_link_url()) {
}

void RadioController::prepare() {
	setTitle(tr::lng_settings_radio_controller());

	addButton(tr::lng_settings_save(), [=] { save(); });
	addButton(tr::lng_cancel(), [=] { closeBox(); });

	_url->setText(GetEnhancedString("radio_controller"));

	setDimensions(st::boxWidth, _url->height());
}

void RadioController::setInnerFocus() {
	_url->setFocusFast();
}

void RadioController::resizeEvent(QResizeEvent *e) {
	BoxContent::resizeEvent(e);

	int32 w = st::boxWidth - st::boxPadding.left() - st::boxPadding.right();
	_url->resize(w, _url->height());
	_url->moveToLeft(st::boxPadding.left(), 0);
}

void RadioController::save() {
	auto host = _url->getLastText().trimmed();
	if (host == "") {
		host = "http://localhost:2468";
	}
	SetEnhancedValue("radio_controller", host);
	EnhancedSettings::Write();
	closeBox();
}

BitrateController::BitrateController(QWidget *parent) {
}

void BitrateController::prepare() {
	setTitle(tr::lng_bitrate_controller());

	addButton(tr::lng_settings_save(), [=] { save(); });
	addButton(tr::lng_cancel(), [=] { closeBox(); });

	auto y = st::boxOptionListPadding.top();
	_description.create(
			this,
			tr::lng_bitrate_controller_desc(tr::now),
			st::boxLabel);
	_description->moveToLeft(st::boxPadding.left(), y);
	_description->resizeToWidth(st::boxWidth - st::boxPadding.left() - st::boxPadding.right());

	y += _description->height() + st::boxMediumSkip;

	_bitrateGroup = std::make_shared<Ui::RadiobuttonGroup>(GetEnhancedInt("bitrate"));

	for (int i = 0; i <= 7; i++) {
		const auto button = Ui::CreateChild<Ui::Radiobutton>(
				this,
				_bitrateGroup,
				i,
				BitrateLabel(i),
				st::autolockButton);
		button->moveToLeft(st::boxPadding.left(), y);
		y += button->heightNoMargins() + st::boxOptionListSkip;
	}
	showChildren();
	setDimensions(st::boxWidth, y);
}

QString BitrateController::BitrateLabel(int boost) {
	switch (boost) {
		case 0:
			return tr::lng_bitrate_controller_default(tr::now);
		case 1:
			return tr::lng_bitrate_controller_64k(tr::now);
		case 2:
			return tr::lng_bitrate_controller_96k(tr::now);
		case 3:
			return tr::lng_bitrate_controller_128k(tr::now);
		case 4:
			return tr::lng_bitrate_controller_160k(tr::now);
		case 5:
			return tr::lng_bitrate_controller_192k(tr::now);
		case 6:
			return tr::lng_bitrate_controller_256k(tr::now);
		case 7:
			return tr::lng_bitrate_controller_320k(tr::now);
		default:
			Unexpected("Bitrate not found.");
	}
}

void BitrateController::save() {
	SetEnhancedValue("bitrate", _bitrateGroup->current());
	EnhancedSettings::Write();
	Ui::Toast::Show(tr::lng_bitrate_controller_hint(tr::now));
	closeBox();
}

RichMessagePreviewBlocksBox::RichMessagePreviewBlocksBox(QWidget *parent) {
}

void RichMessagePreviewBlocksBox::prepare() {
	setTitle(tr::lng_settings_rich_message_preview_blocks());

	addButton(tr::lng_settings_save(), [=] { save(); });
	addButton(tr::lng_cancel(), [=] { closeBox(); });

	auto y = st::boxOptionListPadding.top();
	_description.create(
		this,
		tr::lng_settings_rich_message_preview_blocks_desc(tr::now),
		st::boxLabel);
	_description->moveToLeft(st::boxPadding.left(), y);
	_description->resizeToWidth(
		st::boxWidth - st::boxPadding.left() - st::boxPadding.right());
	y += _description->height() + st::boxMediumSkip;

	_limit = EnhancedSettings::RichMessagePreviewBlocksLimit();
	_current.create(
		this,
		_limit
			? RichMessagePreviewBlocksLabel(_limit)
			: tr::lng_font_default(tr::now),
		st::richMessagePreviewBlocksCurrent);
	_labelsTop = y;
	updateCurrentLabel();
	y += _current->height() + st::boxMediumSkip;

	_slider.create(this, st::localStorageLimitSlider);
	const auto sliderWidth
		= st::boxWidth - st::boxPadding.left() - st::boxPadding.right();
	_slider->resize(
		sliderWidth,
		st::localStorageLimitSlider.seekSize.height());
	_slider->moveToLeft(st::boxPadding.left(), y);

	_slider->setPseudoDiscrete(
		kRichMessagePreviewValuesCount,
		[](int index) { return index; },
		RichMessagePreviewIndexForLimit(_limit),
		[=](int index) {
			_limit = RichMessagePreviewLimitForIndex(index);
			updateCurrentLabel();
		});
	for (const auto limit : {
		EnhancedSettings::kRichMessagePreviewBlocksLimitMin,
		15,
		25,
		35,
		EnhancedSettings::kRichMessagePreviewBlocksLimitMax,
	}) {
		const auto progress = (limit
			- EnhancedSettings::kRichMessagePreviewBlocksLimitMin)
			/ float64(kRichMessagePreviewDefaultIndex);
		_slider->addDivider(
			progress,
			st::richMessagePreviewBlocksDivider);
	}
	_slider->addDivider(
		(kRichMessagePreviewMaxIndex + 1.)
			/ kRichMessagePreviewDefaultIndex,
		st::richMessagePreviewBlocksDefaultDivider);

	y += _slider->height() + st::richMessagePreviewBlocksTickSkip;
	const auto minimum = Ui::CreateChild<Ui::FlatLabel>(
		this,
		QString::number(EnhancedSettings::kRichMessagePreviewBlocksLimitMin),
		st::richMessagePreviewBlocksTick);
	const auto defaultLabel = Ui::CreateChild<Ui::FlatLabel>(
		this,
		tr::lng_font_default(tr::now),
		st::richMessagePreviewBlocksTick);
	minimum->moveToLeft(st::boxPadding.left(), y);
	defaultLabel->moveToRight(st::boxPadding.right(), y, st::boxWidth);
	for (const auto limit : { 15, 25, 35, 50 }) {
		const auto label = Ui::CreateChild<Ui::FlatLabel>(
			this,
			QString::number(limit),
			st::richMessagePreviewBlocksTick);
		const auto progress = (limit
			- EnhancedSettings::kRichMessagePreviewBlocksLimitMin)
			/ float64(kRichMessagePreviewDefaultIndex);
		const auto position = st::boxPadding.left()
			+ (st::localStorageLimitSlider.seekSize.width() / 2)
			+ base::SafeRound(progress * (sliderWidth
				- st::localStorageLimitSlider.seekSize.width()));
		label->moveToLeft(position - label->width() / 2, y);
	}
	y += std::max(minimum->height(), defaultLabel->height())
		+ st::boxOptionListPadding.bottom();
	showChildren();
	setDimensions(st::boxWidth, y);
}

void RichMessagePreviewBlocksBox::updateCurrentLabel() {
	_current->setText(_limit
		? RichMessagePreviewBlocksLabel(_limit)
		: tr::lng_font_default(tr::now));
	_current->moveToLeft((st::boxWidth - _current->width()) / 2, _labelsTop);
}

void RichMessagePreviewBlocksBox::save() {
	const auto changed = (_limit
		!= EnhancedSettings::RichMessagePreviewBlocksLimit());
	EnhancedSettings::SetRichMessagePreviewBlocksLimit(_limit);
	EnhancedSettings::Write();
	if (changed) {
		App::wnd()->sessionController()->session().data().histories()
			.refreshRichMessageViews();
	}
	closeBox();
}
