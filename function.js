// 1 name function

function myFunction() {
  console.log("this is traditional function");
}

myFunction();

// 2 Anonymous function --without name used as function expression or a argument

let greet = function (name) {
  console.log(`welcome to my friend ${name}`);
};

greet("sujon");

// 3 arrow function introduce in es6 shorter syntax and one line function

let greeting = () => console.log("welcome abdul alim sujon");

// 4 IIFE functon (immidiate invoked function expression)
//executed immediately after their creation
//used private scope and avoid pulling the global namespace
(function () {
  let str = "good morning";
  console.log(str);
})();

// 5 Higher order function -- function that take one or more function as arguments and return a function

let array = [10, 20, 30, 40, 50];

let newArray = array.map((element) => element + 10);

console.log(newArray);

// constructor function --use as bluePrint for creating object with similar properties and method

function Person(name, value) {
  this.name = name;
  this.value = value;
}

let user1 = new Person("abdul", 20);
let user2 = new Person("alimsujon", 25);

console.log(user2.value);
