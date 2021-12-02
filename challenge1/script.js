function hello(name) {
    console.log("Hello " + name);
}
var firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    if (b === void 0) { b = ""; }
    return a + b;
}
var ds = concat("Donkey", concat("School"));
console.log(ds);
