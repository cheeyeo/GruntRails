var mozjpeg = require('imagemin-mozjpeg');
var path = require('path');

module.exports = {
  options: {
    optimizationLevel: 3,
    use: [mozjpeg()],
    cache: false
  },
  dist:{
    files: [{
      expand: true,
      flatten: true,
      filter: 'isFile',
      cwd: '<%= assets.source.images %>',
      src: ['**/*.{png,jpg,gif,jpeg}'],
      dest: '<%= assets.dist.images %>'
    }]
  }
};
