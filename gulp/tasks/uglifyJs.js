var gulp       = require('gulp');
var production = require('../config').production;
var size       = require('gulp-filesize');
var uglify     = require('gulp-uglify');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(production.jsSrc)
    .pipe(uglify())
    .on('error', function(err){
    	console.log(err);
    })
    .pipe(gulp.dest(production.dest))
    .pipe(size());
});

gulp.task('postbuild', ['browserify'], function() {
  return gulp.src('./build/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(size());
});
