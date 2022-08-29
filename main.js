console.log('Import works!')

var zipFolder = require('zip-folder');
 
var express = require('express');
var app = express();

app.use(express.static('ppl'));


zipFolder('./ppl/code', './ppl/level.zip', function(err) {
    if(err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT\n Starting server on port 9960');
        app.listen(9960);
    }
});
