'use strict';

const PureFunc = require('../pure-functions');

//let fruits = PureFunc.fruits;
// let people = PureFunc.people;
let favoriteFruits = PureFunc.favoriteFruits;
// let addPeople = PureFunc.addPeople;

describe('Pure Function', function () {

    it('adding a new person does not modify the original data structure');

    it('pruning fruits does not modify the original data structure', function () {

        let fruits = PureFunc.fruits;
        let myFavoriteFruit = favoriteFruits(fruits);
        expect(myFavoriteFruit).not.toContain('pear');
        // console.log('myFavoriteFruit(s): ', myFavoriteFruit);
        expect(fruits).toContain('pear');
    });
});
