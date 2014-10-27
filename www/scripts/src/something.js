define(["require", "exports"], function(require, exports) {
    var Something = (function () {
        function Something() {
            console.log("made a new Sometbing!");
        }
        return Something;
    })();
    exports.Something = Something;
});
