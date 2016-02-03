'use strict';

const PureFunc = require('../pure-functions');

let fruits = PureFunc.fruits;
let people = PureFunc.people;
let filterMyFavoriteFruit = PureFunc.filterMyFavoriteFruit;
let addPeople = PureFunc.addPeople;

describe('Pure Function', function () {

    it('adding a new person does not modify the original data structure', function () {

        const EranHammer = {
            'name': 'Eran Hammer',
            'Twitter': '@eranhammer'
        };

        const newPeople = addPeople(people,EranHammer);

        expect(people.length).toBe(1);
        expect(newPeople.length).toBeGreaterThan(1);
        expect(newPeople[1]).toEqual(EranHammer);
    });

    it('pruning fruits does not modify the original data structure', function () {


        const numberOfFruits = fruits.length;
        const myFavoriteFruit = fruits[4];
        let filteredFruits = filterMyFavoriteFruit(fruits, myFavoriteFruit);

        // original fruits untouched
        expect(fruits.length).toBe(numberOfFruits);
        // console.log('myFavoriteFruit(s): ', myFavoriteFruit);
        expect(filteredFruits.length).toBe(1);
        expect(filteredFruits).toContain(myFavoriteFruit);


    });
});


