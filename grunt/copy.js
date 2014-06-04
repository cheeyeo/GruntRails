module.exports = {
  fonts:{
    files: [{
      expand: true,
      cwd: '<%= assets.source.fonts %>',
      dest: '<%= assets.dist.fonts %>',
      src: '**'
    }]
  }
};
