'use strict';

class Animal {

    constructor (name) {
        this.name = name;
        this.calories = 0;
    }

    eat (food) {

      this.calories = this.calories + food.calories;
      return this.calories;
    }
}

// Define a Dog that can bark, and has the same methods and properties of Animal

class Dog extends Animal {

    bark () {
      return  'woof';
    }
}

const MyDog = new Dog();

// console.log(MyDog.eat({
//   name: 'kibbles',
//   calories: 100
// }));

// console.log(MyDog.bark());

exports.Animal = Animal;
exports.Dog = Dog;
