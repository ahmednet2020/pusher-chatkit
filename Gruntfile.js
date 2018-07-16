
'use strict';  
module.exports = function(grunt) {
  //load all grunt plugin
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //browserify config
    browserify: {
      dist: {
        files: {
          './build/js/main.min.js': ['./src/js/**']
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    //uglify config
    uglify: {
    options: {
       sourceMap: false
    },
    build: {
      files: {
        './build/js/main.min.js': ['./build/js/main.min.js']
      }
    }
  },
})
  //run Tasks
  grunt.registerTask('default', ['browserify']);
};