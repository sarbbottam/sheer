/*
 * Copyright (c) 2015, Sarbborram Bandyopadhyay. All rights reserved.
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
          src: [ 'css/*.css' ]
        }
      }
    },

    clean: ['css/*'],

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
        src: 'src/main.css',
        dest: 'css/ltr.css'
      }
    },

    rtlcss: {
      'default': {
        dest: 'css/rtl.css',
        src: ['css/ltr.css']
      }
    },

    watch: {
      css: {
        files: ['src/**/*.css'],
        tasks: ['clean', 'postcss', 'rtlcss', 'cssmin', 'usebanner']
      }
    },

    cssmin: {
      css: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    }

  });

  grunt.registerTask('default', ['clean', 'postcss', 'rtlcss', 'cssmin', 'usebanner']);
  grunt.registerTask('init', ['watch']);

};
