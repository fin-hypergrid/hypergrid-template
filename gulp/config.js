var dest = "./build/";
var src = './src/';
var jsSrc = src + 'js/';
var jsAll = '**/*.js';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: [dest, '.', jsSrc + 'vendor']
    },
    port: 5000
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: jsSrc + 'main.js',
      dest: dest,
      outputName: 'out.js',
      browser: {},
      debug: true,
      options: 'esnext'
    }]
  },
  production: {
    cssSrc: dest + '*.css',
    jsSrc : dest + '*.js',
    dest  : dest
  },
  js: {
    src: jsSrc,
    all: jsAll,
    srcAll: jsSrc + jsAll
  },
  vendorAssets: [src + 'css/**/', './app.json']
};
