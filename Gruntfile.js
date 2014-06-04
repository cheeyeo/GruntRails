'use strict';

module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    init: true,
    data:{ //data passed into config.  Can use with <%= test %>
      pkg: grunt.file.readJSON('package.json'),
      assets: grunt.file.readJSON('grunt-assets.json'),
      aws: grunt.file.readJSON('grunt-aws.json')
    },
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });

  // custom tasks are defined inside grunt/aliases.yaml
};
