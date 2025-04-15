"use strict";

// Migrate old user configuration if it exists
chrome.storage.local.get("Options.config.user", function (data) {
  if (data && data["Options.config.user"]) {
    const userConfig = JSON.parse(data["Options.config.user"]);
    chrome.storage.local.set(userConfig, function () {
      chrome.storage.local.remove("Options.config.user");
    });
  }
});

// Remove old base configuration if it exists
chrome.storage.local.remove("Options.config.base");