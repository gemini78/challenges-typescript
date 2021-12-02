"use strict";
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Animal4Paws extends Animal {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.numberPaws = 4;
    }
}
class Cat extends Animal4Paws {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
}
class Dog extends Animal4Paws {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
}
class Bird extends Animal {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
}
class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
}
function photographAllAnimal(animal) {
    return "vous pouvez prendre une photo";
}
function meow(cat) {
    return "je miaule";
}
function bark(dog) {
    return "j'aboye";
}
function fly(bird) {
    return "je vole";
}
function swim(fish) {
    return "je nage";
}
function petAnimal4Paws(animal) {
    return "on peux me carresser";
}
function feedAllBlackAnimals(animal) {
    if (animal.hasOwnProperty("color") && animal.color == "noir") {
        return "je peux être nourris";
    }
    else
        return "";
}
let livingEntity = [
    new Cat("Chat européen", "noir"),
    new Cat("Chat chartreux"),
    new Dog("Chien Terre-Neuve", "noir"),
    new Dog("Chien Moon Moon"),
    new Bird("Mésange"),
    new Bird("Merle", "noir"),
    new Fish("Thon"),
    new Fish("Requin"),
    new Animal("Asticot"),
];
livingEntity.map((entity) => {
    let color = entity.color ? "(" + entity.color + ")" : "";
    console.log(`
  ${entity.name} ${color} ${photographAllAnimal(entity)} ${entity instanceof Animal ? "je suis un animal" : ""}
  ${entity instanceof Cat ? meow(entity) : ""} 
  ${entity instanceof Dog ? bark(entity) : ""} 
  ${entity instanceof Bird ? fly(entity) : ""}
  ${entity instanceof Fish ? swim(entity) : ""}
  ${entity instanceof Animal4Paws ? petAnimal4Paws(entity) : ""}
  ${entity instanceof Animal ? feedAllBlackAnimals(entity) : ""}
`);
});
//# sourceMappingURL=noe.js.map