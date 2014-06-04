module.exports = {
  javascripts: {
    src: [
      '<%= assets.source.javascripts %>/jquery.js',
      '<%= assets.source.javascripts %>/bootstrap.js',
      '<%= assets.source.javascripts %>/intro.js',
      '<%= assets.source.javascripts %>/main.js',
      '<%= assets.source.javascripts %>/outro.js'
    ],
    dest: '<%= assets.dist.javascripts %>/application.js',
  }
};
