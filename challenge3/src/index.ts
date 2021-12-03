class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName = () => {
    console.log(` I am ${this.name}`);
  };

  tellMyAge(): void {
    console.log(` I have ${this.age}`);
  }
}

let people = [new Person("John", 40), new Person("Mary", 35)];

people.map((person) => {
  person.tellMyName();

  person.tellMyAge();
});
