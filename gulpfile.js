var del             = require('del');
var gulp            = require('gulp');
var postcss         = require('gulp-postcss');
var rename          = require('gulp-rename');
var header          = require('gulp-header');
var rtlcss          = require('gulp-rtlcss');
var cssmin          = require('gulp-minify-css');

var pkg = require('./package.json');
var banner = ['/*',
  ' * Copyright (c) <%= new Date().getFullYear() %>, <%= pkg.author %>. All rights reserved.',
  ' * Copyrights licensed under the <%= pkg.license %> License.',
  ' * See the accompanying LICENSE file for terms.',
  ' */',
  '\n'
].join('\n');

gulp.task('clean', function () {
  del(['dist/css/*.css'], function (error, deletedFiles) {
    console.log('files deleted:', deletedFiles.join(', '));
  });
});

gulp.task('postcss', function () {
  var processors = [
    require('postcss-import')(),
    require('postcss-discard-comments'),
    require('postcss-custom-properties')(),
    require('postcss-mixins')(),
    require('postcss-nested'),
    require('postcss-calc')(),
    require('postcss-media-minmax')(),
    require('postcss-custom-media')(),
    require('autoprefixer-core')({browsers: 'last 3 version'})
  ];
  return gulp.src('./src/css/main.css')
    .pipe(postcss(processors))
    .pipe(rename('ltr.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('rtlcss', ['postcss'], function () {
  return gulp.src('./dist/css/ltr.css')
  .pipe(rtlcss())
  .pipe(rename('rtl.css'))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('cssmin', ['postcss', 'rtlcss'], function() {
  return gulp.src('./dist/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min', extname: '.css'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('banner', ['postcss', 'rtlcss', 'cssmin'], function () {
  return gulp.src('./dist/css/*.css')
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['clean', 'postcss', 'rtlcss', 'cssmin', 'banner']);
});

gulp.task('default', ['clean', 'postcss', 'rtlcss', 'cssmin', 'banner']);
