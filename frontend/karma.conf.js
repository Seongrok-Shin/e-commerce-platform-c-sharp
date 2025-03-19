module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    captureTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
  });
};
