console.log('Import works!')

var zipFolder = require('zip-folder');
var serv = require('simple-server');
 
zipFolder('./ppl/code', './ppl/level.zip', function(err) {
    if(err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT\n Starting server on port 9960');
        serv("./ppl",9960);
    }
});
