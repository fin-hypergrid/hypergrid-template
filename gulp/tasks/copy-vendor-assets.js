var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-vendor-assets', function() {
    gulp.src(config.vendorAssets)
    .pipe(gulp.dest('./build'));
});