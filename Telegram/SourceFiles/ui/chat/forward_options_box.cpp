/*
This file is part of Telegram Desktop,
the official desktop application for the Telegram messaging service.

For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#include "ui/chat/forward_options_box.h"

#include "ui/widgets/checkbox.h"
#include "ui/widgets/labels.h"
#include "lang/lang_keys.h"

namespace Ui {

bool FillForwardOptions(
		Fn<not_null<AbstractCheckView*>(
			rpl::producer<QString> &&,
			bool)> createView,
		ForwardOptions options,
		Fn<void(ForwardOptions)> optionsChanged,
		ForwardGroupingOptions grouping,
		Fn<void()> addSeparator,
		rpl::lifetime &lifetime) {
	Expects((!options.show || optionsChanged != nullptr)
		&& (!grouping.show || grouping.optionChanged != nullptr)
		&& (!options.show || !grouping.show || addSeparator != nullptr));

	auto names = static_cast<AbstractCheckView*>(nullptr);
	if (options.show) {
		names = createView(
			(options.sendersCount == 1
				? tr::lng_forward_show_sender
				: tr::lng_forward_show_senders)(),
			!options.dropNames);
		const auto captions = options.captionsCount
			? createView(
				(options.captionsCount == 1
					? tr::lng_forward_show_caption
					: tr::lng_forward_show_captions)(),
				!options.dropCaptions).get()
			: nullptr;

		const auto notify = [=] {
			optionsChanged({
				.sendersCount = options.sendersCount,
				.captionsCount = options.captionsCount,
				.dropNames = !names->checked(),
				.dropCaptions = (captions && !captions->checked()),
			});
		};
		names->checkedChanges(
		) | rpl::on_next([=](bool showNames) {
			if (showNames && captions && !captions->checked()) {
				captions->setChecked(true, anim::type::normal);
			} else {
				notify();
			}
		}, lifetime);
		if (captions) {
			captions->checkedChanges(
			) | rpl::on_next([=](bool showCaptions) {
				if (!showCaptions && names->checked()) {
					names->setChecked(false, anim::type::normal);
				} else {
					notify();
				}
			}, lifetime);
		}
	}
	if (!grouping.show) {
		return options.show;
	}
	if (names) {
		addSeparator();
	}
	const auto current = lifetime.make_state<ForwardGroupingOption>(
		grouping.option);
	const auto regroup = createView(
		tr::lng_forward_regroup_media(),
		*current == ForwardGroupingOption::RegroupAll);
	const auto separate = createView(
		tr::lng_forward_separate_messages(),
		*current == ForwardGroupingOption::Separate);
	const auto update = [=](ForwardGroupingOption option, bool checked) {
		if (checked) {
			*current = option;
			grouping.optionChanged(option);
			if (option == ForwardGroupingOption::RegroupAll && names) {
				names->setChecked(false, anim::type::normal);
			}
			regroup->setChecked(
				option == ForwardGroupingOption::RegroupAll,
				anim::type::normal);
			separate->setChecked(
				option == ForwardGroupingOption::Separate,
				anim::type::normal);
		} else if (*current == option) {
			*current = ForwardGroupingOption::GroupAsIs;
			grouping.optionChanged(*current);
		}
	};
	regroup->checkedChanges(
	) | rpl::on_next([=](bool checked) {
		update(ForwardGroupingOption::RegroupAll, checked);
	}, lifetime);
	separate->checkedChanges(
	) | rpl::on_next([=](bool checked) {
		update(ForwardGroupingOption::Separate, checked);
	}, lifetime);
	if (names) {
		names->checkedChanges(
		) | rpl::on_next([=](bool checked) {
			if (checked && regroup->checked()) {
				*current = ForwardGroupingOption::GroupAsIs;
				grouping.optionChanged(*current);
				regroup->setChecked(false, anim::type::normal);
			}
		}, lifetime);
	}
	return true;
}

} // namespace Ui
