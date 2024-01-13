//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} made a sound.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        return `${this.name} says woof woof`;
    }
}

const doggy = new Dog('tom', 'golden retriever');

console.log(doggy.speak())
console.log(doggy.bark())
console.log(doggy.breed)
console.log(doggy.name)