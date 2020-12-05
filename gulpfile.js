'use strict';


global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  clean: require('gulp-clean')(),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});
$.gulp.task('clean', function () {
  return $.gulp.src('build/static/img', { read: false })
    .pipe($.clean);
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('img', 'copyOther')
));