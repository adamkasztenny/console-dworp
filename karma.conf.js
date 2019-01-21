module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: ['test/module.mock.js', 'src/**/*.js', 'test/**/*.js']
  });
};
