'use strict';

const Main = require('../object-create.js');
const Animal = Main.Animal;
const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    beforeEach(function () {
        this.Hippo = Object.create(Animal);
        this.Hippo.name = 'hungry, hungry';
    });

    it('has a name property', function () {

        expect(this.Hippo.name).toBeDefined();
    });

    it ('should have 0 calories, again', function () {

        expect(this.Hippo.calories).toBe(0);
    });

    it('can eat a food, and gain calories', function () {

        // let this.Hippo = new Animal('test');

        this.Hippo.eat({
            calories: 100
        });
        expect(this.Hippo.calories).toBeGreaterThan(0);
    });

});


describe('Dog', function () {

    beforeEach(function () {

        this.Doggie = Object.create(Dog);
        this.Doggie.name = 'Puppy';
        spyOn(this.Doggie, 'bark');
    });

    it('can bark', function () {

        this.Doggie.bark();
        expect(this.Doggie.bark).toHaveBeenCalled();
    });

});

