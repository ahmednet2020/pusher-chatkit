const sass = require('node-sass');
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
  //sass config
  sass: {
    options: {
        implementation: sass,
        sourceMap: true
    },
    dist: {
        files: {
            './build/css/main.css': './src/css/main.scss'
        }
    }
  },
  //watch config
  watch: {
    js: {
      files: ['./src/js/**'],
      tasks: ['browserify'],
    },
    css: {
      files: ['./src/css/**'],
      tasks: ['sass'],
    }
  },
})
  //run Tasks
  grunt.registerTask('default', ['browserify','sass','watch']);
};