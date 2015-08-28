var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var js     = require('../config').js;
 
gulp.task('lint', function() {
	return gulp.src(js.srcAll)
		.pipe(jshint({
			browserify: true,
			esnext: true,
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: false,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			unused: true,
			boss: true,
			eqnull: true,
			node: true
		}))
		.pipe(jshint.reporter('default'));
});