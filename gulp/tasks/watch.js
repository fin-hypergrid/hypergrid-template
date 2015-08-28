/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');
var js     = config.js;

gulp.task('watch', ['watchify', 'browserSync'], function() {
	gulp.watch(js.srcAll, ['lint']);
	gulp.watch(js.srcAll, ['prettify']);
//	gulp.watch(config.markup.src, ['markup']);
	// Watchify will watch and recompile our JS, so no need to gulp.watch it
});
