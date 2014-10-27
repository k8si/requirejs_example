//initialize/install browserfs
BrowserFS.install(window);
var lsfs = new BrowserFS.FileSystem.LocalStorage();
BrowserFS.initialize(lsfs);

//now you can use 'fs' like normal (i.e. like you would if you could use Node.js -- though you can't use e.g. 'readSync', 'writeSync')
var fs = require('fs');

require(['src/parse'], function(parse) {

    var p = new parse.Parser("foo");
    console.log(p.getBar());

    //you can also use Node's Buffer class like normal too
    var buffer = new Buffer("foo");
    console.log(buffer.toString());

});