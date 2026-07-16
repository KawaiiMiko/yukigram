# Yurigram — Yet Another Third-Party [Telegram Desktop](https://github.com/telegramdesktop/tdesktop) Client

Yurigram was formerly forked from [64Gram](https://github.com/TDesktop-x64/tdesktop) and [Yukigram](https://github.com/yukigram/yukigram-legacy), but now it is a standalone client with some exclusive new features and directly follows official Telegram Desktop updates.

The source code is published under GPLv3 with OpenSSL exception, the license is available [here][license].

## Features

Yurigram includes [most features from 64Gram](https://github.com/TDesktop-x64/tdesktop/blob/dev/features.md), as it was originally forked from 64Gram.

In addition, Yurigram includes the following features, listed in the order they were added:

 1. Show mutual contact label
 2. Directly send message in a group linked to a channel
 3. Translate messages with Google Translate
 4. Allow non-premium users to save custom emoji sets freely
 5. Ability to hide user stars rating
 6. Additional Fluent Emoji Packs
 7. Ability to temporarily hide messages and restore them easily
 8. Ability to add or edit webpage previews with custom URLs
 9. Quickly create or edit inline user mentions with shortcuts
 10. Ability to set a custom render limit for rich message blocks

And more new features will ~~(may)~~ be added in the future.

## Supported systems

Windows 7 and above

Linux 64 bit

macOS > 10.12 and above

The latest version is available on the [Release](https://github.com/Revincx/Yurigram/releases) page.

## Localization

If you want to translate this project, **Just Do It!**

Create a Pull Request: [Localization Repo](https://github.com/RuaGram/Localization).

**Here is a project [translation template](https://github.com/RuaGram/Localization/blob/master/en.json).**

You can find a language ID on Telegram's log.txt

For example: `[2022.04.23 10:37:45] Current Language pack ID: de, Base ID: `

Then your language translation filename is `de.json` or something like that.

***Note: Ignore base ID(base ID translation - Work in progress)***

## Build instructions

* [Windows (32-bit and 64-bit)][win]
* [macOS][mac]
* [GNU/Linux using Docker][linux]

## Links

* [Yurigram Dev Channel (Simplified Chinese)](https://t.me/ruadevs)

[//]: # (LINKS)
[license]: LICENSE
[win]: docs/building-win.md
[mac]: docs/building-mac.md
[linux]: docs/building-linux.md
[preview_image]: https://github.com/TDesktop-x64/tdesktop/blob/dev/docs/assets/preview.png "Preview of 64Gram Desktop"
[preview_image_url]: https://raw.githubusercontent.com/TDesktop-x64/tdesktop/dev/docs/assets/preview.png
