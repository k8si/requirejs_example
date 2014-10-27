//initialize/install browserfs
BrowserFS.install(window);
var lsfs = new BrowserFS.FileSystem.LocalStorage();
BrowserFS.initialize(lsfs);

//now you can use 'fs' like normal (i.e. like you would if you could use Node.js -- though you can't use e.g. 'readSync', 'writeSync')
var fs = require('fs');

/*
Import your project's "main module" -- I noticed that whatever you pass to the function here has to have the same name as what you want to import. For example, if I wanted to import a file called "numbers.js" (compiled from "numbers.ts") in the "src" directory, I would call

require(['src/numbers'], function(numbers) { ... });

Also, I don't know how to import multiple files this way. In my project, I import 'parse', and import everything else I need inside of 'parse.ts' like normal, e.g. inside 'parse.ts' I would have:

import numbers = require('./numbers');

And so on. That seems to work fine.
*/
require(['src/parse'], function(parse) {

    var p = new parse.Parser("foo");
    console.log(p.getBar());

    //you can also use Node's Buffer class like normal too
    var buffer = new Buffer("foo");
    console.log(buffer.toString());

});