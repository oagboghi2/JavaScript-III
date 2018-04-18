/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Object Binding
* 2. Implicit Binding
* 3. Explicit Binding
* 4. 'new' binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
function Implicit(){
     name = "obo";
     this.bind = function(){
         return `this is being binded: ${this.name}`
    }
}

console.log(Implicit.bind());

// Principle 3

// code example for New Binding
const Shopper = function (name, age, grade) {
    this.name = name;
    this.age = age;
    this.member = true;
};

const David = new Shopper("David", 25, true);
console.log(David)

// Principle 4

// code example for Explicit Binding
function sayName() {
    return `My name is ${this.name}`;
}

console.log(sayName.call(David));