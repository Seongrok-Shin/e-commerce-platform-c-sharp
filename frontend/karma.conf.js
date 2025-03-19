module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--no-sandbox",
          "--disable-gpu",
          "--remote-debugging-port=9222",
        ],
      },
    },
    captureTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
  });
};
