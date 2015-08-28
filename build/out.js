(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var API = require('./mod/sampleAPI.js');

if (!window.fin) {
    window.fin = {};
}

window.fin.API = API;

window.addEventListener('polymer-ready', function() {
    API.init(API.data);
});
},{"./mod/sampleAPI.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = {
    data: require('./sampleData.js'),
    init: require('./sampleInit.js')
};
},{"./sampleData.js":3,"./sampleInit.js":4}],3:[function(require,module,exports){
'use strict';

var i, r, c, row,
    ROWS = 100,
    COLS = 26,
    rows = [],
    cols = [''],
    A = "A".charCodeAt(0);

for (r = 1; r <= ROWS; ++r) {
    row = {
        '': r
    };

    for (i = 0; i < COLS; ++i) {
        c = String.fromCharCode(A + i);
        row[c] = c + r;
    }

    rows.push(row);
}

for (i = 0; i < COLS; ++i) {
    cols.push(String.fromCharCode(A + i));
}

module.exports = {
    rows: rows,
    cols: cols
};
},{}],4:[function(require,module,exports){

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9tb2Qvc2FtcGxlQVBJLmpzIiwic3JjL2pzL21vZC9zYW1wbGVEYXRhLmpzIiwic3JjL2pzL21vZC9zYW1wbGVJbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQVBJID0gcmVxdWlyZSgnLi9tb2Qvc2FtcGxlQVBJLmpzJyk7XG5cbmlmICghd2luZG93LmZpbikge1xuICAgIHdpbmRvdy5maW4gPSB7fTtcbn1cblxud2luZG93LmZpbi5BUEkgPSBBUEk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2x5bWVyLXJlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgQVBJLmluaXQoQVBJLmRhdGEpO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiByZXF1aXJlKCcuL3NhbXBsZURhdGEuanMnKSxcbiAgICBpbml0OiByZXF1aXJlKCcuL3NhbXBsZUluaXQuanMnKVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpLCByLCBjLCByb3csXG4gICAgUk9XUyA9IDEwMCxcbiAgICBDT0xTID0gMjYsXG4gICAgcm93cyA9IFtdLFxuICAgIGNvbHMgPSBbJyddLFxuICAgIEEgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuXG5mb3IgKHIgPSAxOyByIDw9IFJPV1M7ICsrcikge1xuICAgIHJvdyA9IHtcbiAgICAgICAgJyc6IHJcbiAgICB9O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IENPTFM7ICsraSkge1xuICAgICAgICBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShBICsgaSk7XG4gICAgICAgIHJvd1tjXSA9IGMgKyByO1xuICAgIH1cblxuICAgIHJvd3MucHVzaChyb3cpO1xufVxuXG5mb3IgKGkgPSAwOyBpIDwgQ09MUzsgKytpKSB7XG4gICAgY29scy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoQSArIGkpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcm93czogcm93cyxcbiAgICBjb2xzOiBjb2xzXG59OyIsbnVsbF19
