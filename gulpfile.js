'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const stylelint = require('gulp-stylelint')

gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({sourceComments: true}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
})

gulp.task('stylelint', () => {
  return gulp.src('./src/**/*.scss')
  .pipe(stylelint({reporters: [{formatter: 'string', console: true}]}))
})

gulp.task('default', ['stylelint', 'sass'], () => {
  gulp.watch('./src/**/*.scss', ['stylelint', 'sass'])
})
