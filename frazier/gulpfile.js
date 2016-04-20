'use strict';

const gulp    = require('gulp');
const eslint  = require('gulp-eslint');
const webpack = require('webpack-stream');
const del     = require('del');


let paths = {
  js: [__dirname + '/app/**/*.js', __dirname + '/server.js'],
  htmlAndCss: [__dirname + '/app/*.html', __dirname + '/app/**/*.html', __dirname + '/app/css/*.css']
};

gulp.task('eslint', () => {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
});


gulp.task('build:clear', () => {
  return del([__dirname + '/build/*']);
});
gulp.task('build:js', () => {
  return gulp.src(__dirname + '/app/entry.js')
    .pipe(webpack(require(__dirname + '/webpack.config.js')))
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('build:htmlAndCss', () => {
  return gulp.src(paths.htmlAndCss)
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('build:rebuild', ['eslint' ,'build:clear', 'build:js', 'build:htmlAndCss'], () => {
  console.log('__________________________________________________________________');
  console.log('REBUILT');
});
gulp.task('build:watch', () => {
  gulp.watch(paths.js.concat(paths.htmlAndCss), ['build:rebuild']);
});
