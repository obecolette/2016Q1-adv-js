'use strict';

module.exports = function () {

    'use strict';

    // ES5 defaults

    var oldGreeting = function oldGreeting(name) {

        var defaultGreeting = 'brave new world';
        var greetingSuffix = name === undefined ? defaultGreeting : name;

        return 'Hello, ' + greetingSuffix + '!';
    };

    // ES6 Default Parameters

    var greeting = function greeting() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? 'brave new world' : arguments[0];


        return 'Hello, ' + name + '!';
    };

    // do not use named parameters here

    var addTwoNumbers = function addTwoNumbers() {

        // set default values here

        var numbaOne = getValueOrDefault(arguments[0], 0);
        var numbaTwo = getValueOrDefault(arguments[1], 0);

        return numbaOne + numbaTwo;
    };

    // this function is private because we do not export it (via the revealing module pattern below)

    var getValueOrDefault = function getValueOrDefault(currentValue, defaultValue) {

        // http://www.codereadability.com/javascript-default-parameters-with-or-operator/#howtosetdefaultsvaluesinstead

        if (currentValue === undefined) {
            return defaultValue;
        } else {
            return currentValue;
        }
    };

    return {
        greeting: greeting,
        oldGreeting: oldGreeting,
        addTwoNumbers: addTwoNumbers
    };
}();