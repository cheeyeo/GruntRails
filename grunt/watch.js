module.exports = {
  js: {
    options: { livereload: true },
    files: '<%= assets.source.javascripts %>/*.js',
    tasks: ['concat','uglify','clean:js','karma:unit:run']
  },
  css: {
    options: { livereload: true },
    files: '<%= assets.source.stylesheets %>/*.css',
    tasks: ['cssmin','clean:css']
  },
  karma:{
    files: ['spec/javascripts/*_spec.js'],
    tasks: ['karma:unit:run']
  }
};
