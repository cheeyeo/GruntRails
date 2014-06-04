module.exports = {
  dist: {
    files: {
      '<%= assets.dist.javascripts %>/application.min.js': ['<%= assets.dist.javascripts %>/application.js']
    }
  }
};
