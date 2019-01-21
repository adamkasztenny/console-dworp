module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: ['src/**/*.js', 'test/**/*.js']
  });
};
