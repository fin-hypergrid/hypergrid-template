var gulp  = require('gulp');

var openfinLauncher = require('openfin-launcher'),
    path = require('path');
 
gulp.task('openfin', function() {
  openfinLauncher.launchOpenFin({
      configPath: 'file:/' + path.resolve('app.json')
  });
});