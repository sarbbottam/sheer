/*
 * Copyright (c) 2015, Sarbbottam Bandyopadhyay. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */

'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*\n' +
      ' * Copyright (c) <%= new Date().getFullYear() %>, <%= pkg.author %>. All rights reserved.\n' +
      ' * Copyrights licensed under the <%= pkg.license %> License.\n' +
      ' * See the accompanying LICENSE file for terms.\n' +
      ' */\n',

    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true || false
        },
        files: {
          src: [ 'dist/css/*.css' ]
        }
      }
    },

    clean: ['dist/css/*'],

    postcss: {
      options: {
        processors: [
          require('postcss-import')(),
          require('postcss-discard-comments'),
          require('postcss-custom-properties')(),
          require('postcss-mixins')(),
          require('postcss-nested'),
          require('postcss-calc')(),
          require('postcss-media-minmax')(),
          require('postcss-custom-media')(),
          require('autoprefixer-core')({browsers: 'last 3 version'})
        ]
      },
      compile: {
        options: {
          // ToDo
        },
        src: 'src/css/main.css',
        dest: 'dist/css/ltr.css'
      }
    },

    rtlcss: {
      'default': {
        dest: 'dist/css/rtl.css',
        src: ['dist/css/ltr.css']
      }
    },

    watch: {
      css: {
        files: ['dist/src/**/*.css'],
        tasks: ['clean', 'postcss', 'rtlcss', 'cssmin', 'usebanner']
      }
    },

    cssmin: {
      css: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    }

  });

  grunt.registerTask('default', ['clean', 'postcss', 'rtlcss', 'cssmin', 'usebanner']);
  grunt.registerTask('init', ['watch']);

};
