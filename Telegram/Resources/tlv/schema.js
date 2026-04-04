window.TL_SCHEMA_FULL = {
  3300522427: function (e) {
    return { _: `error`, code: e.int(), text: e.string() };
  },
  2134579434: function (e) {
    return { _: `inputPeerEmpty` };
  },
  2107670217: function (e) {
    return { _: `inputPeerSelf` };
  },
  900291769: function (e) {
    return { _: `inputPeerChat`, chatId: e.long() };
  },
  3723011404: function (e) {
    return { _: `inputPeerUser`, userId: e.long(), accessHash: e.long() };
  },
  666680316: function (e) {
    return { _: `inputPeerChannel`, channelId: e.long(), accessHash: e.long() };
  },
  2826635804: function (e) {
    return {
      _: `inputPeerUserFromMessage`,
      peer: e.object(),
      msgId: e.int(),
      userId: e.long(),
    };
  },
  3173648448: function (e) {
    return {
      _: `inputPeerChannelFromMessage`,
      peer: e.object(),
      msgId: e.int(),
      channelId: e.long(),
    };
  },
  3112732367: function (e) {
    return { _: `inputUserEmpty` };
  },
  4156666175: function (e) {
    return { _: `inputUserSelf` };
  },
  4061223110: function (e) {
    return { _: `inputUser`, userId: e.long(), accessHash: e.long() };
  },
  497305826: function (e) {
    return {
      _: `inputUserFromMessage`,
      peer: e.object(),
      msgId: e.int(),
      userId: e.long(),
    };
  },
  1780335806: function (e) {
    var t = e.uint();
    return {
      _: `inputPhoneContact`,
      flags: t,
      clientId: e.long(),
      phone: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      note: t & 1 ? e.object() : void 0,
    };
  },
  4113560191: function (e) {
    return {
      _: `inputFile`,
      id: e.long(),
      parts: e.int(),
      name: e.string(),
      md5Checksum: e.string(),
    };
  },
  4199484341: function (e) {
    return {
      _: `inputFileBig`,
      id: e.long(),
      parts: e.int(),
      name: e.string(),
    };
  },
  1658620744: function (e) {
    return { _: `inputFileStoryDocument`, id: e.object() };
  },
  2523198847: function (e) {
    return { _: `inputMediaEmpty` };
  },
  2105767386: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaUploadedPhoto`,
      flags: t,
      spoiler: !!(t & 4),
      livePhoto: !!(t & 8),
      file: e.object(),
      stickers: t & 1 ? e.vector(e.object) : void 0,
      ttlSeconds: t & 2 ? e.int() : void 0,
      video: t & 8 ? e.object() : void 0,
    };
  },
  3819914292: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaPhoto`,
      flags: t,
      spoiler: !!(t & 2),
      livePhoto: !!(t & 4),
      id: e.object(),
      ttlSeconds: t & 1 ? e.int() : void 0,
      video: t & 4 ? e.object() : void 0,
    };
  },
  4190388548: function (e) {
    return { _: `inputMediaGeoPoint`, geoPoint: e.object() };
  },
  4171988475: function (e) {
    return {
      _: `inputMediaContact`,
      phoneNumber: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      vcard: e.string(),
    };
  },
  58495792: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaUploadedDocument`,
      flags: t,
      nosoundVideo: !!(t & 8),
      forceFile: !!(t & 16),
      spoiler: !!(t & 32),
      file: e.object(),
      thumb: t & 4 ? e.object() : void 0,
      mimeType: e.string(),
      attributes: e.vector(e.object),
      stickers: t & 1 ? e.vector(e.object) : void 0,
      videoCover: t & 64 ? e.object() : void 0,
      videoTimestamp: t & 128 ? e.int() : void 0,
      ttlSeconds: t & 2 ? e.int() : void 0,
    };
  },
  2826320565: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaDocument`,
      flags: t,
      spoiler: !!(t & 4),
      id: e.object(),
      videoCover: t & 8 ? e.object() : void 0,
      videoTimestamp: t & 16 ? e.int() : void 0,
      ttlSeconds: t & 1 ? e.int() : void 0,
      query: t & 2 ? e.string() : void 0,
    };
  },
  3242007569: function (e) {
    return {
      _: `inputMediaVenue`,
      geoPoint: e.object(),
      title: e.string(),
      address: e.string(),
      provider: e.string(),
      venueId: e.string(),
      venueType: e.string(),
    };
  },
  3854302746: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaPhotoExternal`,
      flags: t,
      spoiler: !!(t & 2),
      url: e.string(),
      ttlSeconds: t & 1 ? e.int() : void 0,
    };
  },
  2006319353: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaDocumentExternal`,
      flags: t,
      spoiler: !!(t & 2),
      url: e.string(),
      ttlSeconds: t & 1 ? e.int() : void 0,
      videoCover: t & 4 ? e.object() : void 0,
      videoTimestamp: t & 8 ? e.int() : void 0,
    };
  },
  3544138739: function (e) {
    return { _: `inputMediaGame`, id: e.object() };
  },
  1080028941: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaInvoice`,
      flags: t,
      title: e.string(),
      description: e.string(),
      photo: t & 1 ? e.object() : void 0,
      invoice: e.object(),
      payload: e.bytes(),
      provider: t & 8 ? e.string() : void 0,
      providerData: e.object(),
      startParam: t & 2 ? e.string() : void 0,
      extendedMedia: t & 4 ? e.object() : void 0,
    };
  },
  2535434307: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaGeoLive`,
      flags: t,
      stopped: !!(t & 1),
      geoPoint: e.object(),
      heading: t & 4 ? e.int() : void 0,
      period: t & 2 ? e.int() : void 0,
      proximityNotificationRadius: t & 8 ? e.int() : void 0,
    };
  },
  2285519112: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaPoll`,
      flags: t,
      poll: e.object(),
      correctAnswers: t & 1 ? e.vector(e.int) : void 0,
      attachedMedia: t & 8 ? e.object() : void 0,
      solution: t & 2 ? e.string() : void 0,
      solutionEntities: t & 2 ? e.vector(e.object) : void 0,
      solutionMedia: t & 4 ? e.object() : void 0,
    };
  },
  3866083195: function (e) {
    return { _: `inputMediaDice`, emoticon: e.string() };
  },
  2315114360: function (e) {
    return { _: `inputMediaStory`, peer: e.object(), id: e.int() };
  },
  3256584265: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaWebPage`,
      flags: t,
      forceLargeMedia: !!(t & 1),
      forceSmallMedia: !!(t & 2),
      optional: !!(t & 4),
      url: e.string(),
    };
  },
  3289396102: function (e) {
    var t = e.uint();
    return {
      _: `inputMediaPaidMedia`,
      flags: t,
      starsAmount: e.long(),
      extendedMedia: e.vector(e.object),
      payload: t & 1 ? e.string() : void 0,
    };
  },
  2680512478: function (e) {
    return { _: `inputMediaTodo`, todo: e.object() };
  },
  4087948362: function (e) {
    return {
      _: `inputMediaStakeDice`,
      gameHash: e.string(),
      tonAmount: e.long(),
      clientSeed: e.bytes(),
    };
  },
  480546647: function (e) {
    return { _: `inputChatPhotoEmpty` };
  },
  3184373440: function (e) {
    var t = e.uint();
    return {
      _: `inputChatUploadedPhoto`,
      flags: t,
      file: t & 1 ? e.object() : void 0,
      video: t & 2 ? e.object() : void 0,
      videoStartTs: t & 4 ? e.double() : void 0,
      videoEmojiMarkup: t & 8 ? e.object() : void 0,
    };
  },
  2303962423: function (e) {
    return { _: `inputChatPhoto`, id: e.object() };
  },
  3837862870: function (e) {
    return { _: `inputGeoPointEmpty` };
  },
  1210199983: function (e) {
    var t = e.uint();
    return {
      _: `inputGeoPoint`,
      flags: t,
      lat: e.double(),
      long: e.double(),
      accuracyRadius: t & 1 ? e.int() : void 0,
    };
  },
  483901197: function (e) {
    return { _: `inputPhotoEmpty` };
  },
  1001634122: function (e) {
    return {
      _: `inputPhoto`,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
    };
  },
  3755650017: function (e) {
    return {
      _: `inputFileLocation`,
      volumeId: e.long(),
      localId: e.int(),
      secret: e.long(),
      fileReference: e.bytes(),
    };
  },
  4112735573: function (e) {
    return {
      _: `inputEncryptedFileLocation`,
      id: e.long(),
      accessHash: e.long(),
    };
  },
  3134223748: function (e) {
    return {
      _: `inputDocumentFileLocation`,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
      thumbSize: e.string(),
    };
  },
  3418877480: function (e) {
    return { _: `inputSecureFileLocation`, id: e.long(), accessHash: e.long() };
  },
  700340377: function (e) {
    return { _: `inputTakeoutFileLocation` };
  },
  1075322878: function (e) {
    return {
      _: `inputPhotoFileLocation`,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
      thumbSize: e.string(),
    };
  },
  3627312883: function (e) {
    return {
      _: `inputPhotoLegacyFileLocation`,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
      volumeId: e.long(),
      localId: e.int(),
      secret: e.long(),
    };
  },
  925204121: function (e) {
    var t = e.uint();
    return {
      _: `inputPeerPhotoFileLocation`,
      flags: t,
      big: !!(t & 1),
      peer: e.object(),
      photoId: e.long(),
    };
  },
  2642736091: function (e) {
    return {
      _: `inputStickerSetThumb`,
      stickerset: e.object(),
      thumbVersion: e.int(),
    };
  },
  93890858: function (e) {
    var t = e.uint();
    return {
      _: `inputGroupCallStream`,
      flags: t,
      call: e.object(),
      timeMs: e.long(),
      scale: e.int(),
      videoChannel: t & 1 ? e.int() : void 0,
      videoQuality: t & 1 ? e.int() : void 0,
    };
  },
  1498486562: function (e) {
    return { _: `peerUser`, userId: e.long() };
  },
  918946202: function (e) {
    return { _: `peerChat`, chatId: e.long() };
  },
  2728736542: function (e) {
    return { _: `peerChannel`, channelId: e.long() };
  },
  2861972229: function (e) {
    return { _: `storage.fileUnknown` };
  },
  1086091090: function (e) {
    return { _: `storage.filePartial` };
  },
  8322574: function (e) {
    return { _: `storage.fileJpeg` };
  },
  3403786975: function (e) {
    return { _: `storage.fileGif` };
  },
  172975040: function (e) {
    return { _: `storage.filePng` };
  },
  2921222285: function (e) {
    return { _: `storage.filePdf` };
  },
  1384777335: function (e) {
    return { _: `storage.fileMp3` };
  },
  1258941372: function (e) {
    return { _: `storage.fileMov` };
  },
  3016663268: function (e) {
    return { _: `storage.fileMp4` };
  },
  276907596: function (e) {
    return { _: `storage.fileWebp` };
  },
  3552332666: function (e) {
    return { _: `userEmpty`, id: e.long() };
  },
  829899656: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `user`,
      flags: t,
      self: !!(t & 1024),
      contact: !!(t & 2048),
      mutualContact: !!(t & 4096),
      deleted: !!(t & 8192),
      bot: !!(t & 16384),
      botChatHistory: !!(t & 32768),
      botNochats: !!(t & 65536),
      verified: !!(t & 131072),
      restricted: !!(t & 262144),
      min: !!(t & 1048576),
      botInlineGeo: !!(t & 2097152),
      support: !!(t & 8388608),
      scam: !!(t & 16777216),
      applyMinPhoto: !!(t & 33554432),
      fake: !!(t & 67108864),
      botAttachMenu: !!(t & 134217728),
      premium: !!(t & 268435456),
      attachMenuEnabled: !!(t & 536870912),
      flags2: n,
      botCanEdit: !!(n & 2),
      closeFriend: !!(n & 4),
      storiesHidden: !!(n & 8),
      storiesUnavailable: !!(n & 16),
      contactRequirePremium: !!(n & 1024),
      botBusiness: !!(n & 2048),
      botHasMainApp: !!(n & 8192),
      botForumView: !!(n & 65536),
      botForumCanManageTopics: !!(n & 131072),
      botCanManageBots: !!(n & 262144),
      id: e.long(),
      accessHash: t & 1 ? e.long() : void 0,
      firstName: t & 2 ? e.string() : void 0,
      lastName: t & 4 ? e.string() : void 0,
      username: t & 8 ? e.string() : void 0,
      phone: t & 16 ? e.string() : void 0,
      photo: t & 32 ? e.object() : void 0,
      status: t & 64 ? e.object() : void 0,
      botInfoVersion: t & 16384 ? e.int() : void 0,
      restrictionReason: t & 262144 ? e.vector(e.object) : void 0,
      botInlinePlaceholder: t & 524288 ? e.string() : void 0,
      langCode: t & 4194304 ? e.string() : void 0,
      emojiStatus: t & 1073741824 ? e.object() : void 0,
      usernames: n & 1 ? e.vector(e.object) : void 0,
      storiesMaxId: n & 32 ? e.object() : void 0,
      color: n & 256 ? e.object() : void 0,
      profileColor: n & 512 ? e.object() : void 0,
      botActiveUsers: n & 4096 ? e.int() : void 0,
      botVerificationIcon: n & 16384 ? e.long() : void 0,
      sendPaidMessagesStars: n & 32768 ? e.long() : void 0,
    };
  },
  1326562017: function (e) {
    return { _: `userProfilePhotoEmpty` };
  },
  2194798342: function (e) {
    var t = e.uint();
    return {
      _: `userProfilePhoto`,
      flags: t,
      hasVideo: !!(t & 1),
      personal: !!(t & 4),
      photoId: e.long(),
      strippedThumb: t & 2 ? e.bytes() : void 0,
      dcId: e.int(),
    };
  },
  164646985: function (e) {
    return { _: `userStatusEmpty` };
  },
  3988339017: function (e) {
    return { _: `userStatusOnline`, expires: e.int() };
  },
  9203775: function (e) {
    return { _: `userStatusOffline`, wasOnline: e.int() };
  },
  2065268168: function (e) {
    var t = e.uint();
    return { _: `userStatusRecently`, flags: t, byMe: !!(t & 1) };
  },
  1410997530: function (e) {
    var t = e.uint();
    return { _: `userStatusLastWeek`, flags: t, byMe: !!(t & 1) };
  },
  1703516023: function (e) {
    var t = e.uint();
    return { _: `userStatusLastMonth`, flags: t, byMe: !!(t & 1) };
  },
  693512293: function (e) {
    return { _: `chatEmpty`, id: e.long() };
  },
  1103884886: function (e) {
    var t = e.uint();
    return {
      _: `chat`,
      flags: t,
      creator: !!(t & 1),
      left: !!(t & 4),
      deactivated: !!(t & 32),
      callActive: !!(t & 8388608),
      callNotEmpty: !!(t & 16777216),
      noforwards: !!(t & 33554432),
      id: e.long(),
      title: e.string(),
      photo: e.object(),
      participantsCount: e.int(),
      date: e.int(),
      version: e.int(),
      migratedTo: t & 64 ? e.object() : void 0,
      adminRights: t & 16384 ? e.object() : void 0,
      defaultBannedRights: t & 262144 ? e.object() : void 0,
    };
  },
  1704108455: function (e) {
    return { _: `chatForbidden`, id: e.long(), title: e.string() };
  },
  473084188: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `channel`,
      flags: t,
      creator: !!(t & 1),
      left: !!(t & 4),
      broadcast: !!(t & 32),
      verified: !!(t & 128),
      megagroup: !!(t & 256),
      restricted: !!(t & 512),
      signatures: !!(t & 2048),
      min: !!(t & 4096),
      scam: !!(t & 524288),
      hasLink: !!(t & 1048576),
      hasGeo: !!(t & 2097152),
      slowmodeEnabled: !!(t & 4194304),
      callActive: !!(t & 8388608),
      callNotEmpty: !!(t & 16777216),
      fake: !!(t & 33554432),
      gigagroup: !!(t & 67108864),
      noforwards: !!(t & 134217728),
      joinToSend: !!(t & 268435456),
      joinRequest: !!(t & 536870912),
      forum: !!(t & 1073741824),
      flags2: n,
      storiesHidden: !!(n & 2),
      storiesHiddenMin: !!(n & 4),
      storiesUnavailable: !!(n & 8),
      signatureProfiles: !!(n & 4096),
      autotranslation: !!(n & 32768),
      broadcastMessagesAllowed: !!(n & 65536),
      monoforum: !!(n & 131072),
      forumTabs: !!(n & 524288),
      id: e.long(),
      accessHash: t & 8192 ? e.long() : void 0,
      title: e.string(),
      username: t & 64 ? e.string() : void 0,
      photo: e.object(),
      date: e.int(),
      restrictionReason: t & 512 ? e.vector(e.object) : void 0,
      adminRights: t & 16384 ? e.object() : void 0,
      bannedRights: t & 32768 ? e.object() : void 0,
      defaultBannedRights: t & 262144 ? e.object() : void 0,
      participantsCount: t & 131072 ? e.int() : void 0,
      usernames: n & 1 ? e.vector(e.object) : void 0,
      storiesMaxId: n & 16 ? e.object() : void 0,
      color: n & 128 ? e.object() : void 0,
      profileColor: n & 256 ? e.object() : void 0,
      emojiStatus: n & 512 ? e.object() : void 0,
      level: n & 1024 ? e.int() : void 0,
      subscriptionUntilDate: n & 2048 ? e.int() : void 0,
      botVerificationIcon: n & 8192 ? e.long() : void 0,
      sendPaidMessagesStars: n & 16384 ? e.long() : void 0,
      linkedMonoforumId: n & 262144 ? e.long() : void 0,
    };
  },
  399807445: function (e) {
    var t = e.uint();
    return {
      _: `channelForbidden`,
      flags: t,
      broadcast: !!(t & 32),
      megagroup: !!(t & 256),
      monoforum: !!(t & 1024),
      id: e.long(),
      accessHash: e.long(),
      title: e.string(),
      untilDate: t & 65536 ? e.int() : void 0,
    };
  },
  640893467: function (e) {
    var t = e.uint();
    return {
      _: `chatFull`,
      flags: t,
      canSetUsername: !!(t & 128),
      hasScheduled: !!(t & 256),
      translationsDisabled: !!(t & 524288),
      id: e.long(),
      about: e.string(),
      participants: e.object(),
      chatPhoto: t & 4 ? e.object() : void 0,
      notifySettings: e.object(),
      exportedInvite: t & 8192 ? e.object() : void 0,
      botInfo: t & 8 ? e.vector(e.object) : void 0,
      pinnedMsgId: t & 64 ? e.int() : void 0,
      folderId: t & 2048 ? e.int() : void 0,
      call: t & 4096 ? e.object() : void 0,
      ttlPeriod: t & 16384 ? e.int() : void 0,
      groupcallDefaultJoinAs: t & 32768 ? e.object() : void 0,
      themeEmoticon: t & 65536 ? e.string() : void 0,
      requestsPending: t & 131072 ? e.int() : void 0,
      recentRequesters: t & 131072 ? e.vector(e.long) : void 0,
      availableReactions: t & 262144 ? e.object() : void 0,
      reactionsLimit: t & 1048576 ? e.int() : void 0,
    };
  },
  3839931037: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `channelFull`,
      flags: t,
      canViewParticipants: !!(t & 8),
      canSetUsername: !!(t & 64),
      canSetStickers: !!(t & 128),
      hiddenPrehistory: !!(t & 1024),
      canSetLocation: !!(t & 65536),
      hasScheduled: !!(t & 524288),
      canViewStats: !!(t & 1048576),
      blocked: !!(t & 4194304),
      flags2: n,
      canDeleteChannel: !!(n & 1),
      antispam: !!(n & 2),
      participantsHidden: !!(n & 4),
      translationsDisabled: !!(n & 8),
      storiesPinnedAvailable: !!(n & 32),
      viewForumAsMessages: !!(n & 64),
      restrictedSponsored: !!(n & 2048),
      canViewRevenue: !!(n & 4096),
      paidMediaAllowed: !!(n & 16384),
      canViewStarsRevenue: !!(n & 32768),
      paidReactionsAvailable: !!(n & 65536),
      stargiftsAvailable: !!(n & 524288),
      paidMessagesAvailable: !!(n & 1048576),
      id: e.long(),
      about: e.string(),
      participantsCount: t & 1 ? e.int() : void 0,
      adminsCount: t & 2 ? e.int() : void 0,
      kickedCount: t & 4 ? e.int() : void 0,
      bannedCount: t & 4 ? e.int() : void 0,
      onlineCount: t & 8192 ? e.int() : void 0,
      readInboxMaxId: e.int(),
      readOutboxMaxId: e.int(),
      unreadCount: e.int(),
      chatPhoto: e.object(),
      notifySettings: e.object(),
      exportedInvite: t & 8388608 ? e.object() : void 0,
      botInfo: e.vector(e.object),
      migratedFromChatId: t & 16 ? e.long() : void 0,
      migratedFromMaxId: t & 16 ? e.int() : void 0,
      pinnedMsgId: t & 32 ? e.int() : void 0,
      stickerset: t & 256 ? e.object() : void 0,
      availableMinId: t & 512 ? e.int() : void 0,
      folderId: t & 2048 ? e.int() : void 0,
      linkedChatId: t & 16384 ? e.long() : void 0,
      location: t & 32768 ? e.object() : void 0,
      slowmodeSeconds: t & 131072 ? e.int() : void 0,
      slowmodeNextSendDate: t & 262144 ? e.int() : void 0,
      statsDc: t & 4096 ? e.int() : void 0,
      pts: e.int(),
      call: t & 2097152 ? e.object() : void 0,
      ttlPeriod: t & 16777216 ? e.int() : void 0,
      pendingSuggestions: t & 33554432 ? e.vector(e.string) : void 0,
      groupcallDefaultJoinAs: t & 67108864 ? e.object() : void 0,
      themeEmoticon: t & 134217728 ? e.string() : void 0,
      requestsPending: t & 268435456 ? e.int() : void 0,
      recentRequesters: t & 268435456 ? e.vector(e.long) : void 0,
      defaultSendAs: t & 536870912 ? e.object() : void 0,
      availableReactions: t & 1073741824 ? e.object() : void 0,
      reactionsLimit: n & 8192 ? e.int() : void 0,
      stories: n & 16 ? e.object() : void 0,
      wallpaper: n & 128 ? e.object() : void 0,
      boostsApplied: n & 256 ? e.int() : void 0,
      boostsUnrestrict: n & 512 ? e.int() : void 0,
      emojiset: n & 1024 ? e.object() : void 0,
      botVerification: n & 131072 ? e.object() : void 0,
      stargiftsCount: n & 262144 ? e.int() : void 0,
      sendPaidMessagesStars: n & 2097152 ? e.long() : void 0,
      mainTab: n & 4194304 ? e.object() : void 0,
    };
  },
  954703838: function (e) {
    var t = e.uint();
    return {
      _: `chatParticipant`,
      flags: t,
      userId: e.long(),
      inviterId: e.long(),
      date: e.int(),
      rank: t & 1 ? e.string() : void 0,
    };
  },
  3791153080: function (e) {
    var t = e.uint();
    return {
      _: `chatParticipantCreator`,
      flags: t,
      userId: e.long(),
      rank: t & 1 ? e.string() : void 0,
    };
  },
  56677842: function (e) {
    var t = e.uint();
    return {
      _: `chatParticipantAdmin`,
      flags: t,
      userId: e.long(),
      inviterId: e.long(),
      date: e.int(),
      rank: t & 1 ? e.string() : void 0,
    };
  },
  2271466465: function (e) {
    var t = e.uint();
    return {
      _: `chatParticipantsForbidden`,
      flags: t,
      chatId: e.long(),
      selfParticipant: t & 1 ? e.object() : void 0,
    };
  },
  1018991608: function (e) {
    return {
      _: `chatParticipants`,
      chatId: e.long(),
      participants: e.vector(e.object),
      version: e.int(),
    };
  },
  935395612: function (e) {
    return { _: `chatPhotoEmpty` };
  },
  476978193: function (e) {
    var t = e.uint();
    return {
      _: `chatPhoto`,
      flags: t,
      hasVideo: !!(t & 1),
      photoId: e.long(),
      strippedThumb: t & 2 ? e.bytes() : void 0,
      dcId: e.int(),
    };
  },
  2426849924: function (e) {
    var t = e.uint();
    return {
      _: `messageEmpty`,
      flags: t,
      id: e.int(),
      peerId: t & 1 ? e.object() : void 0,
    };
  },
  988112002: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `message`,
      flags: t,
      out: !!(t & 2),
      mentioned: !!(t & 16),
      mediaUnread: !!(t & 32),
      silent: !!(t & 8192),
      post: !!(t & 16384),
      fromScheduled: !!(t & 262144),
      legacy: !!(t & 524288),
      editHide: !!(t & 2097152),
      pinned: !!(t & 16777216),
      noforwards: !!(t & 67108864),
      invertMedia: !!(t & 134217728),
      flags2: n,
      offline: !!(n & 2),
      videoProcessingPending: !!(n & 16),
      paidSuggestedPostStars: !!(n & 256),
      paidSuggestedPostTon: !!(n & 512),
      id: e.int(),
      fromId: t & 256 ? e.object() : void 0,
      fromBoostsApplied: t & 536870912 ? e.int() : void 0,
      fromRank: n & 4096 ? e.string() : void 0,
      peerId: e.object(),
      savedPeerId: t & 268435456 ? e.object() : void 0,
      fwdFrom: t & 4 ? e.object() : void 0,
      viaBotId: t & 2048 ? e.long() : void 0,
      viaBusinessBotId: n & 1 ? e.long() : void 0,
      replyTo: t & 8 ? e.object() : void 0,
      date: e.int(),
      message: e.string(),
      media: t & 512 ? e.object() : void 0,
      replyMarkup: t & 64 ? e.object() : void 0,
      entities: t & 128 ? e.vector(e.object) : void 0,
      views: t & 1024 ? e.int() : void 0,
      forwards: t & 1024 ? e.int() : void 0,
      replies: t & 8388608 ? e.object() : void 0,
      editDate: t & 32768 ? e.int() : void 0,
      postAuthor: t & 65536 ? e.string() : void 0,
      groupedId: t & 131072 ? e.long() : void 0,
      reactions: t & 1048576 ? e.object() : void 0,
      restrictionReason: t & 4194304 ? e.vector(e.object) : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
      quickReplyShortcutId: t & 1073741824 ? e.int() : void 0,
      effect: n & 4 ? e.long() : void 0,
      factcheck: n & 8 ? e.object() : void 0,
      reportDeliveryUntilDate: n & 32 ? e.int() : void 0,
      paidMessageStars: n & 64 ? e.long() : void 0,
      suggestedPost: n & 128 ? e.object() : void 0,
      scheduleRepeatPeriod: n & 1024 ? e.int() : void 0,
      summaryFromLanguage: n & 2048 ? e.string() : void 0,
    };
  },
  2055212554: function (e) {
    var t = e.uint();
    return {
      _: `messageService`,
      flags: t,
      out: !!(t & 2),
      mentioned: !!(t & 16),
      mediaUnread: !!(t & 32),
      reactionsArePossible: !!(t & 512),
      silent: !!(t & 8192),
      post: !!(t & 16384),
      legacy: !!(t & 524288),
      id: e.int(),
      fromId: t & 256 ? e.object() : void 0,
      peerId: e.object(),
      savedPeerId: t & 268435456 ? e.object() : void 0,
      replyTo: t & 8 ? e.object() : void 0,
      date: e.int(),
      action: e.object(),
      reactions: t & 1048576 ? e.object() : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
    };
  },
  1038967584: function (e) {
    return { _: `messageMediaEmpty` };
  },
  3793152867: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaPhoto`,
      flags: t,
      spoiler: !!(t & 8),
      livePhoto: !!(t & 16),
      photo: t & 1 ? e.object() : void 0,
      ttlSeconds: t & 4 ? e.int() : void 0,
      video: t & 16 ? e.object() : void 0,
    };
  },
  1457575028: function (e) {
    return { _: `messageMediaGeo`, geo: e.object() };
  },
  1882335561: function (e) {
    return {
      _: `messageMediaContact`,
      phoneNumber: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      vcard: e.string(),
      userId: e.long(),
    };
  },
  2676290718: function (e) {
    return { _: `messageMediaUnsupported` };
  },
  1389939929: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaDocument`,
      flags: t,
      nopremium: !!(t & 8),
      spoiler: !!(t & 16),
      video: !!(t & 64),
      round: !!(t & 128),
      voice: !!(t & 256),
      document: t & 1 ? e.object() : void 0,
      altDocuments: t & 32 ? e.vector(e.object) : void 0,
      videoCover: t & 512 ? e.object() : void 0,
      videoTimestamp: t & 1024 ? e.int() : void 0,
      ttlSeconds: t & 4 ? e.int() : void 0,
    };
  },
  3723562043: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaWebPage`,
      flags: t,
      forceLargeMedia: !!(t & 1),
      forceSmallMedia: !!(t & 2),
      manual: !!(t & 8),
      safe: !!(t & 16),
      webpage: e.object(),
    };
  },
  784356159: function (e) {
    return {
      _: `messageMediaVenue`,
      geo: e.object(),
      title: e.string(),
      address: e.string(),
      provider: e.string(),
      venueId: e.string(),
      venueType: e.string(),
    };
  },
  4256272392: function (e) {
    return { _: `messageMediaGame`, game: e.object() };
  },
  4138027219: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaInvoice`,
      flags: t,
      shippingAddressRequested: !!(t & 2),
      test: !!(t & 8),
      title: e.string(),
      description: e.string(),
      photo: t & 1 ? e.object() : void 0,
      receiptMsgId: t & 4 ? e.int() : void 0,
      currency: e.string(),
      totalAmount: e.long(),
      startParam: e.string(),
      extendedMedia: t & 16 ? e.object() : void 0,
    };
  },
  3108030054: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaGeoLive`,
      flags: t,
      geo: e.object(),
      heading: t & 1 ? e.int() : void 0,
      period: e.int(),
      proximityNotificationRadius: t & 2 ? e.int() : void 0,
    };
  },
  2000637542: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaPoll`,
      flags: t,
      poll: e.object(),
      results: e.object(),
      attachedMedia: t & 1 ? e.object() : void 0,
    };
  },
  147581959: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaDice`,
      flags: t,
      value: e.int(),
      emoticon: e.string(),
      gameOutcome: t & 1 ? e.object() : void 0,
    };
  },
  1758159491: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaStory`,
      flags: t,
      viaMention: !!(t & 2),
      peer: e.object(),
      id: e.int(),
      story: t & 1 ? e.object() : void 0,
    };
  },
  2852600811: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaGiveaway`,
      flags: t,
      onlyNewSubscribers: !!(t & 1),
      winnersAreVisible: !!(t & 4),
      channels: e.vector(e.long),
      countriesIso2: t & 2 ? e.vector(e.string) : void 0,
      prizeDescription: t & 8 ? e.string() : void 0,
      quantity: e.int(),
      months: t & 16 ? e.int() : void 0,
      stars: t & 32 ? e.long() : void 0,
      untilDate: e.int(),
    };
  },
  3467263649: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaGiveawayResults`,
      flags: t,
      onlyNewSubscribers: !!(t & 1),
      refunded: !!(t & 4),
      channelId: e.long(),
      additionalPeersCount: t & 8 ? e.int() : void 0,
      launchMsgId: e.int(),
      winnersCount: e.int(),
      unclaimedCount: e.int(),
      winners: e.vector(e.long),
      months: t & 16 ? e.int() : void 0,
      stars: t & 32 ? e.long() : void 0,
      prizeDescription: t & 2 ? e.string() : void 0,
      untilDate: e.int(),
    };
  },
  2827297937: function (e) {
    return {
      _: `messageMediaPaidMedia`,
      starsAmount: e.long(),
      extendedMedia: e.vector(e.object),
    };
  },
  2320740372: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaToDo`,
      flags: t,
      todo: e.object(),
      completions: t & 1 ? e.vector(e.object) : void 0,
    };
  },
  3395070857: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaVideoStream`,
      flags: t,
      rtmpStream: !!(t & 1),
      call: e.object(),
    };
  },
  3064919984: function (e) {
    return { _: `messageActionEmpty` };
  },
  3175599021: function (e) {
    return {
      _: `messageActionChatCreate`,
      title: e.string(),
      users: e.vector(e.long),
    };
  },
  3047280218: function (e) {
    return { _: `messageActionChatEditTitle`, title: e.string() };
  },
  2144015272: function (e) {
    return { _: `messageActionChatEditPhoto`, photo: e.object() };
  },
  2514746351: function (e) {
    return { _: `messageActionChatDeletePhoto` };
  },
  365886720: function (e) {
    return { _: `messageActionChatAddUser`, users: e.vector(e.long) };
  },
  2755604684: function (e) {
    return { _: `messageActionChatDeleteUser`, userId: e.long() };
  },
  51520707: function (e) {
    return { _: `messageActionChatJoinedByLink`, inviterId: e.long() };
  },
  2513611922: function (e) {
    return { _: `messageActionChannelCreate`, title: e.string() };
  },
  3775102866: function (e) {
    return { _: `messageActionChatMigrateTo`, channelId: e.long() };
  },
  3929622761: function (e) {
    return {
      _: `messageActionChannelMigrateFrom`,
      title: e.string(),
      chatId: e.long(),
    };
  },
  2495428845: function (e) {
    return { _: `messageActionPinMessage` };
  },
  2679813636: function (e) {
    return { _: `messageActionHistoryClear` };
  },
  2460428406: function (e) {
    return { _: `messageActionGameScore`, gameId: e.long(), score: e.int() };
  },
  4288679116: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPaymentSentMe`,
      flags: t,
      recurringInit: !!(t & 4),
      recurringUsed: !!(t & 8),
      currency: e.string(),
      totalAmount: e.long(),
      payload: e.bytes(),
      info: t & 1 ? e.object() : void 0,
      shippingOptionId: t & 2 ? e.string() : void 0,
      charge: e.object(),
      subscriptionUntilDate: t & 16 ? e.int() : void 0,
    };
  },
  3324293486: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPaymentSent`,
      flags: t,
      recurringInit: !!(t & 4),
      recurringUsed: !!(t & 8),
      currency: e.string(),
      totalAmount: e.long(),
      invoiceSlug: t & 1 ? e.string() : void 0,
      subscriptionUntilDate: t & 16 ? e.int() : void 0,
    };
  },
  2162236031: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPhoneCall`,
      flags: t,
      video: !!(t & 4),
      callId: e.long(),
      reason: t & 1 ? e.object() : void 0,
      duration: t & 2 ? e.int() : void 0,
    };
  },
  1200788123: function (e) {
    return { _: `messageActionScreenshotTaken` };
  },
  4209418070: function (e) {
    return { _: `messageActionCustomAction`, message: e.string() };
  },
  3306608249: function (e) {
    var t = e.uint();
    return {
      _: `messageActionBotAllowed`,
      flags: t,
      attachMenu: !!(t & 2),
      fromRequest: !!(t & 8),
      domain: t & 1 ? e.string() : void 0,
      app: t & 4 ? e.object() : void 0,
    };
  },
  455635795: function (e) {
    return {
      _: `messageActionSecureValuesSentMe`,
      values: e.vector(e.object),
      credentials: e.object(),
    };
  },
  3646710100: function (e) {
    return { _: `messageActionSecureValuesSent`, types: e.vector(e.object) };
  },
  4092747638: function (e) {
    return { _: `messageActionContactSignUp` };
  },
  2564871831: function (e) {
    return {
      _: `messageActionGeoProximityReached`,
      fromId: e.object(),
      toId: e.object(),
      distance: e.int(),
    };
  },
  2047704898: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGroupCall`,
      flags: t,
      call: e.object(),
      duration: t & 1 ? e.int() : void 0,
    };
  },
  1345295095: function (e) {
    return {
      _: `messageActionInviteToGroupCall`,
      call: e.object(),
      users: e.vector(e.long),
    };
  },
  1007897979: function (e) {
    var t = e.uint();
    return {
      _: `messageActionSetMessagesTTL`,
      flags: t,
      period: e.int(),
      autoSettingFrom: t & 1 ? e.long() : void 0,
    };
  },
  3013637729: function (e) {
    return {
      _: `messageActionGroupCallScheduled`,
      call: e.object(),
      scheduleDate: e.int(),
    };
  },
  3105602874: function (e) {
    return { _: `messageActionSetChatTheme`, theme: e.object() };
  },
  3955008459: function (e) {
    return { _: `messageActionChatJoinedByRequest` };
  },
  1205698681: function (e) {
    return {
      _: `messageActionWebViewDataSentMe`,
      text: e.string(),
      data: e.string(),
    };
  },
  3032714421: function (e) {
    return { _: `messageActionWebViewDataSent`, text: e.string() };
  },
  1223234306: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiftPremium`,
      flags: t,
      currency: e.string(),
      amount: e.long(),
      days: e.int(),
      cryptoCurrency: t & 1 ? e.string() : void 0,
      cryptoAmount: t & 1 ? e.long() : void 0,
      message: t & 2 ? e.object() : void 0,
    };
  },
  228168278: function (e) {
    var t = e.uint();
    return {
      _: `messageActionTopicCreate`,
      flags: t,
      titleMissing: !!(t & 2),
      title: e.string(),
      iconColor: e.int(),
      iconEmojiId: t & 1 ? e.long() : void 0,
    };
  },
  3230943264: function (e) {
    var t = e.uint();
    return {
      _: `messageActionTopicEdit`,
      flags: t,
      title: t & 1 ? e.string() : void 0,
      iconEmojiId: t & 2 ? e.long() : void 0,
      closed: t & 4 ? e.boolean() : void 0,
      hidden: t & 8 ? e.boolean() : void 0,
    };
  },
  1474192222: function (e) {
    return { _: `messageActionSuggestProfilePhoto`, photo: e.object() };
  },
  827428507: function (e) {
    return {
      _: `messageActionRequestedPeer`,
      buttonId: e.int(),
      peers: e.vector(e.object),
    };
  },
  1348510708: function (e) {
    var t = e.uint();
    return {
      _: `messageActionSetChatWallPaper`,
      flags: t,
      same: !!(t & 1),
      forBoth: !!(t & 2),
      wallpaper: e.object(),
    };
  },
  834962247: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiftCode`,
      flags: t,
      viaGiveaway: !!(t & 1),
      unclaimed: !!(t & 32),
      boostPeer: t & 2 ? e.object() : void 0,
      days: e.int(),
      slug: e.string(),
      currency: t & 4 ? e.string() : void 0,
      amount: t & 4 ? e.long() : void 0,
      cryptoCurrency: t & 8 ? e.string() : void 0,
      cryptoAmount: t & 8 ? e.long() : void 0,
      message: t & 16 ? e.object() : void 0,
    };
  },
  2819576292: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiveawayLaunch`,
      flags: t,
      stars: t & 1 ? e.long() : void 0,
    };
  },
  2279797077: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiveawayResults`,
      flags: t,
      stars: !!(t & 1),
      winnersCount: e.int(),
      unclaimedCount: e.int(),
    };
  },
  3422726765: function (e) {
    return { _: `messageActionBoostApply`, boosts: e.int() };
  },
  2477987912: function (e) {
    return {
      _: `messageActionRequestedPeerSentMe`,
      buttonId: e.int(),
      peers: e.vector(e.object),
    };
  },
  1102307842: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPaymentRefunded`,
      flags: t,
      peer: e.object(),
      currency: e.string(),
      totalAmount: e.long(),
      payload: t & 1 ? e.bytes() : void 0,
      charge: e.object(),
    };
  },
  1171632161: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiftStars`,
      flags: t,
      currency: e.string(),
      amount: e.long(),
      stars: e.long(),
      cryptoCurrency: t & 1 ? e.string() : void 0,
      cryptoAmount: t & 1 ? e.long() : void 0,
      transactionId: t & 2 ? e.string() : void 0,
    };
  },
  2953594786: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPrizeStars`,
      flags: t,
      unclaimed: !!(t & 1),
      stars: e.long(),
      transactionId: e.string(),
      boostPeer: e.object(),
      giveawayMsgId: e.int(),
    };
  },
  3928764883: function (e) {
    var t = e.uint();
    return {
      _: `messageActionStarGift`,
      flags: t,
      nameHidden: !!(t & 1),
      saved: !!(t & 4),
      converted: !!(t & 8),
      upgraded: !!(t & 32),
      refunded: !!(t & 512),
      canUpgrade: !!(t & 1024),
      prepaidUpgrade: !!(t & 8192),
      upgradeSeparate: !!(t & 65536),
      auctionAcquired: !!(t & 131072),
      gift: e.object(),
      message: t & 2 ? e.object() : void 0,
      convertStars: t & 16 ? e.long() : void 0,
      upgradeMsgId: t & 32 ? e.int() : void 0,
      upgradeStars: t & 256 ? e.long() : void 0,
      fromId: t & 2048 ? e.object() : void 0,
      peer: t & 4096 ? e.object() : void 0,
      savedId: t & 4096 ? e.long() : void 0,
      prepaidUpgradeHash: t & 16384 ? e.string() : void 0,
      giftMsgId: t & 32768 ? e.int() : void 0,
      toId: t & 262144 ? e.object() : void 0,
      giftNum: t & 524288 ? e.int() : void 0,
    };
  },
  3871544610: function (e) {
    var t = e.uint();
    return {
      _: `messageActionStarGiftUnique`,
      flags: t,
      upgrade: !!(t & 1),
      transferred: !!(t & 2),
      saved: !!(t & 4),
      refunded: !!(t & 32),
      prepaidUpgrade: !!(t & 2048),
      assigned: !!(t & 8192),
      fromOffer: !!(t & 16384),
      craft: !!(t & 65536),
      gift: e.object(),
      canExportAt: t & 8 ? e.int() : void 0,
      transferStars: t & 16 ? e.long() : void 0,
      fromId: t & 64 ? e.object() : void 0,
      peer: t & 128 ? e.object() : void 0,
      savedId: t & 128 ? e.long() : void 0,
      resaleAmount: t & 256 ? e.object() : void 0,
      canTransferAt: t & 512 ? e.int() : void 0,
      canResellAt: t & 1024 ? e.int() : void 0,
      dropOriginalDetailsStars: t & 4096 ? e.long() : void 0,
      canCraftAt: t & 32768 ? e.int() : void 0,
    };
  },
  2887720909: function (e) {
    return {
      _: `messageActionPaidMessagesRefunded`,
      count: e.int(),
      stars: e.long(),
    };
  },
  2226685304: function (e) {
    var t = e.uint();
    return {
      _: `messageActionPaidMessagesPrice`,
      flags: t,
      broadcastMessagesAllowed: !!(t & 1),
      stars: e.long(),
    };
  },
  805187450: function (e) {
    var t = e.uint();
    return {
      _: `messageActionConferenceCall`,
      flags: t,
      missed: !!(t & 1),
      active: !!(t & 2),
      video: !!(t & 16),
      callId: e.long(),
      duration: t & 4 ? e.int() : void 0,
      otherParticipants: t & 8 ? e.vector(e.object) : void 0,
    };
  },
  3430702217: function (e) {
    return {
      _: `messageActionTodoCompletions`,
      completed: e.vector(e.int),
      incompleted: e.vector(e.int),
    };
  },
  3354246275: function (e) {
    return { _: `messageActionTodoAppendTasks`, list: e.vector(e.object) };
  },
  4000978326: function (e) {
    var t = e.uint();
    return {
      _: `messageActionSuggestedPostApproval`,
      flags: t,
      rejected: !!(t & 1),
      balanceTooLow: !!(t & 2),
      rejectComment: t & 4 ? e.string() : void 0,
      scheduleDate: t & 8 ? e.int() : void 0,
      price: t & 16 ? e.object() : void 0,
    };
  },
  2514341737: function (e) {
    return { _: `messageActionSuggestedPostSuccess`, price: e.object() };
  },
  1777932024: function (e) {
    var t = e.uint();
    return {
      _: `messageActionSuggestedPostRefund`,
      flags: t,
      payerInitiated: !!(t & 1),
    };
  },
  2829305497: function (e) {
    var t = e.uint();
    return {
      _: `messageActionGiftTon`,
      flags: t,
      currency: e.string(),
      amount: e.long(),
      cryptoCurrency: e.string(),
      cryptoAmount: e.long(),
      transactionId: t & 1 ? e.string() : void 0,
    };
  },
  747579941: function (e) {
    return { _: `messageActionSuggestBirthday`, birthday: e.object() };
  },
  2000845012: function (e) {
    var t = e.uint();
    return {
      _: `messageActionStarGiftPurchaseOffer`,
      flags: t,
      accepted: !!(t & 1),
      declined: !!(t & 2),
      gift: e.object(),
      price: e.object(),
      expiresAt: e.int(),
    };
  },
  1940760427: function (e) {
    var t = e.uint();
    return {
      _: `messageActionStarGiftPurchaseOfferDeclined`,
      flags: t,
      expired: !!(t & 1),
      gift: e.object(),
      price: e.object(),
    };
  },
  2961100933: function (e) {
    return { _: `messageActionNewCreatorPending`, newCreatorId: e.long() };
  },
  3783807035: function (e) {
    return { _: `messageActionChangeCreator`, newCreatorId: e.long() };
  },
  3212666226: function (e) {
    return {
      _: `messageActionNoForwardsToggle`,
      prevValue: e.boolean(),
      newValue: e.boolean(),
    };
  },
  1042781114: function (e) {
    var t = e.uint();
    return {
      _: `messageActionNoForwardsRequest`,
      flags: t,
      expired: !!(t & 1),
      prevValue: e.boolean(),
      newValue: e.boolean(),
    };
  },
  2644626796: function (e) {
    return { _: `messageActionPollAppendAnswer`, answer: e.object() };
  },
  966161628: function (e) {
    return { _: `messageActionPollDeleteAnswer`, answer: e.object() };
  },
  375414334: function (e) {
    return { _: `messageActionManagedBotCreated`, botId: e.long() };
  },
  4236900339: function (e) {
    var t = e.uint();
    return {
      _: `dialog`,
      flags: t,
      pinned: !!(t & 4),
      unreadMark: !!(t & 8),
      viewForumAsMessages: !!(t & 64),
      peer: e.object(),
      topMessage: e.int(),
      readInboxMaxId: e.int(),
      readOutboxMaxId: e.int(),
      unreadCount: e.int(),
      unreadMentionsCount: e.int(),
      unreadReactionsCount: e.int(),
      unreadPollVotesCount: e.int(),
      notifySettings: e.object(),
      pts: t & 1 ? e.int() : void 0,
      draft: t & 2 ? e.object() : void 0,
      folderId: t & 16 ? e.int() : void 0,
      ttlPeriod: t & 32 ? e.int() : void 0,
    };
  },
  1908216652: function (e) {
    var t = e.uint();
    return {
      _: `dialogFolder`,
      flags: t,
      pinned: !!(t & 4),
      folder: e.object(),
      peer: e.object(),
      topMessage: e.int(),
      unreadMutedPeersCount: e.int(),
      unreadUnmutedPeersCount: e.int(),
      unreadMutedMessagesCount: e.int(),
      unreadUnmutedMessagesCount: e.int(),
    };
  },
  590459437: function (e) {
    return { _: `photoEmpty`, id: e.long() };
  },
  4212750949: function (e) {
    var t = e.uint();
    return {
      _: `photo`,
      flags: t,
      hasStickers: !!(t & 1),
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
      date: e.int(),
      sizes: e.vector(e.object),
      videoSizes: t & 2 ? e.vector(e.object) : void 0,
      dcId: e.int(),
    };
  },
  236446268: function (e) {
    return { _: `photoSizeEmpty`, type: e.string() };
  },
  1976012384: function (e) {
    return {
      _: `photoSize`,
      type: e.string(),
      w: e.int(),
      h: e.int(),
      size: e.int(),
    };
  },
  35527382: function (e) {
    return {
      _: `photoCachedSize`,
      type: e.string(),
      w: e.int(),
      h: e.int(),
      bytes: e.bytes(),
    };
  },
  3769678894: function (e) {
    return { _: `photoStrippedSize`, type: e.string(), bytes: e.bytes() };
  },
  4198431637: function (e) {
    return {
      _: `photoSizeProgressive`,
      type: e.string(),
      w: e.int(),
      h: e.int(),
      sizes: e.vector(e.int),
    };
  },
  3626061121: function (e) {
    return { _: `photoPathSize`, type: e.string(), bytes: e.bytes() };
  },
  286776671: function (e) {
    return { _: `geoPointEmpty` };
  },
  2997024355: function (e) {
    var t = e.uint();
    return {
      _: `geoPoint`,
      flags: t,
      long: e.double(),
      lat: e.double(),
      accessHash: e.long(),
      accuracyRadius: t & 1 ? e.int() : void 0,
    };
  },
  1577067778: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCode`,
      flags: t,
      type: e.object(),
      phoneCodeHash: e.string(),
      nextType: t & 2 ? e.object() : void 0,
      timeout: t & 4 ? e.int() : void 0,
    };
  },
  596704836: function (e) {
    return { _: `auth.sentCodeSuccess`, authorization: e.object() };
  },
  3767884348: function (e) {
    return {
      _: `auth.sentCodePaymentRequired`,
      storeProduct: e.string(),
      phoneCodeHash: e.string(),
      supportEmailAddress: e.string(),
      supportEmailSubject: e.string(),
      currency: e.string(),
      amount: e.long(),
    };
  },
  782418132: function (e) {
    var t = e.uint();
    return {
      _: `auth.authorization`,
      flags: t,
      setupPasswordRequired: !!(t & 2),
      otherwiseReloginDays: t & 2 ? e.int() : void 0,
      tmpSessions: t & 1 ? e.int() : void 0,
      futureAuthToken: t & 4 ? e.bytes() : void 0,
      user: e.object(),
    };
  },
  1148485274: function (e) {
    var t = e.uint();
    return {
      _: `auth.authorizationSignUpRequired`,
      flags: t,
      termsOfService: t & 1 ? e.object() : void 0,
    };
  },
  3023364792: function (e) {
    return { _: `auth.exportedAuthorization`, id: e.long(), bytes: e.bytes() };
  },
  3099351820: function (e) {
    return { _: `inputNotifyPeer`, peer: e.object() };
  },
  423314455: function (e) {
    return { _: `inputNotifyUsers` };
  },
  1251338318: function (e) {
    return { _: `inputNotifyChats` };
  },
  2983951486: function (e) {
    return { _: `inputNotifyBroadcasts` };
  },
  1548122514: function (e) {
    return { _: `inputNotifyForumTopic`, peer: e.object(), topMsgId: e.int() };
  },
  3402328802: function (e) {
    var t = e.uint();
    return {
      _: `inputPeerNotifySettings`,
      flags: t,
      showPreviews: t & 1 ? e.boolean() : void 0,
      silent: t & 2 ? e.boolean() : void 0,
      muteUntil: t & 4 ? e.int() : void 0,
      sound: t & 8 ? e.object() : void 0,
      storiesMuted: t & 64 ? e.boolean() : void 0,
      storiesHideSender: t & 128 ? e.boolean() : void 0,
      storiesSound: t & 256 ? e.object() : void 0,
    };
  },
  2573347852: function (e) {
    var t = e.uint();
    return {
      _: `peerNotifySettings`,
      flags: t,
      showPreviews: t & 1 ? e.boolean() : void 0,
      silent: t & 2 ? e.boolean() : void 0,
      muteUntil: t & 4 ? e.int() : void 0,
      iosSound: t & 8 ? e.object() : void 0,
      androidSound: t & 16 ? e.object() : void 0,
      otherSound: t & 32 ? e.object() : void 0,
      storiesMuted: t & 64 ? e.boolean() : void 0,
      storiesHideSender: t & 128 ? e.boolean() : void 0,
      storiesIosSound: t & 256 ? e.object() : void 0,
      storiesAndroidSound: t & 512 ? e.object() : void 0,
      storiesOtherSound: t & 1024 ? e.object() : void 0,
    };
  },
  4101456375: function (e) {
    var t = e.uint();
    return {
      _: `peerSettings`,
      flags: t,
      reportSpam: !!(t & 1),
      addContact: !!(t & 2),
      blockContact: !!(t & 4),
      shareContact: !!(t & 8),
      needContactsException: !!(t & 16),
      reportGeo: !!(t & 32),
      autoarchived: !!(t & 128),
      inviteMembers: !!(t & 256),
      requestChatBroadcast: !!(t & 1024),
      businessBotPaused: !!(t & 2048),
      businessBotCanReply: !!(t & 4096),
      geoDistance: t & 64 ? e.int() : void 0,
      requestChatTitle: t & 512 ? e.string() : void 0,
      requestChatDate: t & 512 ? e.int() : void 0,
      businessBotId: t & 8192 ? e.long() : void 0,
      businessBotManageUrl: t & 8192 ? e.string() : void 0,
      chargePaidMessageStars: t & 16384 ? e.long() : void 0,
      registrationMonth: t & 32768 ? e.string() : void 0,
      phoneCountry: t & 65536 ? e.string() : void 0,
      nameChangeDate: t & 131072 ? e.int() : void 0,
      photoChangeDate: t & 262144 ? e.int() : void 0,
    };
  },
  2755118061: function (e) {
    var t = e.long(),
      n = e.uint();
    return {
      _: `wallPaper`,
      id: t,
      flags: n,
      creator: !!(n & 1),
      default: !!(n & 2),
      pattern: !!(n & 8),
      dark: !!(n & 16),
      accessHash: e.long(),
      slug: e.string(),
      document: e.object(),
      settings: n & 4 ? e.object() : void 0,
    };
  },
  3766501654: function (e) {
    var t = e.long(),
      n = e.uint();
    return {
      _: `wallPaperNoFile`,
      id: t,
      flags: n,
      default: !!(n & 2),
      dark: !!(n & 16),
      settings: n & 4 ? e.object() : void 0,
    };
  },
  1490799288: function (e) {
    return { _: `inputReportReasonSpam` };
  },
  505595789: function (e) {
    return { _: `inputReportReasonViolence` };
  },
  777640226: function (e) {
    return { _: `inputReportReasonPornography` };
  },
  2918469347: function (e) {
    return { _: `inputReportReasonChildAbuse` };
  },
  3252986545: function (e) {
    return { _: `inputReportReasonOther` };
  },
  2609510714: function (e) {
    return { _: `inputReportReasonCopyright` };
  },
  3688169197: function (e) {
    return { _: `inputReportReasonGeoIrrelevant` };
  },
  4124956391: function (e) {
    return { _: `inputReportReasonFake` };
  },
  177124030: function (e) {
    return { _: `inputReportReasonIllegalDrugs` };
  },
  2663876157: function (e) {
    return { _: `inputReportReasonPersonalDetails` };
  },
  114026053: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `userFull`,
      flags: t,
      blocked: !!(t & 1),
      phoneCallsAvailable: !!(t & 16),
      phoneCallsPrivate: !!(t & 32),
      canPinMessage: !!(t & 128),
      hasScheduled: !!(t & 4096),
      videoCallsAvailable: !!(t & 8192),
      voiceMessagesForbidden: !!(t & 1048576),
      translationsDisabled: !!(t & 8388608),
      storiesPinnedAvailable: !!(t & 67108864),
      blockedMyStoriesFrom: !!(t & 134217728),
      wallpaperOverridden: !!(t & 268435456),
      contactRequirePremium: !!(t & 536870912),
      readDatesPrivate: !!(t & 1073741824),
      flags2: n,
      sponsoredEnabled: !!(n & 128),
      canViewRevenue: !!(n & 512),
      botCanManageEmojiStatus: !!(n & 1024),
      displayGiftsButton: !!(n & 65536),
      noforwardsMyEnabled: !!(n & 8388608),
      noforwardsPeerEnabled: !!(n & 16777216),
      unofficialSecurityRisk: !!(n & 67108864),
      id: e.long(),
      about: t & 2 ? e.string() : void 0,
      settings: e.object(),
      personalPhoto: t & 2097152 ? e.object() : void 0,
      profilePhoto: t & 4 ? e.object() : void 0,
      fallbackPhoto: t & 4194304 ? e.object() : void 0,
      notifySettings: e.object(),
      botInfo: t & 8 ? e.object() : void 0,
      pinnedMsgId: t & 64 ? e.int() : void 0,
      commonChatsCount: e.int(),
      folderId: t & 2048 ? e.int() : void 0,
      ttlPeriod: t & 16384 ? e.int() : void 0,
      theme: t & 32768 ? e.object() : void 0,
      privateForwardName: t & 65536 ? e.string() : void 0,
      botGroupAdminRights: t & 131072 ? e.object() : void 0,
      botBroadcastAdminRights: t & 262144 ? e.object() : void 0,
      wallpaper: t & 16777216 ? e.object() : void 0,
      stories: t & 33554432 ? e.object() : void 0,
      businessWorkHours: n & 1 ? e.object() : void 0,
      businessLocation: n & 2 ? e.object() : void 0,
      businessGreetingMessage: n & 4 ? e.object() : void 0,
      businessAwayMessage: n & 8 ? e.object() : void 0,
      businessIntro: n & 16 ? e.object() : void 0,
      birthday: n & 32 ? e.object() : void 0,
      personalChannelId: n & 64 ? e.long() : void 0,
      personalChannelMessage: n & 64 ? e.int() : void 0,
      stargiftsCount: n & 256 ? e.int() : void 0,
      starrefProgram: n & 2048 ? e.object() : void 0,
      botVerification: n & 4096 ? e.object() : void 0,
      sendPaidMessagesStars: n & 16384 ? e.long() : void 0,
      disallowedGifts: n & 32768 ? e.object() : void 0,
      starsRating: n & 131072 ? e.object() : void 0,
      starsMyPendingRating: n & 262144 ? e.object() : void 0,
      starsMyPendingRatingDate: n & 262144 ? e.int() : void 0,
      mainTab: n & 1048576 ? e.object() : void 0,
      savedMusic: n & 2097152 ? e.object() : void 0,
      note: n & 4194304 ? e.object() : void 0,
      botManagerId: n & 33554432 ? e.long() : void 0,
    };
  },
  341499403: function (e) {
    return { _: `contact`, userId: e.long(), mutual: e.boolean() };
  },
  3242081360: function (e) {
    return { _: `importedContact`, userId: e.long(), clientId: e.long() };
  },
  383348795: function (e) {
    return { _: `contactStatus`, userId: e.long(), status: e.object() };
  },
  3075189202: function (e) {
    return { _: `contacts.contactsNotModified` };
  },
  3941105218: function (e) {
    return {
      _: `contacts.contacts`,
      contacts: e.vector(e.object),
      savedCount: e.int(),
      users: e.vector(e.object),
    };
  },
  2010127419: function (e) {
    return {
      _: `contacts.importedContacts`,
      imported: e.vector(e.object),
      popularInvites: e.vector(e.object),
      retryContacts: e.vector(e.long),
      users: e.vector(e.object),
    };
  },
  182326673: function (e) {
    return {
      _: `contacts.blocked`,
      blocked: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3781575060: function (e) {
    return {
      _: `contacts.blockedSlice`,
      count: e.int(),
      blocked: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  364538944: function (e) {
    return {
      _: `messages.dialogs`,
      dialogs: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1910543603: function (e) {
    return {
      _: `messages.dialogsSlice`,
      count: e.int(),
      dialogs: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4041467286: function (e) {
    return { _: `messages.dialogsNotModified`, count: e.int() };
  },
  494135274: function (e) {
    return {
      _: `messages.messages`,
      messages: e.vector(e.object),
      topics: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1595959062: function (e) {
    var t = e.uint();
    return {
      _: `messages.messagesSlice`,
      flags: t,
      inexact: !!(t & 2),
      count: e.int(),
      nextRate: t & 1 ? e.int() : void 0,
      offsetIdOffset: t & 4 ? e.int() : void 0,
      searchFlood: t & 8 ? e.object() : void 0,
      messages: e.vector(e.object),
      topics: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3346446926: function (e) {
    var t = e.uint();
    return {
      _: `messages.channelMessages`,
      flags: t,
      inexact: !!(t & 2),
      pts: e.int(),
      count: e.int(),
      offsetIdOffset: t & 4 ? e.int() : void 0,
      messages: e.vector(e.object),
      topics: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1951620897: function (e) {
    return { _: `messages.messagesNotModified`, count: e.int() };
  },
  1694474197: function (e) {
    return { _: `messages.chats`, chats: e.vector(e.object) };
  },
  2631405892: function (e) {
    return {
      _: `messages.chatsSlice`,
      count: e.int(),
      chats: e.vector(e.object),
    };
  },
  3856126364: function (e) {
    return {
      _: `messages.chatFull`,
      fullChat: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3025955281: function (e) {
    return {
      _: `messages.affectedHistory`,
      pts: e.int(),
      ptsCount: e.int(),
      offset: e.int(),
    };
  },
  1474492012: function (e) {
    return { _: `inputMessagesFilterEmpty` };
  },
  2517214492: function (e) {
    return { _: `inputMessagesFilterPhotos` };
  },
  2680163941: function (e) {
    return { _: `inputMessagesFilterVideo` };
  },
  1458172132: function (e) {
    return { _: `inputMessagesFilterPhotoVideo` };
  },
  2665345416: function (e) {
    return { _: `inputMessagesFilterDocument` };
  },
  2129714567: function (e) {
    return { _: `inputMessagesFilterUrl` };
  },
  4291323271: function (e) {
    return { _: `inputMessagesFilterGif` };
  },
  1358283666: function (e) {
    return { _: `inputMessagesFilterVoice` };
  },
  928101534: function (e) {
    return { _: `inputMessagesFilterMusic` };
  },
  975236280: function (e) {
    return { _: `inputMessagesFilterChatPhotos` };
  },
  2160695144: function (e) {
    var t = e.uint();
    return { _: `inputMessagesFilterPhoneCalls`, flags: t, missed: !!(t & 1) };
  },
  2054952868: function (e) {
    return { _: `inputMessagesFilterRoundVoice` };
  },
  3041516115: function (e) {
    return { _: `inputMessagesFilterRoundVideo` };
  },
  3254314650: function (e) {
    return { _: `inputMessagesFilterMyMentions` };
  },
  3875695885: function (e) {
    return { _: `inputMessagesFilterGeo` };
  },
  3764575107: function (e) {
    return { _: `inputMessagesFilterContacts` };
  },
  464520273: function (e) {
    return { _: `inputMessagesFilterPinned` };
  },
  4197173514: function (e) {
    return { _: `inputMessagesFilterPoll` };
  },
  522914557: function (e) {
    return {
      _: `updateNewMessage`,
      message: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  1318109142: function (e) {
    return { _: `updateMessageID`, id: e.int(), randomId: e.long() };
  },
  2718806245: function (e) {
    return {
      _: `updateDeleteMessages`,
      messages: e.vector(e.int),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  706199388: function (e) {
    var t = e.uint();
    return {
      _: `updateUserTyping`,
      flags: t,
      userId: e.long(),
      topMsgId: t & 1 ? e.int() : void 0,
      action: e.object(),
    };
  },
  2202565360: function (e) {
    return {
      _: `updateChatUserTyping`,
      chatId: e.long(),
      fromId: e.object(),
      action: e.object(),
    };
  },
  125178264: function (e) {
    return { _: `updateChatParticipants`, participants: e.object() };
  },
  3854432478: function (e) {
    return { _: `updateUserStatus`, userId: e.long(), status: e.object() };
  },
  2810480932: function (e) {
    return {
      _: `updateUserName`,
      userId: e.long(),
      firstName: e.string(),
      lastName: e.string(),
      usernames: e.vector(e.object),
    };
  },
  2303831023: function (e) {
    var t = e.uint();
    return {
      _: `updateNewAuthorization`,
      flags: t,
      unconfirmed: !!(t & 1),
      hash: e.long(),
      date: t & 1 ? e.int() : void 0,
      device: t & 1 ? e.string() : void 0,
      location: t & 1 ? e.string() : void 0,
    };
  },
  314359194: function (e) {
    return {
      _: `updateNewEncryptedMessage`,
      message: e.object(),
      qts: e.int(),
    };
  },
  386986326: function (e) {
    return { _: `updateEncryptedChatTyping`, chatId: e.int() };
  },
  3030575245: function (e) {
    return { _: `updateEncryption`, chat: e.object(), date: e.int() };
  },
  956179895: function (e) {
    return {
      _: `updateEncryptedMessagesRead`,
      chatId: e.int(),
      maxDate: e.int(),
      date: e.int(),
    };
  },
  1037718609: function (e) {
    return {
      _: `updateChatParticipantAdd`,
      chatId: e.long(),
      userId: e.long(),
      inviterId: e.long(),
      date: e.int(),
      version: e.int(),
    };
  },
  3811523959: function (e) {
    return {
      _: `updateChatParticipantDelete`,
      chatId: e.long(),
      userId: e.long(),
      version: e.int(),
    };
  },
  2388564083: function (e) {
    return { _: `updateDcOptions`, dcOptions: e.vector(e.object) };
  },
  3200411887: function (e) {
    return {
      _: `updateNotifySettings`,
      peer: e.object(),
      notifySettings: e.object(),
    };
  },
  3957614617: function (e) {
    var t = e.uint();
    return {
      _: `updateServiceNotification`,
      flags: t,
      popup: !!(t & 1),
      invertMedia: !!(t & 4),
      inboxDate: t & 2 ? e.int() : void 0,
      type: e.string(),
      message: e.string(),
      media: e.object(),
      entities: e.vector(e.object),
    };
  },
  3996854058: function (e) {
    return { _: `updatePrivacy`, key: e.object(), rules: e.vector(e.object) };
  },
  88680979: function (e) {
    return { _: `updateUserPhone`, userId: e.long(), phone: e.string() };
  },
  2659499161: function (e) {
    var t = e.uint();
    return {
      _: `updateReadHistoryInbox`,
      flags: t,
      folderId: t & 1 ? e.int() : void 0,
      peer: e.object(),
      topMsgId: t & 2 ? e.int() : void 0,
      maxId: e.int(),
      stillUnreadCount: e.int(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  791617983: function (e) {
    return {
      _: `updateReadHistoryOutbox`,
      peer: e.object(),
      maxId: e.int(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  2139689491: function (e) {
    return {
      _: `updateWebPage`,
      webpage: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  4163006849: function (e) {
    var t = e.uint();
    return {
      _: `updateReadMessagesContents`,
      flags: t,
      messages: e.vector(e.int),
      pts: e.int(),
      ptsCount: e.int(),
      date: t & 1 ? e.int() : void 0,
    };
  },
  277713951: function (e) {
    var t = e.uint();
    return {
      _: `updateChannelTooLong`,
      flags: t,
      channelId: e.long(),
      pts: t & 1 ? e.int() : void 0,
    };
  },
  1666927625: function (e) {
    return { _: `updateChannel`, channelId: e.long() };
  },
  1656358105: function (e) {
    return {
      _: `updateNewChannelMessage`,
      message: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  2452516368: function (e) {
    var t = e.uint();
    return {
      _: `updateReadChannelInbox`,
      flags: t,
      folderId: t & 1 ? e.int() : void 0,
      channelId: e.long(),
      maxId: e.int(),
      stillUnreadCount: e.int(),
      pts: e.int(),
    };
  },
  3274529554: function (e) {
    return {
      _: `updateDeleteChannelMessages`,
      channelId: e.long(),
      messages: e.vector(e.int),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  4062620680: function (e) {
    return {
      _: `updateChannelMessageViews`,
      channelId: e.long(),
      id: e.int(),
      views: e.int(),
    };
  },
  3620364706: function (e) {
    return {
      _: `updateChatParticipantAdmin`,
      chatId: e.long(),
      userId: e.long(),
      isAdmin: e.boolean(),
      version: e.int(),
    };
  },
  1753886890: function (e) {
    return { _: `updateNewStickerSet`, stickerset: e.object() };
  },
  196268545: function (e) {
    var t = e.uint();
    return {
      _: `updateStickerSetsOrder`,
      flags: t,
      masks: !!(t & 1),
      emojis: !!(t & 2),
      order: e.vector(e.long),
    };
  },
  834816008: function (e) {
    var t = e.uint();
    return {
      _: `updateStickerSets`,
      flags: t,
      masks: !!(t & 1),
      emojis: !!(t & 2),
    };
  },
  2473931806: function (e) {
    return { _: `updateSavedGifs` };
  },
  1232025500: function (e) {
    var t = e.uint();
    return {
      _: `updateBotInlineQuery`,
      flags: t,
      queryId: e.long(),
      userId: e.long(),
      query: e.string(),
      geo: t & 1 ? e.object() : void 0,
      peerType: t & 2 ? e.object() : void 0,
      offset: e.string(),
    };
  },
  317794823: function (e) {
    var t = e.uint();
    return {
      _: `updateBotInlineSend`,
      flags: t,
      userId: e.long(),
      query: e.string(),
      geo: t & 1 ? e.object() : void 0,
      id: e.string(),
      msgId: t & 2 ? e.object() : void 0,
    };
  },
  457133559: function (e) {
    return {
      _: `updateEditChannelMessage`,
      message: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  3117401229: function (e) {
    var t = e.uint();
    return {
      _: `updateBotCallbackQuery`,
      flags: t,
      queryId: e.long(),
      userId: e.long(),
      peer: e.object(),
      msgId: e.int(),
      chatInstance: e.long(),
      data: t & 1 ? e.bytes() : void 0,
      gameShortName: t & 2 ? e.string() : void 0,
    };
  },
  3825430691: function (e) {
    return {
      _: `updateEditMessage`,
      message: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  1763610706: function (e) {
    var t = e.uint();
    return {
      _: `updateInlineBotCallbackQuery`,
      flags: t,
      queryId: e.long(),
      userId: e.long(),
      msgId: e.object(),
      chatInstance: e.long(),
      data: t & 1 ? e.bytes() : void 0,
      gameShortName: t & 2 ? e.string() : void 0,
    };
  },
  3076495785: function (e) {
    return {
      _: `updateReadChannelOutbox`,
      channelId: e.long(),
      maxId: e.int(),
    };
  },
  3992719646: function (e) {
    var t = e.uint();
    return {
      _: `updateDraftMessage`,
      flags: t,
      peer: e.object(),
      topMsgId: t & 1 ? e.int() : void 0,
      savedPeerId: t & 2 ? e.object() : void 0,
      draft: e.object(),
    };
  },
  1461528386: function (e) {
    return { _: `updateReadFeaturedStickers` };
  },
  2588027936: function (e) {
    return { _: `updateRecentStickers` };
  },
  2720652550: function (e) {
    return { _: `updateConfig` };
  },
  861169551: function (e) {
    return { _: `updatePtsChanged` };
  },
  791390623: function (e) {
    return {
      _: `updateChannelWebPage`,
      channelId: e.long(),
      webpage: e.object(),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  1852826908: function (e) {
    var t = e.uint();
    return {
      _: `updateDialogPinned`,
      flags: t,
      pinned: !!(t & 1),
      folderId: t & 2 ? e.int() : void 0,
      peer: e.object(),
    };
  },
  4195302562: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedDialogs`,
      flags: t,
      folderId: t & 2 ? e.int() : void 0,
      order: t & 1 ? e.vector(e.object) : void 0,
    };
  },
  2199371971: function (e) {
    return { _: `updateBotWebhookJSON`, data: e.object() };
  },
  2610053286: function (e) {
    return {
      _: `updateBotWebhookJSONQuery`,
      queryId: e.long(),
      data: e.object(),
      timeout: e.int(),
    };
  },
  3048144253: function (e) {
    return {
      _: `updateBotShippingQuery`,
      queryId: e.long(),
      userId: e.long(),
      payload: e.bytes(),
      shippingAddress: e.object(),
    };
  },
  2359990934: function (e) {
    var t = e.uint();
    return {
      _: `updateBotPrecheckoutQuery`,
      flags: t,
      queryId: e.long(),
      userId: e.long(),
      payload: e.bytes(),
      info: t & 1 ? e.object() : void 0,
      shippingOptionId: t & 2 ? e.string() : void 0,
      currency: e.string(),
      totalAmount: e.long(),
    };
  },
  2869914398: function (e) {
    return { _: `updatePhoneCall`, phoneCall: e.object() };
  },
  1180041828: function (e) {
    return { _: `updateLangPackTooLong`, langCode: e.string() };
  },
  1442983757: function (e) {
    return { _: `updateLangPack`, difference: e.object() };
  },
  3843135853: function (e) {
    return { _: `updateFavedStickers` };
  },
  636691703: function (e) {
    var t = e.uint();
    return {
      _: `updateChannelReadMessagesContents`,
      flags: t,
      channelId: e.long(),
      topMsgId: t & 1 ? e.int() : void 0,
      savedPeerId: t & 2 ? e.object() : void 0,
      messages: e.vector(e.int),
    };
  },
  1887741886: function (e) {
    return { _: `updateContactsReset` };
  },
  2990524056: function (e) {
    return {
      _: `updateChannelAvailableMessages`,
      channelId: e.long(),
      availableMinId: e.int(),
    };
  },
  3059282494: function (e) {
    var t = e.uint();
    return {
      _: `updateDialogUnreadMark`,
      flags: t,
      unread: !!(t & 1),
      peer: e.object(),
      savedPeerId: t & 2 ? e.object() : void 0,
    };
  },
  3595325995: function (e) {
    var t = e.uint();
    return {
      _: `updateMessagePoll`,
      flags: t,
      peer: t & 2 ? e.object() : void 0,
      msgId: t & 2 ? e.int() : void 0,
      topMsgId: t & 4 ? e.int() : void 0,
      pollId: e.long(),
      poll: t & 1 ? e.object() : void 0,
      results: e.object(),
    };
  },
  1421875280: function (e) {
    return {
      _: `updateChatDefaultBannedRights`,
      peer: e.object(),
      defaultBannedRights: e.object(),
      version: e.int(),
    };
  },
  422972864: function (e) {
    return {
      _: `updateFolderPeers`,
      folderPeers: e.vector(e.object),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  1786671974: function (e) {
    return { _: `updatePeerSettings`, peer: e.object(), settings: e.object() };
  },
  3031420848: function (e) {
    return { _: `updatePeerLocated`, peers: e.vector(e.object) };
  },
  967122427: function (e) {
    return { _: `updateNewScheduledMessage`, message: e.object() };
  },
  4071037315: function (e) {
    var t = e.uint();
    return {
      _: `updateDeleteScheduledMessages`,
      flags: t,
      peer: e.object(),
      messages: e.vector(e.int),
      sentMessages: t & 1 ? e.vector(e.int) : void 0,
    };
  },
  2182544291: function (e) {
    return { _: `updateTheme`, theme: e.object() };
  },
  2267003193: function (e) {
    return { _: `updateGeoLiveViewed`, peer: e.object(), msgId: e.int() };
  },
  1448076945: function (e) {
    return { _: `updateLoginToken` };
  },
  1989799956: function (e) {
    return {
      _: `updateMessagePollVote`,
      pollId: e.long(),
      peer: e.object(),
      options: e.vector(e.bytes),
      positions: e.vector(e.int),
      qts: e.int(),
    };
  },
  654302845: function (e) {
    var t = e.uint();
    return {
      _: `updateDialogFilter`,
      flags: t,
      id: e.int(),
      filter: t & 1 ? e.object() : void 0,
    };
  },
  2782339333: function (e) {
    return { _: `updateDialogFilterOrder`, order: e.vector(e.int) };
  },
  889491791: function (e) {
    return { _: `updateDialogFilters` };
  },
  643940105: function (e) {
    return {
      _: `updatePhoneCallSignalingData`,
      phoneCallId: e.long(),
      data: e.bytes(),
    };
  },
  3533318132: function (e) {
    return {
      _: `updateChannelMessageForwards`,
      channelId: e.long(),
      id: e.int(),
      forwards: e.int(),
    };
  },
  3601962310: function (e) {
    var t = e.uint();
    return {
      _: `updateReadChannelDiscussionInbox`,
      flags: t,
      channelId: e.long(),
      topMsgId: e.int(),
      readMaxId: e.int(),
      broadcastId: t & 1 ? e.long() : void 0,
      broadcastPost: t & 1 ? e.int() : void 0,
    };
  },
  1767677564: function (e) {
    return {
      _: `updateReadChannelDiscussionOutbox`,
      channelId: e.long(),
      topMsgId: e.int(),
      readMaxId: e.int(),
    };
  },
  3957356370: function (e) {
    var t = e.uint();
    return {
      _: `updatePeerBlocked`,
      flags: t,
      blocked: !!(t & 1),
      blockedMyStoriesFrom: !!(t & 2),
      peerId: e.object(),
    };
  },
  2357774627: function (e) {
    var t = e.uint();
    return {
      _: `updateChannelUserTyping`,
      flags: t,
      channelId: e.long(),
      topMsgId: t & 1 ? e.int() : void 0,
      fromId: e.object(),
      action: e.object(),
    };
  },
  3984976565: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedMessages`,
      flags: t,
      pinned: !!(t & 1),
      peer: e.object(),
      messages: e.vector(e.int),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  1538885128: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedChannelMessages`,
      flags: t,
      pinned: !!(t & 1),
      channelId: e.long(),
      messages: e.vector(e.int),
      pts: e.int(),
      ptsCount: e.int(),
    };
  },
  4170869326: function (e) {
    return { _: `updateChat`, chatId: e.long() };
  },
  4075543374: function (e) {
    return {
      _: `updateGroupCallParticipants`,
      call: e.object(),
      participants: e.vector(e.object),
      version: e.int(),
    };
  },
  2636256992: function (e) {
    var t = e.uint();
    return {
      _: `updateGroupCall`,
      flags: t,
      liveStory: !!(t & 4),
      peer: t & 2 ? e.object() : void 0,
      call: e.object(),
    };
  },
  3147544997: function (e) {
    var t = e.uint();
    return {
      _: `updatePeerHistoryTTL`,
      flags: t,
      peer: e.object(),
      ttlPeriod: t & 1 ? e.int() : void 0,
    };
  },
  3498534458: function (e) {
    var t = e.uint();
    return {
      _: `updateChatParticipant`,
      flags: t,
      chatId: e.long(),
      date: e.int(),
      actorId: e.long(),
      userId: e.long(),
      prevParticipant: t & 1 ? e.object() : void 0,
      newParticipant: t & 2 ? e.object() : void 0,
      invite: t & 4 ? e.object() : void 0,
      qts: e.int(),
    };
  },
  2556246715: function (e) {
    var t = e.uint();
    return {
      _: `updateChannelParticipant`,
      flags: t,
      viaChatlist: !!(t & 8),
      channelId: e.long(),
      date: e.int(),
      actorId: e.long(),
      userId: e.long(),
      prevParticipant: t & 1 ? e.object() : void 0,
      newParticipant: t & 2 ? e.object() : void 0,
      invite: t & 4 ? e.object() : void 0,
      qts: e.int(),
    };
  },
  3297184329: function (e) {
    return {
      _: `updateBotStopped`,
      userId: e.long(),
      date: e.int(),
      stopped: e.boolean(),
      qts: e.int(),
    };
  },
  192428418: function (e) {
    var t = e.uint();
    return {
      _: `updateGroupCallConnection`,
      flags: t,
      presentation: !!(t & 1),
      params: e.object(),
    };
  },
  1299263278: function (e) {
    return {
      _: `updateBotCommands`,
      peer: e.object(),
      botId: e.long(),
      commands: e.vector(e.object),
    };
  },
  1885586395: function (e) {
    return {
      _: `updatePendingJoinRequests`,
      peer: e.object(),
      requestsPending: e.int(),
      recentRequesters: e.vector(e.long),
    };
  },
  299870598: function (e) {
    return {
      _: `updateBotChatInviteRequester`,
      peer: e.object(),
      date: e.int(),
      userId: e.long(),
      about: e.string(),
      invite: e.object(),
      qts: e.int(),
    };
  },
  506035194: function (e) {
    var t = e.uint();
    return {
      _: `updateMessageReactions`,
      flags: t,
      peer: e.object(),
      msgId: e.int(),
      topMsgId: t & 1 ? e.int() : void 0,
      savedPeerId: t & 2 ? e.object() : void 0,
      reactions: e.object(),
    };
  },
  397910539: function (e) {
    return { _: `updateAttachMenuBots` };
  },
  361936797: function (e) {
    return { _: `updateWebViewResultSent`, queryId: e.long() };
  },
  347625491: function (e) {
    return { _: `updateBotMenuButton`, botId: e.long(), button: e.object() };
  },
  1960361625: function (e) {
    return { _: `updateSavedRingtones` };
  },
  8703322: function (e) {
    var t = e.uint();
    return {
      _: `updateTranscribedAudio`,
      flags: t,
      pending: !!(t & 1),
      peer: e.object(),
      msgId: e.int(),
      transcriptionId: e.long(),
      text: e.string(),
    };
  },
  4216080748: function (e) {
    return { _: `updateReadFeaturedEmojiStickers` };
  },
  674706841: function (e) {
    return {
      _: `updateUserEmojiStatus`,
      userId: e.long(),
      emojiStatus: e.object(),
    };
  },
  821314523: function (e) {
    return { _: `updateRecentEmojiStatuses` };
  },
  1870160884: function (e) {
    return { _: `updateRecentReactions` };
  },
  2264715141: function (e) {
    var t = e.uint();
    return {
      _: `updateMoveStickerSetToTop`,
      flags: t,
      masks: !!(t & 1),
      emojis: !!(t & 2),
      stickerset: e.long(),
    };
  },
  3584300836: function (e) {
    return {
      _: `updateMessageExtendedMedia`,
      peer: e.object(),
      msgId: e.int(),
      extendedMedia: e.vector(e.object),
    };
  },
  542282808: function (e) {
    return { _: `updateUser`, userId: e.long() };
  },
  3959795863: function (e) {
    return { _: `updateAutoSaveSettings` };
  },
  1974712216: function (e) {
    return { _: `updateStory`, peer: e.object(), story: e.object() };
  },
  4149121835: function (e) {
    return { _: `updateReadStories`, peer: e.object(), maxId: e.int() };
  },
  468923833: function (e) {
    return { _: `updateStoryID`, id: e.int(), randomId: e.long() };
  },
  738741697: function (e) {
    return { _: `updateStoriesStealthMode`, stealthMode: e.object() };
  },
  2103604867: function (e) {
    return {
      _: `updateSentStoryReaction`,
      peer: e.object(),
      storyId: e.int(),
      reaction: e.object(),
    };
  },
  2421019804: function (e) {
    return {
      _: `updateBotChatBoost`,
      peer: e.object(),
      boost: e.object(),
      qts: e.int(),
    };
  },
  129403168: function (e) {
    return {
      _: `updateChannelViewForumAsMessages`,
      channelId: e.long(),
      enabled: e.boolean(),
    };
  },
  2923368477: function (e) {
    var t = e.uint();
    return {
      _: `updatePeerWallpaper`,
      flags: t,
      wallpaperOverridden: !!(t & 2),
      peer: e.object(),
      wallpaper: t & 1 ? e.object() : void 0,
    };
  },
  2887898062: function (e) {
    return {
      _: `updateBotMessageReaction`,
      peer: e.object(),
      msgId: e.int(),
      date: e.int(),
      actor: e.object(),
      oldReactions: e.vector(e.object),
      newReactions: e.vector(e.object),
      qts: e.int(),
    };
  },
  164329305: function (e) {
    return {
      _: `updateBotMessageReactions`,
      peer: e.object(),
      msgId: e.int(),
      date: e.int(),
      reactions: e.vector(e.object),
      qts: e.int(),
    };
  },
  2930744948: function (e) {
    var t = e.uint();
    return {
      _: `updateSavedDialogPinned`,
      flags: t,
      pinned: !!(t & 1),
      peer: e.object(),
    };
  },
  1751942566: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedSavedDialogs`,
      flags: t,
      order: t & 1 ? e.vector(e.object) : void 0,
    };
  },
  969307186: function (e) {
    return { _: `updateSavedReactionTags` };
  },
  4049758676: function (e) {
    return { _: `updateSmsJob`, jobId: e.string() };
  },
  4182182578: function (e) {
    return { _: `updateQuickReplies`, quickReplies: e.vector(e.object) };
  },
  4114458391: function (e) {
    return { _: `updateNewQuickReply`, quickReply: e.object() };
  },
  1407644140: function (e) {
    return { _: `updateDeleteQuickReply`, shortcutId: e.int() };
  },
  1040518415: function (e) {
    return { _: `updateQuickReplyMessage`, message: e.object() };
  },
  1450174413: function (e) {
    return {
      _: `updateDeleteQuickReplyMessages`,
      shortcutId: e.int(),
      messages: e.vector(e.int),
    };
  },
  2330315130: function (e) {
    return {
      _: `updateBotBusinessConnect`,
      connection: e.object(),
      qts: e.int(),
    };
  },
  2648388732: function (e) {
    var t = e.uint();
    return {
      _: `updateBotNewBusinessMessage`,
      flags: t,
      connectionId: e.string(),
      message: e.object(),
      replyToMessage: t & 1 ? e.object() : void 0,
      qts: e.int(),
    };
  },
  132077692: function (e) {
    var t = e.uint();
    return {
      _: `updateBotEditBusinessMessage`,
      flags: t,
      connectionId: e.string(),
      message: e.object(),
      replyToMessage: t & 1 ? e.object() : void 0,
      qts: e.int(),
    };
  },
  2687146030: function (e) {
    return {
      _: `updateBotDeleteBusinessMessage`,
      connectionId: e.string(),
      peer: e.object(),
      messages: e.vector(e.int),
      qts: e.int(),
    };
  },
  405070859: function (e) {
    return {
      _: `updateNewStoryReaction`,
      storyId: e.int(),
      peer: e.object(),
      reaction: e.object(),
    };
  },
  1317053305: function (e) {
    return { _: `updateStarsBalance`, balance: e.object() };
  },
  513998247: function (e) {
    var t = e.uint();
    return {
      _: `updateBusinessBotCallbackQuery`,
      flags: t,
      queryId: e.long(),
      userId: e.long(),
      connectionId: e.string(),
      message: e.object(),
      replyToMessage: t & 4 ? e.object() : void 0,
      chatInstance: e.long(),
      data: t & 1 ? e.bytes() : void 0,
    };
  },
  2776936473: function (e) {
    return {
      _: `updateStarsRevenueStatus`,
      peer: e.object(),
      status: e.object(),
    };
  },
  675009298: function (e) {
    return {
      _: `updateBotPurchasedPaidMedia`,
      userId: e.long(),
      payload: e.string(),
      qts: e.int(),
    };
  },
  2339528654: function (e) {
    return { _: `updatePaidReactionPrivacy`, private: e.object() };
  },
  1347068303: function (e) {
    return { _: `updateSentPhoneCode`, sentCode: e.object() };
  },
  2759272591: function (e) {
    return {
      _: `updateGroupCallChainBlocks`,
      call: e.object(),
      subChainId: e.int(),
      blocks: e.vector(e.bytes),
      nextOffset: e.int(),
    };
  },
  2008081266: function (e) {
    return {
      _: `updateReadMonoForumInbox`,
      channelId: e.long(),
      savedPeerId: e.object(),
      readMaxId: e.int(),
    };
  },
  2762445686: function (e) {
    return {
      _: `updateReadMonoForumOutbox`,
      channelId: e.long(),
      savedPeerId: e.object(),
      readMaxId: e.int(),
    };
  },
  2676042504: function (e) {
    var t = e.uint();
    return {
      _: `updateMonoForumNoPaidException`,
      flags: t,
      exception: !!(t & 1),
      channelId: e.long(),
      savedPeerId: e.object(),
    };
  },
  3627183885: function (e) {
    return {
      _: `updateGroupCallMessage`,
      call: e.object(),
      message: e.object(),
    };
  },
  3377964902: function (e) {
    return {
      _: `updateGroupCallEncryptedMessage`,
      call: e.object(),
      fromId: e.object(),
      encryptedMessage: e.bytes(),
    };
  },
  1748708434: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedForumTopic`,
      flags: t,
      pinned: !!(t & 1),
      peer: e.object(),
      topicId: e.int(),
    };
  },
  3740353488: function (e) {
    var t = e.uint();
    return {
      _: `updatePinnedForumTopics`,
      flags: t,
      peer: e.object(),
      order: t & 1 ? e.vector(e.int) : void 0,
    };
  },
  1048963372: function (e) {
    return {
      _: `updateDeleteGroupCallMessages`,
      call: e.object(),
      messages: e.vector(e.int),
    };
  },
  1222788802: function (e) {
    return {
      _: `updateStarGiftAuctionState`,
      giftId: e.long(),
      state: e.object(),
    };
  },
  3696816926: function (e) {
    return {
      _: `updateStarGiftAuctionUserState`,
      giftId: e.long(),
      userState: e.object(),
    };
  },
  4221326458: function (e) {
    return { _: `updateEmojiGameInfo`, info: e.object() };
  },
  2886149188: function (e) {
    return { _: `updateStarGiftCraftFail` };
  },
  3179505593: function (e) {
    return {
      _: `updateChatParticipantRank`,
      chatId: e.long(),
      userId: e.long(),
      rank: e.string(),
      version: e.int(),
    };
  },
  1216408986: function (e) {
    return {
      _: `updateManagedBot`,
      userId: e.long(),
      botId: e.long(),
      qts: e.int(),
    };
  },
  2775329342: function (e) {
    return {
      _: `updates.state`,
      pts: e.int(),
      qts: e.int(),
      date: e.int(),
      seq: e.int(),
      unreadCount: e.int(),
    };
  },
  1567990072: function (e) {
    return { _: `updates.differenceEmpty`, date: e.int(), seq: e.int() };
  },
  16030880: function (e) {
    return {
      _: `updates.difference`,
      newMessages: e.vector(e.object),
      newEncryptedMessages: e.vector(e.object),
      otherUpdates: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      state: e.object(),
    };
  },
  2835028353: function (e) {
    return {
      _: `updates.differenceSlice`,
      newMessages: e.vector(e.object),
      newEncryptedMessages: e.vector(e.object),
      otherUpdates: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      intermediateState: e.object(),
    };
  },
  1258196845: function (e) {
    return { _: `updates.differenceTooLong`, pts: e.int() };
  },
  3809980286: function (e) {
    return { _: `updatesTooLong` };
  },
  826001400: function (e) {
    var t = e.uint();
    return {
      _: `updateShortMessage`,
      flags: t,
      out: !!(t & 2),
      mentioned: !!(t & 16),
      mediaUnread: !!(t & 32),
      silent: !!(t & 8192),
      id: e.int(),
      userId: e.long(),
      message: e.string(),
      pts: e.int(),
      ptsCount: e.int(),
      date: e.int(),
      fwdFrom: t & 4 ? e.object() : void 0,
      viaBotId: t & 2048 ? e.long() : void 0,
      replyTo: t & 8 ? e.object() : void 0,
      entities: t & 128 ? e.vector(e.object) : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
    };
  },
  1299050149: function (e) {
    var t = e.uint();
    return {
      _: `updateShortChatMessage`,
      flags: t,
      out: !!(t & 2),
      mentioned: !!(t & 16),
      mediaUnread: !!(t & 32),
      silent: !!(t & 8192),
      id: e.int(),
      fromId: e.long(),
      chatId: e.long(),
      message: e.string(),
      pts: e.int(),
      ptsCount: e.int(),
      date: e.int(),
      fwdFrom: t & 4 ? e.object() : void 0,
      viaBotId: t & 2048 ? e.long() : void 0,
      replyTo: t & 8 ? e.object() : void 0,
      entities: t & 128 ? e.vector(e.object) : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
    };
  },
  2027216577: function (e) {
    return { _: `updateShort`, update: e.object(), date: e.int() };
  },
  1918567619: function (e) {
    return {
      _: `updatesCombined`,
      updates: e.vector(e.object),
      users: e.vector(e.object),
      chats: e.vector(e.object),
      date: e.int(),
      seqStart: e.int(),
      seq: e.int(),
    };
  },
  1957577280: function (e) {
    return {
      _: `updates`,
      updates: e.vector(e.object),
      users: e.vector(e.object),
      chats: e.vector(e.object),
      date: e.int(),
      seq: e.int(),
    };
  },
  2417352961: function (e) {
    var t = e.uint();
    return {
      _: `updateShortSentMessage`,
      flags: t,
      out: !!(t & 2),
      id: e.int(),
      pts: e.int(),
      ptsCount: e.int(),
      date: e.int(),
      media: t & 512 ? e.object() : void 0,
      entities: t & 128 ? e.vector(e.object) : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
    };
  },
  2378853029: function (e) {
    return {
      _: `photos.photos`,
      photos: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  352657236: function (e) {
    return {
      _: `photos.photosSlice`,
      count: e.int(),
      photos: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  539045032: function (e) {
    return { _: `photos.photo`, photo: e.object(), users: e.vector(e.object) };
  },
  157948117: function (e) {
    return {
      _: `upload.file`,
      type: e.object(),
      mtime: e.int(),
      bytes: e.bytes(),
    };
  },
  4052539972: function (e) {
    return {
      _: `upload.fileCdnRedirect`,
      dcId: e.int(),
      fileToken: e.bytes(),
      encryptionKey: e.bytes(),
      encryptionIv: e.bytes(),
      fileHashes: e.vector(e.object),
    };
  },
  414687501: function (e) {
    var t = e.uint();
    return {
      _: `dcOption`,
      flags: t,
      ipv6: !!(t & 1),
      mediaOnly: !!(t & 2),
      tcpoOnly: !!(t & 4),
      cdn: !!(t & 8),
      static: !!(t & 16),
      thisPortOnly: !!(t & 32),
      id: e.int(),
      ipAddress: e.string(),
      port: e.int(),
      secret: t & 1024 ? e.bytes() : void 0,
    };
  },
  3424265246: function (e) {
    var t = e.uint();
    return {
      _: `config`,
      flags: t,
      defaultP2pContacts: !!(t & 8),
      preloadFeaturedStickers: !!(t & 16),
      revokePmInbox: !!(t & 64),
      blockedMode: !!(t & 256),
      forceTryIpv6: !!(t & 16384),
      date: e.int(),
      expires: e.int(),
      testMode: e.boolean(),
      thisDc: e.int(),
      dcOptions: e.vector(e.object),
      dcTxtDomainName: e.string(),
      chatSizeMax: e.int(),
      megagroupSizeMax: e.int(),
      forwardedCountMax: e.int(),
      onlineUpdatePeriodMs: e.int(),
      offlineBlurTimeoutMs: e.int(),
      offlineIdleTimeoutMs: e.int(),
      onlineCloudTimeoutMs: e.int(),
      notifyCloudDelayMs: e.int(),
      notifyDefaultDelayMs: e.int(),
      pushChatPeriodMs: e.int(),
      pushChatLimit: e.int(),
      editTimeLimit: e.int(),
      revokeTimeLimit: e.int(),
      revokePmTimeLimit: e.int(),
      ratingEDecay: e.int(),
      stickersRecentLimit: e.int(),
      channelsReadMediaPeriod: e.int(),
      tmpSessions: t & 1 ? e.int() : void 0,
      callReceiveTimeoutMs: e.int(),
      callRingTimeoutMs: e.int(),
      callConnectTimeoutMs: e.int(),
      callPacketTimeoutMs: e.int(),
      meUrlPrefix: e.string(),
      autoupdateUrlPrefix: t & 128 ? e.string() : void 0,
      gifSearchUsername: t & 512 ? e.string() : void 0,
      venueSearchUsername: t & 1024 ? e.string() : void 0,
      imgSearchUsername: t & 2048 ? e.string() : void 0,
      staticMapsProvider: t & 4096 ? e.string() : void 0,
      captionLengthMax: e.int(),
      messageLengthMax: e.int(),
      webfileDcId: e.int(),
      suggestedLangCode: t & 4 ? e.string() : void 0,
      langPackVersion: t & 4 ? e.int() : void 0,
      baseLangPackVersion: t & 4 ? e.int() : void 0,
      reactionsDefault: t & 32768 ? e.object() : void 0,
      autologinToken: t & 65536 ? e.string() : void 0,
    };
  },
  2384074613: function (e) {
    return {
      _: `nearestDc`,
      country: e.string(),
      thisDc: e.int(),
      nearestDc: e.int(),
    };
  },
  3434860080: function (e) {
    var t = e.uint();
    return {
      _: `help.appUpdate`,
      flags: t,
      canNotSkip: !!(t & 1),
      id: e.int(),
      version: e.string(),
      text: e.string(),
      entities: e.vector(e.object),
      document: t & 2 ? e.object() : void 0,
      url: t & 4 ? e.string() : void 0,
      sticker: t & 8 ? e.object() : void 0,
    };
  },
  3294258486: function (e) {
    return { _: `help.noAppUpdate` };
  },
  415997816: function (e) {
    return { _: `help.inviteText`, message: e.string() };
  },
  2877210784: function (e) {
    return { _: `encryptedChatEmpty`, id: e.int() };
  },
  1722964307: function (e) {
    return {
      _: `encryptedChatWaiting`,
      id: e.int(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
    };
  },
  1223809356: function (e) {
    var t = e.uint();
    return {
      _: `encryptedChatRequested`,
      flags: t,
      folderId: t & 1 ? e.int() : void 0,
      id: e.int(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      gA: e.bytes(),
    };
  },
  1643173063: function (e) {
    return {
      _: `encryptedChat`,
      id: e.int(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      gAOrB: e.bytes(),
      keyFingerprint: e.long(),
    };
  },
  505183301: function (e) {
    var t = e.uint();
    return {
      _: `encryptedChatDiscarded`,
      flags: t,
      historyDeleted: !!(t & 1),
      id: e.int(),
    };
  },
  4047615457: function (e) {
    return { _: `inputEncryptedChat`, chatId: e.int(), accessHash: e.long() };
  },
  3256830334: function (e) {
    return { _: `encryptedFileEmpty` };
  },
  2818608344: function (e) {
    return {
      _: `encryptedFile`,
      id: e.long(),
      accessHash: e.long(),
      size: e.long(),
      dcId: e.int(),
      keyFingerprint: e.int(),
    };
  },
  406307684: function (e) {
    return { _: `inputEncryptedFileEmpty` };
  },
  1690108678: function (e) {
    return {
      _: `inputEncryptedFileUploaded`,
      id: e.long(),
      parts: e.int(),
      md5Checksum: e.string(),
      keyFingerprint: e.int(),
    };
  },
  1511503333: function (e) {
    return { _: `inputEncryptedFile`, id: e.long(), accessHash: e.long() };
  },
  767652808: function (e) {
    return {
      _: `inputEncryptedFileBigUploaded`,
      id: e.long(),
      parts: e.int(),
      keyFingerprint: e.int(),
    };
  },
  3977822488: function (e) {
    return {
      _: `encryptedMessage`,
      randomId: e.long(),
      chatId: e.int(),
      date: e.int(),
      bytes: e.bytes(),
      file: e.object(),
    };
  },
  594758406: function (e) {
    return {
      _: `encryptedMessageService`,
      randomId: e.long(),
      chatId: e.int(),
      date: e.int(),
      bytes: e.bytes(),
    };
  },
  3236054581: function (e) {
    return { _: `messages.dhConfigNotModified`, random: e.bytes() };
  },
  740433629: function (e) {
    return {
      _: `messages.dhConfig`,
      g: e.int(),
      p: e.bytes(),
      version: e.int(),
      random: e.bytes(),
    };
  },
  1443858741: function (e) {
    return { _: `messages.sentEncryptedMessage`, date: e.int() };
  },
  2492727090: function (e) {
    return { _: `messages.sentEncryptedFile`, date: e.int(), file: e.object() };
  },
  1928391342: function (e) {
    return { _: `inputDocumentEmpty` };
  },
  448771445: function (e) {
    return {
      _: `inputDocument`,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
    };
  },
  922273905: function (e) {
    return { _: `documentEmpty`, id: e.long() };
  },
  2413085912: function (e) {
    var t = e.uint();
    return {
      _: `document`,
      flags: t,
      id: e.long(),
      accessHash: e.long(),
      fileReference: e.bytes(),
      date: e.int(),
      mimeType: e.string(),
      size: e.long(),
      thumbs: t & 1 ? e.vector(e.object) : void 0,
      videoThumbs: t & 2 ? e.vector(e.object) : void 0,
      dcId: e.int(),
      attributes: e.vector(e.object),
    };
  },
  398898678: function (e) {
    return { _: `help.support`, phoneNumber: e.string(), user: e.object() };
  },
  2681474008: function (e) {
    return { _: `notifyPeer`, peer: e.object() };
  },
  3033021260: function (e) {
    return { _: `notifyUsers` };
  },
  3221737155: function (e) {
    return { _: `notifyChats` };
  },
  3591563503: function (e) {
    return { _: `notifyBroadcasts` };
  },
  577659656: function (e) {
    return { _: `notifyForumTopic`, peer: e.object(), topMsgId: e.int() };
  },
  381645902: function (e) {
    return { _: `sendMessageTypingAction` };
  },
  4250847477: function (e) {
    return { _: `sendMessageCancelAction` };
  },
  2710034031: function (e) {
    return { _: `sendMessageRecordVideoAction` };
  },
  3916839660: function (e) {
    return { _: `sendMessageUploadVideoAction`, progress: e.int() };
  },
  3576656887: function (e) {
    return { _: `sendMessageRecordAudioAction` };
  },
  4082227115: function (e) {
    return { _: `sendMessageUploadAudioAction`, progress: e.int() };
  },
  3520285222: function (e) {
    return { _: `sendMessageUploadPhotoAction`, progress: e.int() };
  },
  2852968932: function (e) {
    return { _: `sendMessageUploadDocumentAction`, progress: e.int() };
  },
  393186209: function (e) {
    return { _: `sendMessageGeoLocationAction` };
  },
  1653390447: function (e) {
    return { _: `sendMessageChooseContactAction` };
  },
  3714748232: function (e) {
    return { _: `sendMessageGamePlayAction` };
  },
  2297593788: function (e) {
    return { _: `sendMessageRecordRoundAction` };
  },
  608050278: function (e) {
    return { _: `sendMessageUploadRoundAction`, progress: e.int() };
  },
  3643548293: function (e) {
    return { _: `speakingInGroupCallAction` };
  },
  3688534598: function (e) {
    return { _: `sendMessageHistoryImportAction`, progress: e.int() };
  },
  2958739121: function (e) {
    return { _: `sendMessageChooseStickerAction` };
  },
  630664139: function (e) {
    return {
      _: `sendMessageEmojiInteraction`,
      emoticon: e.string(),
      msgId: e.int(),
      interaction: e.object(),
    };
  },
  3060109358: function (e) {
    return { _: `sendMessageEmojiInteractionSeen`, emoticon: e.string() };
  },
  929929052: function (e) {
    return {
      _: `sendMessageTextDraftAction`,
      randomId: e.long(),
      text: e.object(),
    };
  },
  3004386717: function (e) {
    return {
      _: `contacts.found`,
      myResults: e.vector(e.object),
      results: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1335282456: function (e) {
    return { _: `inputPrivacyKeyStatusTimestamp` };
  },
  3187344422: function (e) {
    return { _: `inputPrivacyKeyChatInvite` };
  },
  4206550111: function (e) {
    return { _: `inputPrivacyKeyPhoneCall` };
  },
  3684593874: function (e) {
    return { _: `inputPrivacyKeyPhoneP2P` };
  },
  2765966344: function (e) {
    return { _: `inputPrivacyKeyForwards` };
  },
  1461304012: function (e) {
    return { _: `inputPrivacyKeyProfilePhoto` };
  },
  55761658: function (e) {
    return { _: `inputPrivacyKeyPhoneNumber` };
  },
  3508640733: function (e) {
    return { _: `inputPrivacyKeyAddedByPhone` };
  },
  2934349160: function (e) {
    return { _: `inputPrivacyKeyVoiceMessages` };
  },
  941870144: function (e) {
    return { _: `inputPrivacyKeyAbout` };
  },
  3596227020: function (e) {
    return { _: `inputPrivacyKeyBirthday` };
  },
  3782419265: function (e) {
    return { _: `inputPrivacyKeyStarGiftsAutoSave` };
  },
  3183843252: function (e) {
    return { _: `inputPrivacyKeyNoPaidMessages` };
  },
  1304334886: function (e) {
    return { _: `inputPrivacyKeySavedMusic` };
  },
  3157175088: function (e) {
    return { _: `privacyKeyStatusTimestamp` };
  },
  1343122938: function (e) {
    return { _: `privacyKeyChatInvite` };
  },
  1030105979: function (e) {
    return { _: `privacyKeyPhoneCall` };
  },
  961092808: function (e) {
    return { _: `privacyKeyPhoneP2P` };
  },
  1777096355: function (e) {
    return { _: `privacyKeyForwards` };
  },
  2517966829: function (e) {
    return { _: `privacyKeyProfilePhoto` };
  },
  3516589165: function (e) {
    return { _: `privacyKeyPhoneNumber` };
  },
  1124062251: function (e) {
    return { _: `privacyKeyAddedByPhone` };
  },
  110621716: function (e) {
    return { _: `privacyKeyVoiceMessages` };
  },
  2760292193: function (e) {
    return { _: `privacyKeyAbout` };
  },
  536913176: function (e) {
    return { _: `privacyKeyBirthday` };
  },
  749010424: function (e) {
    return { _: `privacyKeyStarGiftsAutoSave` };
  },
  399722706: function (e) {
    return { _: `privacyKeyNoPaidMessages` };
  },
  4286207771: function (e) {
    return { _: `privacyKeySavedMusic` };
  },
  218751099: function (e) {
    return { _: `inputPrivacyValueAllowContacts` };
  },
  407582158: function (e) {
    return { _: `inputPrivacyValueAllowAll` };
  },
  320652927: function (e) {
    return { _: `inputPrivacyValueAllowUsers`, users: e.vector(e.object) };
  },
  195371015: function (e) {
    return { _: `inputPrivacyValueDisallowContacts` };
  },
  3597362889: function (e) {
    return { _: `inputPrivacyValueDisallowAll` };
  },
  2417034343: function (e) {
    return { _: `inputPrivacyValueDisallowUsers`, users: e.vector(e.object) };
  },
  2215004623: function (e) {
    return {
      _: `inputPrivacyValueAllowChatParticipants`,
      chats: e.vector(e.long),
    };
  },
  3914272646: function (e) {
    return {
      _: `inputPrivacyValueDisallowChatParticipants`,
      chats: e.vector(e.long),
    };
  },
  793067081: function (e) {
    return { _: `inputPrivacyValueAllowCloseFriends` };
  },
  2009975281: function (e) {
    return { _: `inputPrivacyValueAllowPremium` };
  },
  1515179237: function (e) {
    return { _: `inputPrivacyValueAllowBots` };
  },
  3303373077: function (e) {
    return { _: `inputPrivacyValueDisallowBots` };
  },
  4294843308: function (e) {
    return { _: `privacyValueAllowContacts` };
  },
  1698855810: function (e) {
    return { _: `privacyValueAllowAll` };
  },
  3096469426: function (e) {
    return { _: `privacyValueAllowUsers`, users: e.vector(e.long) };
  },
  4169726490: function (e) {
    return { _: `privacyValueDisallowContacts` };
  },
  2339628899: function (e) {
    return { _: `privacyValueDisallowAll` };
  },
  3831632193: function (e) {
    return { _: `privacyValueDisallowUsers`, users: e.vector(e.long) };
  },
  1796427406: function (e) {
    return { _: `privacyValueAllowChatParticipants`, chats: e.vector(e.long) };
  },
  1103656293: function (e) {
    return {
      _: `privacyValueDisallowChatParticipants`,
      chats: e.vector(e.long),
    };
  },
  4159232155: function (e) {
    return { _: `privacyValueAllowCloseFriends` };
  },
  3974725963: function (e) {
    return { _: `privacyValueAllowPremium` };
  },
  558242653: function (e) {
    return { _: `privacyValueAllowBots` };
  },
  4138072111: function (e) {
    return { _: `privacyValueDisallowBots` };
  },
  1352683077: function (e) {
    return {
      _: `account.privacyRules`,
      rules: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3100684255: function (e) {
    return { _: `accountDaysTTL`, days: e.int() };
  },
  1815593308: function (e) {
    return { _: `documentAttributeImageSize`, w: e.int(), h: e.int() };
  },
  297109817: function (e) {
    return { _: `documentAttributeAnimated` };
  },
  1662637586: function (e) {
    var t = e.uint();
    return {
      _: `documentAttributeSticker`,
      flags: t,
      mask: !!(t & 2),
      alt: e.string(),
      stickerset: e.object(),
      maskCoords: t & 1 ? e.object() : void 0,
    };
  },
  1137015880: function (e) {
    var t = e.uint();
    return {
      _: `documentAttributeVideo`,
      flags: t,
      roundMessage: !!(t & 1),
      supportsStreaming: !!(t & 2),
      nosound: !!(t & 8),
      duration: e.double(),
      w: e.int(),
      h: e.int(),
      preloadPrefixSize: t & 4 ? e.int() : void 0,
      videoStartTs: t & 16 ? e.double() : void 0,
      videoCodec: t & 32 ? e.string() : void 0,
    };
  },
  2555574726: function (e) {
    var t = e.uint();
    return {
      _: `documentAttributeAudio`,
      flags: t,
      voice: !!(t & 1024),
      duration: e.int(),
      title: t & 1 ? e.string() : void 0,
      performer: t & 2 ? e.string() : void 0,
      waveform: t & 4 ? e.bytes() : void 0,
    };
  },
  358154344: function (e) {
    return { _: `documentAttributeFilename`, fileName: e.string() };
  },
  2550256375: function (e) {
    return { _: `documentAttributeHasStickers` };
  },
  4245985433: function (e) {
    var t = e.uint();
    return {
      _: `documentAttributeCustomEmoji`,
      flags: t,
      free: !!(t & 1),
      textColor: !!(t & 2),
      alt: e.string(),
      stickerset: e.object(),
    };
  },
  4050950690: function (e) {
    return { _: `messages.stickersNotModified` };
  },
  816245886: function (e) {
    return {
      _: `messages.stickers`,
      hash: e.long(),
      stickers: e.vector(e.object),
    };
  },
  313694676: function (e) {
    return {
      _: `stickerPack`,
      emoticon: e.string(),
      documents: e.vector(e.long),
    };
  },
  3898999491: function (e) {
    return { _: `messages.allStickersNotModified` };
  },
  3451637435: function (e) {
    return {
      _: `messages.allStickers`,
      hash: e.long(),
      sets: e.vector(e.object),
    };
  },
  2228326789: function (e) {
    return { _: `messages.affectedMessages`, pts: e.int(), ptsCount: e.int() };
  },
  555358088: function (e) {
    var t = e.uint();
    return {
      _: `webPageEmpty`,
      flags: t,
      id: e.long(),
      url: t & 1 ? e.string() : void 0,
    };
  },
  2966502983: function (e) {
    var t = e.uint();
    return {
      _: `webPagePending`,
      flags: t,
      id: e.long(),
      url: t & 1 ? e.string() : void 0,
      date: e.int(),
    };
  },
  3902555570: function (e) {
    var t = e.uint();
    return {
      _: `webPage`,
      flags: t,
      hasLargeMedia: !!(t & 8192),
      videoCoverPhoto: !!(t & 16384),
      id: e.long(),
      url: e.string(),
      displayUrl: e.string(),
      hash: e.int(),
      type: t & 1 ? e.string() : void 0,
      siteName: t & 2 ? e.string() : void 0,
      title: t & 4 ? e.string() : void 0,
      description: t & 8 ? e.string() : void 0,
      photo: t & 16 ? e.object() : void 0,
      embedUrl: t & 32 ? e.string() : void 0,
      embedType: t & 32 ? e.string() : void 0,
      embedWidth: t & 64 ? e.int() : void 0,
      embedHeight: t & 64 ? e.int() : void 0,
      duration: t & 128 ? e.int() : void 0,
      author: t & 256 ? e.string() : void 0,
      document: t & 512 ? e.object() : void 0,
      cachedPage: t & 1024 ? e.object() : void 0,
      attributes: t & 4096 ? e.vector(e.object) : void 0,
    };
  },
  1930545681: function (e) {
    var t = e.uint();
    return {
      _: `webPageNotModified`,
      flags: t,
      cachedPageViews: t & 1 ? e.int() : void 0,
    };
  },
  2902578717: function (e) {
    var t = e.uint();
    return {
      _: `authorization`,
      flags: t,
      current: !!(t & 1),
      officialApp: !!(t & 2),
      passwordPending: !!(t & 4),
      encryptedRequestsDisabled: !!(t & 8),
      callRequestsDisabled: !!(t & 16),
      unconfirmed: !!(t & 32),
      hash: e.long(),
      deviceModel: e.string(),
      platform: e.string(),
      systemVersion: e.string(),
      apiId: e.int(),
      appName: e.string(),
      appVersion: e.string(),
      dateCreated: e.int(),
      dateActive: e.int(),
      ip: e.string(),
      country: e.string(),
      region: e.string(),
    };
  },
  1275039392: function (e) {
    return {
      _: `account.authorizations`,
      authorizationTtlDays: e.int(),
      authorizations: e.vector(e.object),
    };
  },
  2507886843: function (e) {
    var t = e.uint();
    return {
      _: `account.password`,
      flags: t,
      hasRecovery: !!(t & 1),
      hasSecureValues: !!(t & 2),
      hasPassword: !!(t & 4),
      currentAlgo: t & 4 ? e.object() : void 0,
      srpB: t & 4 ? e.bytes() : void 0,
      srpId: t & 4 ? e.long() : void 0,
      hint: t & 8 ? e.string() : void 0,
      emailUnconfirmedPattern: t & 16 ? e.string() : void 0,
      newAlgo: e.object(),
      newSecureAlgo: e.object(),
      secureRandom: e.bytes(),
      pendingResetDate: t & 32 ? e.int() : void 0,
      loginEmailPattern: t & 64 ? e.string() : void 0,
    };
  },
  2589733861: function (e) {
    var t = e.uint();
    return {
      _: `account.passwordSettings`,
      flags: t,
      email: t & 1 ? e.string() : void 0,
      secureSettings: t & 2 ? e.object() : void 0,
    };
  },
  3258394569: function (e) {
    var t = e.uint();
    return {
      _: `account.passwordInputSettings`,
      flags: t,
      newAlgo: t & 1 ? e.object() : void 0,
      newPasswordHash: t & 1 ? e.bytes() : void 0,
      hint: t & 1 ? e.string() : void 0,
      email: t & 2 ? e.string() : void 0,
      newSecureSettings: t & 4 ? e.object() : void 0,
    };
  },
  326715557: function (e) {
    return { _: `auth.passwordRecovery`, emailPattern: e.string() };
  },
  2743383929: function (e) {
    return { _: `receivedNotifyMessage`, id: e.int(), flags: e.int() };
  },
  2720841110: function (e) {
    var t = e.uint();
    return {
      _: `chatInviteExported`,
      flags: t,
      revoked: !!(t & 1),
      permanent: !!(t & 32),
      requestNeeded: !!(t & 64),
      link: e.string(),
      adminId: e.long(),
      date: e.int(),
      startDate: t & 16 ? e.int() : void 0,
      expireDate: t & 2 ? e.int() : void 0,
      usageLimit: t & 4 ? e.int() : void 0,
      usage: t & 8 ? e.int() : void 0,
      requested: t & 128 ? e.int() : void 0,
      subscriptionExpired: t & 1024 ? e.int() : void 0,
      title: t & 256 ? e.string() : void 0,
      subscriptionPricing: t & 512 ? e.object() : void 0,
    };
  },
  3977280183: function (e) {
    return { _: `chatInvitePublicJoinRequests` };
  },
  1516793212: function (e) {
    return { _: `chatInviteAlready`, chat: e.object() };
  },
  1553807106: function (e) {
    var t = e.uint();
    return {
      _: `chatInvite`,
      flags: t,
      channel: !!(t & 1),
      broadcast: !!(t & 2),
      public: !!(t & 4),
      megagroup: !!(t & 8),
      requestNeeded: !!(t & 64),
      verified: !!(t & 128),
      scam: !!(t & 256),
      fake: !!(t & 512),
      canRefulfillSubscription: !!(t & 2048),
      title: e.string(),
      about: t & 32 ? e.string() : void 0,
      photo: e.object(),
      participantsCount: e.int(),
      participants: t & 16 ? e.vector(e.object) : void 0,
      color: e.int(),
      subscriptionPricing: t & 1024 ? e.object() : void 0,
      subscriptionFormId: t & 4096 ? e.long() : void 0,
      botVerification: t & 8192 ? e.object() : void 0,
    };
  },
  1634294960: function (e) {
    return { _: `chatInvitePeek`, chat: e.object(), expires: e.int() };
  },
  4290128789: function (e) {
    return { _: `inputStickerSetEmpty` };
  },
  2649203305: function (e) {
    return { _: `inputStickerSetID`, id: e.long(), accessHash: e.long() };
  },
  2250033312: function (e) {
    return { _: `inputStickerSetShortName`, shortName: e.string() };
  },
  42402760: function (e) {
    return { _: `inputStickerSetAnimatedEmoji` };
  },
  3867103758: function (e) {
    return { _: `inputStickerSetDice`, emoticon: e.string() };
  },
  215889721: function (e) {
    return { _: `inputStickerSetAnimatedEmojiAnimations` };
  },
  3364567810: function (e) {
    return { _: `inputStickerSetPremiumGifts` };
  },
  80008398: function (e) {
    return { _: `inputStickerSetEmojiGenericAnimations` };
  },
  701560302: function (e) {
    return { _: `inputStickerSetEmojiDefaultStatuses` };
  },
  1153562857: function (e) {
    return { _: `inputStickerSetEmojiDefaultTopicIcons` };
  },
  1232373075: function (e) {
    return { _: `inputStickerSetEmojiChannelDefaultStatuses` };
  },
  485912992: function (e) {
    return { _: `inputStickerSetTonGifts` };
  },
  768691932: function (e) {
    var t = e.uint();
    return {
      _: `stickerSet`,
      flags: t,
      archived: !!(t & 2),
      official: !!(t & 4),
      masks: !!(t & 8),
      emojis: !!(t & 128),
      textColor: !!(t & 512),
      channelEmojiStatus: !!(t & 1024),
      creator: !!(t & 2048),
      installedDate: t & 1 ? e.int() : void 0,
      id: e.long(),
      accessHash: e.long(),
      title: e.string(),
      shortName: e.string(),
      thumbs: t & 16 ? e.vector(e.object) : void 0,
      thumbDcId: t & 16 ? e.int() : void 0,
      thumbVersion: t & 16 ? e.int() : void 0,
      thumbDocumentId: t & 256 ? e.long() : void 0,
      count: e.int(),
      hash: e.int(),
    };
  },
  1846886166: function (e) {
    return {
      _: `messages.stickerSet`,
      set: e.object(),
      packs: e.vector(e.object),
      keywords: e.vector(e.object),
      documents: e.vector(e.object),
    };
  },
  3556320491: function (e) {
    return { _: `messages.stickerSetNotModified` };
  },
  3262826695: function (e) {
    return { _: `botCommand`, command: e.string(), description: e.string() };
  },
  1300890265: function (e) {
    var t = e.uint();
    return {
      _: `botInfo`,
      flags: t,
      hasPreviewMedias: !!(t & 64),
      userId: t & 1 ? e.long() : void 0,
      description: t & 2 ? e.string() : void 0,
      descriptionPhoto: t & 16 ? e.object() : void 0,
      descriptionDocument: t & 32 ? e.object() : void 0,
      commands: t & 4 ? e.vector(e.object) : void 0,
      menuButton: t & 8 ? e.object() : void 0,
      privacyPolicyUrl: t & 128 ? e.string() : void 0,
      appSettings: t & 256 ? e.object() : void 0,
      verifierSettings: t & 512 ? e.object() : void 0,
    };
  },
  2098662655: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButton`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
    };
  },
  3624674796: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonUrl`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      url: e.string(),
    };
  },
  3861629280: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonCallback`,
      flags: t,
      requiresPassword: !!(t & 1),
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      data: e.bytes(),
    };
  },
  1098841487: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonRequestPhone`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
    };
  },
  2856384845: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonRequestGeoLocation`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
    };
  },
  2568198652: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonSwitchInline`,
      flags: t,
      samePeer: !!(t & 1),
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      query: e.string(),
      peerTypes: t & 2 ? e.vector(e.object) : void 0,
    };
  },
  2311426297: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonGame`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
    };
  },
  1067792645: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonBuy`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
    };
  },
  4111468281: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonUrlAuth`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      fwdText: t & 1 ? e.string() : void 0,
      url: e.string(),
      buttonId: e.int(),
    };
  },
  1744911986: function (e) {
    var t = e.uint();
    return {
      _: `inputKeyboardButtonUrlAuth`,
      flags: t,
      requestWriteAccess: !!(t & 1),
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      fwdText: t & 2 ? e.string() : void 0,
      url: e.string(),
      bot: e.object(),
    };
  },
  2047989634: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonRequestPoll`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      quiz: t & 1 ? e.boolean() : void 0,
      text: e.string(),
    };
  },
  2103314375: function (e) {
    var t = e.uint();
    return {
      _: `inputKeyboardButtonUserProfile`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      userId: e.object(),
    };
  },
  3237829897: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonUserProfile`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      userId: e.long(),
    };
  },
  3896947104: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonWebView`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      url: e.string(),
    };
  },
  3780920176: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonSimpleWebView`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      url: e.string(),
    };
  },
  1527715317: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonRequestPeer`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      buttonId: e.int(),
      peerType: e.object(),
      maxQuantity: e.int(),
    };
  },
  45580630: function (e) {
    var t = e.uint();
    return {
      _: `inputKeyboardButtonRequestPeer`,
      flags: t,
      nameRequested: !!(t & 1),
      usernameRequested: !!(t & 2),
      photoRequested: !!(t & 4),
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      buttonId: e.int(),
      peerType: e.object(),
      maxQuantity: e.int(),
    };
  },
  3167006480: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonCopy`,
      flags: t,
      style: t & 1024 ? e.object() : void 0,
      text: e.string(),
      copyText: e.string(),
    };
  },
  2002815875: function (e) {
    return { _: `keyboardButtonRow`, buttons: e.vector(e.object) };
  },
  2688441221: function (e) {
    var t = e.uint();
    return { _: `replyKeyboardHide`, flags: t, selective: !!(t & 4) };
  },
  2259946248: function (e) {
    var t = e.uint();
    return {
      _: `replyKeyboardForceReply`,
      flags: t,
      singleUse: !!(t & 2),
      selective: !!(t & 4),
      placeholder: t & 8 ? e.string() : void 0,
    };
  },
  2245892561: function (e) {
    var t = e.uint();
    return {
      _: `replyKeyboardMarkup`,
      flags: t,
      resize: !!(t & 1),
      singleUse: !!(t & 2),
      selective: !!(t & 4),
      persistent: !!(t & 16),
      rows: e.vector(e.object),
      placeholder: t & 8 ? e.string() : void 0,
    };
  },
  1218642516: function (e) {
    return { _: `replyInlineMarkup`, rows: e.vector(e.object) };
  },
  3146955413: function (e) {
    return { _: `messageEntityUnknown`, offset: e.int(), length: e.int() };
  },
  4194588573: function (e) {
    return { _: `messageEntityMention`, offset: e.int(), length: e.int() };
  },
  1868782349: function (e) {
    return { _: `messageEntityHashtag`, offset: e.int(), length: e.int() };
  },
  1827637959: function (e) {
    return { _: `messageEntityBotCommand`, offset: e.int(), length: e.int() };
  },
  1859134776: function (e) {
    return { _: `messageEntityUrl`, offset: e.int(), length: e.int() };
  },
  1692693954: function (e) {
    return { _: `messageEntityEmail`, offset: e.int(), length: e.int() };
  },
  3177253833: function (e) {
    return { _: `messageEntityBold`, offset: e.int(), length: e.int() };
  },
  2188348256: function (e) {
    return { _: `messageEntityItalic`, offset: e.int(), length: e.int() };
  },
  681706865: function (e) {
    return { _: `messageEntityCode`, offset: e.int(), length: e.int() };
  },
  1938967520: function (e) {
    return {
      _: `messageEntityPre`,
      offset: e.int(),
      length: e.int(),
      language: e.string(),
    };
  },
  1990644519: function (e) {
    return {
      _: `messageEntityTextUrl`,
      offset: e.int(),
      length: e.int(),
      url: e.string(),
    };
  },
  3699052864: function (e) {
    return {
      _: `messageEntityMentionName`,
      offset: e.int(),
      length: e.int(),
      userId: e.long(),
    };
  },
  546203849: function (e) {
    return {
      _: `inputMessageEntityMentionName`,
      offset: e.int(),
      length: e.int(),
      userId: e.object(),
    };
  },
  2607407947: function (e) {
    return { _: `messageEntityPhone`, offset: e.int(), length: e.int() };
  },
  1280209983: function (e) {
    return { _: `messageEntityCashtag`, offset: e.int(), length: e.int() };
  },
  2622389899: function (e) {
    return { _: `messageEntityUnderline`, offset: e.int(), length: e.int() };
  },
  3204879316: function (e) {
    return { _: `messageEntityStrike`, offset: e.int(), length: e.int() };
  },
  1981704948: function (e) {
    return { _: `messageEntityBankCard`, offset: e.int(), length: e.int() };
  },
  852137487: function (e) {
    return { _: `messageEntitySpoiler`, offset: e.int(), length: e.int() };
  },
  3369010680: function (e) {
    return {
      _: `messageEntityCustomEmoji`,
      offset: e.int(),
      length: e.int(),
      documentId: e.long(),
    };
  },
  4056722092: function (e) {
    var t = e.uint();
    return {
      _: `messageEntityBlockquote`,
      flags: t,
      collapsed: !!(t & 1),
      offset: e.int(),
      length: e.int(),
    };
  },
  2420819911: function (e) {
    var t = e.uint();
    return {
      _: `messageEntityFormattedDate`,
      flags: t,
      relative: !!(t & 1),
      shortTime: !!(t & 2),
      longTime: !!(t & 4),
      shortDate: !!(t & 8),
      longDate: !!(t & 16),
      dayOfWeek: !!(t & 32),
      offset: e.int(),
      length: e.int(),
      date: e.int(),
    };
  },
  1903653142: function (e) {
    return { _: `messageEntityDiffInsert`, offset: e.int(), length: e.int() };
  },
  3334596007: function (e) {
    return {
      _: `messageEntityDiffReplace`,
      offset: e.int(),
      length: e.int(),
      oldText: e.string(),
    };
  },
  106086853: function (e) {
    return { _: `messageEntityDiffDelete`, offset: e.int(), length: e.int() };
  },
  4002160262: function (e) {
    return { _: `inputChannelEmpty` };
  },
  4082822184: function (e) {
    return { _: `inputChannel`, channelId: e.long(), accessHash: e.long() };
  },
  1536380829: function (e) {
    return {
      _: `inputChannelFromMessage`,
      peer: e.object(),
      msgId: e.int(),
      channelId: e.long(),
    };
  },
  2131196633: function (e) {
    return {
      _: `contacts.resolvedPeer`,
      peer: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  182649427: function (e) {
    return { _: `messageRange`, minId: e.int(), maxId: e.int() };
  },
  1041346555: function (e) {
    var t = e.uint();
    return {
      _: `updates.channelDifferenceEmpty`,
      flags: t,
      final: !!(t & 1),
      pts: e.int(),
      timeout: t & 2 ? e.int() : void 0,
    };
  },
  2763835134: function (e) {
    var t = e.uint();
    return {
      _: `updates.channelDifferenceTooLong`,
      flags: t,
      final: !!(t & 1),
      timeout: t & 2 ? e.int() : void 0,
      dialog: e.object(),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  543450958: function (e) {
    var t = e.uint();
    return {
      _: `updates.channelDifference`,
      flags: t,
      final: !!(t & 1),
      pts: e.int(),
      timeout: t & 2 ? e.int() : void 0,
      newMessages: e.vector(e.object),
      otherUpdates: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2496933607: function (e) {
    return { _: `channelMessagesFilterEmpty` };
  },
  3447183703: function (e) {
    var t = e.uint();
    return {
      _: `channelMessagesFilter`,
      flags: t,
      excludeNewMessages: !!(t & 2),
      ranges: e.vector(e.object),
    };
  },
  466961494: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipant`,
      flags: t,
      userId: e.long(),
      date: e.int(),
      subscriptionUntilDate: t & 1 ? e.int() : void 0,
      rank: t & 4 ? e.string() : void 0,
    };
  },
  2840037914: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipantSelf`,
      flags: t,
      viaRequest: !!(t & 1),
      userId: e.long(),
      inviterId: e.long(),
      date: e.int(),
      subscriptionUntilDate: t & 2 ? e.int() : void 0,
      rank: t & 4 ? e.string() : void 0,
    };
  },
  803602899: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipantCreator`,
      flags: t,
      userId: e.long(),
      adminRights: e.object(),
      rank: t & 1 ? e.string() : void 0,
    };
  },
  885242707: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipantAdmin`,
      flags: t,
      canEdit: !!(t & 1),
      self: !!(t & 2),
      userId: e.long(),
      inviterId: t & 2 ? e.long() : void 0,
      promotedBy: e.long(),
      date: e.int(),
      adminRights: e.object(),
      rank: t & 4 ? e.string() : void 0,
    };
  },
  3589320081: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipantBanned`,
      flags: t,
      left: !!(t & 1),
      peer: e.object(),
      kickedBy: e.long(),
      date: e.int(),
      bannedRights: e.object(),
      rank: t & 4 ? e.string() : void 0,
    };
  },
  453242886: function (e) {
    return { _: `channelParticipantLeft`, peer: e.object() };
  },
  3728686201: function (e) {
    return { _: `channelParticipantsRecent` };
  },
  3026225513: function (e) {
    return { _: `channelParticipantsAdmins` };
  },
  2746567045: function (e) {
    return { _: `channelParticipantsKicked`, q: e.string() };
  },
  2966521435: function (e) {
    return { _: `channelParticipantsBots` };
  },
  338142689: function (e) {
    return { _: `channelParticipantsBanned`, q: e.string() };
  },
  106343499: function (e) {
    return { _: `channelParticipantsSearch`, q: e.string() };
  },
  3144345741: function (e) {
    return { _: `channelParticipantsContacts`, q: e.string() };
  },
  3763035371: function (e) {
    var t = e.uint();
    return {
      _: `channelParticipantsMentions`,
      flags: t,
      q: t & 1 ? e.string() : void 0,
      topMsgId: t & 2 ? e.int() : void 0,
    };
  },
  2595290799: function (e) {
    return {
      _: `channels.channelParticipants`,
      count: e.int(),
      participants: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4028055529: function (e) {
    return { _: `channels.channelParticipantsNotModified` };
  },
  3753378583: function (e) {
    return {
      _: `channels.channelParticipant`,
      participant: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2013922064: function (e) {
    var t = e.uint();
    return {
      _: `help.termsOfService`,
      flags: t,
      popup: !!(t & 1),
      id: e.object(),
      text: e.string(),
      entities: e.vector(e.object),
      minAgeConfirm: t & 2 ? e.int() : void 0,
    };
  },
  3892468898: function (e) {
    return { _: `messages.savedGifsNotModified` };
  },
  2225089037: function (e) {
    return {
      _: `messages.savedGifs`,
      hash: e.long(),
      gifs: e.vector(e.object),
    };
  },
  864077702: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaAuto`,
      flags: t,
      invertMedia: !!(t & 8),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  1036876423: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageText`,
      flags: t,
      noWebpage: !!(t & 1),
      invertMedia: !!(t & 8),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2526190213: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaGeo`,
      flags: t,
      geoPoint: e.object(),
      heading: t & 1 ? e.int() : void 0,
      period: t & 2 ? e.int() : void 0,
      proximityNotificationRadius: t & 8 ? e.int() : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  1098628881: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaVenue`,
      flags: t,
      geoPoint: e.object(),
      title: e.string(),
      address: e.string(),
      provider: e.string(),
      venueId: e.string(),
      venueType: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2800599037: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaContact`,
      flags: t,
      phoneNumber: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      vcard: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  1262639204: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageGame`,
      flags: t,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  3622273573: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaInvoice`,
      flags: t,
      title: e.string(),
      description: e.string(),
      photo: t & 1 ? e.object() : void 0,
      invoice: e.object(),
      payload: e.bytes(),
      provider: e.string(),
      providerData: e.object(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  3185362192: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineMessageMediaWebPage`,
      flags: t,
      invertMedia: !!(t & 8),
      forceLargeMedia: !!(t & 16),
      forceSmallMedia: !!(t & 32),
      optional: !!(t & 64),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      url: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2294256409: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineResult`,
      flags: t,
      id: e.string(),
      type: e.string(),
      title: t & 2 ? e.string() : void 0,
      description: t & 4 ? e.string() : void 0,
      url: t & 8 ? e.string() : void 0,
      thumb: t & 16 ? e.object() : void 0,
      content: t & 32 ? e.object() : void 0,
      sendMessage: e.object(),
    };
  },
  2832753831: function (e) {
    return {
      _: `inputBotInlineResultPhoto`,
      id: e.string(),
      type: e.string(),
      photo: e.object(),
      sendMessage: e.object(),
    };
  },
  4294507972: function (e) {
    var t = e.uint();
    return {
      _: `inputBotInlineResultDocument`,
      flags: t,
      id: e.string(),
      type: e.string(),
      title: t & 2 ? e.string() : void 0,
      description: t & 4 ? e.string() : void 0,
      document: e.object(),
      sendMessage: e.object(),
    };
  },
  1336154098: function (e) {
    return {
      _: `inputBotInlineResultGame`,
      id: e.string(),
      shortName: e.string(),
      sendMessage: e.object(),
    };
  },
  1984755728: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaAuto`,
      flags: t,
      invertMedia: !!(t & 8),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2357159394: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageText`,
      flags: t,
      noWebpage: !!(t & 1),
      invertMedia: !!(t & 8),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  85477117: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaGeo`,
      flags: t,
      geo: e.object(),
      heading: t & 1 ? e.int() : void 0,
      period: t & 2 ? e.int() : void 0,
      proximityNotificationRadius: t & 8 ? e.int() : void 0,
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2324063644: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaVenue`,
      flags: t,
      geo: e.object(),
      title: e.string(),
      address: e.string(),
      provider: e.string(),
      venueId: e.string(),
      venueType: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  416402882: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaContact`,
      flags: t,
      phoneNumber: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      vcard: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  894081801: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaInvoice`,
      flags: t,
      shippingAddressRequested: !!(t & 2),
      test: !!(t & 8),
      title: e.string(),
      description: e.string(),
      photo: t & 1 ? e.object() : void 0,
      currency: e.string(),
      totalAmount: e.long(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  2157631910: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMessageMediaWebPage`,
      flags: t,
      invertMedia: !!(t & 8),
      forceLargeMedia: !!(t & 16),
      forceSmallMedia: !!(t & 32),
      manual: !!(t & 128),
      safe: !!(t & 256),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      url: e.string(),
      replyMarkup: t & 4 ? e.object() : void 0,
    };
  },
  295067450: function (e) {
    var t = e.uint();
    return {
      _: `botInlineResult`,
      flags: t,
      id: e.string(),
      type: e.string(),
      title: t & 2 ? e.string() : void 0,
      description: t & 4 ? e.string() : void 0,
      url: t & 8 ? e.string() : void 0,
      thumb: t & 16 ? e.object() : void 0,
      content: t & 32 ? e.object() : void 0,
      sendMessage: e.object(),
    };
  },
  400266251: function (e) {
    var t = e.uint();
    return {
      _: `botInlineMediaResult`,
      flags: t,
      id: e.string(),
      type: e.string(),
      photo: t & 1 ? e.object() : void 0,
      document: t & 2 ? e.object() : void 0,
      title: t & 4 ? e.string() : void 0,
      description: t & 8 ? e.string() : void 0,
      sendMessage: e.object(),
    };
  },
  3760321270: function (e) {
    var t = e.uint();
    return {
      _: `messages.botResults`,
      flags: t,
      gallery: !!(t & 1),
      queryId: e.long(),
      nextOffset: t & 2 ? e.string() : void 0,
      switchPm: t & 4 ? e.object() : void 0,
      switchWebview: t & 8 ? e.object() : void 0,
      results: e.vector(e.object),
      cacheTime: e.int(),
      users: e.vector(e.object),
    };
  },
  1571494644: function (e) {
    return { _: `exportedMessageLink`, link: e.string(), html: e.string() };
  },
  1313731771: function (e) {
    var t = e.uint();
    return {
      _: `messageFwdHeader`,
      flags: t,
      imported: !!(t & 128),
      savedOut: !!(t & 2048),
      fromId: t & 1 ? e.object() : void 0,
      fromName: t & 32 ? e.string() : void 0,
      date: e.int(),
      channelPost: t & 4 ? e.int() : void 0,
      postAuthor: t & 8 ? e.string() : void 0,
      savedFromPeer: t & 16 ? e.object() : void 0,
      savedFromMsgId: t & 16 ? e.int() : void 0,
      savedFromId: t & 256 ? e.object() : void 0,
      savedFromName: t & 512 ? e.string() : void 0,
      savedDate: t & 1024 ? e.int() : void 0,
      psaType: t & 64 ? e.string() : void 0,
    };
  },
  1923290508: function (e) {
    return { _: `auth.codeTypeSms` };
  },
  1948046307: function (e) {
    return { _: `auth.codeTypeCall` };
  },
  577556219: function (e) {
    return { _: `auth.codeTypeFlashCall` };
  },
  3592083182: function (e) {
    return { _: `auth.codeTypeMissedCall` };
  },
  116234636: function (e) {
    return { _: `auth.codeTypeFragmentSms` };
  },
  1035688326: function (e) {
    return { _: `auth.sentCodeTypeApp`, length: e.int() };
  },
  3221273506: function (e) {
    return { _: `auth.sentCodeTypeSms`, length: e.int() };
  },
  1398007207: function (e) {
    return { _: `auth.sentCodeTypeCall`, length: e.int() };
  },
  2869151449: function (e) {
    return { _: `auth.sentCodeTypeFlashCall`, pattern: e.string() };
  },
  2181063812: function (e) {
    return {
      _: `auth.sentCodeTypeMissedCall`,
      prefix: e.string(),
      length: e.int(),
    };
  },
  4098946459: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCodeTypeEmailCode`,
      flags: t,
      appleSigninAllowed: !!(t & 1),
      googleSigninAllowed: !!(t & 2),
      emailPattern: e.string(),
      length: e.int(),
      resetAvailablePeriod: t & 8 ? e.int() : void 0,
      resetPendingDate: t & 16 ? e.int() : void 0,
    };
  },
  2773032426: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCodeTypeSetUpEmailRequired`,
      flags: t,
      appleSigninAllowed: !!(t & 1),
      googleSigninAllowed: !!(t & 2),
    };
  },
  3646315577: function (e) {
    return {
      _: `auth.sentCodeTypeFragmentSms`,
      url: e.string(),
      length: e.int(),
    };
  },
  10475318: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCodeTypeFirebaseSms`,
      flags: t,
      nonce: t & 1 ? e.bytes() : void 0,
      playIntegrityProjectId: t & 4 ? e.long() : void 0,
      playIntegrityNonce: t & 4 ? e.bytes() : void 0,
      receipt: t & 2 ? e.string() : void 0,
      pushTimeout: t & 2 ? e.int() : void 0,
      length: e.int(),
    };
  },
  2752949377: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCodeTypeSmsWord`,
      flags: t,
      beginning: t & 1 ? e.string() : void 0,
    };
  },
  3010958511: function (e) {
    var t = e.uint();
    return {
      _: `auth.sentCodeTypeSmsPhrase`,
      flags: t,
      beginning: t & 1 ? e.string() : void 0,
    };
  },
  911761060: function (e) {
    var t = e.uint();
    return {
      _: `messages.botCallbackAnswer`,
      flags: t,
      alert: !!(t & 2),
      hasUrl: !!(t & 8),
      nativeUi: !!(t & 16),
      message: t & 1 ? e.string() : void 0,
      url: t & 4 ? e.string() : void 0,
      cacheTime: e.int(),
    };
  },
  649453030: function (e) {
    var t = e.uint();
    return { _: `messages.messageEditData`, flags: t, caption: !!(t & 1) };
  },
  2299280777: function (e) {
    return {
      _: `inputBotInlineMessageID`,
      dcId: e.int(),
      id: e.long(),
      accessHash: e.long(),
    };
  },
  3067680215: function (e) {
    return {
      _: `inputBotInlineMessageID64`,
      dcId: e.int(),
      ownerId: e.long(),
      id: e.int(),
      accessHash: e.long(),
    };
  },
  1008755359: function (e) {
    return { _: `inlineBotSwitchPM`, text: e.string(), startParam: e.string() };
  },
  863093588: function (e) {
    return {
      _: `messages.peerDialogs`,
      dialogs: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      state: e.object(),
    };
  },
  3989684315: function (e) {
    return { _: `topPeer`, peer: e.object(), rating: e.double() };
  },
  2875595611: function (e) {
    return { _: `topPeerCategoryBotsPM` };
  },
  344356834: function (e) {
    return { _: `topPeerCategoryBotsInline` };
  },
  104314861: function (e) {
    return { _: `topPeerCategoryCorrespondents` };
  },
  3172442442: function (e) {
    return { _: `topPeerCategoryGroups` };
  },
  371037736: function (e) {
    return { _: `topPeerCategoryChannels` };
  },
  511092620: function (e) {
    return { _: `topPeerCategoryPhoneCalls` };
  },
  2822794409: function (e) {
    return { _: `topPeerCategoryForwardUsers` };
  },
  4226728176: function (e) {
    return { _: `topPeerCategoryForwardChats` };
  },
  4255022060: function (e) {
    return { _: `topPeerCategoryBotsApp` };
  },
  4219683473: function (e) {
    return {
      _: `topPeerCategoryPeers`,
      category: e.object(),
      count: e.int(),
      peers: e.vector(e.object),
    };
  },
  3727060725: function (e) {
    return { _: `contacts.topPeersNotModified` };
  },
  1891070632: function (e) {
    return {
      _: `contacts.topPeers`,
      categories: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3039597469: function (e) {
    return { _: `contacts.topPeersDisabled` };
  },
  453805082: function (e) {
    var t = e.uint();
    return { _: `draftMessageEmpty`, flags: t, date: t & 1 ? e.int() : void 0 };
  },
  2531960299: function (e) {
    var t = e.uint();
    return {
      _: `draftMessage`,
      flags: t,
      noWebpage: !!(t & 2),
      invertMedia: !!(t & 64),
      replyTo: t & 16 ? e.object() : void 0,
      message: e.string(),
      entities: t & 8 ? e.vector(e.object) : void 0,
      media: t & 32 ? e.object() : void 0,
      date: e.int(),
      effect: t & 128 ? e.long() : void 0,
      suggestedPost: t & 256 ? e.object() : void 0,
    };
  },
  3336309862: function (e) {
    return { _: `messages.featuredStickersNotModified`, count: e.int() };
  },
  3191351558: function (e) {
    var t = e.uint();
    return {
      _: `messages.featuredStickers`,
      flags: t,
      premium: !!(t & 1),
      hash: e.long(),
      count: e.int(),
      sets: e.vector(e.object),
      unread: e.vector(e.long),
    };
  },
  186120336: function (e) {
    return { _: `messages.recentStickersNotModified` };
  },
  2295561302: function (e) {
    return {
      _: `messages.recentStickers`,
      hash: e.long(),
      packs: e.vector(e.object),
      stickers: e.vector(e.object),
      dates: e.vector(e.int),
    };
  },
  1338747336: function (e) {
    return {
      _: `messages.archivedStickers`,
      count: e.int(),
      sets: e.vector(e.object),
    };
  },
  946083368: function (e) {
    return { _: `messages.stickerSetInstallResultSuccess` };
  },
  904138920: function (e) {
    return {
      _: `messages.stickerSetInstallResultArchive`,
      sets: e.vector(e.object),
    };
  },
  1678812626: function (e) {
    return { _: `stickerSetCovered`, set: e.object(), cover: e.object() };
  },
  872932635: function (e) {
    return {
      _: `stickerSetMultiCovered`,
      set: e.object(),
      covers: e.vector(e.object),
    };
  },
  1087454222: function (e) {
    return {
      _: `stickerSetFullCovered`,
      set: e.object(),
      packs: e.vector(e.object),
      keywords: e.vector(e.object),
      documents: e.vector(e.object),
    };
  },
  2008112412: function (e) {
    return { _: `stickerSetNoCovered`, set: e.object() };
  },
  2933316530: function (e) {
    return {
      _: `maskCoords`,
      n: e.int(),
      x: e.double(),
      y: e.double(),
      zoom: e.double(),
    };
  },
  1251549527: function (e) {
    return { _: `inputStickeredMediaPhoto`, id: e.object() };
  },
  70813275: function (e) {
    return { _: `inputStickeredMediaDocument`, id: e.object() };
  },
  3187238203: function (e) {
    var t = e.uint();
    return {
      _: `game`,
      flags: t,
      id: e.long(),
      accessHash: e.long(),
      shortName: e.string(),
      title: e.string(),
      description: e.string(),
      photo: e.object(),
      document: t & 1 ? e.object() : void 0,
    };
  },
  53231223: function (e) {
    return { _: `inputGameID`, id: e.long(), accessHash: e.long() };
  },
  3274827786: function (e) {
    return {
      _: `inputGameShortName`,
      botId: e.object(),
      shortName: e.string(),
    };
  },
  1940093419: function (e) {
    return { _: `highScore`, pos: e.int(), userId: e.long(), score: e.int() };
  },
  2587622809: function (e) {
    return {
      _: `messages.highScores`,
      scores: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3695018575: function (e) {
    return { _: `textEmpty` };
  },
  1950782688: function (e) {
    return { _: `textPlain`, text: e.string() };
  },
  1730456516: function (e) {
    return { _: `textBold`, text: e.object() };
  },
  3641877916: function (e) {
    return { _: `textItalic`, text: e.object() };
  },
  3240501956: function (e) {
    return { _: `textUnderline`, text: e.object() };
  },
  2616769429: function (e) {
    return { _: `textStrike`, text: e.object() };
  },
  1816074681: function (e) {
    return { _: `textFixed`, text: e.object() };
  },
  1009288385: function (e) {
    return {
      _: `textUrl`,
      text: e.object(),
      url: e.string(),
      webpageId: e.long(),
    };
  },
  3730443734: function (e) {
    return { _: `textEmail`, text: e.object(), email: e.string() };
  },
  2120376535: function (e) {
    return { _: `textConcat`, texts: e.vector(e.object) };
  },
  3983181060: function (e) {
    return { _: `textSubscript`, text: e.object() };
  },
  3355139585: function (e) {
    return { _: `textSuperscript`, text: e.object() };
  },
  55281185: function (e) {
    return { _: `textMarked`, text: e.object() };
  },
  483104362: function (e) {
    return { _: `textPhone`, text: e.object(), phone: e.string() };
  },
  136105807: function (e) {
    return { _: `textImage`, documentId: e.long(), w: e.int(), h: e.int() };
  },
  894777186: function (e) {
    return { _: `textAnchor`, text: e.object(), name: e.string() };
  },
  324435594: function (e) {
    return { _: `pageBlockUnsupported` };
  },
  1890305021: function (e) {
    return { _: `pageBlockTitle`, text: e.object() };
  },
  2415565343: function (e) {
    return { _: `pageBlockSubtitle`, text: e.object() };
  },
  3132089824: function (e) {
    return {
      _: `pageBlockAuthorDate`,
      author: e.object(),
      publishedDate: e.int(),
    };
  },
  3218105580: function (e) {
    return { _: `pageBlockHeader`, text: e.object() };
  },
  4046173921: function (e) {
    return { _: `pageBlockSubheader`, text: e.object() };
  },
  1182402406: function (e) {
    return { _: `pageBlockParagraph`, text: e.object() };
  },
  3228621118: function (e) {
    return {
      _: `pageBlockPreformatted`,
      text: e.object(),
      language: e.string(),
    };
  },
  1216809369: function (e) {
    return { _: `pageBlockFooter`, text: e.object() };
  },
  3676352904: function (e) {
    return { _: `pageBlockDivider` };
  },
  3456972720: function (e) {
    return { _: `pageBlockAnchor`, name: e.string() };
  },
  3840442385: function (e) {
    return { _: `pageBlockList`, items: e.vector(e.object) };
  },
  641563686: function (e) {
    return { _: `pageBlockBlockquote`, text: e.object(), caption: e.object() };
  },
  1329878739: function (e) {
    return { _: `pageBlockPullquote`, text: e.object(), caption: e.object() };
  },
  391759200: function (e) {
    var t = e.uint();
    return {
      _: `pageBlockPhoto`,
      flags: t,
      photoId: e.long(),
      caption: e.object(),
      url: t & 1 ? e.string() : void 0,
      webpageId: t & 1 ? e.long() : void 0,
    };
  },
  2089805750: function (e) {
    var t = e.uint();
    return {
      _: `pageBlockVideo`,
      flags: t,
      autoplay: !!(t & 1),
      loop: !!(t & 2),
      videoId: e.long(),
      caption: e.object(),
    };
  },
  972174080: function (e) {
    return { _: `pageBlockCover`, cover: e.object() };
  },
  2826014149: function (e) {
    var t = e.uint();
    return {
      _: `pageBlockEmbed`,
      flags: t,
      fullWidth: !!(t & 1),
      allowScrolling: !!(t & 8),
      url: t & 2 ? e.string() : void 0,
      html: t & 4 ? e.string() : void 0,
      posterPhotoId: t & 16 ? e.long() : void 0,
      w: t & 32 ? e.int() : void 0,
      h: t & 32 ? e.int() : void 0,
      caption: e.object(),
    };
  },
  4065961995: function (e) {
    return {
      _: `pageBlockEmbedPost`,
      url: e.string(),
      webpageId: e.long(),
      authorPhotoId: e.long(),
      author: e.string(),
      date: e.int(),
      blocks: e.vector(e.object),
      caption: e.object(),
    };
  },
  1705048653: function (e) {
    return {
      _: `pageBlockCollage`,
      items: e.vector(e.object),
      caption: e.object(),
    };
  },
  52401552: function (e) {
    return {
      _: `pageBlockSlideshow`,
      items: e.vector(e.object),
      caption: e.object(),
    };
  },
  4011282869: function (e) {
    return { _: `pageBlockChannel`, channel: e.object() };
  },
  2151899626: function (e) {
    return { _: `pageBlockAudio`, audioId: e.long(), caption: e.object() };
  },
  504660880: function (e) {
    return { _: `pageBlockKicker`, text: e.object() };
  },
  3209554562: function (e) {
    var t = e.uint();
    return {
      _: `pageBlockTable`,
      flags: t,
      bordered: !!(t & 1),
      striped: !!(t & 2),
      title: e.object(),
      rows: e.vector(e.object),
    };
  },
  2592793057: function (e) {
    return { _: `pageBlockOrderedList`, items: e.vector(e.object) };
  },
  1987480557: function (e) {
    var t = e.uint();
    return {
      _: `pageBlockDetails`,
      flags: t,
      open: !!(t & 1),
      blocks: e.vector(e.object),
      title: e.object(),
    };
  },
  370236054: function (e) {
    return {
      _: `pageBlockRelatedArticles`,
      title: e.object(),
      articles: e.vector(e.object),
    };
  },
  2756656886: function (e) {
    return {
      _: `pageBlockMap`,
      geo: e.object(),
      zoom: e.int(),
      w: e.int(),
      h: e.int(),
      caption: e.object(),
    };
  },
  2246320897: function (e) {
    return { _: `phoneCallDiscardReasonMissed` };
  },
  3767910816: function (e) {
    return { _: `phoneCallDiscardReasonDisconnect` };
  },
  1471006352: function (e) {
    return { _: `phoneCallDiscardReasonHangup` };
  },
  4210550985: function (e) {
    return { _: `phoneCallDiscardReasonBusy` };
  },
  2679894519: function (e) {
    return {
      _: `phoneCallDiscardReasonMigrateConferenceCall`,
      slug: e.string(),
    };
  },
  2104790276: function (e) {
    return { _: `dataJSON`, data: e.string() };
  },
  3408489464: function (e) {
    return { _: `labeledPrice`, label: e.string(), amount: e.long() };
  },
  77522308: function (e) {
    var t = e.uint();
    return {
      _: `invoice`,
      flags: t,
      test: !!(t & 1),
      nameRequested: !!(t & 2),
      phoneRequested: !!(t & 4),
      emailRequested: !!(t & 8),
      shippingAddressRequested: !!(t & 16),
      flexible: !!(t & 32),
      phoneToProvider: !!(t & 64),
      emailToProvider: !!(t & 128),
      recurring: !!(t & 512),
      currency: e.string(),
      prices: e.vector(e.object),
      maxTipAmount: t & 256 ? e.long() : void 0,
      suggestedTipAmounts: t & 256 ? e.vector(e.long) : void 0,
      termsUrl: t & 1024 ? e.string() : void 0,
      subscriptionPeriod: t & 2048 ? e.int() : void 0,
    };
  },
  3926049406: function (e) {
    return { _: `paymentCharge`, id: e.string(), providerChargeId: e.string() };
  },
  512535275: function (e) {
    return {
      _: `postAddress`,
      streetLine1: e.string(),
      streetLine2: e.string(),
      city: e.string(),
      state: e.string(),
      countryIso2: e.string(),
      postCode: e.string(),
    };
  },
  2426158996: function (e) {
    var t = e.uint();
    return {
      _: `paymentRequestedInfo`,
      flags: t,
      name: t & 1 ? e.string() : void 0,
      phone: t & 2 ? e.string() : void 0,
      email: t & 4 ? e.string() : void 0,
      shippingAddress: t & 8 ? e.object() : void 0,
    };
  },
  3452074527: function (e) {
    return {
      _: `paymentSavedCredentialsCard`,
      id: e.string(),
      title: e.string(),
    };
  },
  475467473: function (e) {
    return {
      _: `webDocument`,
      url: e.string(),
      accessHash: e.long(),
      size: e.int(),
      mimeType: e.string(),
      attributes: e.vector(e.object),
    };
  },
  4190682310: function (e) {
    return {
      _: `webDocumentNoProxy`,
      url: e.string(),
      size: e.int(),
      mimeType: e.string(),
      attributes: e.vector(e.object),
    };
  },
  2616017741: function (e) {
    return {
      _: `inputWebDocument`,
      url: e.string(),
      size: e.int(),
      mimeType: e.string(),
      attributes: e.vector(e.object),
    };
  },
  3258570374: function (e) {
    return { _: `inputWebFileLocation`, url: e.string(), accessHash: e.long() };
  },
  2669814217: function (e) {
    return {
      _: `inputWebFileGeoPointLocation`,
      geoPoint: e.object(),
      accessHash: e.long(),
      w: e.int(),
      h: e.int(),
      zoom: e.int(),
      scale: e.int(),
    };
  },
  4100974884: function (e) {
    var t = e.uint();
    return {
      _: `inputWebFileAudioAlbumThumbLocation`,
      flags: t,
      small: !!(t & 4),
      document: t & 1 ? e.object() : void 0,
      title: t & 2 ? e.string() : void 0,
      performer: t & 2 ? e.string() : void 0,
    };
  },
  568808380: function (e) {
    return {
      _: `upload.webFile`,
      size: e.int(),
      mimeType: e.string(),
      fileType: e.object(),
      mtime: e.int(),
      bytes: e.bytes(),
    };
  },
  2684716881: function (e) {
    var t = e.uint();
    return {
      _: `payments.paymentForm`,
      flags: t,
      canSaveCredentials: !!(t & 4),
      passwordMissing: !!(t & 8),
      formId: e.long(),
      botId: e.long(),
      title: e.string(),
      description: e.string(),
      photo: t & 32 ? e.object() : void 0,
      invoice: e.object(),
      providerId: e.long(),
      url: e.string(),
      nativeProvider: t & 16 ? e.string() : void 0,
      nativeParams: t & 16 ? e.object() : void 0,
      additionalMethods: t & 64 ? e.vector(e.object) : void 0,
      savedInfo: t & 1 ? e.object() : void 0,
      savedCredentials: t & 2 ? e.vector(e.object) : void 0,
      users: e.vector(e.object),
    };
  },
  2079764828: function (e) {
    var t = e.uint();
    return {
      _: `payments.paymentFormStars`,
      flags: t,
      formId: e.long(),
      botId: e.long(),
      title: e.string(),
      description: e.string(),
      photo: t & 32 ? e.object() : void 0,
      invoice: e.object(),
      users: e.vector(e.object),
    };
  },
  3022376929: function (e) {
    return {
      _: `payments.paymentFormStarGift`,
      formId: e.long(),
      invoice: e.object(),
    };
  },
  3510966403: function (e) {
    var t = e.uint();
    return {
      _: `payments.validatedRequestedInfo`,
      flags: t,
      id: t & 1 ? e.string() : void 0,
      shippingOptions: t & 2 ? e.vector(e.object) : void 0,
    };
  },
  1314881805: function (e) {
    return { _: `payments.paymentResult`, updates: e.object() };
  },
  3628142905: function (e) {
    return { _: `payments.paymentVerificationNeeded`, url: e.string() };
  },
  1891958275: function (e) {
    var t = e.uint();
    return {
      _: `payments.paymentReceipt`,
      flags: t,
      date: e.int(),
      botId: e.long(),
      providerId: e.long(),
      title: e.string(),
      description: e.string(),
      photo: t & 4 ? e.object() : void 0,
      invoice: e.object(),
      info: t & 1 ? e.object() : void 0,
      shipping: t & 2 ? e.object() : void 0,
      tipAmount: t & 8 ? e.long() : void 0,
      currency: e.string(),
      totalAmount: e.long(),
      credentialsTitle: e.string(),
      users: e.vector(e.object),
    };
  },
  3669751866: function (e) {
    var t = e.uint();
    return {
      _: `payments.paymentReceiptStars`,
      flags: t,
      date: e.int(),
      botId: e.long(),
      title: e.string(),
      description: e.string(),
      photo: t & 4 ? e.object() : void 0,
      invoice: e.object(),
      currency: e.string(),
      totalAmount: e.long(),
      transactionId: e.string(),
      users: e.vector(e.object),
    };
  },
  4220511292: function (e) {
    var t = e.uint();
    return {
      _: `payments.savedInfo`,
      flags: t,
      hasSavedCredentials: !!(t & 2),
      savedInfo: t & 1 ? e.object() : void 0,
    };
  },
  3238965967: function (e) {
    return {
      _: `inputPaymentCredentialsSaved`,
      id: e.string(),
      tmpPassword: e.bytes(),
    };
  },
  873977640: function (e) {
    var t = e.uint();
    return {
      _: `inputPaymentCredentials`,
      flags: t,
      save: !!(t & 1),
      data: e.object(),
    };
  },
  178373535: function (e) {
    return { _: `inputPaymentCredentialsApplePay`, paymentData: e.object() };
  },
  2328045569: function (e) {
    return { _: `inputPaymentCredentialsGooglePay`, paymentToken: e.object() };
  },
  3680828724: function (e) {
    return {
      _: `account.tmpPassword`,
      tmpPassword: e.bytes(),
      validUntil: e.int(),
    };
  },
  3055631583: function (e) {
    return {
      _: `shippingOption`,
      id: e.string(),
      title: e.string(),
      prices: e.vector(e.object),
    };
  },
  853188252: function (e) {
    var t = e.uint();
    return {
      _: `inputStickerSetItem`,
      flags: t,
      document: e.object(),
      emoji: e.string(),
      maskCoords: t & 1 ? e.object() : void 0,
      keywords: t & 2 ? e.string() : void 0,
    };
  },
  506920429: function (e) {
    return { _: `inputPhoneCall`, id: e.long(), accessHash: e.long() };
  },
  1399245077: function (e) {
    return { _: `phoneCallEmpty`, id: e.long() };
  },
  3307368215: function (e) {
    var t = e.uint();
    return {
      _: `phoneCallWaiting`,
      flags: t,
      video: !!(t & 64),
      id: e.long(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      protocol: e.object(),
      receiveDate: t & 1 ? e.int() : void 0,
    };
  },
  347139340: function (e) {
    var t = e.uint();
    return {
      _: `phoneCallRequested`,
      flags: t,
      video: !!(t & 64),
      id: e.long(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      gAHash: e.bytes(),
      protocol: e.object(),
    };
  },
  912311057: function (e) {
    var t = e.uint();
    return {
      _: `phoneCallAccepted`,
      flags: t,
      video: !!(t & 64),
      id: e.long(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      gB: e.bytes(),
      protocol: e.object(),
    };
  },
  810769141: function (e) {
    var t = e.uint();
    return {
      _: `phoneCall`,
      flags: t,
      p2pAllowed: !!(t & 32),
      video: !!(t & 64),
      conferenceSupported: !!(t & 256),
      id: e.long(),
      accessHash: e.long(),
      date: e.int(),
      adminId: e.long(),
      participantId: e.long(),
      gAOrB: e.bytes(),
      keyFingerprint: e.long(),
      protocol: e.object(),
      connections: e.vector(e.object),
      startDate: e.int(),
      customParameters: t & 128 ? e.object() : void 0,
    };
  },
  1355435489: function (e) {
    var t = e.uint();
    return {
      _: `phoneCallDiscarded`,
      flags: t,
      needRating: !!(t & 4),
      needDebug: !!(t & 8),
      video: !!(t & 64),
      id: e.long(),
      reason: t & 1 ? e.object() : void 0,
      duration: t & 2 ? e.int() : void 0,
    };
  },
  2629903303: function (e) {
    var t = e.uint();
    return {
      _: `phoneConnection`,
      flags: t,
      tcp: !!(t & 1),
      id: e.long(),
      ip: e.string(),
      ipv6: e.string(),
      port: e.int(),
      peerTag: e.bytes(),
    };
  },
  1667228533: function (e) {
    var t = e.uint();
    return {
      _: `phoneConnectionWebrtc`,
      flags: t,
      turn: !!(t & 1),
      stun: !!(t & 2),
      id: e.long(),
      ip: e.string(),
      ipv6: e.string(),
      port: e.int(),
      username: e.string(),
      password: e.string(),
    };
  },
  4236742600: function (e) {
    var t = e.uint();
    return {
      _: `phoneCallProtocol`,
      flags: t,
      udpP2p: !!(t & 1),
      udpReflector: !!(t & 2),
      minLayer: e.int(),
      maxLayer: e.int(),
      libraryVersions: e.vector(e.string),
    };
  },
  3968000320: function (e) {
    return {
      _: `phone.phoneCall`,
      phoneCall: e.object(),
      users: e.vector(e.object),
    };
  },
  4004045934: function (e) {
    return { _: `upload.cdnFileReuploadNeeded`, requestToken: e.bytes() };
  },
  2845821519: function (e) {
    return { _: `upload.cdnFile`, bytes: e.bytes() };
  },
  3380800186: function (e) {
    return { _: `cdnPublicKey`, dcId: e.int(), publicKey: e.string() };
  },
  1462101002: function (e) {
    return { _: `cdnConfig`, publicKeys: e.vector(e.object) };
  },
  3402727926: function (e) {
    return { _: `langPackString`, key: e.string(), value: e.string() };
  },
  1816636575: function (e) {
    var t = e.uint();
    return {
      _: `langPackStringPluralized`,
      flags: t,
      key: e.string(),
      zeroValue: t & 1 ? e.string() : void 0,
      oneValue: t & 2 ? e.string() : void 0,
      twoValue: t & 4 ? e.string() : void 0,
      fewValue: t & 8 ? e.string() : void 0,
      manyValue: t & 16 ? e.string() : void 0,
      otherValue: e.string(),
    };
  },
  695856818: function (e) {
    return { _: `langPackStringDeleted`, key: e.string() };
  },
  4085629430: function (e) {
    return {
      _: `langPackDifference`,
      langCode: e.string(),
      fromVersion: e.int(),
      version: e.int(),
      strings: e.vector(e.object),
    };
  },
  4006239459: function (e) {
    var t = e.uint();
    return {
      _: `langPackLanguage`,
      flags: t,
      official: !!(t & 1),
      rtl: !!(t & 4),
      beta: !!(t & 8),
      name: e.string(),
      nativeName: e.string(),
      langCode: e.string(),
      baseLangCode: t & 2 ? e.string() : void 0,
      pluralCode: e.string(),
      stringsCount: e.int(),
      translatedCount: e.int(),
      translationsUrl: e.string(),
    };
  },
  3873421349: function (e) {
    return {
      _: `channelAdminLogEventActionChangeTitle`,
      prevValue: e.string(),
      newValue: e.string(),
    };
  },
  1427671598: function (e) {
    return {
      _: `channelAdminLogEventActionChangeAbout`,
      prevValue: e.string(),
      newValue: e.string(),
    };
  },
  1783299128: function (e) {
    return {
      _: `channelAdminLogEventActionChangeUsername`,
      prevValue: e.string(),
      newValue: e.string(),
    };
  },
  1129042607: function (e) {
    return {
      _: `channelAdminLogEventActionChangePhoto`,
      prevPhoto: e.object(),
      newPhoto: e.object(),
    };
  },
  460916654: function (e) {
    return {
      _: `channelAdminLogEventActionToggleInvites`,
      newValue: e.boolean(),
    };
  },
  648939889: function (e) {
    return {
      _: `channelAdminLogEventActionToggleSignatures`,
      newValue: e.boolean(),
    };
  },
  3924306968: function (e) {
    return { _: `channelAdminLogEventActionUpdatePinned`, message: e.object() };
  },
  1889215493: function (e) {
    return {
      _: `channelAdminLogEventActionEditMessage`,
      prevMessage: e.object(),
      newMessage: e.object(),
    };
  },
  1121994683: function (e) {
    return {
      _: `channelAdminLogEventActionDeleteMessage`,
      message: e.object(),
    };
  },
  405815507: function (e) {
    return { _: `channelAdminLogEventActionParticipantJoin` };
  },
  4170676210: function (e) {
    return { _: `channelAdminLogEventActionParticipantLeave` };
  },
  3810276568: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantInvite`,
      participant: e.object(),
    };
  },
  3872931198: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantToggleBan`,
      prevParticipant: e.object(),
      newParticipant: e.object(),
    };
  },
  3580323600: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantToggleAdmin`,
      prevParticipant: e.object(),
      newParticipant: e.object(),
    };
  },
  2982398631: function (e) {
    return {
      _: `channelAdminLogEventActionChangeStickerSet`,
      prevStickerset: e.object(),
      newStickerset: e.object(),
    };
  },
  1599903217: function (e) {
    return {
      _: `channelAdminLogEventActionTogglePreHistoryHidden`,
      newValue: e.boolean(),
    };
  },
  771095562: function (e) {
    return {
      _: `channelAdminLogEventActionDefaultBannedRights`,
      prevBannedRights: e.object(),
      newBannedRights: e.object(),
    };
  },
  2399639107: function (e) {
    return { _: `channelAdminLogEventActionStopPoll`, message: e.object() };
  },
  84703944: function (e) {
    return {
      _: `channelAdminLogEventActionChangeLinkedChat`,
      prevValue: e.long(),
      newValue: e.long(),
    };
  },
  241923758: function (e) {
    return {
      _: `channelAdminLogEventActionChangeLocation`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  1401984889: function (e) {
    return {
      _: `channelAdminLogEventActionToggleSlowMode`,
      prevValue: e.int(),
      newValue: e.int(),
    };
  },
  589338437: function (e) {
    return { _: `channelAdminLogEventActionStartGroupCall`, call: e.object() };
  },
  3684667712: function (e) {
    return {
      _: `channelAdminLogEventActionDiscardGroupCall`,
      call: e.object(),
    };
  },
  4179895506: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantMute`,
      participant: e.object(),
    };
  },
  3863226816: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantUnmute`,
      participant: e.object(),
    };
  },
  1456906823: function (e) {
    return {
      _: `channelAdminLogEventActionToggleGroupCallSetting`,
      joinMuted: e.boolean(),
    };
  },
  4271882584: function (e) {
    var t = e.uint();
    return {
      _: `channelAdminLogEventActionParticipantJoinByInvite`,
      flags: t,
      viaChatlist: !!(t & 1),
      invite: e.object(),
    };
  },
  1515256996: function (e) {
    return {
      _: `channelAdminLogEventActionExportedInviteDelete`,
      invite: e.object(),
    };
  },
  1091179342: function (e) {
    return {
      _: `channelAdminLogEventActionExportedInviteRevoke`,
      invite: e.object(),
    };
  },
  3910056793: function (e) {
    return {
      _: `channelAdminLogEventActionExportedInviteEdit`,
      prevInvite: e.object(),
      newInvite: e.object(),
    };
  },
  1048537159: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantVolume`,
      participant: e.object(),
    };
  },
  1855199800: function (e) {
    return {
      _: `channelAdminLogEventActionChangeHistoryTTL`,
      prevValue: e.int(),
      newValue: e.int(),
    };
  },
  2947945546: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantJoinByRequest`,
      invite: e.object(),
      approvedBy: e.long(),
    };
  },
  3408578406: function (e) {
    return {
      _: `channelAdminLogEventActionToggleNoForwards`,
      newValue: e.boolean(),
    };
  },
  663693416: function (e) {
    return { _: `channelAdminLogEventActionSendMessage`, message: e.object() };
  },
  3192786680: function (e) {
    return {
      _: `channelAdminLogEventActionChangeAvailableReactions`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  4031755177: function (e) {
    return {
      _: `channelAdminLogEventActionChangeUsernames`,
      prevValue: e.vector(e.string),
      newValue: e.vector(e.string),
    };
  },
  46949251: function (e) {
    return {
      _: `channelAdminLogEventActionToggleForum`,
      newValue: e.boolean(),
    };
  },
  1483767080: function (e) {
    return { _: `channelAdminLogEventActionCreateTopic`, topic: e.object() };
  },
  4033864200: function (e) {
    return {
      _: `channelAdminLogEventActionEditTopic`,
      prevTopic: e.object(),
      newTopic: e.object(),
    };
  },
  2920712457: function (e) {
    return { _: `channelAdminLogEventActionDeleteTopic`, topic: e.object() };
  },
  1569535291: function (e) {
    var t = e.uint();
    return {
      _: `channelAdminLogEventActionPinTopic`,
      flags: t,
      prevTopic: t & 1 ? e.object() : void 0,
      newTopic: t & 2 ? e.object() : void 0,
    };
  },
  1693675004: function (e) {
    return {
      _: `channelAdminLogEventActionToggleAntiSpam`,
      newValue: e.boolean(),
    };
  },
  1469507456: function (e) {
    return {
      _: `channelAdminLogEventActionChangePeerColor`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  1581742885: function (e) {
    return {
      _: `channelAdminLogEventActionChangeProfilePeerColor`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  834362706: function (e) {
    return {
      _: `channelAdminLogEventActionChangeWallpaper`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  1051328177: function (e) {
    return {
      _: `channelAdminLogEventActionChangeEmojiStatus`,
      prevValue: e.object(),
      newValue: e.object(),
    };
  },
  1188577451: function (e) {
    return {
      _: `channelAdminLogEventActionChangeEmojiStickerSet`,
      prevStickerset: e.object(),
      newStickerset: e.object(),
    };
  },
  1621597305: function (e) {
    return {
      _: `channelAdminLogEventActionToggleSignatureProfiles`,
      newValue: e.boolean(),
    };
  },
  1684286899: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantSubExtend`,
      prevParticipant: e.object(),
      newParticipant: e.object(),
    };
  },
  3306682238: function (e) {
    return {
      _: `channelAdminLogEventActionToggleAutotranslation`,
      newValue: e.boolean(),
    };
  },
  1476834540: function (e) {
    return {
      _: `channelAdminLogEventActionParticipantEditRank`,
      userId: e.long(),
      prevRank: e.string(),
      newRank: e.string(),
    };
  },
  531458253: function (e) {
    return {
      _: `channelAdminLogEvent`,
      id: e.long(),
      date: e.int(),
      userId: e.long(),
      action: e.object(),
    };
  },
  3985307469: function (e) {
    return {
      _: `channels.adminLogResults`,
      events: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3926948580: function (e) {
    var t = e.uint();
    return {
      _: `channelAdminLogEventsFilter`,
      flags: t,
      join: !!(t & 1),
      leave: !!(t & 2),
      invite: !!(t & 4),
      ban: !!(t & 8),
      unban: !!(t & 16),
      kick: !!(t & 32),
      unkick: !!(t & 64),
      promote: !!(t & 128),
      demote: !!(t & 256),
      info: !!(t & 512),
      settings: !!(t & 1024),
      pinned: !!(t & 2048),
      edit: !!(t & 4096),
      delete: !!(t & 8192),
      groupCall: !!(t & 16384),
      invites: !!(t & 32768),
      send: !!(t & 65536),
      forums: !!(t & 131072),
      subExtend: !!(t & 262144),
      editRank: !!(t & 524288),
    };
  },
  1558266229: function (e) {
    return { _: `popularContact`, clientId: e.long(), importers: e.int() };
  },
  2660214483: function (e) {
    return { _: `messages.favedStickersNotModified` };
  },
  750063767: function (e) {
    return {
      _: `messages.favedStickers`,
      hash: e.long(),
      packs: e.vector(e.object),
      stickers: e.vector(e.object),
    };
  },
  1189204285: function (e) {
    return { _: `recentMeUrlUnknown`, url: e.string() };
  },
  3106671074: function (e) {
    return { _: `recentMeUrlUser`, url: e.string(), userId: e.long() };
  },
  3000660434: function (e) {
    return { _: `recentMeUrlChat`, url: e.string(), chatId: e.long() };
  },
  3947431965: function (e) {
    return {
      _: `recentMeUrlChatInvite`,
      url: e.string(),
      chatInvite: e.object(),
    };
  },
  3154794460: function (e) {
    return { _: `recentMeUrlStickerSet`, url: e.string(), set: e.object() };
  },
  235081943: function (e) {
    return {
      _: `help.recentMeUrls`,
      urls: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  482797855: function (e) {
    var t = e.uint();
    return {
      _: `inputSingleMedia`,
      flags: t,
      media: e.object(),
      randomId: e.long(),
      message: e.string(),
      entities: t & 1 ? e.vector(e.object) : void 0,
    };
  },
  2801333330: function (e) {
    return {
      _: `webAuthorization`,
      hash: e.long(),
      botId: e.long(),
      domain: e.string(),
      browser: e.string(),
      platform: e.string(),
      dateCreated: e.int(),
      dateActive: e.int(),
      ip: e.string(),
      region: e.string(),
    };
  },
  3981887996: function (e) {
    return {
      _: `account.webAuthorizations`,
      authorizations: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2792792866: function (e) {
    return { _: `inputMessageID`, id: e.int() };
  },
  3134751637: function (e) {
    return { _: `inputMessageReplyTo`, id: e.int() };
  },
  2257003832: function (e) {
    return { _: `inputMessagePinned` };
  },
  2902071934: function (e) {
    return { _: `inputMessageCallbackQuery`, id: e.int(), queryId: e.long() };
  },
  4239064759: function (e) {
    return { _: `inputDialogPeer`, peer: e.object() };
  },
  1684014375: function (e) {
    return { _: `inputDialogPeerFolder`, folderId: e.int() };
  },
  3849174789: function (e) {
    return { _: `dialogPeer`, peer: e.object() };
  },
  1363483106: function (e) {
    return { _: `dialogPeerFolder`, folderId: e.int() };
  },
  223655517: function (e) {
    return { _: `messages.foundStickerSetsNotModified` };
  },
  2331024850: function (e) {
    return {
      _: `messages.foundStickerSets`,
      hash: e.long(),
      sets: e.vector(e.object),
    };
  },
  4087022428: function (e) {
    return { _: `fileHash`, offset: e.long(), limit: e.int(), hash: e.bytes() };
  },
  1968737087: function (e) {
    return { _: `inputClientProxy`, address: e.string(), port: e.int() };
  },
  3811614591: function (e) {
    return { _: `help.termsOfServiceUpdateEmpty`, expires: e.int() };
  },
  686618977: function (e) {
    return {
      _: `help.termsOfServiceUpdate`,
      expires: e.int(),
      termsOfService: e.object(),
    };
  },
  859091184: function (e) {
    return {
      _: `inputSecureFileUploaded`,
      id: e.long(),
      parts: e.int(),
      md5Checksum: e.string(),
      fileHash: e.bytes(),
      secret: e.bytes(),
    };
  },
  1399317950: function (e) {
    return { _: `inputSecureFile`, id: e.long(), accessHash: e.long() };
  },
  1679398724: function (e) {
    return { _: `secureFileEmpty` };
  },
  2097791614: function (e) {
    return {
      _: `secureFile`,
      id: e.long(),
      accessHash: e.long(),
      size: e.long(),
      dcId: e.int(),
      date: e.int(),
      fileHash: e.bytes(),
      secret: e.bytes(),
    };
  },
  2330640067: function (e) {
    return {
      _: `secureData`,
      data: e.bytes(),
      dataHash: e.bytes(),
      secret: e.bytes(),
    };
  },
  2103482845: function (e) {
    return { _: `securePlainPhone`, phone: e.string() };
  },
  569137759: function (e) {
    return { _: `securePlainEmail`, email: e.string() };
  },
  2636808675: function (e) {
    return { _: `secureValueTypePersonalDetails` };
  },
  1034709504: function (e) {
    return { _: `secureValueTypePassport` };
  },
  115615172: function (e) {
    return { _: `secureValueTypeDriverLicense` };
  },
  2698015819: function (e) {
    return { _: `secureValueTypeIdentityCard` };
  },
  2577698595: function (e) {
    return { _: `secureValueTypeInternalPassport` };
  },
  3420659238: function (e) {
    return { _: `secureValueTypeAddress` };
  },
  4231435598: function (e) {
    return { _: `secureValueTypeUtilityBill` };
  },
  2299755533: function (e) {
    return { _: `secureValueTypeBankStatement` };
  },
  2340959368: function (e) {
    return { _: `secureValueTypeRentalAgreement` };
  },
  2581823594: function (e) {
    return { _: `secureValueTypePassportRegistration` };
  },
  3926060083: function (e) {
    return { _: `secureValueTypeTemporaryRegistration` };
  },
  3005262555: function (e) {
    return { _: `secureValueTypePhone` };
  },
  2386339822: function (e) {
    return { _: `secureValueTypeEmail` };
  },
  411017418: function (e) {
    var t = e.uint();
    return {
      _: `secureValue`,
      flags: t,
      type: e.object(),
      data: t & 1 ? e.object() : void 0,
      frontSide: t & 2 ? e.object() : void 0,
      reverseSide: t & 4 ? e.object() : void 0,
      selfie: t & 8 ? e.object() : void 0,
      translation: t & 64 ? e.vector(e.object) : void 0,
      files: t & 16 ? e.vector(e.object) : void 0,
      plainData: t & 32 ? e.object() : void 0,
      hash: e.bytes(),
    };
  },
  3676426407: function (e) {
    var t = e.uint();
    return {
      _: `inputSecureValue`,
      flags: t,
      type: e.object(),
      data: t & 1 ? e.object() : void 0,
      frontSide: t & 2 ? e.object() : void 0,
      reverseSide: t & 4 ? e.object() : void 0,
      selfie: t & 8 ? e.object() : void 0,
      translation: t & 64 ? e.vector(e.object) : void 0,
      files: t & 16 ? e.vector(e.object) : void 0,
      plainData: t & 32 ? e.object() : void 0,
    };
  },
  3978218928: function (e) {
    return { _: `secureValueHash`, type: e.object(), hash: e.bytes() };
  },
  3903065049: function (e) {
    return {
      _: `secureValueErrorData`,
      type: e.object(),
      dataHash: e.bytes(),
      field: e.string(),
      text: e.string(),
    };
  },
  12467706: function (e) {
    return {
      _: `secureValueErrorFrontSide`,
      type: e.object(),
      fileHash: e.bytes(),
      text: e.string(),
    };
  },
  2257201829: function (e) {
    return {
      _: `secureValueErrorReverseSide`,
      type: e.object(),
      fileHash: e.bytes(),
      text: e.string(),
    };
  },
  3845639894: function (e) {
    return {
      _: `secureValueErrorSelfie`,
      type: e.object(),
      fileHash: e.bytes(),
      text: e.string(),
    };
  },
  2054162547: function (e) {
    return {
      _: `secureValueErrorFile`,
      type: e.object(),
      fileHash: e.bytes(),
      text: e.string(),
    };
  },
  1717706985: function (e) {
    return {
      _: `secureValueErrorFiles`,
      type: e.object(),
      fileHash: e.vector(e.bytes),
      text: e.string(),
    };
  },
  2258466191: function (e) {
    return {
      _: `secureValueError`,
      type: e.object(),
      hash: e.bytes(),
      text: e.string(),
    };
  },
  2702460784: function (e) {
    return {
      _: `secureValueErrorTranslationFile`,
      type: e.object(),
      fileHash: e.bytes(),
      text: e.string(),
    };
  },
  878931416: function (e) {
    return {
      _: `secureValueErrorTranslationFiles`,
      type: e.object(),
      fileHash: e.vector(e.bytes),
      text: e.string(),
    };
  },
  871426631: function (e) {
    return {
      _: `secureCredentialsEncrypted`,
      data: e.bytes(),
      hash: e.bytes(),
      secret: e.bytes(),
    };
  },
  2905480408: function (e) {
    var t = e.uint();
    return {
      _: `account.authorizationForm`,
      flags: t,
      requiredTypes: e.vector(e.object),
      values: e.vector(e.object),
      errors: e.vector(e.object),
      users: e.vector(e.object),
      privacyPolicyUrl: t & 1 ? e.string() : void 0,
    };
  },
  2166326607: function (e) {
    return {
      _: `account.sentEmailCode`,
      emailPattern: e.string(),
      length: e.int(),
    };
  },
  1722786150: function (e) {
    return { _: `help.deepLinkInfoEmpty` };
  },
  1783556146: function (e) {
    var t = e.uint();
    return {
      _: `help.deepLinkInfo`,
      flags: t,
      updateApp: !!(t & 1),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
    };
  },
  289586518: function (e) {
    return {
      _: `savedPhoneContact`,
      phone: e.string(),
      firstName: e.string(),
      lastName: e.string(),
      date: e.int(),
    };
  },
  1304052993: function (e) {
    return { _: `account.takeout`, id: e.long() };
  },
  3562713238: function (e) {
    return { _: `passwordKdfAlgoUnknown` };
  },
  982592842: function (e) {
    return {
      _: `passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow`,
      salt1: e.bytes(),
      salt2: e.bytes(),
      g: e.int(),
      p: e.bytes(),
    };
  },
  4883767: function (e) {
    return { _: `securePasswordKdfAlgoUnknown` };
  },
  3153255840: function (e) {
    return {
      _: `securePasswordKdfAlgoPBKDF2HMACSHA512iter100000`,
      salt: e.bytes(),
    };
  },
  2252807570: function (e) {
    return { _: `securePasswordKdfAlgoSHA512`, salt: e.bytes() };
  },
  354925740: function (e) {
    return {
      _: `secureSecretSettings`,
      secureAlgo: e.object(),
      secureSecret: e.bytes(),
      secureSecretId: e.long(),
    };
  },
  2558588504: function (e) {
    return { _: `inputCheckPasswordEmpty` };
  },
  3531600002: function (e) {
    return {
      _: `inputCheckPasswordSRP`,
      srpId: e.long(),
      A: e.bytes(),
      M1: e.bytes(),
    };
  },
  2191366618: function (e) {
    var t = e.uint();
    return {
      _: `secureRequiredType`,
      flags: t,
      nativeNames: !!(t & 1),
      selfieRequired: !!(t & 2),
      translationRequired: !!(t & 4),
      type: e.object(),
    };
  },
  41187252: function (e) {
    return { _: `secureRequiredTypeOneOf`, types: e.vector(e.object) };
  },
  3216634967: function (e) {
    return { _: `help.passportConfigNotModified` };
  },
  2694370991: function (e) {
    return {
      _: `help.passportConfig`,
      hash: e.int(),
      countriesLangs: e.object(),
    };
  },
  488313413: function (e) {
    return {
      _: `inputAppEvent`,
      time: e.double(),
      type: e.string(),
      peer: e.long(),
      data: e.object(),
    };
  },
  3235781593: function (e) {
    return { _: `jsonObjectValue`, key: e.string(), value: e.object() };
  },
  1064139624: function (e) {
    return { _: `jsonNull` };
  },
  3342098026: function (e) {
    return { _: `jsonBool`, value: e.boolean() };
  },
  736157604: function (e) {
    return { _: `jsonNumber`, value: e.double() };
  },
  3072226938: function (e) {
    return { _: `jsonString`, value: e.string() };
  },
  4148447075: function (e) {
    return { _: `jsonArray`, value: e.vector(e.object) };
  },
  2579616925: function (e) {
    return { _: `jsonObject`, value: e.vector(e.object) };
  },
  878078826: function (e) {
    var t = e.uint();
    return {
      _: `pageTableCell`,
      flags: t,
      header: !!(t & 1),
      alignCenter: !!(t & 8),
      alignRight: !!(t & 16),
      valignMiddle: !!(t & 32),
      valignBottom: !!(t & 64),
      text: t & 128 ? e.object() : void 0,
      colspan: t & 2 ? e.int() : void 0,
      rowspan: t & 4 ? e.int() : void 0,
    };
  },
  3770729957: function (e) {
    return { _: `pageTableRow`, cells: e.vector(e.object) };
  },
  1869903447: function (e) {
    return { _: `pageCaption`, text: e.object(), credit: e.object() };
  },
  3106911949: function (e) {
    return { _: `pageListItemText`, text: e.object() };
  },
  635466748: function (e) {
    return { _: `pageListItemBlocks`, blocks: e.vector(e.object) };
  },
  1577484359: function (e) {
    return { _: `pageListOrderedItemText`, num: e.string(), text: e.object() };
  },
  2564655414: function (e) {
    return {
      _: `pageListOrderedItemBlocks`,
      num: e.string(),
      blocks: e.vector(e.object),
    };
  },
  3012615176: function (e) {
    var t = e.uint();
    return {
      _: `pageRelatedArticle`,
      flags: t,
      url: e.string(),
      webpageId: e.long(),
      title: t & 1 ? e.string() : void 0,
      description: t & 2 ? e.string() : void 0,
      photoId: t & 4 ? e.long() : void 0,
      author: t & 8 ? e.string() : void 0,
      publishedDate: t & 16 ? e.int() : void 0,
    };
  },
  2556788493: function (e) {
    var t = e.uint();
    return {
      _: `page`,
      flags: t,
      part: !!(t & 1),
      rtl: !!(t & 2),
      v2: !!(t & 4),
      url: e.string(),
      blocks: e.vector(e.object),
      photos: e.vector(e.object),
      documents: e.vector(e.object),
      views: t & 8 ? e.int() : void 0,
    };
  },
  2349199817: function (e) {
    return { _: `help.supportName`, name: e.string() };
  },
  4088278765: function (e) {
    return { _: `help.userInfoEmpty` };
  },
  32192344: function (e) {
    return {
      _: `help.userInfo`,
      message: e.string(),
      entities: e.vector(e.object),
      author: e.string(),
      date: e.int(),
    };
  },
  1266514026: function (e) {
    var t = e.uint();
    return {
      _: `pollAnswer`,
      flags: t,
      text: e.object(),
      option: e.bytes(),
      media: t & 1 ? e.object() : void 0,
      addedBy: t & 2 ? e.object() : void 0,
      date: t & 2 ? e.int() : void 0,
    };
  },
  429911446: function (e) {
    var t = e.uint();
    return {
      _: `inputPollAnswer`,
      flags: t,
      text: e.object(),
      media: t & 1 ? e.object() : void 0,
    };
  },
  3091356649: function (e) {
    var t = e.long(),
      n = e.uint();
    return {
      _: `poll`,
      id: t,
      flags: n,
      closed: !!(n & 1),
      publicVoters: !!(n & 2),
      multipleChoice: !!(n & 4),
      quiz: !!(n & 8),
      openAnswers: !!(n & 64),
      revotingDisabled: !!(n & 128),
      shuffleAnswers: !!(n & 256),
      hideResultsUntilClose: !!(n & 512),
      creator: !!(n & 1024),
      question: e.object(),
      answers: e.vector(e.object),
      closePeriod: n & 16 ? e.int() : void 0,
      closeDate: n & 32 ? e.int() : void 0,
      hash: e.long(),
    };
  },
  910500618: function (e) {
    var t = e.uint();
    return {
      _: `pollAnswerVoters`,
      flags: t,
      chosen: !!(t & 1),
      correct: !!(t & 2),
      option: e.bytes(),
      voters: t & 4 ? e.int() : void 0,
      recentVoters: t & 4 ? e.vector(e.object) : void 0,
    };
  },
  3128668510: function (e) {
    var t = e.uint();
    return {
      _: `pollResults`,
      flags: t,
      min: !!(t & 1),
      hasUnreadVotes: !!(t & 64),
      results: t & 2 ? e.vector(e.object) : void 0,
      totalVoters: t & 4 ? e.int() : void 0,
      recentVoters: t & 8 ? e.vector(e.object) : void 0,
      solution: t & 16 ? e.string() : void 0,
      solutionEntities: t & 16 ? e.vector(e.object) : void 0,
      solutionMedia: t & 32 ? e.object() : void 0,
    };
  },
  4030849616: function (e) {
    return { _: `chatOnlines`, onlines: e.int() };
  },
  1202287072: function (e) {
    return { _: `statsURL`, url: e.string() };
  },
  1605510357: function (e) {
    var t = e.uint();
    return {
      _: `chatAdminRights`,
      flags: t,
      changeInfo: !!(t & 1),
      postMessages: !!(t & 2),
      editMessages: !!(t & 4),
      deleteMessages: !!(t & 8),
      banUsers: !!(t & 16),
      inviteUsers: !!(t & 32),
      pinMessages: !!(t & 128),
      addAdmins: !!(t & 512),
      anonymous: !!(t & 1024),
      manageCall: !!(t & 2048),
      other: !!(t & 4096),
      manageTopics: !!(t & 8192),
      postStories: !!(t & 16384),
      editStories: !!(t & 32768),
      deleteStories: !!(t & 65536),
      manageDirectMessages: !!(t & 131072),
      manageRanks: !!(t & 262144),
    };
  },
  2668758040: function (e) {
    var t = e.uint();
    return {
      _: `chatBannedRights`,
      flags: t,
      viewMessages: !!(t & 1),
      sendMessages: !!(t & 2),
      sendMedia: !!(t & 4),
      sendStickers: !!(t & 8),
      sendGifs: !!(t & 16),
      sendGames: !!(t & 32),
      sendInline: !!(t & 64),
      embedLinks: !!(t & 128),
      sendPolls: !!(t & 256),
      changeInfo: !!(t & 1024),
      inviteUsers: !!(t & 32768),
      pinMessages: !!(t & 131072),
      manageTopics: !!(t & 262144),
      sendPhotos: !!(t & 524288),
      sendVideos: !!(t & 1048576),
      sendRoundvideos: !!(t & 2097152),
      sendAudios: !!(t & 4194304),
      sendVoices: !!(t & 8388608),
      sendDocs: !!(t & 16777216),
      sendPlain: !!(t & 33554432),
      editRank: !!(t & 67108864),
      untilDate: e.int(),
    };
  },
  3861952889: function (e) {
    return { _: `inputWallPaper`, id: e.long(), accessHash: e.long() };
  },
  1913199744: function (e) {
    return { _: `inputWallPaperSlug`, slug: e.string() };
  },
  2524595758: function (e) {
    return { _: `inputWallPaperNoFile`, id: e.long() };
  },
  471437699: function (e) {
    return { _: `account.wallPapersNotModified` };
  },
  3452142988: function (e) {
    return {
      _: `account.wallPapers`,
      hash: e.long(),
      wallpapers: e.vector(e.object),
    };
  },
  2904898936: function (e) {
    var t = e.uint();
    return {
      _: `codeSettings`,
      flags: t,
      allowFlashcall: !!(t & 1),
      currentNumber: !!(t & 2),
      allowAppHash: !!(t & 16),
      allowMissedCall: !!(t & 32),
      allowFirebase: !!(t & 128),
      unknownNumber: !!(t & 512),
      logoutTokens: t & 64 ? e.vector(e.bytes) : void 0,
      token: t & 256 ? e.string() : void 0,
      appSandbox: t & 256 ? e.boolean() : void 0,
    };
  },
  925826256: function (e) {
    var t = e.uint();
    return {
      _: `wallPaperSettings`,
      flags: t,
      blur: !!(t & 2),
      motion: !!(t & 4),
      backgroundColor: t & 1 ? e.int() : void 0,
      secondBackgroundColor: t & 16 ? e.int() : void 0,
      thirdBackgroundColor: t & 32 ? e.int() : void 0,
      fourthBackgroundColor: t & 64 ? e.int() : void 0,
      intensity: t & 8 ? e.int() : void 0,
      rotation: t & 16 ? e.int() : void 0,
      emoticon: t & 128 ? e.string() : void 0,
    };
  },
  3131405864: function (e) {
    var t = e.uint();
    return {
      _: `autoDownloadSettings`,
      flags: t,
      disabled: !!(t & 1),
      videoPreloadLarge: !!(t & 2),
      audioPreloadNext: !!(t & 4),
      phonecallsLessData: !!(t & 8),
      storiesPreload: !!(t & 16),
      photoSizeMax: e.int(),
      videoSizeMax: e.long(),
      fileSizeMax: e.long(),
      videoUploadMaxbitrate: e.int(),
      smallQueueActiveOperationsMax: e.int(),
      largeQueueActiveOperationsMax: e.int(),
    };
  },
  1674235686: function (e) {
    return {
      _: `account.autoDownloadSettings`,
      low: e.object(),
      medium: e.object(),
      high: e.object(),
    };
  },
  3585325561: function (e) {
    return {
      _: `emojiKeyword`,
      keyword: e.string(),
      emoticons: e.vector(e.string),
    };
  },
  594408994: function (e) {
    return {
      _: `emojiKeywordDeleted`,
      keyword: e.string(),
      emoticons: e.vector(e.string),
    };
  },
  1556570557: function (e) {
    return {
      _: `emojiKeywordsDifference`,
      langCode: e.string(),
      fromVersion: e.int(),
      version: e.int(),
      keywords: e.vector(e.object),
    };
  },
  2775937949: function (e) {
    return { _: `emojiURL`, url: e.string() };
  },
  3019592545: function (e) {
    return { _: `emojiLanguage`, langCode: e.string() };
  },
  4283715173: function (e) {
    var t = e.uint();
    return {
      _: `folder`,
      flags: t,
      autofillNewBroadcasts: !!(t & 1),
      autofillPublicGroups: !!(t & 2),
      autofillNewCorrespondents: !!(t & 4),
      id: e.int(),
      title: e.string(),
      photo: t & 8 ? e.object() : void 0,
    };
  },
  4224893590: function (e) {
    return { _: `inputFolderPeer`, peer: e.object(), folderId: e.int() };
  },
  3921323624: function (e) {
    return { _: `folderPeer`, peer: e.object(), folderId: e.int() };
  },
  3896830975: function (e) {
    var t = e.uint();
    return {
      _: `messages.searchCounter`,
      flags: t,
      inexact: !!(t & 2),
      filter: e.object(),
      count: e.int(),
    };
  },
  1020666860: function (e) {
    var t = e.uint();
    return {
      _: `urlAuthResultRequest`,
      flags: t,
      requestWriteAccess: !!(t & 1),
      requestPhoneNumber: !!(t & 2),
      matchCodesFirst: !!(t & 32),
      isApp: !!(t & 64),
      bot: e.object(),
      domain: e.string(),
      browser: t & 4 ? e.string() : void 0,
      platform: t & 4 ? e.string() : void 0,
      ip: t & 4 ? e.string() : void 0,
      region: t & 4 ? e.string() : void 0,
      matchCodes: t & 8 ? e.vector(e.string) : void 0,
      userIdHint: t & 16 ? e.long() : void 0,
      verifiedAppName: t & 128 ? e.string() : void 0,
    };
  },
  1648005024: function (e) {
    var t = e.uint();
    return {
      _: `urlAuthResultAccepted`,
      flags: t,
      url: t & 1 ? e.string() : void 0,
    };
  },
  2849430303: function (e) {
    return { _: `urlAuthResultDefault` };
  },
  3216354699: function (e) {
    return { _: `channelLocationEmpty` };
  },
  547062491: function (e) {
    return { _: `channelLocation`, geoPoint: e.object(), address: e.string() };
  },
  3393592157: function (e) {
    return {
      _: `peerLocated`,
      peer: e.object(),
      expires: e.int(),
      distance: e.int(),
    };
  },
  4176226379: function (e) {
    return { _: `peerSelfLocated`, expires: e.int() };
  },
  3497176244: function (e) {
    return {
      _: `restrictionReason`,
      platform: e.string(),
      reason: e.string(),
      text: e.string(),
    };
  },
  1012306921: function (e) {
    return { _: `inputTheme`, id: e.long(), accessHash: e.long() };
  },
  4119399921: function (e) {
    return { _: `inputThemeSlug`, slug: e.string() };
  },
  2685298646: function (e) {
    var t = e.uint();
    return {
      _: `theme`,
      flags: t,
      creator: !!(t & 1),
      default: !!(t & 2),
      forChat: !!(t & 32),
      id: e.long(),
      accessHash: e.long(),
      slug: e.string(),
      title: e.string(),
      document: t & 4 ? e.object() : void 0,
      settings: t & 8 ? e.vector(e.object) : void 0,
      emoticon: t & 64 ? e.string() : void 0,
      installsCount: t & 16 ? e.int() : void 0,
    };
  },
  4095653410: function (e) {
    return { _: `account.themesNotModified` };
  },
  2587724909: function (e) {
    return { _: `account.themes`, hash: e.long(), themes: e.vector(e.object) };
  },
  1654593920: function (e) {
    return { _: `auth.loginToken`, expires: e.int(), token: e.bytes() };
  },
  110008598: function (e) {
    return { _: `auth.loginTokenMigrateTo`, dcId: e.int(), token: e.bytes() };
  },
  957176926: function (e) {
    return { _: `auth.loginTokenSuccess`, authorization: e.object() };
  },
  1474462241: function (e) {
    var t = e.uint();
    return {
      _: `account.contentSettings`,
      flags: t,
      sensitiveEnabled: !!(t & 1),
      sensitiveCanChange: !!(t & 2),
    };
  },
  2837970629: function (e) {
    return {
      _: `messages.inactiveChats`,
      dates: e.vector(e.int),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3282117730: function (e) {
    return { _: `baseThemeClassic` };
  },
  4225242760: function (e) {
    return { _: `baseThemeDay` };
  },
  3081969320: function (e) {
    return { _: `baseThemeNight` };
  },
  1834973166: function (e) {
    return { _: `baseThemeTinted` };
  },
  1527845466: function (e) {
    return { _: `baseThemeArctic` };
  },
  2413711439: function (e) {
    var t = e.uint();
    return {
      _: `inputThemeSettings`,
      flags: t,
      messageColorsAnimated: !!(t & 4),
      baseTheme: e.object(),
      accentColor: e.int(),
      outboxAccentColor: t & 8 ? e.int() : void 0,
      messageColors: t & 1 ? e.vector(e.int) : void 0,
      wallpaper: t & 2 ? e.object() : void 0,
      wallpaperSettings: t & 2 ? e.object() : void 0,
    };
  },
  4200117972: function (e) {
    var t = e.uint();
    return {
      _: `themeSettings`,
      flags: t,
      messageColorsAnimated: !!(t & 4),
      baseTheme: e.object(),
      accentColor: e.int(),
      outboxAccentColor: t & 8 ? e.int() : void 0,
      messageColors: t & 1 ? e.vector(e.int) : void 0,
      wallpaper: t & 2 ? e.object() : void 0,
    };
  },
  1421174295: function (e) {
    var t = e.uint();
    return {
      _: `webPageAttributeTheme`,
      flags: t,
      documents: t & 1 ? e.vector(e.object) : void 0,
      settings: t & 2 ? e.object() : void 0,
    };
  },
  781501415: function (e) {
    var t = e.uint();
    return {
      _: `webPageAttributeStory`,
      flags: t,
      peer: e.object(),
      id: e.int(),
      story: t & 1 ? e.object() : void 0,
    };
  },
  1355547603: function (e) {
    var t = e.uint();
    return {
      _: `webPageAttributeStickerSet`,
      flags: t,
      emojis: !!(t & 1),
      textColor: !!(t & 2),
      stickers: e.vector(e.object),
    };
  },
  3480186296: function (e) {
    return { _: `webPageAttributeUniqueStarGift`, gift: e.object() };
  },
  835375875: function (e) {
    return {
      _: `webPageAttributeStarGiftCollection`,
      icons: e.vector(e.object),
    };
  },
  29770178: function (e) {
    return {
      _: `webPageAttributeStarGiftAuction`,
      gift: e.object(),
      endDate: e.int(),
    };
  },
  1218005070: function (e) {
    var t = e.uint();
    return {
      _: `messages.votesList`,
      flags: t,
      count: e.int(),
      votes: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  4117234314: function (e) {
    return { _: `bankCardOpenUrl`, url: e.string(), name: e.string() };
  },
  1042605427: function (e) {
    return {
      _: `payments.bankCardData`,
      title: e.string(),
      openUrls: e.vector(e.object),
    };
  },
  2856789585: function (e) {
    var t = e.uint();
    return {
      _: `dialogFilter`,
      flags: t,
      contacts: !!(t & 1),
      nonContacts: !!(t & 2),
      groups: !!(t & 4),
      broadcasts: !!(t & 8),
      bots: !!(t & 16),
      excludeMuted: !!(t & 2048),
      excludeRead: !!(t & 4096),
      excludeArchived: !!(t & 8192),
      titleNoanimate: !!(t & 268435456),
      id: e.int(),
      title: e.object(),
      emoticon: t & 33554432 ? e.string() : void 0,
      color: t & 134217728 ? e.int() : void 0,
      pinnedPeers: e.vector(e.object),
      includePeers: e.vector(e.object),
      excludePeers: e.vector(e.object),
    };
  },
  909284270: function (e) {
    return { _: `dialogFilterDefault` };
  },
  2522053591: function (e) {
    var t = e.uint();
    return {
      _: `dialogFilterChatlist`,
      flags: t,
      hasMyInvites: !!(t & 67108864),
      titleNoanimate: !!(t & 268435456),
      id: e.int(),
      title: e.object(),
      emoticon: t & 33554432 ? e.string() : void 0,
      color: t & 134217728 ? e.int() : void 0,
      pinnedPeers: e.vector(e.object),
      includePeers: e.vector(e.object),
    };
  },
  2004110666: function (e) {
    return {
      _: `dialogFilterSuggested`,
      filter: e.object(),
      description: e.string(),
    };
  },
  3057118639: function (e) {
    return { _: `statsDateRangeDays`, minDate: e.int(), maxDate: e.int() };
  },
  3410210014: function (e) {
    return {
      _: `statsAbsValueAndPrev`,
      current: e.double(),
      previous: e.double(),
    };
  },
  3419287520: function (e) {
    return { _: `statsPercentValue`, part: e.double(), total: e.double() };
  },
  1244130093: function (e) {
    return { _: `statsGraphAsync`, token: e.string() };
  },
  3202127906: function (e) {
    return { _: `statsGraphError`, error: e.string() };
  },
  2393138358: function (e) {
    var t = e.uint();
    return {
      _: `statsGraph`,
      flags: t,
      json: e.object(),
      zoomToken: t & 1 ? e.string() : void 0,
    };
  },
  963421692: function (e) {
    return {
      _: `stats.broadcastStats`,
      period: e.object(),
      followers: e.object(),
      viewsPerPost: e.object(),
      sharesPerPost: e.object(),
      reactionsPerPost: e.object(),
      viewsPerStory: e.object(),
      sharesPerStory: e.object(),
      reactionsPerStory: e.object(),
      enabledNotifications: e.object(),
      growthGraph: e.object(),
      followersGraph: e.object(),
      muteGraph: e.object(),
      topHoursGraph: e.object(),
      interactionsGraph: e.object(),
      ivInteractionsGraph: e.object(),
      viewsBySourceGraph: e.object(),
      newFollowersBySourceGraph: e.object(),
      languagesGraph: e.object(),
      reactionsByEmotionGraph: e.object(),
      storyInteractionsGraph: e.object(),
      storyReactionsByEmotionGraph: e.object(),
      recentPostsInteractions: e.vector(e.object),
    };
  },
  2566302837: function (e) {
    return { _: `help.promoDataEmpty`, expires: e.int() };
  },
  145021050: function (e) {
    var t = e.uint();
    return {
      _: `help.promoData`,
      flags: t,
      proxy: !!(t & 1),
      expires: e.int(),
      peer: t & 8 ? e.object() : void 0,
      psaType: t & 2 ? e.string() : void 0,
      psaMessage: t & 4 ? e.string() : void 0,
      pendingSuggestions: e.vector(e.string),
      dismissedSuggestions: e.vector(e.string),
      customPendingSuggestion: t & 16 ? e.object() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3727929492: function (e) {
    var t = e.uint();
    return {
      _: `videoSize`,
      flags: t,
      type: e.string(),
      w: e.int(),
      h: e.int(),
      size: e.int(),
      videoStartTs: t & 1 ? e.double() : void 0,
    };
  },
  4166795580: function (e) {
    return {
      _: `videoSizeEmojiMarkup`,
      emojiId: e.long(),
      backgroundColors: e.vector(e.int),
    };
  },
  228623102: function (e) {
    return {
      _: `videoSizeStickerMarkup`,
      stickerset: e.object(),
      stickerId: e.long(),
      backgroundColors: e.vector(e.int),
    };
  },
  2634330011: function (e) {
    return {
      _: `statsGroupTopPoster`,
      userId: e.long(),
      messages: e.int(),
      avgChars: e.int(),
    };
  },
  3612888199: function (e) {
    return {
      _: `statsGroupTopAdmin`,
      userId: e.long(),
      deleted: e.int(),
      kicked: e.int(),
      banned: e.int(),
    };
  },
  1398765469: function (e) {
    return {
      _: `statsGroupTopInviter`,
      userId: e.long(),
      invitations: e.int(),
    };
  },
  4018141462: function (e) {
    return {
      _: `stats.megagroupStats`,
      period: e.object(),
      members: e.object(),
      messages: e.object(),
      viewers: e.object(),
      posters: e.object(),
      growthGraph: e.object(),
      membersGraph: e.object(),
      newMembersBySourceGraph: e.object(),
      languagesGraph: e.object(),
      messagesGraph: e.object(),
      actionsGraph: e.object(),
      topHoursGraph: e.object(),
      weekdaysGraph: e.object(),
      topPosters: e.vector(e.object),
      topAdmins: e.vector(e.object),
      topInviters: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4265718607: function (e) {
    var t = e.uint();
    return {
      _: `globalPrivacySettings`,
      flags: t,
      archiveAndMuteNewNoncontactPeers: !!(t & 1),
      keepArchivedUnmuted: !!(t & 2),
      keepArchivedFolders: !!(t & 4),
      hideReadMarks: !!(t & 8),
      newNoncontactPeersRequirePremium: !!(t & 16),
      displayGiftsButton: !!(t & 128),
      noncontactPeersPaidStars: t & 32 ? e.long() : void 0,
      disallowedGifts: t & 64 ? e.object() : void 0,
    };
  },
  1107543535: function (e) {
    var t = e.uint();
    return {
      _: `help.countryCode`,
      flags: t,
      countryCode: e.string(),
      prefixes: t & 1 ? e.vector(e.string) : void 0,
      patterns: t & 2 ? e.vector(e.string) : void 0,
    };
  },
  3280440867: function (e) {
    var t = e.uint();
    return {
      _: `help.country`,
      flags: t,
      hidden: !!(t & 1),
      iso2: e.string(),
      defaultName: e.string(),
      name: t & 2 ? e.string() : void 0,
      countryCodes: e.vector(e.object),
    };
  },
  2479628082: function (e) {
    return { _: `help.countriesListNotModified` };
  },
  2278585758: function (e) {
    return {
      _: `help.countriesList`,
      countries: e.vector(e.object),
      hash: e.int(),
    };
  },
  1163625789: function (e) {
    var t = e.uint();
    return {
      _: `messageViews`,
      flags: t,
      views: t & 1 ? e.int() : void 0,
      forwards: t & 2 ? e.int() : void 0,
      replies: t & 4 ? e.object() : void 0,
    };
  },
  3066361155: function (e) {
    return {
      _: `messages.messageViews`,
      views: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2788431746: function (e) {
    var t = e.uint();
    return {
      _: `messages.discussionMessage`,
      flags: t,
      messages: e.vector(e.object),
      maxId: t & 1 ? e.int() : void 0,
      readInboxMaxId: t & 2 ? e.int() : void 0,
      readOutboxMaxId: t & 4 ? e.int() : void 0,
      unreadCount: e.int(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  462937446: function (e) {
    var t = e.uint();
    return {
      _: `messageReplyHeader`,
      flags: t,
      replyToScheduled: !!(t & 4),
      forumTopic: !!(t & 8),
      quote: !!(t & 512),
      replyToMsgId: t & 16 ? e.int() : void 0,
      replyToPeerId: t & 1 ? e.object() : void 0,
      replyFrom: t & 32 ? e.object() : void 0,
      replyMedia: t & 256 ? e.object() : void 0,
      replyToTopId: t & 2 ? e.int() : void 0,
      quoteText: t & 64 ? e.string() : void 0,
      quoteEntities: t & 128 ? e.vector(e.object) : void 0,
      quoteOffset: t & 1024 ? e.int() : void 0,
      todoItemId: t & 2048 ? e.int() : void 0,
      pollOption: t & 4096 ? e.bytes() : void 0,
    };
  },
  240843065: function (e) {
    return { _: `messageReplyStoryHeader`, peer: e.object(), storyId: e.int() };
  },
  2211844034: function (e) {
    var t = e.uint();
    return {
      _: `messageReplies`,
      flags: t,
      comments: !!(t & 1),
      replies: e.int(),
      repliesPts: e.int(),
      recentRepliers: t & 2 ? e.vector(e.object) : void 0,
      channelId: t & 1 ? e.long() : void 0,
      maxId: t & 4 ? e.int() : void 0,
      readMaxId: t & 8 ? e.int() : void 0,
    };
  },
  3908927508: function (e) {
    return { _: `peerBlocked`, peerId: e.object(), date: e.int() };
  },
  2145983508: function (e) {
    return {
      _: `stats.messageStats`,
      viewsGraph: e.object(),
      reactionsByEmotionGraph: e.object(),
    };
  },
  2004925620: function (e) {
    return {
      _: `groupCallDiscarded`,
      id: e.long(),
      accessHash: e.long(),
      duration: e.int(),
    };
  },
  4021466647: function (e) {
    var t = e.uint();
    return {
      _: `groupCall`,
      flags: t,
      joinMuted: !!(t & 2),
      canChangeJoinMuted: !!(t & 4),
      joinDateAsc: !!(t & 64),
      scheduleStartSubscribed: !!(t & 256),
      canStartVideo: !!(t & 512),
      recordVideoActive: !!(t & 2048),
      rtmpStream: !!(t & 4096),
      listenersHidden: !!(t & 8192),
      conference: !!(t & 16384),
      creator: !!(t & 32768),
      messagesEnabled: !!(t & 131072),
      canChangeMessagesEnabled: !!(t & 262144),
      min: !!(t & 524288),
      id: e.long(),
      accessHash: e.long(),
      participantsCount: e.int(),
      title: t & 8 ? e.string() : void 0,
      streamDcId: t & 16 ? e.int() : void 0,
      recordStartDate: t & 32 ? e.int() : void 0,
      scheduleDate: t & 128 ? e.int() : void 0,
      unmutedVideoCount: t & 1024 ? e.int() : void 0,
      unmutedVideoLimit: e.int(),
      version: e.int(),
      inviteLink: t & 65536 ? e.string() : void 0,
      sendPaidMessagesStars: t & 1048576 ? e.long() : void 0,
      defaultSendAs: t & 2097152 ? e.object() : void 0,
    };
  },
  3635053583: function (e) {
    return { _: `inputGroupCall`, id: e.long(), accessHash: e.long() };
  },
  4261839423: function (e) {
    return { _: `inputGroupCallSlug`, slug: e.string() };
  },
  2349883455: function (e) {
    return { _: `inputGroupCallInviteMessage`, msgId: e.int() };
  },
  708691884: function (e) {
    var t = e.uint();
    return {
      _: `groupCallParticipant`,
      flags: t,
      muted: !!(t & 1),
      left: !!(t & 2),
      canSelfUnmute: !!(t & 4),
      justJoined: !!(t & 16),
      versioned: !!(t & 32),
      min: !!(t & 256),
      mutedByYou: !!(t & 512),
      volumeByAdmin: !!(t & 1024),
      self: !!(t & 4096),
      videoJoined: !!(t & 32768),
      peer: e.object(),
      date: e.int(),
      activeDate: t & 8 ? e.int() : void 0,
      source: e.int(),
      volume: t & 128 ? e.int() : void 0,
      about: t & 2048 ? e.string() : void 0,
      raiseHandRating: t & 8192 ? e.long() : void 0,
      video: t & 64 ? e.object() : void 0,
      presentation: t & 16384 ? e.object() : void 0,
      paidStarsTotal: t & 65536 ? e.long() : void 0,
    };
  },
  2658302637: function (e) {
    return {
      _: `phone.groupCall`,
      call: e.object(),
      participants: e.vector(e.object),
      participantsNextOffset: e.string(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4101460406: function (e) {
    return {
      _: `phone.groupParticipants`,
      count: e.int(),
      participants: e.vector(e.object),
      nextOffset: e.string(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      version: e.int(),
    };
  },
  813821341: function (e) {
    return { _: `inlineQueryPeerTypeSameBotPM` };
  },
  2201751468: function (e) {
    return { _: `inlineQueryPeerTypePM` };
  },
  3613836554: function (e) {
    return { _: `inlineQueryPeerTypeChat` };
  },
  1589952067: function (e) {
    return { _: `inlineQueryPeerTypeMegagroup` };
  },
  1664413338: function (e) {
    return { _: `inlineQueryPeerTypeBroadcast` };
  },
  238759180: function (e) {
    return { _: `inlineQueryPeerTypeBotPM` };
  },
  375566091: function (e) {
    return { _: `messages.historyImport`, id: e.long() };
  },
  1578088377: function (e) {
    var t = e.uint();
    return {
      _: `messages.historyImportParsed`,
      flags: t,
      pm: !!(t & 1),
      group: !!(t & 2),
      title: t & 4 ? e.string() : void 0,
    };
  },
  4019011180: function (e) {
    return {
      _: `messages.affectedFoundMessages`,
      pts: e.int(),
      ptsCount: e.int(),
      offset: e.int(),
      messages: e.vector(e.int),
    };
  },
  2354765785: function (e) {
    var t = e.uint();
    return {
      _: `chatInviteImporter`,
      flags: t,
      requested: !!(t & 1),
      viaChatlist: !!(t & 8),
      userId: e.long(),
      date: e.int(),
      about: t & 4 ? e.string() : void 0,
      approvedBy: t & 2 ? e.long() : void 0,
    };
  },
  3183881676: function (e) {
    return {
      _: `messages.exportedChatInvites`,
      count: e.int(),
      invites: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  410107472: function (e) {
    return {
      _: `messages.exportedChatInvite`,
      invite: e.object(),
      users: e.vector(e.object),
    };
  },
  572915951: function (e) {
    return {
      _: `messages.exportedChatInviteReplaced`,
      invite: e.object(),
      newInvite: e.object(),
      users: e.vector(e.object),
    };
  },
  2176233482: function (e) {
    return {
      _: `messages.chatInviteImporters`,
      count: e.int(),
      importers: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4075613987: function (e) {
    return {
      _: `chatAdminWithInvites`,
      adminId: e.long(),
      invitesCount: e.int(),
      revokedInvitesCount: e.int(),
    };
  },
  3063640791: function (e) {
    return {
      _: `messages.chatAdminsWithInvites`,
      admins: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2723014423: function (e) {
    return { _: `messages.checkedHistoryImportPeer`, confirmText: e.string() };
  },
  2951045695: function (e) {
    return {
      _: `phone.joinAsPeers`,
      peers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  541839704: function (e) {
    return { _: `phone.exportedGroupCallInvite`, link: e.string() };
  },
  3702593719: function (e) {
    return {
      _: `groupCallParticipantVideoSourceGroup`,
      semantics: e.string(),
      sources: e.vector(e.int),
    };
  },
  1735736008: function (e) {
    var t = e.uint();
    return {
      _: `groupCallParticipantVideo`,
      flags: t,
      paused: !!(t & 1),
      endpoint: e.string(),
      sourceGroups: e.vector(e.object),
      audioSource: t & 2 ? e.int() : void 0,
    };
  },
  2248056895: function (e) {
    return { _: `stickers.suggestedShortName`, shortName: e.string() };
  },
  795652779: function (e) {
    return { _: `botCommandScopeDefault` };
  },
  1011811544: function (e) {
    return { _: `botCommandScopeUsers` };
  },
  1877059713: function (e) {
    return { _: `botCommandScopeChats` };
  },
  3114950762: function (e) {
    return { _: `botCommandScopeChatAdmins` };
  },
  3684534653: function (e) {
    return { _: `botCommandScopePeer`, peer: e.object() };
  },
  1071145937: function (e) {
    return { _: `botCommandScopePeerAdmins`, peer: e.object() };
  },
  169026035: function (e) {
    return {
      _: `botCommandScopePeerUser`,
      peer: e.object(),
      userId: e.object(),
    };
  },
  3816265825: function (e) {
    return { _: `account.resetPasswordFailedWait`, retryDate: e.int() };
  },
  3924819069: function (e) {
    return { _: `account.resetPasswordRequestedWait`, untilDate: e.int() };
  },
  3911636542: function (e) {
    return { _: `account.resetPasswordOk` };
  },
  3286236164: function (e) {
    return { _: `chatTheme`, emoticon: e.string() };
  },
  878246344: function (e) {
    return {
      _: `chatThemeUniqueGift`,
      gift: e.object(),
      themeSettings: e.vector(e.object),
    };
  },
  3759268292: function (e) {
    return { _: `account.chatThemesNotModified` };
  },
  3188294003: function (e) {
    var t = e.uint();
    return {
      _: `account.chatThemes`,
      flags: t,
      hash: e.long(),
      themes: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  2109703795: function (e) {
    var t = e.uint();
    return {
      _: `sponsoredMessage`,
      flags: t,
      recommended: !!(t & 32),
      canReport: !!(t & 4096),
      randomId: e.bytes(),
      url: e.string(),
      title: e.string(),
      message: e.string(),
      entities: t & 2 ? e.vector(e.object) : void 0,
      photo: t & 64 ? e.object() : void 0,
      media: t & 16384 ? e.object() : void 0,
      color: t & 8192 ? e.object() : void 0,
      buttonText: e.string(),
      sponsorInfo: t & 128 ? e.string() : void 0,
      additionalInfo: t & 256 ? e.string() : void 0,
      minDisplayDuration: t & 32768 ? e.int() : void 0,
      maxDisplayDuration: t & 32768 ? e.int() : void 0,
    };
  },
  4292502893: function (e) {
    var t = e.uint();
    return {
      _: `messages.sponsoredMessages`,
      flags: t,
      postsBetween: t & 1 ? e.int() : void 0,
      startDelay: t & 2 ? e.int() : void 0,
      betweenDelay: t & 4 ? e.int() : void 0,
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  406407439: function (e) {
    return { _: `messages.sponsoredMessagesEmpty` };
  },
  3383776159: function (e) {
    return {
      _: `searchResultsCalendarPeriod`,
      date: e.int(),
      minMsgId: e.int(),
      maxMsgId: e.int(),
      count: e.int(),
    };
  },
  343859772: function (e) {
    var t = e.uint();
    return {
      _: `messages.searchResultsCalendar`,
      flags: t,
      inexact: !!(t & 1),
      count: e.int(),
      minDate: e.int(),
      minMsgId: e.int(),
      offsetIdOffset: t & 2 ? e.int() : void 0,
      periods: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2137295719: function (e) {
    return {
      _: `searchResultPosition`,
      msgId: e.int(),
      date: e.int(),
      offset: e.int(),
    };
  },
  1404185519: function (e) {
    return {
      _: `messages.searchResultsPositions`,
      count: e.int(),
      positions: e.vector(e.object),
    };
  },
  4103516358: function (e) {
    return {
      _: `channels.sendAsPeers`,
      peers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  997004590: function (e) {
    return {
      _: `users.userFull`,
      fullUser: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1753266509: function (e) {
    return {
      _: `messages.peerSettings`,
      settings: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3282207583: function (e) {
    var t = e.uint();
    return {
      _: `auth.loggedOut`,
      flags: t,
      futureAuthToken: t & 1 ? e.bytes() : void 0,
    };
  },
  2748435328: function (e) {
    var t = e.uint();
    return {
      _: `reactionCount`,
      flags: t,
      chosenOrder: t & 1 ? e.int() : void 0,
      reaction: e.object(),
      count: e.int(),
    };
  },
  171155211: function (e) {
    var t = e.uint();
    return {
      _: `messageReactions`,
      flags: t,
      min: !!(t & 1),
      canSeeList: !!(t & 4),
      reactionsAsTags: !!(t & 8),
      results: e.vector(e.object),
      recentReactions: t & 2 ? e.vector(e.object) : void 0,
      topReactors: t & 16 ? e.vector(e.object) : void 0,
    };
  },
  834488621: function (e) {
    var t = e.uint();
    return {
      _: `messages.messageReactionsList`,
      flags: t,
      count: e.int(),
      reactions: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  3229084673: function (e) {
    var t = e.uint();
    return {
      _: `availableReaction`,
      flags: t,
      inactive: !!(t & 1),
      premium: !!(t & 4),
      reaction: e.string(),
      title: e.string(),
      staticIcon: e.object(),
      appearAnimation: e.object(),
      selectAnimation: e.object(),
      activateAnimation: e.object(),
      effectAnimation: e.object(),
      aroundAnimation: t & 2 ? e.object() : void 0,
      centerIcon: t & 2 ? e.object() : void 0,
    };
  },
  2668042583: function (e) {
    return { _: `messages.availableReactionsNotModified` };
  },
  1989032621: function (e) {
    return {
      _: `messages.availableReactions`,
      hash: e.int(),
      reactions: e.vector(e.object),
    };
  },
  2356786748: function (e) {
    var t = e.uint();
    return {
      _: `messagePeerReaction`,
      flags: t,
      big: !!(t & 1),
      unread: !!(t & 2),
      my: !!(t & 4),
      peerId: e.object(),
      date: e.int(),
      reaction: e.object(),
    };
  },
  2162903215: function (e) {
    return {
      _: `groupCallStreamChannel`,
      channel: e.int(),
      scale: e.int(),
      lastTimestampMs: e.long(),
    };
  },
  3504636594: function (e) {
    return { _: `phone.groupCallStreamChannels`, channels: e.vector(e.object) };
  },
  767505458: function (e) {
    return {
      _: `phone.groupCallStreamRtmpUrl`,
      url: e.string(),
      key: e.string(),
    };
  },
  1165423600: function (e) {
    return { _: `attachMenuBotIconColor`, name: e.string(), color: e.int() };
  },
  2997303403: function (e) {
    var t = e.uint();
    return {
      _: `attachMenuBotIcon`,
      flags: t,
      name: e.string(),
      icon: e.object(),
      colors: t & 1 ? e.vector(e.object) : void 0,
    };
  },
  3641544190: function (e) {
    var t = e.uint();
    return {
      _: `attachMenuBot`,
      flags: t,
      inactive: !!(t & 1),
      hasSettings: !!(t & 2),
      requestWriteAccess: !!(t & 4),
      showInAttachMenu: !!(t & 8),
      showInSideMenu: !!(t & 16),
      sideMenuDisclaimerNeeded: !!(t & 32),
      botId: e.long(),
      shortName: e.string(),
      peerTypes: t & 8 ? e.vector(e.object) : void 0,
      icons: e.vector(e.object),
    };
  },
  4057500252: function (e) {
    return { _: `attachMenuBotsNotModified` };
  },
  1011024320: function (e) {
    return {
      _: `attachMenuBots`,
      hash: e.long(),
      bots: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2478794367: function (e) {
    return {
      _: `attachMenuBotsBot`,
      bot: e.object(),
      users: e.vector(e.object),
    };
  },
  1294139288: function (e) {
    var t = e.uint();
    return {
      _: `webViewResultUrl`,
      flags: t,
      fullsize: !!(t & 2),
      fullscreen: !!(t & 4),
      queryId: t & 1 ? e.long() : void 0,
      url: e.string(),
    };
  },
  211046684: function (e) {
    var t = e.uint();
    return {
      _: `webViewMessageSent`,
      flags: t,
      msgId: t & 1 ? e.object() : void 0,
    };
  },
  1966318984: function (e) {
    return { _: `botMenuButtonDefault` };
  },
  1113113093: function (e) {
    return { _: `botMenuButtonCommands` };
  },
  3350559974: function (e) {
    return { _: `botMenuButton`, text: e.string(), url: e.string() };
  },
  4227262641: function (e) {
    return { _: `account.savedRingtonesNotModified` };
  },
  3253284037: function (e) {
    return {
      _: `account.savedRingtones`,
      hash: e.long(),
      ringtones: e.vector(e.object),
    };
  },
  2548612798: function (e) {
    return { _: `notificationSoundDefault` };
  },
  1863070943: function (e) {
    return { _: `notificationSoundNone` };
  },
  2198575844: function (e) {
    return { _: `notificationSoundLocal`, title: e.string(), data: e.string() };
  },
  4285300809: function (e) {
    return { _: `notificationSoundRingtone`, id: e.long() };
  },
  3072737133: function (e) {
    return { _: `account.savedRingtone` };
  },
  523271863: function (e) {
    return { _: `account.savedRingtoneConverted`, document: e.object() };
  },
  2104224014: function (e) {
    return { _: `attachMenuPeerTypeSameBotPM` };
  },
  3274439194: function (e) {
    return { _: `attachMenuPeerTypeBotPM` };
  },
  4047950623: function (e) {
    return { _: `attachMenuPeerTypePM` };
  },
  84480319: function (e) {
    return { _: `attachMenuPeerTypeChat` };
  },
  2080104188: function (e) {
    return { _: `attachMenuPeerTypeBroadcast` };
  },
  3317000281: function (e) {
    return { _: `inputInvoiceMessage`, peer: e.object(), msgId: e.int() };
  },
  3274099439: function (e) {
    return { _: `inputInvoiceSlug`, slug: e.string() };
  },
  2560125965: function (e) {
    return {
      _: `inputInvoicePremiumGiftCode`,
      purpose: e.object(),
      option: e.object(),
    };
  },
  1710230755: function (e) {
    return { _: `inputInvoiceStars`, purpose: e.object() };
  },
  887591921: function (e) {
    return { _: `inputInvoiceChatInviteSubscription`, hash: e.string() };
  },
  3898760850: function (e) {
    var t = e.uint();
    return {
      _: `inputInvoiceStarGift`,
      flags: t,
      hideName: !!(t & 1),
      includeUpgrade: !!(t & 4),
      peer: e.object(),
      giftId: e.long(),
      message: t & 2 ? e.object() : void 0,
    };
  },
  1300335965: function (e) {
    var t = e.uint();
    return {
      _: `inputInvoiceStarGiftUpgrade`,
      flags: t,
      keepOriginalDetails: !!(t & 1),
      stargift: e.object(),
    };
  },
  1247763417: function (e) {
    return {
      _: `inputInvoiceStarGiftTransfer`,
      stargift: e.object(),
      toId: e.object(),
    };
  },
  3669668591: function (e) {
    var t = e.uint();
    return {
      _: `inputInvoicePremiumGiftStars`,
      flags: t,
      userId: e.object(),
      months: e.int(),
      message: t & 1 ? e.object() : void 0,
    };
  },
  4103700034: function (e) {
    return {
      _: `inputInvoiceBusinessBotTransferStars`,
      bot: e.object(),
      stars: e.long(),
    };
  },
  3281998628: function (e) {
    var t = e.uint();
    return {
      _: `inputInvoiceStarGiftResale`,
      flags: t,
      ton: !!(t & 1),
      slug: e.string(),
      toId: e.object(),
    };
  },
  2584430776: function (e) {
    return {
      _: `inputInvoiceStarGiftPrepaidUpgrade`,
      peer: e.object(),
      hash: e.string(),
    };
  },
  1048049172: function (e) {
    return { _: `inputInvoicePremiumAuthCode`, purpose: e.object() };
  },
  153344209: function (e) {
    return {
      _: `inputInvoiceStarGiftDropOriginalDetails`,
      stargift: e.object(),
    };
  },
  516618768: function (e) {
    var t = e.uint();
    return {
      _: `inputInvoiceStarGiftAuctionBid`,
      flags: t,
      hideName: !!(t & 1),
      updateBid: !!(t & 4),
      peer: t & 8 ? e.object() : void 0,
      giftId: e.long(),
      bidAmount: e.long(),
      message: t & 2 ? e.object() : void 0,
    };
  },
  2932919257: function (e) {
    return { _: `payments.exportedInvoice`, url: e.string() };
  },
  3485063511: function (e) {
    var t = e.uint();
    return {
      _: `messages.transcribedAudio`,
      flags: t,
      pending: !!(t & 1),
      transcriptionId: e.long(),
      text: e.string(),
      trialRemainsNum: t & 2 ? e.int() : void 0,
      trialRemainsUntilDate: t & 2 ? e.int() : void 0,
    };
  },
  1395946908: function (e) {
    return {
      _: `help.premiumPromo`,
      statusText: e.string(),
      statusEntities: e.vector(e.object),
      videoSections: e.vector(e.string),
      videos: e.vector(e.object),
      periodOptions: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2792693350: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentPremiumSubscription`,
      flags: t,
      restore: !!(t & 1),
      upgrade: !!(t & 2),
    };
  },
  1634697192: function (e) {
    return {
      _: `inputStorePaymentGiftPremium`,
      userId: e.object(),
      currency: e.string(),
      amount: e.long(),
    };
  },
  4219011987: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentPremiumGiftCode`,
      flags: t,
      users: e.vector(e.object),
      boostPeer: t & 1 ? e.object() : void 0,
      currency: e.string(),
      amount: e.long(),
      message: t & 2 ? e.object() : void 0,
    };
  },
  369444042: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentPremiumGiveaway`,
      flags: t,
      onlyNewSubscribers: !!(t & 1),
      winnersAreVisible: !!(t & 8),
      boostPeer: e.object(),
      additionalPeers: t & 2 ? e.vector(e.object) : void 0,
      countriesIso2: t & 4 ? e.vector(e.string) : void 0,
      prizeDescription: t & 16 ? e.string() : void 0,
      randomId: e.long(),
      untilDate: e.int(),
      currency: e.string(),
      amount: e.long(),
    };
  },
  4188186315: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentStarsTopup`,
      flags: t,
      stars: e.long(),
      currency: e.string(),
      amount: e.long(),
      spendPurposePeer: t & 1 ? e.object() : void 0,
    };
  },
  494149367: function (e) {
    return {
      _: `inputStorePaymentStarsGift`,
      userId: e.object(),
      stars: e.long(),
      currency: e.string(),
      amount: e.long(),
    };
  },
  1964968186: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentStarsGiveaway`,
      flags: t,
      onlyNewSubscribers: !!(t & 1),
      winnersAreVisible: !!(t & 8),
      stars: e.long(),
      boostPeer: e.object(),
      additionalPeers: t & 2 ? e.vector(e.object) : void 0,
      countriesIso2: t & 4 ? e.vector(e.string) : void 0,
      prizeDescription: t & 16 ? e.string() : void 0,
      randomId: e.long(),
      untilDate: e.int(),
      currency: e.string(),
      amount: e.long(),
      users: e.int(),
    };
  },
  2612159341: function (e) {
    var t = e.uint();
    return {
      _: `inputStorePaymentAuthCode`,
      flags: t,
      restore: !!(t & 1),
      phoneNumber: e.string(),
      phoneCodeHash: e.string(),
      currency: e.string(),
      amount: e.long(),
    };
  },
  2298016283: function (e) {
    return { _: `paymentFormMethod`, url: e.string(), title: e.string() };
  },
  769727150: function (e) {
    return { _: `emojiStatusEmpty` };
  },
  3892250250: function (e) {
    var t = e.uint();
    return {
      _: `emojiStatus`,
      flags: t,
      documentId: e.long(),
      until: t & 1 ? e.int() : void 0,
    };
  },
  1904500795: function (e) {
    var t = e.uint();
    return {
      _: `emojiStatusCollectible`,
      flags: t,
      collectibleId: e.long(),
      documentId: e.long(),
      title: e.string(),
      slug: e.string(),
      patternDocumentId: e.long(),
      centerColor: e.int(),
      edgeColor: e.int(),
      patternColor: e.int(),
      textColor: e.int(),
      until: t & 1 ? e.int() : void 0,
    };
  },
  118758847: function (e) {
    var t = e.uint();
    return {
      _: `inputEmojiStatusCollectible`,
      flags: t,
      collectibleId: e.long(),
      until: t & 1 ? e.int() : void 0,
    };
  },
  3498894917: function (e) {
    return { _: `account.emojiStatusesNotModified` };
  },
  2428790737: function (e) {
    return {
      _: `account.emojiStatuses`,
      hash: e.long(),
      statuses: e.vector(e.object),
    };
  },
  2046153753: function (e) {
    return { _: `reactionEmpty` };
  },
  455247544: function (e) {
    return { _: `reactionEmoji`, emoticon: e.string() };
  },
  2302016627: function (e) {
    return { _: `reactionCustomEmoji`, documentId: e.long() };
  },
  1379771627: function (e) {
    return { _: `reactionPaid` };
  },
  3942396604: function (e) {
    return { _: `chatReactionsNone` };
  },
  1385335754: function (e) {
    var t = e.uint();
    return { _: `chatReactionsAll`, flags: t, allowCustom: !!(t & 1) };
  },
  1713193015: function (e) {
    return { _: `chatReactionsSome`, reactions: e.vector(e.object) };
  },
  2960120799: function (e) {
    return { _: `messages.reactionsNotModified` };
  },
  3942512406: function (e) {
    return {
      _: `messages.reactions`,
      hash: e.long(),
      reactions: e.vector(e.object),
    };
  },
  1128644211: function (e) {
    return {
      _: `emailVerifyPurposeLoginSetup`,
      phoneNumber: e.string(),
      phoneCodeHash: e.string(),
    };
  },
  1383932651: function (e) {
    return { _: `emailVerifyPurposeLoginChange` };
  },
  3153401477: function (e) {
    return { _: `emailVerifyPurposePassport` };
  },
  2452510121: function (e) {
    return { _: `emailVerificationCode`, code: e.string() };
  },
  3683688130: function (e) {
    return { _: `emailVerificationGoogle`, token: e.string() };
  },
  2530243837: function (e) {
    return { _: `emailVerificationApple`, token: e.string() };
  },
  731303195: function (e) {
    return { _: `account.emailVerified`, email: e.string() };
  },
  3787132257: function (e) {
    return {
      _: `account.emailVerifiedLogin`,
      email: e.string(),
      sentCode: e.object(),
    };
  },
  1596792306: function (e) {
    var t = e.uint();
    return {
      _: `premiumSubscriptionOption`,
      flags: t,
      current: !!(t & 2),
      canPurchaseUpgrade: !!(t & 4),
      transaction: t & 8 ? e.string() : void 0,
      months: e.int(),
      currency: e.string(),
      amount: e.long(),
      botUrl: e.string(),
      storeProduct: t & 1 ? e.string() : void 0,
    };
  },
  3088871476: function (e) {
    var t = e.uint();
    return {
      _: `sendAsPeer`,
      flags: t,
      premiumRequired: !!(t & 1),
      peer: e.object(),
    };
  },
  2908916936: function (e) {
    var t = e.uint();
    return {
      _: `messageExtendedMediaPreview`,
      flags: t,
      w: t & 1 ? e.int() : void 0,
      h: t & 1 ? e.int() : void 0,
      thumb: t & 2 ? e.object() : void 0,
      videoDuration: t & 4 ? e.int() : void 0,
    };
  },
  3997670500: function (e) {
    return { _: `messageExtendedMedia`, media: e.object() };
  },
  4244550300: function (e) {
    return {
      _: `stickerKeyword`,
      documentId: e.long(),
      keyword: e.vector(e.string),
    };
  },
  3020371527: function (e) {
    var t = e.uint();
    return {
      _: `username`,
      flags: t,
      editable: !!(t & 1),
      active: !!(t & 2),
      username: e.string(),
    };
  },
  37687451: function (e) {
    return { _: `forumTopicDeleted`, id: e.int() };
  },
  4242200597: function (e) {
    var t = e.uint();
    return {
      _: `forumTopic`,
      flags: t,
      my: !!(t & 2),
      closed: !!(t & 4),
      pinned: !!(t & 8),
      short: !!(t & 32),
      hidden: !!(t & 64),
      titleMissing: !!(t & 128),
      id: e.int(),
      date: e.int(),
      peer: e.object(),
      title: e.string(),
      iconColor: e.int(),
      iconEmojiId: t & 1 ? e.long() : void 0,
      topMessage: e.int(),
      readInboxMaxId: e.int(),
      readOutboxMaxId: e.int(),
      unreadCount: e.int(),
      unreadMentionsCount: e.int(),
      unreadReactionsCount: e.int(),
      unreadPollVotesCount: e.int(),
      fromId: e.object(),
      notifySettings: e.object(),
      draft: t & 16 ? e.object() : void 0,
    };
  },
  913709011: function (e) {
    var t = e.uint();
    return {
      _: `messages.forumTopics`,
      flags: t,
      orderByCreateDate: !!(t & 1),
      count: e.int(),
      topics: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      pts: e.int(),
    };
  },
  1135897376: function (e) {
    return { _: `defaultHistoryTTL`, period: e.int() };
  },
  1103040667: function (e) {
    return { _: `exportedContactToken`, url: e.string(), expires: e.int() };
  },
  1597737472: function (e) {
    var t = e.uint();
    return {
      _: `requestPeerTypeUser`,
      flags: t,
      bot: t & 1 ? e.boolean() : void 0,
      premium: t & 2 ? e.boolean() : void 0,
    };
  },
  3387977243: function (e) {
    var t = e.uint();
    return {
      _: `requestPeerTypeChat`,
      flags: t,
      creator: !!(t & 1),
      botParticipant: !!(t & 32),
      hasUsername: t & 8 ? e.boolean() : void 0,
      forum: t & 16 ? e.boolean() : void 0,
      userAdminRights: t & 2 ? e.object() : void 0,
      botAdminRights: t & 4 ? e.object() : void 0,
    };
  },
  865857388: function (e) {
    var t = e.uint();
    return {
      _: `requestPeerTypeBroadcast`,
      flags: t,
      creator: !!(t & 1),
      hasUsername: t & 8 ? e.boolean() : void 0,
      userAdminRights: t & 2 ? e.object() : void 0,
      botAdminRights: t & 4 ? e.object() : void 0,
    };
  },
  1048699e3: function (e) {
    var t = e.uint();
    return {
      _: `requestPeerTypeCreateBot`,
      flags: t,
      botManaged: !!(t & 1),
      suggestedName: t & 2 ? e.string() : void 0,
      suggestedUsername: t & 4 ? e.string() : void 0,
    };
  },
  1209970170: function (e) {
    return { _: `emojiListNotModified` };
  },
  2048790993: function (e) {
    return { _: `emojiList`, hash: e.long(), documentId: e.vector(e.long) };
  },
  2056961449: function (e) {
    return {
      _: `emojiGroup`,
      title: e.string(),
      iconEmojiId: e.long(),
      emoticons: e.vector(e.string),
    };
  },
  2161274055: function (e) {
    return {
      _: `emojiGroupGreeting`,
      title: e.string(),
      iconEmojiId: e.long(),
      emoticons: e.vector(e.string),
    };
  },
  154914612: function (e) {
    return { _: `emojiGroupPremium`, title: e.string(), iconEmojiId: e.long() };
  },
  1874111879: function (e) {
    return { _: `messages.emojiGroupsNotModified` };
  },
  2283780427: function (e) {
    return {
      _: `messages.emojiGroups`,
      hash: e.int(),
      groups: e.vector(e.object),
    };
  },
  1964978502: function (e) {
    return {
      _: `textWithEntities`,
      text: e.string(),
      entities: e.vector(e.object),
    };
  },
  870003448: function (e) {
    return { _: `messages.translateResult`, result: e.vector(e.object) };
  },
  3360175310: function (e) {
    var t = e.uint();
    return {
      _: `autoSaveSettings`,
      flags: t,
      photos: !!(t & 1),
      videos: !!(t & 2),
      videoMaxSize: t & 4 ? e.long() : void 0,
    };
  },
  2170563911: function (e) {
    return { _: `autoSaveException`, peer: e.object(), settings: e.object() };
  },
  1279133341: function (e) {
    return {
      _: `account.autoSaveSettings`,
      usersSettings: e.object(),
      chatsSettings: e.object(),
      broadcastsSettings: e.object(),
      exceptions: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2094949405: function (e) {
    return { _: `help.appConfigNotModified` };
  },
  3709368366: function (e) {
    return { _: `help.appConfig`, hash: e.int(), config: e.object() };
  },
  2837495162: function (e) {
    return { _: `inputBotAppID`, id: e.long(), accessHash: e.long() };
  },
  2425095175: function (e) {
    return {
      _: `inputBotAppShortName`,
      botId: e.object(),
      shortName: e.string(),
    };
  },
  1571189943: function (e) {
    return { _: `botAppNotModified` };
  },
  2516373974: function (e) {
    var t = e.uint();
    return {
      _: `botApp`,
      flags: t,
      id: e.long(),
      accessHash: e.long(),
      shortName: e.string(),
      title: e.string(),
      description: e.string(),
      photo: e.object(),
      document: t & 1 ? e.object() : void 0,
      hash: e.long(),
    };
  },
  3947933173: function (e) {
    var t = e.uint();
    return {
      _: `messages.botApp`,
      flags: t,
      inactive: !!(t & 1),
      requestWriteAccess: !!(t & 2),
      hasSettings: !!(t & 4),
      app: e.object(),
    };
  },
  3044185557: function (e) {
    return { _: `inlineBotWebView`, text: e.string(), url: e.string() };
  },
  1246753138: function (e) {
    return { _: `readParticipantDate`, userId: e.long(), date: e.int() };
  },
  4091599411: function (e) {
    return { _: `inputChatlistDialogFilter`, filterId: e.int() };
  },
  206668204: function (e) {
    return {
      _: `exportedChatlistInvite`,
      flags: e.uint(),
      title: e.string(),
      url: e.string(),
      peers: e.vector(e.object),
    };
  },
  283567014: function (e) {
    return {
      _: `chatlists.exportedChatlistInvite`,
      filter: e.object(),
      invite: e.object(),
    };
  },
  279670215: function (e) {
    return {
      _: `chatlists.exportedInvites`,
      invites: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4203214425: function (e) {
    return {
      _: `chatlists.chatlistInviteAlready`,
      filterId: e.int(),
      missingPeers: e.vector(e.object),
      alreadyPeers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4044279343: function (e) {
    var t = e.uint();
    return {
      _: `chatlists.chatlistInvite`,
      flags: t,
      titleNoanimate: !!(t & 2),
      title: e.object(),
      emoticon: t & 1 ? e.string() : void 0,
      peers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2478671757: function (e) {
    return {
      _: `chatlists.chatlistUpdates`,
      missingPeers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3903288752: function (e) {
    return {
      _: `bots.botInfo`,
      name: e.string(),
      about: e.string(),
      description: e.string(),
    };
  },
  3066834268: function (e) {
    return {
      _: `messagePeerVote`,
      peer: e.object(),
      option: e.bytes(),
      date: e.int(),
    };
  },
  1959634180: function (e) {
    return { _: `messagePeerVoteInputOption`, peer: e.object(), date: e.int() };
  },
  1177089766: function (e) {
    return {
      _: `messagePeerVoteMultiple`,
      peer: e.object(),
      options: e.vector(e.bytes),
      date: e.int(),
    };
  },
  2371443926: function (e) {
    var t = e.uint();
    return {
      _: `storyViews`,
      flags: t,
      hasViewers: !!(t & 2),
      viewsCount: e.int(),
      forwardsCount: t & 4 ? e.int() : void 0,
      reactions: t & 8 ? e.vector(e.object) : void 0,
      reactionsCount: t & 16 ? e.int() : void 0,
      recentViewers: t & 1 ? e.vector(e.long) : void 0,
    };
  },
  1374088783: function (e) {
    return { _: `storyItemDeleted`, id: e.int() };
  },
  4289579283: function (e) {
    var t = e.uint();
    return {
      _: `storyItemSkipped`,
      flags: t,
      closeFriends: !!(t & 256),
      live: !!(t & 512),
      id: e.int(),
      date: e.int(),
      expireDate: e.int(),
    };
  },
  379894076: function (e) {
    var t = e.uint();
    return {
      _: `storyItem`,
      flags: t,
      pinned: !!(t & 32),
      public: !!(t & 128),
      closeFriends: !!(t & 256),
      min: !!(t & 512),
      noforwards: !!(t & 1024),
      edited: !!(t & 2048),
      contacts: !!(t & 4096),
      selectedContacts: !!(t & 8192),
      out: !!(t & 65536),
      id: e.int(),
      date: e.int(),
      fromId: t & 262144 ? e.object() : void 0,
      fwdFrom: t & 131072 ? e.object() : void 0,
      expireDate: e.int(),
      caption: t & 1 ? e.string() : void 0,
      entities: t & 2 ? e.vector(e.object) : void 0,
      media: e.object(),
      mediaAreas: t & 16384 ? e.vector(e.object) : void 0,
      privacy: t & 4 ? e.vector(e.object) : void 0,
      views: t & 8 ? e.object() : void 0,
      sentReaction: t & 32768 ? e.object() : void 0,
      albums: t & 524288 ? e.vector(e.int) : void 0,
      music: t & 1048576 ? e.object() : void 0,
    };
  },
  291044926: function (e) {
    return {
      _: `stories.allStoriesNotModified`,
      flags: e.uint(),
      state: e.string(),
      stealthMode: e.object(),
    };
  },
  1862033025: function (e) {
    var t = e.uint();
    return {
      _: `stories.allStories`,
      flags: t,
      hasMore: !!(t & 1),
      count: e.int(),
      state: e.string(),
      peerStories: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      stealthMode: e.object(),
    };
  },
  1673780490: function (e) {
    var t = e.uint();
    return {
      _: `stories.stories`,
      flags: t,
      count: e.int(),
      stories: e.vector(e.object),
      pinnedToTop: t & 1 ? e.vector(e.int) : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2965236421: function (e) {
    var t = e.uint();
    return {
      _: `storyView`,
      flags: t,
      blocked: !!(t & 1),
      blockedMyStoriesFrom: !!(t & 2),
      userId: e.long(),
      date: e.int(),
      reaction: t & 4 ? e.object() : void 0,
    };
  },
  2424530699: function (e) {
    var t = e.uint();
    return {
      _: `storyViewPublicForward`,
      flags: t,
      blocked: !!(t & 1),
      blockedMyStoriesFrom: !!(t & 2),
      message: e.object(),
    };
  },
  3178549065: function (e) {
    var t = e.uint();
    return {
      _: `storyViewPublicRepost`,
      flags: t,
      blocked: !!(t & 1),
      blockedMyStoriesFrom: !!(t & 2),
      peerId: e.object(),
      story: e.object(),
    };
  },
  1507299269: function (e) {
    var t = e.uint();
    return {
      _: `stories.storyViewsList`,
      flags: t,
      count: e.int(),
      viewsCount: e.int(),
      forwardsCount: e.int(),
      reactionsCount: e.int(),
      views: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  3734957341: function (e) {
    return {
      _: `stories.storyViews`,
      views: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1003796418: function (e) {
    var t = e.uint();
    return {
      _: `inputReplyToMessage`,
      flags: t,
      replyToMsgId: e.int(),
      topMsgId: t & 1 ? e.int() : void 0,
      replyToPeerId: t & 2 ? e.object() : void 0,
      quoteText: t & 4 ? e.string() : void 0,
      quoteEntities: t & 8 ? e.vector(e.object) : void 0,
      quoteOffset: t & 16 ? e.int() : void 0,
      monoforumPeerId: t & 32 ? e.object() : void 0,
      todoItemId: t & 64 ? e.int() : void 0,
      pollOption: t & 128 ? e.bytes() : void 0,
    };
  },
  1484862010: function (e) {
    return { _: `inputReplyToStory`, peer: e.object(), storyId: e.int() };
  },
  1775660101: function (e) {
    return { _: `inputReplyToMonoForum`, monoforumPeerId: e.object() };
  },
  1070138683: function (e) {
    return { _: `exportedStoryLink`, link: e.string() };
  },
  1898850301: function (e) {
    var t = e.uint();
    return {
      _: `storiesStealthMode`,
      flags: t,
      activeUntilDate: t & 1 ? e.int() : void 0,
      cooldownUntilDate: t & 2 ? e.int() : void 0,
    };
  },
  3486113794: function (e) {
    var t = e.uint();
    return {
      _: `mediaAreaCoordinates`,
      flags: t,
      x: e.double(),
      y: e.double(),
      w: e.double(),
      h: e.double(),
      rotation: e.double(),
      radius: t & 1 ? e.double() : void 0,
    };
  },
  3196246940: function (e) {
    return {
      _: `mediaAreaVenue`,
      coordinates: e.object(),
      geo: e.object(),
      title: e.string(),
      address: e.string(),
      provider: e.string(),
      venueId: e.string(),
      venueType: e.string(),
    };
  },
  2994872703: function (e) {
    return {
      _: `inputMediaAreaVenue`,
      coordinates: e.object(),
      queryId: e.long(),
      resultId: e.string(),
    };
  },
  3402974509: function (e) {
    var t = e.uint();
    return {
      _: `mediaAreaGeoPoint`,
      flags: t,
      coordinates: e.object(),
      geo: e.object(),
      address: t & 1 ? e.object() : void 0,
    };
  },
  340088945: function (e) {
    var t = e.uint();
    return {
      _: `mediaAreaSuggestedReaction`,
      flags: t,
      dark: !!(t & 1),
      flipped: !!(t & 2),
      coordinates: e.object(),
      reaction: e.object(),
    };
  },
  1996756655: function (e) {
    return {
      _: `mediaAreaChannelPost`,
      coordinates: e.object(),
      channelId: e.long(),
      msgId: e.int(),
    };
  },
  577893055: function (e) {
    return {
      _: `inputMediaAreaChannelPost`,
      coordinates: e.object(),
      channel: e.object(),
      msgId: e.int(),
    };
  },
  926421125: function (e) {
    return { _: `mediaAreaUrl`, coordinates: e.object(), url: e.string() };
  },
  1235637404: function (e) {
    return {
      _: `mediaAreaWeather`,
      coordinates: e.object(),
      emoji: e.string(),
      temperatureC: e.double(),
      color: e.int(),
    };
  },
  1468491885: function (e) {
    return {
      _: `mediaAreaStarGift`,
      coordinates: e.object(),
      slug: e.string(),
    };
  },
  2587224473: function (e) {
    var t = e.uint();
    return {
      _: `peerStories`,
      flags: t,
      peer: e.object(),
      maxReadId: t & 1 ? e.int() : void 0,
      stories: e.vector(e.object),
    };
  },
  3404105576: function (e) {
    return {
      _: `stories.peerStories`,
      stories: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  4250800829: function (e) {
    return {
      _: `messages.webPage`,
      webpage: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  629052971: function (e) {
    var t = e.uint();
    return {
      _: `premiumGiftCodeOption`,
      flags: t,
      users: e.int(),
      months: e.int(),
      storeProduct: t & 1 ? e.string() : void 0,
      storeQuantity: t & 2 ? e.int() : void 0,
      currency: e.string(),
      amount: e.long(),
    };
  },
  3952623503: function (e) {
    var t = e.uint();
    return {
      _: `payments.checkedGiftCode`,
      flags: t,
      viaGiveaway: !!(t & 4),
      fromId: t & 16 ? e.object() : void 0,
      giveawayMsgId: t & 8 ? e.int() : void 0,
      toId: t & 1 ? e.long() : void 0,
      date: e.int(),
      days: e.int(),
      usedDate: t & 2 ? e.int() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1130879648: function (e) {
    var t = e.uint();
    return {
      _: `payments.giveawayInfo`,
      flags: t,
      participating: !!(t & 1),
      preparingResults: !!(t & 8),
      startDate: e.int(),
      joinedTooEarlyDate: t & 2 ? e.int() : void 0,
      adminDisallowedChatId: t & 4 ? e.long() : void 0,
      disallowedCountry: t & 16 ? e.string() : void 0,
    };
  },
  3782600303: function (e) {
    var t = e.uint();
    return {
      _: `payments.giveawayInfoResults`,
      flags: t,
      winner: !!(t & 1),
      refunded: !!(t & 2),
      startDate: e.int(),
      giftCodeSlug: t & 8 ? e.string() : void 0,
      starsPrize: t & 16 ? e.long() : void 0,
      finishDate: e.int(),
      winnersCount: e.int(),
      activatedCount: t & 4 ? e.int() : void 0,
    };
  },
  2991824212: function (e) {
    return {
      _: `prepaidGiveaway`,
      id: e.long(),
      months: e.int(),
      quantity: e.int(),
      date: e.int(),
    };
  },
  2594011104: function (e) {
    return {
      _: `prepaidStarsGiveaway`,
      id: e.long(),
      stars: e.long(),
      quantity: e.int(),
      boosts: e.int(),
      date: e.int(),
    };
  },
  1262359766: function (e) {
    var t = e.uint();
    return {
      _: `boost`,
      flags: t,
      gift: !!(t & 2),
      giveaway: !!(t & 4),
      unclaimed: !!(t & 8),
      id: e.string(),
      userId: t & 1 ? e.long() : void 0,
      giveawayMsgId: t & 4 ? e.int() : void 0,
      date: e.int(),
      expires: e.int(),
      usedGiftSlug: t & 16 ? e.string() : void 0,
      multiplier: t & 32 ? e.int() : void 0,
      stars: t & 64 ? e.long() : void 0,
    };
  },
  2264424764: function (e) {
    var t = e.uint();
    return {
      _: `premium.boostsList`,
      flags: t,
      count: e.int(),
      boosts: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
      users: e.vector(e.object),
    };
  },
  3293069660: function (e) {
    var t = e.uint();
    return {
      _: `myBoost`,
      flags: t,
      slot: e.int(),
      peer: t & 1 ? e.object() : void 0,
      date: e.int(),
      expires: e.int(),
      cooldownUntilDate: t & 2 ? e.int() : void 0,
    };
  },
  2598512866: function (e) {
    return {
      _: `premium.myBoosts`,
      myBoosts: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1230586490: function (e) {
    var t = e.uint();
    return {
      _: `premium.boostsStatus`,
      flags: t,
      myBoost: !!(t & 4),
      level: e.int(),
      currentLevelBoosts: e.int(),
      boosts: e.int(),
      giftBoosts: t & 16 ? e.int() : void 0,
      nextLevelBoosts: t & 1 ? e.int() : void 0,
      premiumAudience: t & 2 ? e.object() : void 0,
      boostUrl: e.string(),
      prepaidGiveaways: t & 8 ? e.vector(e.object) : void 0,
      myBoostSlots: t & 4 ? e.vector(e.int) : void 0,
    };
  },
  3089555792: function (e) {
    var t = e.uint();
    return {
      _: `storyFwdHeader`,
      flags: t,
      modified: !!(t & 8),
      from: t & 1 ? e.object() : void 0,
      fromName: t & 2 ? e.string() : void 0,
      storyId: t & 4 ? e.int() : void 0,
    };
  },
  3875901055: function (e) {
    return {
      _: `postInteractionCountersMessage`,
      msgId: e.int(),
      views: e.int(),
      forwards: e.int(),
      reactions: e.int(),
    };
  },
  2319978023: function (e) {
    return {
      _: `postInteractionCountersStory`,
      storyId: e.int(),
      views: e.int(),
      forwards: e.int(),
      reactions: e.int(),
    };
  },
  1355613820: function (e) {
    return {
      _: `stats.storyStats`,
      viewsGraph: e.object(),
      reactionsByEmotionGraph: e.object(),
    };
  },
  32685898: function (e) {
    return { _: `publicForwardMessage`, message: e.object() };
  },
  3992169936: function (e) {
    return { _: `publicForwardStory`, peer: e.object(), story: e.object() };
  },
  2466479648: function (e) {
    var t = e.uint();
    return {
      _: `stats.publicForwards`,
      flags: t,
      count: e.int(),
      forwards: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3041614543: function (e) {
    var t = e.uint();
    return {
      _: `peerColor`,
      flags: t,
      color: t & 1 ? e.int() : void 0,
      backgroundEmojiId: t & 2 ? e.long() : void 0,
    };
  },
  3116393370: function (e) {
    var t = e.uint();
    return {
      _: `peerColorCollectible`,
      flags: t,
      collectibleId: e.long(),
      giftEmojiId: e.long(),
      backgroundEmojiId: e.long(),
      accentColor: e.int(),
      colors: e.vector(e.int),
      darkAccentColor: t & 1 ? e.int() : void 0,
      darkColors: t & 2 ? e.vector(e.int) : void 0,
    };
  },
  3102377641: function (e) {
    return { _: `inputPeerColorCollectible`, collectibleId: e.long() };
  },
  639736408: function (e) {
    return { _: `help.peerColorSet`, colors: e.vector(e.int) };
  },
  1987928555: function (e) {
    return {
      _: `help.peerColorProfileSet`,
      paletteColors: e.vector(e.int),
      bgColors: e.vector(e.int),
      storyColors: e.vector(e.int),
    };
  },
  2917953214: function (e) {
    var t = e.uint();
    return {
      _: `help.peerColorOption`,
      flags: t,
      hidden: !!(t & 1),
      colorId: e.int(),
      colors: t & 2 ? e.object() : void 0,
      darkColors: t & 4 ? e.object() : void 0,
      channelMinLevel: t & 8 ? e.int() : void 0,
      groupMinLevel: t & 16 ? e.int() : void 0,
    };
  },
  732034510: function (e) {
    return { _: `help.peerColorsNotModified` };
  },
  16313608: function (e) {
    return { _: `help.peerColors`, hash: e.int(), colors: e.vector(e.object) };
  },
  1620104917: function (e) {
    return {
      _: `storyReaction`,
      peerId: e.object(),
      date: e.int(),
      reaction: e.object(),
    };
  },
  3148555843: function (e) {
    return { _: `storyReactionPublicForward`, message: e.object() };
  },
  3486322451: function (e) {
    return {
      _: `storyReactionPublicRepost`,
      peerId: e.object(),
      story: e.object(),
    };
  },
  2858383516: function (e) {
    var t = e.uint();
    return {
      _: `stories.storyReactionsList`,
      flags: t,
      count: e.int(),
      reactions: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  3179793260: function (e) {
    var t = e.uint();
    return {
      _: `savedDialog`,
      flags: t,
      pinned: !!(t & 4),
      peer: e.object(),
      topMessage: e.int(),
    };
  },
  1681948327: function (e) {
    var t = e.uint();
    return {
      _: `monoForumDialog`,
      flags: t,
      unreadMark: !!(t & 8),
      nopaidMessagesException: !!(t & 16),
      peer: e.object(),
      topMessage: e.int(),
      readInboxMaxId: e.int(),
      readOutboxMaxId: e.int(),
      unreadCount: e.int(),
      unreadReactionsCount: e.int(),
      draft: t & 2 ? e.object() : void 0,
    };
  },
  4164608545: function (e) {
    return {
      _: `messages.savedDialogs`,
      dialogs: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1153080793: function (e) {
    return {
      _: `messages.savedDialogsSlice`,
      count: e.int(),
      dialogs: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3223285736: function (e) {
    return { _: `messages.savedDialogsNotModified`, count: e.int() };
  },
  3413112872: function (e) {
    var t = e.uint();
    return {
      _: `savedReactionTag`,
      flags: t,
      reaction: e.object(),
      title: t & 1 ? e.string() : void 0,
      count: e.int(),
    };
  },
  2291882479: function (e) {
    return { _: `messages.savedReactionTagsNotModified` };
  },
  844731658: function (e) {
    return {
      _: `messages.savedReactionTags`,
      tags: e.vector(e.object),
      hash: e.long(),
    };
  },
  1001931436: function (e) {
    return { _: `outboxReadDate`, date: e.int() };
  },
  3700114639: function (e) {
    return {
      _: `smsjobs.eligibleToJoin`,
      termsUrl: e.string(),
      monthlySentSms: e.int(),
    };
  },
  720277905: function (e) {
    var t = e.uint();
    return {
      _: `smsjobs.status`,
      flags: t,
      allowInternational: !!(t & 1),
      recentSent: e.int(),
      recentSince: e.int(),
      recentRemains: e.int(),
      totalSent: e.int(),
      totalSince: e.int(),
      lastGiftSlug: t & 2 ? e.string() : void 0,
      termsUrl: e.string(),
    };
  },
  3869372088: function (e) {
    return {
      _: `smsJob`,
      jobId: e.string(),
      phoneNumber: e.string(),
      text: e.string(),
    };
  },
  302717625: function (e) {
    return {
      _: `businessWeeklyOpen`,
      startMinute: e.int(),
      endMinute: e.int(),
    };
  },
  2358423704: function (e) {
    var t = e.uint();
    return {
      _: `businessWorkHours`,
      flags: t,
      openNow: !!(t & 1),
      timezoneId: e.string(),
      weeklyOpen: e.vector(e.object),
    };
  },
  2891717367: function (e) {
    var t = e.uint();
    return {
      _: `businessLocation`,
      flags: t,
      geoPoint: t & 1 ? e.object() : void 0,
      address: e.string(),
    };
  },
  1871393450: function (e) {
    var t = e.uint();
    return {
      _: `inputBusinessRecipients`,
      flags: t,
      existingChats: !!(t & 1),
      newChats: !!(t & 2),
      contacts: !!(t & 4),
      nonContacts: !!(t & 8),
      excludeSelected: !!(t & 32),
      users: t & 16 ? e.vector(e.object) : void 0,
    };
  },
  554733559: function (e) {
    var t = e.uint();
    return {
      _: `businessRecipients`,
      flags: t,
      existingChats: !!(t & 1),
      newChats: !!(t & 2),
      contacts: !!(t & 4),
      nonContacts: !!(t & 8),
      excludeSelected: !!(t & 32),
      users: t & 16 ? e.vector(e.long) : void 0,
    };
  },
  3384402617: function (e) {
    return { _: `businessAwayMessageScheduleAlways` };
  },
  3287479553: function (e) {
    return { _: `businessAwayMessageScheduleOutsideWorkHours` };
  },
  3427638988: function (e) {
    return {
      _: `businessAwayMessageScheduleCustom`,
      startDate: e.int(),
      endDate: e.int(),
    };
  },
  26528571: function (e) {
    return {
      _: `inputBusinessGreetingMessage`,
      shortcutId: e.int(),
      recipients: e.object(),
      noActivityDays: e.int(),
    };
  },
  3843664811: function (e) {
    return {
      _: `businessGreetingMessage`,
      shortcutId: e.int(),
      recipients: e.object(),
      noActivityDays: e.int(),
    };
  },
  2200008160: function (e) {
    var t = e.uint();
    return {
      _: `inputBusinessAwayMessage`,
      flags: t,
      offlineOnly: !!(t & 1),
      shortcutId: e.int(),
      schedule: e.object(),
      recipients: e.object(),
    };
  },
  4011158108: function (e) {
    var t = e.uint();
    return {
      _: `businessAwayMessage`,
      flags: t,
      offlineOnly: !!(t & 1),
      shortcutId: e.int(),
      schedule: e.object(),
      recipients: e.object(),
    };
  },
  4287793653: function (e) {
    return {
      _: `timezone`,
      id: e.string(),
      name: e.string(),
      utcOffset: e.int(),
    };
  },
  2533820620: function (e) {
    return { _: `help.timezonesListNotModified` };
  },
  2071260529: function (e) {
    return {
      _: `help.timezonesList`,
      timezones: e.vector(e.object),
      hash: e.int(),
    };
  },
  110563371: function (e) {
    return {
      _: `quickReply`,
      shortcutId: e.int(),
      shortcut: e.string(),
      topMessage: e.int(),
      count: e.int(),
    };
  },
  609840449: function (e) {
    return { _: `inputQuickReplyShortcut`, shortcut: e.string() };
  },
  18418929: function (e) {
    return { _: `inputQuickReplyShortcutId`, shortcutId: e.int() };
  },
  3331155605: function (e) {
    return {
      _: `messages.quickReplies`,
      quickReplies: e.vector(e.object),
      messages: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1603398491: function (e) {
    return { _: `messages.quickRepliesNotModified` };
  },
  3445908332: function (e) {
    return {
      _: `connectedBot`,
      flags: e.uint(),
      botId: e.long(),
      recipients: e.object(),
      rights: e.object(),
    };
  },
  400029819: function (e) {
    return {
      _: `account.connectedBots`,
      connectedBots: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  718878489: function (e) {
    var t = e.uint();
    return {
      _: `messages.dialogFilters`,
      flags: t,
      tagsEnabled: !!(t & 1),
      filters: e.vector(e.object),
    };
  },
  1821253126: function (e) {
    var t = e.uint();
    return {
      _: `birthday`,
      flags: t,
      day: e.int(),
      month: e.int(),
      year: t & 1 ? e.int() : void 0,
    };
  },
  2402595573: function (e) {
    var t = e.uint();
    return {
      _: `botBusinessConnection`,
      flags: t,
      disabled: !!(t & 2),
      connectionId: e.string(),
      userId: e.long(),
      dcId: e.int(),
      date: e.int(),
      rights: t & 4 ? e.object() : void 0,
    };
  },
  163867085: function (e) {
    var t = e.uint();
    return {
      _: `inputBusinessIntro`,
      flags: t,
      title: e.string(),
      description: e.string(),
      sticker: t & 1 ? e.object() : void 0,
    };
  },
  1510606445: function (e) {
    var t = e.uint();
    return {
      _: `businessIntro`,
      flags: t,
      title: e.string(),
      description: e.string(),
      sticker: t & 1 ? e.object() : void 0,
    };
  },
  4211040925: function (e) {
    return {
      _: `messages.myStickers`,
      count: e.int(),
      sets: e.vector(e.object),
    };
  },
  3818152105: function (e) {
    return { _: `inputCollectibleUsername`, username: e.string() };
  },
  2732725412: function (e) {
    return { _: `inputCollectiblePhone`, phone: e.string() };
  },
  1857945489: function (e) {
    return {
      _: `fragment.collectibleInfo`,
      purchaseDate: e.int(),
      currency: e.string(),
      amount: e.long(),
      cryptoCurrency: e.string(),
      cryptoAmount: e.long(),
      url: e.string(),
    };
  },
  3303379486: function (e) {
    var t = e.uint();
    return {
      _: `inputBusinessBotRecipients`,
      flags: t,
      existingChats: !!(t & 1),
      newChats: !!(t & 2),
      contacts: !!(t & 4),
      nonContacts: !!(t & 8),
      excludeSelected: !!(t & 32),
      users: t & 16 ? e.vector(e.object) : void 0,
      excludeUsers: t & 64 ? e.vector(e.object) : void 0,
    };
  },
  3096245107: function (e) {
    var t = e.uint();
    return {
      _: `businessBotRecipients`,
      flags: t,
      existingChats: !!(t & 1),
      newChats: !!(t & 2),
      contacts: !!(t & 4),
      nonContacts: !!(t & 8),
      excludeSelected: !!(t & 32),
      users: t & 16 ? e.vector(e.long) : void 0,
      excludeUsers: t & 64 ? e.vector(e.long) : void 0,
    };
  },
  496600883: function (e) {
    return { _: `contactBirthday`, contactId: e.long(), birthday: e.object() };
  },
  290452237: function (e) {
    return {
      _: `contacts.contactBirthdays`,
      contacts: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1653379620: function (e) {
    var t = e.uint();
    return {
      _: `missingInvitee`,
      flags: t,
      premiumWouldAllowInvite: !!(t & 1),
      premiumRequiredForPm: !!(t & 2),
      userId: e.long(),
    };
  },
  2136862630: function (e) {
    return {
      _: `messages.invitedUsers`,
      updates: e.object(),
      missingInvitees: e.vector(e.object),
    };
  },
  292003751: function (e) {
    var t = e.uint();
    return {
      _: `inputBusinessChatLink`,
      flags: t,
      message: e.string(),
      entities: t & 1 ? e.vector(e.object) : void 0,
      title: t & 2 ? e.string() : void 0,
    };
  },
  3031328367: function (e) {
    var t = e.uint();
    return {
      _: `businessChatLink`,
      flags: t,
      link: e.string(),
      message: e.string(),
      entities: t & 1 ? e.vector(e.object) : void 0,
      title: t & 2 ? e.string() : void 0,
      views: e.int(),
    };
  },
  3963855569: function (e) {
    return {
      _: `account.businessChatLinks`,
      links: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2586029857: function (e) {
    var t = e.uint();
    return {
      _: `account.resolvedBusinessChatLinks`,
      flags: t,
      peer: e.object(),
      message: e.string(),
      entities: t & 1 ? e.vector(e.object) : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3593466986: function (e) {
    var t = e.uint();
    return {
      _: `requestedPeerUser`,
      flags: t,
      userId: e.long(),
      firstName: t & 1 ? e.string() : void 0,
      lastName: t & 1 ? e.string() : void 0,
      username: t & 2 ? e.string() : void 0,
      photo: t & 4 ? e.object() : void 0,
    };
  },
  1929860175: function (e) {
    var t = e.uint();
    return {
      _: `requestedPeerChat`,
      flags: t,
      chatId: e.long(),
      title: t & 1 ? e.string() : void 0,
      photo: t & 4 ? e.object() : void 0,
    };
  },
  2342781924: function (e) {
    var t = e.uint();
    return {
      _: `requestedPeerChannel`,
      flags: t,
      channelId: e.long(),
      title: t & 1 ? e.string() : void 0,
      username: t & 2 ? e.string() : void 0,
      photo: t & 4 ? e.object() : void 0,
    };
  },
  1124938064: function (e) {
    return {
      _: `sponsoredMessageReportOption`,
      text: e.string(),
      option: e.bytes(),
    };
  },
  2221907522: function (e) {
    return {
      _: `channels.sponsoredMessageReportResultChooseOption`,
      title: e.string(),
      options: e.vector(e.object),
    };
  },
  1044107055: function (e) {
    return { _: `channels.sponsoredMessageReportResultAdsHidden` };
  },
  2910423113: function (e) {
    return { _: `channels.sponsoredMessageReportResultReported` };
  },
  3133384218: function (e) {
    return { _: `reactionNotificationsFromContacts` };
  },
  1268654752: function (e) {
    return { _: `reactionNotificationsFromAll` };
  },
  1910827608: function (e) {
    var t = e.uint();
    return {
      _: `reactionsNotifySettings`,
      flags: t,
      messagesNotifyFrom: t & 1 ? e.object() : void 0,
      storiesNotifyFrom: t & 2 ? e.object() : void 0,
      pollVotesNotifyFrom: t & 4 ? e.object() : void 0,
      sound: e.object(),
      showPreviews: e.boolean(),
    };
  },
  2479088254: function (e) {
    var t = e.uint();
    return {
      _: `availableEffect`,
      flags: t,
      premiumRequired: !!(t & 4),
      id: e.long(),
      emoticon: e.string(),
      staticIconId: t & 1 ? e.long() : void 0,
      effectStickerId: e.long(),
      effectAnimationId: t & 2 ? e.long() : void 0,
    };
  },
  3522009691: function (e) {
    return { _: `messages.availableEffectsNotModified` };
  },
  3185271150: function (e) {
    return {
      _: `messages.availableEffects`,
      hash: e.int(),
      effects: e.vector(e.object),
      documents: e.vector(e.object),
    };
  },
  3097230543: function (e) {
    var t = e.uint();
    return {
      _: `factCheck`,
      flags: t,
      needCheck: !!(t & 1),
      country: t & 2 ? e.string() : void 0,
      text: t & 2 ? e.object() : void 0,
      hash: e.long(),
    };
  },
  2515714020: function (e) {
    return { _: `starsTransactionPeerUnsupported` };
  },
  3025646453: function (e) {
    return { _: `starsTransactionPeerAppStore` };
  },
  2069236235: function (e) {
    return { _: `starsTransactionPeerPlayMarket` };
  },
  621656824: function (e) {
    return { _: `starsTransactionPeerPremiumBot` };
  },
  3912227074: function (e) {
    return { _: `starsTransactionPeerFragment` };
  },
  3624771933: function (e) {
    return { _: `starsTransactionPeer`, peer: e.object() };
  },
  1617438738: function (e) {
    return { _: `starsTransactionPeerAds` };
  },
  4184308397: function (e) {
    return { _: `starsTransactionPeerAPI` };
  },
  198776256: function (e) {
    var t = e.uint();
    return {
      _: `starsTopupOption`,
      flags: t,
      extended: !!(t & 2),
      stars: e.long(),
      storeProduct: t & 1 ? e.string() : void 0,
      currency: e.string(),
      amount: e.long(),
    };
  },
  325426864: function (e) {
    var t = e.uint();
    return {
      _: `starsTransaction`,
      flags: t,
      refund: !!(t & 8),
      pending: !!(t & 16),
      failed: !!(t & 64),
      gift: !!(t & 1024),
      reaction: !!(t & 2048),
      stargiftUpgrade: !!(t & 262144),
      businessTransfer: !!(t & 2097152),
      stargiftResale: !!(t & 4194304),
      postsSearch: !!(t & 16777216),
      stargiftPrepaidUpgrade: !!(t & 33554432),
      stargiftDropOriginalDetails: !!(t & 67108864),
      phonegroupMessage: !!(t & 134217728),
      stargiftAuctionBid: !!(t & 268435456),
      offer: !!(t & 536870912),
      id: e.string(),
      amount: e.object(),
      date: e.int(),
      peer: e.object(),
      title: t & 1 ? e.string() : void 0,
      description: t & 2 ? e.string() : void 0,
      photo: t & 4 ? e.object() : void 0,
      transactionDate: t & 32 ? e.int() : void 0,
      transactionUrl: t & 32 ? e.string() : void 0,
      botPayload: t & 128 ? e.bytes() : void 0,
      msgId: t & 256 ? e.int() : void 0,
      extendedMedia: t & 512 ? e.vector(e.object) : void 0,
      subscriptionPeriod: t & 4096 ? e.int() : void 0,
      giveawayPostId: t & 8192 ? e.int() : void 0,
      stargift: t & 16384 ? e.object() : void 0,
      floodskipNumber: t & 32768 ? e.int() : void 0,
      starrefCommissionPermille: t & 65536 ? e.int() : void 0,
      starrefPeer: t & 131072 ? e.object() : void 0,
      starrefAmount: t & 131072 ? e.object() : void 0,
      paidMessages: t & 524288 ? e.int() : void 0,
      premiumGiftMonths: t & 1048576 ? e.int() : void 0,
      adsProceedsFromDate: t & 8388608 ? e.int() : void 0,
      adsProceedsToDate: t & 8388608 ? e.int() : void 0,
    };
  },
  1822222573: function (e) {
    var t = e.uint();
    return {
      _: `payments.starsStatus`,
      flags: t,
      balance: e.object(),
      subscriptions: t & 2 ? e.vector(e.object) : void 0,
      subscriptionsNextOffset: t & 4 ? e.string() : void 0,
      subscriptionsMissingBalance: t & 16 ? e.long() : void 0,
      history: t & 8 ? e.vector(e.object) : void 0,
      nextOffset: t & 1 ? e.string() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3900361664: function (e) {
    return { _: `foundStory`, peer: e.object(), story: e.object() };
  },
  3806230327: function (e) {
    var t = e.uint();
    return {
      _: `stories.foundStories`,
      flags: t,
      count: e.int(),
      stories: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3729546643: function (e) {
    var t = e.uint();
    return {
      _: `geoPointAddress`,
      flags: t,
      countryIso2: e.string(),
      state: t & 1 ? e.string() : void 0,
      city: t & 2 ? e.string() : void 0,
      street: t & 4 ? e.string() : void 0,
    };
  },
  4273886353: function (e) {
    var t = e.uint();
    return {
      _: `starsRevenueStatus`,
      flags: t,
      withdrawalEnabled: !!(t & 1),
      currentBalance: e.object(),
      availableBalance: e.object(),
      overallRevenue: e.object(),
      nextWithdrawalAt: t & 2 ? e.int() : void 0,
    };
  },
  1814066038: function (e) {
    var t = e.uint();
    return {
      _: `payments.starsRevenueStats`,
      flags: t,
      topHoursGraph: t & 1 ? e.object() : void 0,
      revenueGraph: e.object(),
      status: e.object(),
      usdRate: e.double(),
    };
  },
  497778871: function (e) {
    return { _: `payments.starsRevenueWithdrawalUrl`, url: e.string() };
  },
  961445665: function (e) {
    return { _: `payments.starsRevenueAdsAccountUrl`, url: e.string() };
  },
  543876817: function (e) {
    var t = e.uint();
    return {
      _: `inputStarsTransaction`,
      flags: t,
      refund: !!(t & 1),
      id: e.string(),
    };
  },
  1577421297: function (e) {
    var t = e.uint();
    return {
      _: `starsGiftOption`,
      flags: t,
      extended: !!(t & 2),
      stars: e.long(),
      storeProduct: t & 1 ? e.string() : void 0,
      currency: e.string(),
      amount: e.long(),
    };
  },
  428978491: function (e) {
    var t = e.uint();
    return {
      _: `bots.popularAppBots`,
      flags: t,
      nextOffset: t & 1 ? e.string() : void 0,
      users: e.vector(e.object),
    };
  },
  602479523: function (e) {
    return { _: `botPreviewMedia`, date: e.int(), media: e.object() };
  },
  212278628: function (e) {
    return {
      _: `bots.previewInfo`,
      media: e.vector(e.object),
      langCodes: e.vector(e.string),
    };
  },
  88173912: function (e) {
    return { _: `starsSubscriptionPricing`, period: e.int(), amount: e.long() };
  },
  779004698: function (e) {
    var t = e.uint();
    return {
      _: `starsSubscription`,
      flags: t,
      canceled: !!(t & 1),
      canRefulfill: !!(t & 2),
      missingBalance: !!(t & 4),
      botCanceled: !!(t & 128),
      id: e.string(),
      peer: e.object(),
      untilDate: e.int(),
      pricing: e.object(),
      chatInviteHash: t & 8 ? e.string() : void 0,
      title: t & 16 ? e.string() : void 0,
      photo: t & 32 ? e.object() : void 0,
      invoiceSlug: t & 64 ? e.string() : void 0,
    };
  },
  1269016922: function (e) {
    var t = e.uint();
    return {
      _: `messageReactor`,
      flags: t,
      top: !!(t & 1),
      my: !!(t & 2),
      anonymous: !!(t & 4),
      peerId: t & 8 ? e.object() : void 0,
      count: e.int(),
    };
  },
  2496562474: function (e) {
    var t = e.uint();
    return {
      _: `starsGiveawayOption`,
      flags: t,
      extended: !!(t & 1),
      default: !!(t & 2),
      stars: e.long(),
      yearlyBoosts: e.int(),
      storeProduct: t & 4 ? e.string() : void 0,
      currency: e.string(),
      amount: e.long(),
      winners: e.vector(e.object),
    };
  },
  1411605001: function (e) {
    var t = e.uint();
    return {
      _: `starsGiveawayWinnersOption`,
      flags: t,
      default: !!(t & 1),
      users: e.int(),
      perUserStars: e.long(),
    };
  },
  825922887: function (e) {
    var t = e.uint();
    return {
      _: `starGift`,
      flags: t,
      limited: !!(t & 1),
      soldOut: !!(t & 2),
      birthday: !!(t & 4),
      requirePremium: !!(t & 128),
      limitedPerUser: !!(t & 256),
      peerColorAvailable: !!(t & 1024),
      auction: !!(t & 2048),
      id: e.long(),
      sticker: e.object(),
      stars: e.long(),
      availabilityRemains: t & 1 ? e.int() : void 0,
      availabilityTotal: t & 1 ? e.int() : void 0,
      availabilityResale: t & 16 ? e.long() : void 0,
      convertStars: e.long(),
      firstSaleDate: t & 2 ? e.int() : void 0,
      lastSaleDate: t & 2 ? e.int() : void 0,
      upgradeStars: t & 8 ? e.long() : void 0,
      resellMinStars: t & 16 ? e.long() : void 0,
      title: t & 32 ? e.string() : void 0,
      releasedBy: t & 64 ? e.object() : void 0,
      perUserTotal: t & 256 ? e.int() : void 0,
      perUserRemains: t & 256 ? e.int() : void 0,
      lockedUntilDate: t & 512 ? e.int() : void 0,
      auctionSlug: t & 2048 ? e.string() : void 0,
      giftsPerRound: t & 2048 ? e.int() : void 0,
      auctionStartDate: t & 2048 ? e.int() : void 0,
      upgradeVariants: t & 4096 ? e.int() : void 0,
      background: t & 8192 ? e.object() : void 0,
    };
  },
  2247141837: function (e) {
    var t = e.uint();
    return {
      _: `starGiftUnique`,
      flags: t,
      requirePremium: !!(t & 64),
      resaleTonOnly: !!(t & 128),
      themeAvailable: !!(t & 512),
      burned: !!(t & 16384),
      crafted: !!(t & 32768),
      id: e.long(),
      giftId: e.long(),
      title: e.string(),
      slug: e.string(),
      num: e.int(),
      ownerId: t & 1 ? e.object() : void 0,
      ownerName: t & 2 ? e.string() : void 0,
      ownerAddress: t & 4 ? e.string() : void 0,
      attributes: e.vector(e.object),
      availabilityIssued: e.int(),
      availabilityTotal: e.int(),
      giftAddress: t & 8 ? e.string() : void 0,
      resellAmount: t & 16 ? e.vector(e.object) : void 0,
      releasedBy: t & 32 ? e.object() : void 0,
      valueAmount: t & 256 ? e.long() : void 0,
      valueCurrency: t & 256 ? e.string() : void 0,
      valueUsdAmount: t & 256 ? e.long() : void 0,
      themePeer: t & 1024 ? e.object() : void 0,
      peerColor: t & 2048 ? e.object() : void 0,
      hostId: t & 4096 ? e.object() : void 0,
      offerMinStars: t & 8192 ? e.int() : void 0,
      craftChancePermille: t & 65536 ? e.int() : void 0,
    };
  },
  2743640936: function (e) {
    return { _: `payments.starGiftsNotModified` };
  },
  785918357: function (e) {
    return {
      _: `payments.starGifts`,
      hash: e.int(),
      gifts: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2030298073: function (e) {
    return { _: `messageReportOption`, text: e.string(), option: e.bytes() };
  },
  4041531574: function (e) {
    return {
      _: `reportResultChooseOption`,
      title: e.string(),
      options: e.vector(e.object),
    };
  },
  1862904881: function (e) {
    var t = e.uint();
    return {
      _: `reportResultAddComment`,
      flags: t,
      optional: !!(t & 1),
      option: e.bytes(),
    };
  },
  2377333835: function (e) {
    return { _: `reportResultReported` };
  },
  2395931921: function (e) {
    return {
      _: `messages.botPreparedInlineMessage`,
      id: e.string(),
      expireDate: e.int(),
    };
  },
  4283920525: function (e) {
    return {
      _: `messages.preparedInlineMessage`,
      queryId: e.long(),
      result: e.object(),
      peerTypes: e.vector(e.object),
      cacheTime: e.int(),
      users: e.vector(e.object),
    };
  },
  3382384976: function (e) {
    var t = e.uint();
    return {
      _: `botAppSettings`,
      flags: t,
      placeholderPath: t & 1 ? e.bytes() : void 0,
      backgroundColor: t & 2 ? e.int() : void 0,
      backgroundDarkColor: t & 4 ? e.int() : void 0,
      headerColor: t & 8 ? e.int() : void 0,
      headerDarkColor: t & 16 ? e.int() : void 0,
    };
  },
  3708577522: function (e) {
    var t = e.uint();
    return {
      _: `starRefProgram`,
      flags: t,
      botId: e.long(),
      commissionPermille: e.int(),
      durationMonths: t & 1 ? e.int() : void 0,
      endDate: t & 2 ? e.int() : void 0,
      dailyRevenuePerUser: t & 4 ? e.object() : void 0,
    };
  },
  429997937: function (e) {
    var t = e.uint();
    return {
      _: `connectedBotStarRef`,
      flags: t,
      revoked: !!(t & 2),
      url: e.string(),
      date: e.int(),
      botId: e.long(),
      commissionPermille: e.int(),
      durationMonths: t & 1 ? e.int() : void 0,
      participants: e.long(),
      revenue: e.long(),
    };
  },
  2564155933: function (e) {
    return {
      _: `payments.connectedStarRefBots`,
      count: e.int(),
      connectedBots: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  3033913433: function (e) {
    var t = e.uint();
    return {
      _: `payments.suggestedStarRefBots`,
      flags: t,
      count: e.int(),
      suggestedBots: e.vector(e.object),
      users: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
    };
  },
  3149313187: function (e) {
    return { _: `starsAmount`, amount: e.long(), nanos: e.int() };
  },
  1957618656: function (e) {
    return { _: `starsTonAmount`, amount: e.long() };
  },
  1611711796: function (e) {
    var t = e.uint();
    return {
      _: `messages.foundStickersNotModified`,
      flags: t,
      nextOffset: t & 1 ? e.int() : void 0,
    };
  },
  2194268816: function (e) {
    var t = e.uint();
    return {
      _: `messages.foundStickers`,
      flags: t,
      nextOffset: t & 1 ? e.int() : void 0,
      hash: e.long(),
      stickers: e.vector(e.object),
    };
  },
  2966251031: function (e) {
    var t = e.uint();
    return {
      _: `botVerifierSettings`,
      flags: t,
      canModifyCustomDescription: !!(t & 2),
      icon: e.long(),
      company: e.string(),
      customDescription: t & 1 ? e.string() : void 0,
    };
  },
  4181513308: function (e) {
    return {
      _: `botVerification`,
      botId: e.long(),
      icon: e.long(),
      description: e.string(),
    };
  },
  1448235490: function (e) {
    var t = e.uint();
    return {
      _: `starGiftAttributeModel`,
      flags: t,
      crafted: !!(t & 1),
      name: e.string(),
      document: e.object(),
      rarity: e.object(),
    };
  },
  1315997162: function (e) {
    return {
      _: `starGiftAttributePattern`,
      name: e.string(),
      document: e.object(),
      rarity: e.object(),
    };
  },
  2670003428: function (e) {
    return {
      _: `starGiftAttributeBackdrop`,
      name: e.string(),
      backdropId: e.int(),
      centerColor: e.int(),
      edgeColor: e.int(),
      patternColor: e.int(),
      textColor: e.int(),
      rarity: e.object(),
    };
  },
  3770675820: function (e) {
    var t = e.uint();
    return {
      _: `starGiftAttributeOriginalDetails`,
      flags: t,
      senderId: t & 1 ? e.object() : void 0,
      recipientId: e.object(),
      date: e.int(),
      message: t & 2 ? e.object() : void 0,
    };
  },
  1038213101: function (e) {
    return {
      _: `payments.starGiftUpgradePreview`,
      sampleAttributes: e.vector(e.object),
      prices: e.vector(e.object),
      nextPrices: e.vector(e.object),
    };
  },
  1658259128: function (e) {
    return { _: `users.users`, users: e.vector(e.object) };
  },
  828000628: function (e) {
    return { _: `users.usersSlice`, count: e.int(), users: e.vector(e.object) };
  },
  1097619176: function (e) {
    return {
      _: `payments.uniqueStarGift`,
      gift: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  2358937772: function (e) {
    return {
      _: `messages.webPagePreview`,
      media: e.object(),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1105150972: function (e) {
    var t = e.uint();
    return {
      _: `savedStarGift`,
      flags: t,
      nameHidden: !!(t & 1),
      unsaved: !!(t & 32),
      refunded: !!(t & 512),
      canUpgrade: !!(t & 1024),
      pinnedToTop: !!(t & 4096),
      upgradeSeparate: !!(t & 131072),
      fromId: t & 2 ? e.object() : void 0,
      date: e.int(),
      gift: e.object(),
      message: t & 4 ? e.object() : void 0,
      msgId: t & 8 ? e.int() : void 0,
      savedId: t & 2048 ? e.long() : void 0,
      convertStars: t & 16 ? e.long() : void 0,
      upgradeStars: t & 64 ? e.long() : void 0,
      canExportAt: t & 128 ? e.int() : void 0,
      transferStars: t & 256 ? e.long() : void 0,
      canTransferAt: t & 8192 ? e.int() : void 0,
      canResellAt: t & 16384 ? e.int() : void 0,
      collectionId: t & 32768 ? e.vector(e.int) : void 0,
      prepaidUpgradeHash: t & 65536 ? e.string() : void 0,
      dropOriginalDetailsStars: t & 262144 ? e.long() : void 0,
      giftNum: t & 524288 ? e.int() : void 0,
      canCraftAt: t & 1048576 ? e.int() : void 0,
    };
  },
  2515765681: function (e) {
    var t = e.uint();
    return {
      _: `payments.savedStarGifts`,
      flags: t,
      count: e.int(),
      chatNotificationsEnabled: t & 2 ? e.boolean() : void 0,
      gifts: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1764202389: function (e) {
    return { _: `inputSavedStarGiftUser`, msgId: e.int() };
  },
  4043418239: function (e) {
    return { _: `inputSavedStarGiftChat`, peer: e.object(), savedId: e.long() };
  },
  545636920: function (e) {
    return { _: `inputSavedStarGiftSlug`, slug: e.string() };
  },
  2225748636: function (e) {
    return { _: `payments.starGiftWithdrawalUrl`, url: e.string() };
  },
  543872158: function (e) {
    return { _: `paidReactionPrivacyDefault` };
  },
  520887001: function (e) {
    return { _: `paidReactionPrivacyAnonymous` };
  },
  3698130160: function (e) {
    return { _: `paidReactionPrivacyPeer`, peer: e.object() };
  },
  504403720: function (e) {
    return { _: `account.paidMessagesRevenue`, starsAmount: e.long() };
  },
  84580409: function (e) {
    return { _: `requirementToContactEmpty` };
  },
  3850495209: function (e) {
    return { _: `requirementToContactPremium` };
  },
  3036053139: function (e) {
    return { _: `requirementToContactPaidMessages`, starsAmount: e.long() };
  },
  2690796791: function (e) {
    var t = e.uint();
    return {
      _: `businessBotRights`,
      flags: t,
      reply: !!(t & 1),
      readMessages: !!(t & 2),
      deleteSentMessages: !!(t & 4),
      deleteReceivedMessages: !!(t & 8),
      editName: !!(t & 16),
      editBio: !!(t & 32),
      editProfilePhoto: !!(t & 64),
      editUsername: !!(t & 128),
      viewGifts: !!(t & 256),
      sellGifts: !!(t & 512),
      changeGiftSettings: !!(t & 1024),
      transferAndUpgradeGifts: !!(t & 2048),
      transferStars: !!(t & 4096),
      manageStories: !!(t & 8192),
    };
  },
  1911715524: function (e) {
    var t = e.uint();
    return {
      _: `disallowedGiftsSettings`,
      flags: t,
      disallowUnlimitedStargifts: !!(t & 1),
      disallowLimitedStargifts: !!(t & 2),
      disallowUniqueStargifts: !!(t & 4),
      disallowPremiumGifts: !!(t & 8),
      disallowStargiftsFromChannels: !!(t & 16),
    };
  },
  3331786963: function (e) {
    var t = e.uint();
    return {
      _: `sponsoredPeer`,
      flags: t,
      randomId: e.bytes(),
      peer: e.object(),
      sponsorInfo: t & 1 ? e.string() : void 0,
      additionalInfo: t & 2 ? e.string() : void 0,
    };
  },
  3929191601: function (e) {
    return { _: `contacts.sponsoredPeersEmpty` };
  },
  3942852740: function (e) {
    return {
      _: `contacts.sponsoredPeers`,
      peers: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1219145276: function (e) {
    return { _: `starGiftAttributeIdModel`, documentId: e.long() };
  },
  1242965043: function (e) {
    return { _: `starGiftAttributeIdPattern`, documentId: e.long() };
  },
  520210263: function (e) {
    return { _: `starGiftAttributeIdBackdrop`, backdropId: e.int() };
  },
  783398488: function (e) {
    return {
      _: `starGiftAttributeCounter`,
      attribute: e.object(),
      count: e.int(),
    };
  },
  2491028191: function (e) {
    var t = e.uint();
    return {
      _: `payments.resaleStarGifts`,
      flags: t,
      count: e.int(),
      gifts: e.vector(e.object),
      nextOffset: t & 1 ? e.string() : void 0,
      attributes: t & 2 ? e.vector(e.object) : void 0,
      attributesHash: t & 2 ? e.long() : void 0,
      chats: e.vector(e.object),
      counters: t & 4 ? e.vector(e.object) : void 0,
      users: e.vector(e.object),
    };
  },
  3280453710: function (e) {
    return { _: `stories.canSendStoryCount`, countRemains: e.int() };
  },
  3890753042: function (e) {
    return {
      _: `pendingSuggestion`,
      suggestion: e.string(),
      title: e.object(),
      description: e.object(),
      url: e.string(),
    };
  },
  3416892719: function (e) {
    return { _: `todoItem`, id: e.int(), title: e.object() };
  },
  1236871718: function (e) {
    var t = e.uint();
    return {
      _: `todoList`,
      flags: t,
      othersCanAppend: !!(t & 1),
      othersCanComplete: !!(t & 2),
      title: e.object(),
      list: e.vector(e.object),
    };
  },
  572241380: function (e) {
    return {
      _: `todoCompletion`,
      id: e.int(),
      completedBy: e.object(),
      date: e.int(),
    };
  },
  244201445: function (e) {
    var t = e.uint();
    return {
      _: `suggestedPost`,
      flags: t,
      accepted: !!(t & 2),
      rejected: !!(t & 4),
      price: t & 8 ? e.object() : void 0,
      scheduleDate: t & 1 ? e.int() : void 0,
    };
  },
  453922567: function (e) {
    var t = e.uint();
    return {
      _: `starsRating`,
      flags: t,
      level: e.int(),
      currentLevelStars: e.long(),
      stars: e.long(),
      nextLevelStars: t & 1 ? e.long() : void 0,
    };
  },
  2641040304: function (e) {
    var t = e.uint();
    return {
      _: `starGiftCollection`,
      flags: t,
      collectionId: e.int(),
      title: e.string(),
      icon: t & 1 ? e.object() : void 0,
      giftsCount: e.int(),
      hash: e.long(),
    };
  },
  2696564503: function (e) {
    return { _: `payments.starGiftCollectionsNotModified` };
  },
  2317955827: function (e) {
    return {
      _: `payments.starGiftCollections`,
      collections: e.vector(e.object),
    };
  },
  2468704346: function (e) {
    var t = e.uint();
    return {
      _: `storyAlbum`,
      flags: t,
      albumId: e.int(),
      title: e.string(),
      iconPhoto: t & 1 ? e.object() : void 0,
      iconVideo: t & 2 ? e.object() : void 0,
    };
  },
  1448008427: function (e) {
    return { _: `stories.albumsNotModified` };
  },
  3281549882: function (e) {
    return { _: `stories.albums`, hash: e.long(), albums: e.vector(e.object) };
  },
  1040931690: function (e) {
    var t = e.uint();
    return {
      _: `searchPostsFlood`,
      flags: t,
      queryIsFree: !!(t & 1),
      totalDaily: e.int(),
      remains: e.int(),
      waitTill: t & 2 ? e.int() : void 0,
      starsAmount: e.long(),
    };
  },
  1362093126: function (e) {
    var t = e.uint();
    return {
      _: `payments.uniqueStarGiftValueInfo`,
      flags: t,
      lastSaleOnFragment: !!(t & 2),
      valueIsAverage: !!(t & 64),
      currency: e.string(),
      value: e.long(),
      initialSaleDate: e.int(),
      initialSaleStars: e.long(),
      initialSalePrice: e.long(),
      lastSaleDate: t & 1 ? e.int() : void 0,
      lastSalePrice: t & 1 ? e.long() : void 0,
      floorPrice: t & 4 ? e.long() : void 0,
      averagePrice: t & 8 ? e.long() : void 0,
      listedCount: t & 16 ? e.int() : void 0,
      fragmentListedCount: t & 32 ? e.int() : void 0,
      fragmentListedUrl: t & 32 ? e.string() : void 0,
    };
  },
  3113014934: function (e) {
    return { _: `profileTabPosts` };
  },
  1296815210: function (e) {
    return { _: `profileTabGifts` };
  },
  1925597525: function (e) {
    return { _: `profileTabMedia` };
  },
  2872286208: function (e) {
    return { _: `profileTabFiles` };
  },
  2670187118: function (e) {
    return { _: `profileTabMusic` };
  },
  3833006382: function (e) {
    return { _: `profileTabVoice` };
  },
  3546637465: function (e) {
    return { _: `profileTabLinks` };
  },
  2730555029: function (e) {
    return { _: `profileTabGifs` };
  },
  3817310884: function (e) {
    return { _: `users.savedMusicNotModified`, count: e.int() };
  },
  883094167: function (e) {
    return {
      _: `users.savedMusic`,
      count: e.int(),
      documents: e.vector(e.object),
    };
  },
  1338514798: function (e) {
    return { _: `account.savedMusicIdsNotModified` };
  },
  2576180790: function (e) {
    return { _: `account.savedMusicIds`, ids: e.vector(e.long) };
  },
  927967149: function (e) {
    return { _: `payments.checkCanSendGiftResultOk` };
  },
  3588588148: function (e) {
    return { _: `payments.checkCanSendGiftResultFail`, reason: e.object() };
  },
  2200339587: function (e) {
    return { _: `inputChatThemeEmpty` };
  },
  3376277852: function (e) {
    return { _: `inputChatTheme`, emoticon: e.string() };
  },
  2279989220: function (e) {
    return { _: `inputChatThemeUniqueGift`, slug: e.string() };
  },
  2582262557: function (e) {
    return { _: `starGiftUpgradePrice`, date: e.int(), upgradeStars: e.long() };
  },
  445316222: function (e) {
    var t = e.uint();
    return {
      _: `groupCallMessage`,
      flags: t,
      fromAdmin: !!(t & 2),
      id: e.int(),
      fromId: e.object(),
      date: e.int(),
      message: e.object(),
      paidMessageStars: t & 1 ? e.long() : void 0,
    };
  },
  3997371525: function (e) {
    var t = e.uint();
    return {
      _: `groupCallDonor`,
      flags: t,
      top: !!(t & 1),
      my: !!(t & 2),
      peerId: t & 8 ? e.object() : void 0,
      stars: e.long(),
    };
  },
  2635971878: function (e) {
    return {
      _: `phone.groupCallStars`,
      totalStars: e.long(),
      topDonors: e.vector(e.object),
      chats: e.vector(e.object),
      users: e.vector(e.object),
    };
  },
  1897752877: function (e) {
    var t = e.uint();
    return {
      _: `recentStory`,
      flags: t,
      live: !!(t & 1),
      maxId: t & 2 ? e.int() : void 0,
    };
  },
  822231244: function (e) {
    return {
      _: `auctionBidLevel`,
      pos: e.int(),
      amount: e.long(),
      date: e.int(),
    };
  },
  4264769874: function (e) {
    return { _: `starGiftAuctionStateNotModified` };
  },
  1998212710: function (e) {
    return {
      _: `starGiftAuctionState`,
      version: e.int(),
      startDate: e.int(),
      endDate: e.int(),
      minBidAmount: e.long(),
      bidLevels: e.vector(e.object),
      topBidders: e.vector(e.long),
      nextRoundAt: e.int(),
      lastGiftNum: e.int(),
      giftsLeft: e.int(),
      currentRound: e.int(),
      totalRounds: e.int(),
      rounds: e.vector(e.object),
    };
  },
  2536352703: function (e) {
    var t = e.uint();
    return {
      _: `starGiftAuctionStateFinished`,
      flags: t,
      startDate: e.int(),
      endDate: e.int(),
      averagePrice: e.long(),
      listedCount: t & 1 ? e.int() : void 0,
      fragmentListedCount: t & 2 ? e.int() : void 0,
      fragmentListedUrl: t & 2 ? e.string() : void 0,
    };
  },
  787403204: function (e) {
    var t = e.uint();
    return {
      _: `starGiftAuctionUserState`,
      flags: t,
      returned: !!(t & 2),
      bidAmount: t & 1 ? e.long() : void 0,
      bidDate: t & 1 ? e.int() : void 0,
      minBidAmount: t & 1 ? e.long() : void 0,
      bidPeer: t & 1 ? e.object() : void 0,
      acquiredCount: e.int(),
    };
  },
  1798960364: function (e) {
    return {
      _: `payments.starGiftAuctionState`,
      gift: e.object(),
      state: e.object(),
      userState: e.object(),
      timeout: e.int(),
      users: e.vector(e.object),
      chats: e.vector(e.object),
    };
  },
  1118831432: function (e) {
    var t = e.uint();
    return {
      _: `starGiftAuctionAcquiredGift`,
      flags: t,
      nameHidden: !!(t & 1),
      peer: e.object(),
      date: e.int(),
      bidAmount: e.long(),
      round: e.int(),
      pos: e.int(),
      message: t & 2 ? e.object() : void 0,
      giftNum: t & 4 ? e.int() : void 0,
    };
  },
  2103169520: function (e) {
    return {
      _: `payments.starGiftAuctionAcquiredGifts`,
      gifts: e.vector(e.object),
      users: e.vector(e.object),
      chats: e.vector(e.object),
    };
  },
  3541812317: function (e) {
    return {
      _: `starGiftActiveAuctionState`,
      gift: e.object(),
      state: e.object(),
      userState: e.object(),
    };
  },
  3677608656: function (e) {
    return { _: `payments.starGiftActiveAuctionsNotModified` };
  },
  2935401404: function (e) {
    return {
      _: `payments.starGiftActiveAuctions`,
      auctions: e.vector(e.object),
      users: e.vector(e.object),
      chats: e.vector(e.object),
    };
  },
  48327832: function (e) {
    return { _: `inputStarGiftAuction`, giftId: e.long() };
  },
  2058715912: function (e) {
    return { _: `inputStarGiftAuctionSlug`, slug: e.string() };
  },
  2556509887: function (e) {
    var t = e.uint();
    return {
      _: `passkey`,
      flags: t,
      id: e.string(),
      name: e.string(),
      date: e.int(),
      softwareEmojiId: t & 1 ? e.long() : void 0,
      lastUsageDate: t & 2 ? e.int() : void 0,
    };
  },
  4175473180: function (e) {
    return { _: `account.passkeys`, passkeys: e.vector(e.object) };
  },
  3781909729: function (e) {
    return { _: `account.passkeyRegistrationOptions`, options: e.object() };
  },
  3791878025: function (e) {
    return { _: `auth.passkeyLoginOptions`, options: e.object() };
  },
  1046713180: function (e) {
    return {
      _: `inputPasskeyResponseRegister`,
      clientData: e.object(),
      attestationData: e.bytes(),
    };
  },
  3273638218: function (e) {
    return {
      _: `inputPasskeyResponseLogin`,
      clientData: e.object(),
      authenticatorData: e.bytes(),
      signature: e.bytes(),
      userHandle: e.string(),
    };
  },
  1009235855: function (e) {
    return {
      _: `inputPasskeyCredentialPublicKey`,
      id: e.string(),
      rawId: e.string(),
      response: e.object(),
    };
  },
  1528613672: function (e) {
    return { _: `inputPasskeyCredentialFirebasePNV`, pnvToken: e.string() };
  },
  2952094616: function (e) {
    return {
      _: `starGiftBackground`,
      centerColor: e.int(),
      edgeColor: e.int(),
      textColor: e.int(),
    };
  },
  984483112: function (e) {
    return { _: `starGiftAuctionRound`, num: e.int(), duration: e.int() };
  },
  178266597: function (e) {
    return {
      _: `starGiftAuctionRoundExtendable`,
      num: e.int(),
      duration: e.int(),
      extendTop: e.int(),
      extendWindow: e.int(),
    };
  },
  1187439471: function (e) {
    return {
      _: `payments.starGiftUpgradeAttributes`,
      attributes: e.vector(e.object),
    };
  },
  3660240455: function (e) {
    return {
      _: `messages.emojiGameOutcome`,
      seed: e.bytes(),
      stakeTonAmount: e.long(),
      tonAmount: e.long(),
    };
  },
  1508266805: function (e) {
    return { _: `messages.emojiGameUnavailable` };
  },
  1155883043: function (e) {
    var t = e.uint();
    return {
      _: `messages.emojiGameDiceInfo`,
      flags: t,
      gameHash: e.string(),
      prevStake: e.long(),
      currentStreak: e.int(),
      params: e.vector(e.int),
      playsLeft: t & 1 ? e.int() : void 0,
    };
  },
  910391095: function (e) {
    return { _: `starGiftAttributeRarity`, permille: e.int() };
  },
  3687736201: function (e) {
    return { _: `starGiftAttributeRarityUncommon` };
  },
  4035793259: function (e) {
    return { _: `starGiftAttributeRarityRare` };
  },
  2029777832: function (e) {
    return { _: `starGiftAttributeRarityEpic` };
  },
  3472353192: function (e) {
    return { _: `starGiftAttributeRarityLegendary` };
  },
  1339896880: function (e) {
    var t = e.uint();
    return {
      _: `keyboardButtonStyle`,
      flags: t,
      bgPrimary: !!(t & 1),
      bgDanger: !!(t & 2),
      bgSuccess: !!(t & 4),
      icon: t & 8 ? e.long() : void 0,
    };
  },
  1076577429: function (e) {
    return {
      _: `inputMessageReadMetric`,
      msgId: e.int(),
      viewId: e.long(),
      timeInViewMs: e.int(),
      activeTimeInViewMs: e.int(),
      heightToViewportRatioPermille: e.int(),
      seenRangeRatioPermille: e.int(),
    };
  },
  1012971041: function (e) {
    return { _: `bots.exportedBotToken`, token: e.string() };
  },
  4047224023: function (e) {
    return { _: `bots.requestedButton`, webappReqId: e.string() };
  },
  2430053882: function (e) {
    var t = e.uint();
    return {
      _: `messages.composedMessageWithAI`,
      flags: t,
      resultText: e.object(),
      diffText: t & 1 ? e.object() : void 0,
    };
  },
  2694004571: function (e) {
    return {
      _: `chatParticipantAdmin`,
      userId: e.int53(),
      inviterId: e.int53(),
      date: e.int(),
    };
  },
  3832270564: function (e) {
    return { _: `chatParticipantCreator`, userId: e.int53() };
  },
  3224190983: function (e) {
    return {
      _: `chatParticipant`,
      userId: e.int53(),
      inviterId: e.int53(),
      date: e.int(),
    };
  },
  2629079273: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `message`,
      flags: t,
      out: !!(t & 2),
      mentioned: !!(t & 16),
      mediaUnread: !!(t & 32),
      silent: !!(t & 8192),
      post: !!(t & 16384),
      fromScheduled: !!(t & 262144),
      legacy: !!(t & 524288),
      editHide: !!(t & 2097152),
      pinned: !!(t & 16777216),
      noforwards: !!(t & 67108864),
      invertMedia: !!(t & 134217728),
      flags2: n,
      offline: !!(n & 2),
      videoProcessingPending: !!(n & 16),
      paidSuggestedPostStars: !!(n & 256),
      paidSuggestedPostTon: !!(n & 512),
      id: e.int(),
      fromId: t & 256 ? e.object() : void 0,
      fromBoostsApplied: t & 536870912 ? e.int() : void 0,
      peerId: e.object(),
      savedPeerId: t & 268435456 ? e.object() : void 0,
      fwdFrom: t & 4 ? e.object() : void 0,
      viaBotId: t & 2048 ? e.int53() : void 0,
      viaBusinessBotId: n & 1 ? e.int53() : void 0,
      replyTo: t & 8 ? e.object() : void 0,
      date: e.int(),
      message: e.string(),
      media: t & 512 ? e.object() : void 0,
      replyMarkup: t & 64 ? e.object() : void 0,
      entities: t & 128 ? e.vector(e.object) : void 0,
      views: t & 1024 ? e.int() : void 0,
      forwards: t & 1024 ? e.int() : void 0,
      replies: t & 8388608 ? e.object() : void 0,
      editDate: t & 32768 ? e.int() : void 0,
      postAuthor: t & 65536 ? e.string() : void 0,
      groupedId: t & 131072 ? e.long() : void 0,
      reactions: t & 1048576 ? e.object() : void 0,
      restrictionReason: t & 4194304 ? e.vector(e.object) : void 0,
      ttlPeriod: t & 33554432 ? e.int() : void 0,
      quickReplyShortcutId: t & 1073741824 ? e.int() : void 0,
      effect: n & 4 ? e.long() : void 0,
      factcheck: n & 8 ? e.object() : void 0,
      reportDeliveryUntilDate: n & 32 ? e.int() : void 0,
      paidMessageStars: n & 64 ? e.long() : void 0,
      suggestedPost: n & 128 ? e.object() : void 0,
      scheduleRepeatPeriod: n & 1024 ? e.int() : void 0,
      summaryFromLanguage: n & 2048 ? e.string() : void 0,
    };
  },
  2687222078: function (e) {
    var t = e.uint(),
      n = e.uint();
    return {
      _: `userFull`,
      flags: t,
      blocked: !!(t & 1),
      phoneCallsAvailable: !!(t & 16),
      phoneCallsPrivate: !!(t & 32),
      canPinMessage: !!(t & 128),
      hasScheduled: !!(t & 4096),
      videoCallsAvailable: !!(t & 8192),
      voiceMessagesForbidden: !!(t & 1048576),
      translationsDisabled: !!(t & 8388608),
      storiesPinnedAvailable: !!(t & 67108864),
      blockedMyStoriesFrom: !!(t & 134217728),
      wallpaperOverridden: !!(t & 268435456),
      contactRequirePremium: !!(t & 536870912),
      readDatesPrivate: !!(t & 1073741824),
      flags2: n,
      sponsoredEnabled: !!(n & 128),
      canViewRevenue: !!(n & 512),
      botCanManageEmojiStatus: !!(n & 1024),
      displayGiftsButton: !!(n & 65536),
      noforwardsMyEnabled: !!(n & 8388608),
      noforwardsPeerEnabled: !!(n & 16777216),
      id: e.int53(),
      about: t & 2 ? e.string() : void 0,
      settings: e.object(),
      personalPhoto: t & 2097152 ? e.object() : void 0,
      profilePhoto: t & 4 ? e.object() : void 0,
      fallbackPhoto: t & 4194304 ? e.object() : void 0,
      notifySettings: e.object(),
      botInfo: t & 8 ? e.object() : void 0,
      pinnedMsgId: t & 64 ? e.int() : void 0,
      commonChatsCount: e.int(),
      folderId: t & 2048 ? e.int() : void 0,
      ttlPeriod: t & 16384 ? e.int() : void 0,
      theme: t & 32768 ? e.object() : void 0,
      privateForwardName: t & 65536 ? e.string() : void 0,
      botGroupAdminRights: t & 131072 ? e.object() : void 0,
      botBroadcastAdminRights: t & 262144 ? e.object() : void 0,
      wallpaper: t & 16777216 ? e.object() : void 0,
      stories: t & 33554432 ? e.object() : void 0,
      businessWorkHours: n & 1 ? e.object() : void 0,
      businessLocation: n & 2 ? e.object() : void 0,
      businessGreetingMessage: n & 4 ? e.object() : void 0,
      businessAwayMessage: n & 8 ? e.object() : void 0,
      businessIntro: n & 16 ? e.object() : void 0,
      birthday: n & 32 ? e.object() : void 0,
      personalChannelId: n & 64 ? e.int53() : void 0,
      personalChannelMessage: n & 64 ? e.int() : void 0,
      stargiftsCount: n & 256 ? e.int() : void 0,
      starrefProgram: n & 2048 ? e.object() : void 0,
      botVerification: n & 4096 ? e.object() : void 0,
      sendPaidMessagesStars: n & 16384 ? e.long() : void 0,
      disallowedGifts: n & 32768 ? e.object() : void 0,
      starsRating: n & 131072 ? e.object() : void 0,
      starsMyPendingRating: n & 262144 ? e.object() : void 0,
      starsMyPendingRatingDate: n & 262144 ? e.int() : void 0,
      mainTab: n & 1048576 ? e.object() : void 0,
      savedMusic: n & 2097152 ? e.object() : void 0,
      note: n & 4194304 ? e.object() : void 0,
    };
  },
  3992020209: function (e) {
    var t = e.uint();
    return {
      _: `storyItem`,
      flags: t,
      pinned: !!(t & 32),
      public: !!(t & 128),
      closeFriends: !!(t & 256),
      min: !!(t & 512),
      noforwards: !!(t & 1024),
      edited: !!(t & 2048),
      contacts: !!(t & 4096),
      selectedContacts: !!(t & 8192),
      out: !!(t & 65536),
      id: e.int(),
      date: e.int(),
      fromId: t & 262144 ? e.object() : void 0,
      fwdFrom: t & 131072 ? e.object() : void 0,
      expireDate: e.int(),
      caption: t & 1 ? e.string() : void 0,
      entities: t & 2 ? e.vector(e.object) : void 0,
      media: e.object(),
      mediaAreas: t & 16384 ? e.vector(e.object) : void 0,
      privacy: t & 4 ? e.vector(e.object) : void 0,
      views: t & 8 ? e.object() : void 0,
      sentReaction: t & 32768 ? e.object() : void 0,
      albums: t & 524288 ? e.vector(e.int) : void 0,
    };
  },
  1272375192: function (e) {
    return { _: `messageMediaPoll`, poll: e.object(), results: e.object() };
  },
  2061444128: function (e) {
    var t = e.uint();
    return {
      _: `pollResults`,
      flags: t,
      min: !!(t & 1),
      results: t & 2 ? e.vector(e.object) : void 0,
      totalVoters: t & 4 ? e.int() : void 0,
      recentVoters: t & 8 ? e.vector(e.object) : void 0,
      solution: t & 16 ? e.string() : void 0,
      solutionEntities: t & 16 ? e.vector(e.object) : void 0,
    };
  },
  997055186: function (e) {
    var t = e.uint();
    return {
      _: `pollAnswerVoters`,
      flags: t,
      chosen: !!(t & 1),
      correct: !!(t & 2),
      option: e.bytes(),
      voters: e.int(),
    };
  },
  1484026161: function (e) {
    var t = e.long(),
      n = e.uint();
    return {
      _: `poll`,
      id: t,
      flags: n,
      closed: !!(n & 1),
      publicVoters: !!(n & 2),
      multipleChoice: !!(n & 4),
      quiz: !!(n & 8),
      question: e.object(),
      answers: e.vector(e.object),
      closePeriod: n & 16 ? e.int() : void 0,
      closeDate: n & 32 ? e.int() : void 0,
    };
  },
  4279689930: function (e) {
    return { _: `pollAnswer`, text: e.object(), option: e.bytes() };
  },
  1766936791: function (e) {
    var t = e.uint();
    return {
      _: `messageMediaPhoto`,
      flags: t,
      spoiler: !!(t & 8),
      photo: t & 1 ? e.object() : void 0,
      ttlSeconds: t & 4 ? e.int() : void 0,
    };
  },
  1763137035: function (e) {
    var t = e.uint();
    return {
      _: `messageReplyHeader`,
      flags: t,
      replyToScheduled: !!(t & 4),
      forumTopic: !!(t & 8),
      quote: !!(t & 512),
      replyToMsgId: t & 16 ? e.int() : void 0,
      replyToPeerId: t & 1 ? e.object() : void 0,
      replyFrom: t & 32 ? e.object() : void 0,
      replyMedia: t & 256 ? e.object() : void 0,
      replyToTopId: t & 2 ? e.int() : void 0,
      quoteText: t & 64 ? e.string() : void 0,
      quoteEntities: t & 128 ? e.vector(e.object) : void 0,
      quoteOffset: t & 1024 ? e.int() : void 0,
      todoItemId: t & 2048 ? e.int() : void 0,
    };
  },
};
