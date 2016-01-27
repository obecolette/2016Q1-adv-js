'use strict';

const Main = require('../index.js');
const Animal = Main.Animal;
const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    beforeEach(function () {
        this.Hippo = new Animal('Hungry, Hungry');
    });

    it('has a name property', function () {

        expect(this.Hippo.name).toBeDefined();
    });

    it ('should have 0 calories', function () {

        expect(this.Hippo.calories).toBe(0);
    });

    it('can eat a food, and gain calories', function () {

        this.Hippo.eat({
            name: 'cake';
            calories: 100
        });

        expect(this.Hippo.calories).toBeGreaterThan(0);
    });

    it ('should have 0 calories, again', function () {

        expect(this.Hippo.calories).toBe(0);
    });

});


describe('Dog', function () {

    beforeEach(function () {

        this.Doggie = new Dog('Odie');
        spyOn(this.Doggie, 'bark');
    });

    it('can bark', function () {

        this.Doggie.bark();
        expect(this.Doggie.bark).toHaveBeenCalled();
    });

});

