'use strict';

const repeat = require('../higher-order-functions').repeat;
const Module = require('../higher-order-functions');

describe('Higher Order Function', function () {

    it('uses the result of a function to compute a new function (function operates on another function)', function() {

        spyOn(Module, 'callback').and.callThrough();
        repeat(5, Module.callback);

        expect(Module.callback.calls.count()).toEqual(5);
    });
});
