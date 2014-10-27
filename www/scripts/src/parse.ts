/// <reference path="node/node.d.ts" />

import something = require('./something');

export class Parser {

    private bar: string;
    private thing: something.Something;

    public constructor(bar: string) {

        console.log("hello from Parser");

        this.bar = bar;
        this.thing = new something.Something();

    }

    public getBar(): string { return this.bar; }

}
