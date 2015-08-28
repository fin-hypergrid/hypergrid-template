'use strict';

var API = require('./mod/sampleAPI.js');

if (!window.fin) {
    window.fin = {};
}

window.fin.API = API;

window.addEventListener('polymer-ready', function() {
    API.init(API.data);
});