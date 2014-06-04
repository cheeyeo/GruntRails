1. Grunt Intro

What is grunt? Why is it useful? How can it help my workflow?


Do we need another task runner?




2. Installing / setup grunt
=====================================

Latest version 0.4.0

Grunt runs using node.js so make sure node.js is setup properly first

Setup Grunt:

```
  npm install grunt --save-dev # installs the core logic for running tasks etc

  npm install <module> --save-dev installs the module locally and append it
  to the devDependencies block inside package.json with a tilde version


  npm install -g grunt-cli
  # puts grunt command in PATH so it can be run across projects
  # allows users to choose different versions of grunt to run in different projects

  npm install -g grunt-init
  # Scaffold to create the package.json and Gruntfile to start a new project
  # need to install specific templates into ~/.grunt-init/ which can be invoked
  using grunt-cli <template name>


  Once Gruntfile and package.json are in place:

  run npm install to install dependencies



  To install specific grunt module:

  npm install <module> --save-dev



```

3. Using grunt
====================================

Gruntfile composes of the following parts:

An example Gruntfile:

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

wrapper function:

module.exports = function(grunt) {
  // grunt related tasks in here
}

to specify project configuration:

```js

    grunt

```


4. Advanced Topics
=====================

To use in Rails, disable the asset pipeline by removing sprockets

You can still use your view helpers such as javascript_link_tag etc

From within your gruntfile use a task such as grunt-asset-fingerprint to
create the md5 hashes for the assets before deploy.


Another option is to use a hybrid of Sprockets standalone with
a combination of custom rake tasks


something like a rubygem halfpipe[https://github.com/d-i/half-pipe] could help with the workflow by creating gruntfile through generators and putting the files within the rails project






