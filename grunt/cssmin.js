module.exports = {
  combine: {
    files: {
      '<%= assets.dist.stylesheets %>/application.css':
      [
        '<%= assets.source.stylesheets %>/bootstrap.css',
        '<%= assets.source.stylesheets %>/bootstrap-theme.css',
        '<%= assets.source.stylesheets %>/**/*.css'
      ]
    }
  },
  minify: {
    expand: true,
    cwd: '<%= assets.dist.stylesheets %>',
    src: ['*.css','!*.min.css'],
    dest: '<%= assets.dist.stylesheets %>',
    ext: '.min.css'
  }
};
