#Server with browser Sync

##Intallation

```bash
$ npm install
```

##Workflow

###Develop
Develop JavaScript in `./src/js/**/*.js` and HTML in `./build/**/index.html`. Your HTML file should contain a single script include:

```javascript
<script src="out.js"></script>
```

###Start 'er up
From your project folder:

```bash
$ gulp
```

Gulp performs the following tasks:

1. Sets up **watchify** (see below)
2. Copies `src/css/` to `build/`.
3. Runs **browserify**: Bundles up all your JavaScript files into `./build/out.js` 
4. Starts **browser-sync** in server mode using port 5000
5. Automatically opens a browser window and points it to `http://localhost:5000`

###Iterate
Continue your development...

Watchify watches your `src/js/**/*.js` files and whenever you save, it runs the following:

1. Runs **jshint**: Checks your JavaScript syntax
2. Runs **prettify**: Normalizes your syntax (modifies your files)
3. Runs **browserify**: *(see above)*

(At present, uglify and mocha are not being run.)




