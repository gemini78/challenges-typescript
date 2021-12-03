"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.tellMyName = () => {
            console.log(` I am ${this.name}`);
        };
        this.name = name;
        this.age = age;
    }
    tellMyAge() {
        console.log(` I have ${this.age}`);
    }
}
let people = [new Person("John", 40), new Person("Mary", 35)];
people.map((person) => {
    person.tellMyName();
    person.tellMyAge();
});
//# sourceMappingURL=index.js.map