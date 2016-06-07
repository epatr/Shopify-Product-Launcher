var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
    server: "./"
  });

  gulp.watch("app.js").on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});