module.exports = {
  options:{
    configFile: 'karma.conf.js',
    browsers: ['Chrome']
  },
  unit: {
    background: true
  },
  //continuous integration mode: run tests once in PhantomJS browser.
  continuous: {
    singleRun: true,
    autoWatch: false,
    browsers: ['PhantomJS']
  }
};
