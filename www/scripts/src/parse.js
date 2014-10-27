/// <reference path="node/node.d.ts" />
define(["require", "exports", './something'], function(require, exports, something) {
    var Parser = (function () {
        function Parser(bar) {
            console.log("hello from Parser");

            this.bar = bar;
            this.thing = new something.Something();
        }
        Parser.prototype.getBar = function () {
            return this.bar;
        };
        return Parser;
    })();
    exports.Parser = Parser;
});
