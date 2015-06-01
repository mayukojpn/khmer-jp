var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
      proxy: "localhost:80"

    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./sass/*/*.scss", ['sass']);
    gulp.watch("./sass/*/*/*.scss", ['sass']);
    gulp.watch("./*.php").on('change', reload);
});

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(["last 2 version", "ie 8", "ie 7"]))
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
