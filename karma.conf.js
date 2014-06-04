module.exports = function (config) {
  return config.set({
    basePath: './',

    frameworks: [
      'jasmine'
    ],

    browsers: ['Chrome'],

    // specify scripts and styles available during test run
    files: [
      'app/assets/javascripts/jquery.js',
      'app/assets/javascripts/*.js',
      'spec/javascripts/*_spec.js'
    ],

    logLevel: config.LOG_ERROR,

    reporters: ['dots'],

    autoWatch: true,

    colors: true,

    captureTimeout: 5000
  });
};
