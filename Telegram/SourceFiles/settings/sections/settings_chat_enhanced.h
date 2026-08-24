/*
This file is part of Yurigram Desktop,
the unofficial app based on Telegram Desktop.
For license and copyright information please follow this link:
https://github.com/telegramdesktop/tdesktop/blob/master/LEGAL
*/
#pragma once

class PeerData;

namespace Window {
class SessionController;
} // namespace Window

namespace Settings {

[[nodiscard]] bool HasChatEnhancedSettings(not_null<PeerData*> peer);
void ShowChatEnhancedSettings(
	not_null<Window::SessionController*> controller,
	not_null<PeerData*> peer);

} // namespace Settings
