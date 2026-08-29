/*
This file is part of 64Gram Desktop,
the unofficial app based on Telegram Desktop.

For license and copyright information please follow this link:
https://github.com/TDesktop-x64/tdesktop/blob/dev/LEGAL
*/
#pragma once

#include "settings/settings_common_session.h"
#include "settings/settings_type.h"

#include <QPointer>

#include <vector>

class BoxContent;

namespace Window {
class Controller;
class SessionController;
} // namespace Window

namespace Ui {
class RpWidget;
} // namespace Ui

namespace Settings {

	[[nodiscard]] Type EnhancedId();

	class Enhanced : public Section<Enhanced> {
	public:
		Enhanced(
				QWidget *parent,
				not_null<Window::SessionController *> controller);
		[[nodiscard]] rpl::producer<QString> title() override;
		void showFinished() override;

	private:
		void setupContent();
		void SetupEnhancedChat(not_null<Ui::VerticalLayout *> container);
		void SetupEnhancedCompose(not_null<Ui::VerticalLayout *> container);
		void SetupEnhancedVoiceChat(not_null<Ui::VerticalLayout *> container);
		void SetupEnhancedApplication(
			not_null<Ui::VerticalLayout *> interfaceContainer,
			not_null<Ui::VerticalLayout *> behaviorContainer);
		void reqBlocked(int offset);
		void writeBlocklistFile();
		void registerHighlight(
			QString id,
			not_null<Ui::RpWidget*> widget);

		rpl::event_stream<QString> _AlwaysDeleteChanged;
		rpl::event_stream<QString> _BitrateChanged;
		rpl::event_stream<> _RichMessagePreviewBlocksChanged;

		std::vector<std::pair<QString, QPointer<QWidget>>> _highlightControls;

		mtpRequestId _requestId = 0;
		QList<int64> blockList;
		int32 blockCount = 0;
	};

} // namespace Settings
