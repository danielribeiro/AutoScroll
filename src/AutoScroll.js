"use strict";

// Get the options
chrome.storage.local.get(defaults, function (options) {

  // Update the options when they change
  chrome.storage.onChanged.addListener(function (o, s) {
    console.assert(s === "local");
    for (var k in o) {
      var x = o[k];
      if ("newValue" in x) {
        options[k] = x.newValue;
      } else if ("oldValue" in x) {
        options[k] = defaults[k];
      }
    }
  });

  var RAD_TO_DEG = Math.PI / 180;

  var math = {
    hypot: function (x, y) {
      return Math.sqrt(x * x + y * y);
    },
    max: function (num, cap) {
      var neg = cap * -1;
      return (num > cap
                ? cap
                : (num < neg
                    ? neg
                    : num));
    },
    angle: function (x, y) {
      var angle = Math.atan(y / x) / RAD_TO_DEG;
      if (x < 0) {
        angle += 180;
      } else if (y < 0) {
        angle += 360;
      }
      return angle;
    }
  };

  function image(o) {
    if (o.width && o.height) {
      return chrome.runtime.getURL("data/images/origin/both.svg");
    } else if (o.width) {
      return chrome.runtime.getURL("data/images/origin/horizontal.svg");
    } else {
      return chrome.runtime.getURL("data/images/origin/vertical.svg");
    }
  }
  // ... (rest of the file continues)
});