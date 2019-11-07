'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const stylelint = require('gulp-stylelint')

gulp.task('sass', gulp.series(() =>
  gulp.src('./src/**/*.scss')
    .pipe(sass({sourceComments: true}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
))

gulp.task('stylelint', gulp.series(() =>
  gulp.src('./src/**/*.scss')
    .pipe(stylelint({reporters: [{formatter: 'string', console: true}]}))
))

gulp.task('default', gulp.series(gulp.parallel('stylelint', 'sass'), () =>
  gulp.watch('./src/**/*.scss', gulp.series(gulp.parallel('stylelint', 'sass')))
))
