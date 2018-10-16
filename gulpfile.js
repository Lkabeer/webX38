var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', gulp.series(function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
}));

// Static Server + watching scss files
gulp.task('serve', gulp.series('sass', function() {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
}));

gulp.task('default', gulp.series('serve'));