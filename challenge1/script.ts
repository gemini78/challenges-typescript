function hello(name: string):void {
    console.log("Hello " + name);
}

var firstName: string = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b:string=""):string {
    return a + b;
}

var ds:string = concat("Donkey", concat("School"));
console.log(ds);