interface IAnimal {
  name: string;
  color?: string;
}

class Animal implements IAnimal {
  constructor(public name: string, public color?: string) {}
}

class Animal4Paws extends Animal {
  public readonly numberPaws;

  constructor(public name: string, public color?: string) {
    super(name, color);
    this.numberPaws = 4;
  }
}

class Cat extends Animal4Paws {
  constructor(public name: string, public color?: string) {
    super(name, color);
  }
}

class Dog extends Animal4Paws {
  constructor(public name: string, public color?: string) {
    super(name, color);
  }
}

class Bird extends Animal {
  constructor(public name: string, public color?: string) {
    super(name, color);
  }
}

class Fish extends Animal {
  constructor(public name: string, public color?: string) {
    super(name, color);
  }
}

function photographAllAnimal(animal: Animal) {
  return "vous pouvez prendre une photo";
}

function meow(cat: Cat) {
  return "je miaule";
}

function bark(dog: Dog) {
  return "j'aboye";
}

function fly(bird: Bird) {
  return "je vole";
}

function swim(fish: Fish) {
  return "je nage";
}

function petAnimal4Paws(animal: Animal4Paws) {
  return "on peux me carresser";
}

function feedAllBlackAnimals(animal: Animal) {
  if (animal.hasOwnProperty("color") && animal.color == "noir") {
    return "je peux être nourris";
  } else return "";
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
  let color: string = entity.color ? "(" + entity.color + ")" : "";
  let forCat = "";
  if (entity instanceof Cat) {
    forCat = meow(entity);
  }

  let forDog = "";
  if (entity instanceof Cat) {
    forDog = bark(entity);
  }

  let forBird = "";
  if (entity instanceof Cat) {
    forBird = fly(entity);
  }

  let for4paws = "";
  if (entity instanceof Animal4Paws) {
    for4paws = petAnimal4Paws(entity);
  }

  let isBlackAnimal = "";
  if (entity instanceof Animal) {
    isBlackAnimal = feedAllBlackAnimals(entity);
  }

  console.log(
    `${entity.name} ${color} ${
      entity instanceof Animal ? "je suis un animal" : ""
    } ${photographAllAnimal(
      entity
    )} ${forCat} ${forDog} ${forBird} ${for4paws} ${isBlackAnimal}
`
  );
});
