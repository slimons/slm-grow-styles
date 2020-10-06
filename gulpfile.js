const gulp = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')

sass.compiler = require('node-sass')

gulp.task('default', () => gulp.src('./src/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssmin())
  .pipe(gulp.dest('./')))
