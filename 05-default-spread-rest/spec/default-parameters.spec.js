'use strict';

// require something here
const defaults = require('../dist/default-parameters');
const greeting = defaults.greeting;
const oldGreeting = defaults.oldGreeting;


describe('Default Parameters', function () {

    it('uses the default value if one if not supplied', function() {

        expect(greeting()).toEqual('Hello, brave new world!');
        expect(oldGreeting()).toEqual('Hello, brave new world!');
    });

    it('overrides the default value with the supplied one');

    // https://leanpub.com/understandinges6/read#leanpub-auto-functions-with-default-parameter-values
    // Be careful when using function calls as default parameter values. If you forget the parentheses, such as second = getValue in the last example, you are passing a reference to the function rather than the result of the function call.

    it('allows functions to be the default value');

    it('allows parameters earlier in the function definition to be used in later parameters');
});
