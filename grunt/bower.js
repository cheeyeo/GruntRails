module.exports = {
  install:{
    options: {
      targetDir: './app/assets',
      verbose: true,
      cleanTargetDir: false,
      cleanBowerDir: false,
      layout: function(type, component) {
        return type;
      }
    }
  }
};
