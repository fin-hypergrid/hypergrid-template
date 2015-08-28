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