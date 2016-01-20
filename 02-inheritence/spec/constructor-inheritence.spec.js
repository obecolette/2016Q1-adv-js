'use strict';

// load our 'main'

const Main = require('../constructor-inheritence.js');
const Animal = Main.Animal;
// const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    beforeEach(function () {
        this.Hippo = new Animal('hungry, hungry');
    });

    it ('has a name; a firstName property', function () {

        // let this.Hippo = new Animal('test');
        expect(this.Hippo.firstName).toContain('hungry');
    });

    it ('should have calories', function () {

        // let this.Hippo = new Animal('test');
        expect(this.Hippo.calories).toBe(0);
    });

    it('can eat a food, and gain calories', function () {

        // let this.Hippo = new Animal('test');

        this.Hippo.eat({
            calories: 100
        });
        expect(this.Hippo.calories).toBeGreaterThan(0);
    });

    it ('should have 0 calories, again', function () {

        // let this.Hippo = new Animal('test');
        expect(this.Hippo.calories).toBe(0);
    });


});


describe('Dog', function () {


});

