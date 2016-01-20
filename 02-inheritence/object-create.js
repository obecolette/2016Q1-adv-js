'use strict';

// Hungarian notation! Just for kicks.
// https://en.wikipedia.org/wiki/Hungarian_notation

const DEFAULT_CAL_INT = 0;
let Jupiter = null;

(function (Jupe, startingCalories) {

    'use strict';

    // we use Capital letters to denote (ES5) 'Classes' by convention
    const Animal = {
        name: 'Odie',
        calories: startingCalories,
        eat: function (food) {

            this.calories = this.calories + food.calories;
        }
    };

    // Define a Dog that can bark, and has the same methods and properties of Animal

    const Dog = Object.create(Animal);

    Dog.bark = function () {

        if (typeof Audio === 'function') {
            let noise = new Audio('http://www.freesfx.co.uk/rx2/mp3s/3/3580_1329340200.mp3');
            if (noise && typeof noise.play === 'function') {
                noise.play();
            }
        }
    };

    // define / declare exports (for testing etc)

    exports.Animal = Animal;
    exports.Dog = Dog;

    /*
    // prototype manipulation with Object.create

    Dog.breed = "shepherd";
    console.log(Jupe.breed);
    Jupe.breed = "pincer";
    console.log(Jupe.breed);

    let someoneElsesDog = Object.create(Dog);
    console.log(someoneElsesDog.breed);
    */

})(Jupiter, DEFAULT_CAL_INT);
