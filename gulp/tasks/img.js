module.exports = function () {
  $.gulp.task('img', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpg,jpeg}')
      .pipe($.gp.tinypng('RnBvh0k4vGKkD5HZ1VFLB77gx0FY6XV4'))
      .pipe($.gulp.dest('build/static/img'));
  });
  $.gulp.task('copyOther', function () {
    return $.gulp.src(['src/static/img/**/*', '!src/static/img/**/*.{png,jpg,jpeg}'])
      .pipe($.gulp.dest('build/static/img'));
  });
}