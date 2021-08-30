// Types - fundamental changes in TS 
// Typescript enforces typing via erorr messaging but will NOT stop compilation 
// due to error
// const add = (a:number, b:number) =>{
//     return a + b
// }
// console.log(add("1", 11))
// string
var str = "this is a string";
// number
var num = 10;
// boolean
var bool = true;
// ANY - new one!
var whatever = "this is antyitng";
// UNIONS!  - looser typed variable  OR super strict
var year;
year = 1979;
year = "1979";
//  Arrays
var arr = [];
var arr2 = [];
// TUPLES - ????
// strict typed array
// look up never on empty array
var tup = ["has to be string", 20, {}];
tup.push();
var tup2 = [];
var thisThing = 10;
thisThing = "this is now a thing";
//   OBJECTS!
var person = {
    name: "tim",
    age: 35
};
person.job = "IA nights and weekends";
console.log(person);
var thisBook = {};
//  private and public methods - and passing classes
var book = /** @class */ (function () {
    function book(title, publisher, publishYear, salesFigures) {
        this.title = title,
            this.publisher = publisher,
            this.publishYear = publishYear;
    }
    return book;
}());
var bookOne = new book("lord of the flies", "western press", 1955, 100000);
// display hidden value from private
console.log(bookOne);
// Functions and declaring
// Js classic
// const add = ( a, b ) => { return a+b }
// TS implementation
// const  add = (a:number, b:number):number =>{
//     return a+b 
// }
// optional arguments
var add3 = function (a, b, c) {
    return a + b + c;
};
add3(1, 2);
//  V O I D! (Void)
// this function retruns nothing and does nothing
// and it returns VOID - only null or undefined can be assigned to void
var dontDoAnything = function () {
    console.log("this does nothing");
};
dontDoAnything();
//  DOM & typecasting - stranger cases
//  typecasting is the concept of applying a type to somehting
//  that can't totally be implicit
// let input = document.querySelector("#name")
// this fails because of typecasting to an HTML element
// check value
//  works because of HTMLInput element
var input = document.querySelector('input');
//  display ? due to null possibility
// typecast to different type
// let input = document.querySelector('#name') as HTMLInputElement
// defaults to type Element which is not an InputElement 
// we need to tell TS what kind of dom element this is
var age = document.querySelector('#age');
// auto builds to form class - no need to cast
var form = document.querySelector("form");
// let form = document.querySelector("form")!
var greeting = document.querySelector('.greeting');
// cast to div element in order to update innerHtml
//  display ? because element may be null
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    greeting === null || greeting === void 0 ? void 0 : greeting.innerText;
});
//  other way of fixing this would be to add a ! to the form variable
//  Generics 
//  Sometimes we may need a gnereic typed function.  We declare as such
// we default a <T> to our default type in this case
var doSomething = function (arg) {
    return arg;
};
// use cases : 
doSomething("this");
doSomething(11);
doSomething(doSomething);
doSomething(bookOne);
var random = {
    id: 1,
    randomData: "this is data"
};
var random2 = {
    id: 2,
    randomData: 2
};
// Enum  - assigning words to numerics
//  works in databases mostly
var restaurants;
(function (restaurants) {
    restaurants[restaurants["BURGER_KING"] = 0] = "BURGER_KING";
    restaurants[restaurants["McDonalds"] = 1] = "McDonalds";
    restaurants[restaurants["Pizza_hut"] = 2] = "Pizza_hut";
    restaurants[restaurants["Bodega"] = 3] = "Bodega";
})(restaurants || (restaurants = {}));
var order = {
    price: 20,
    provider: restaurants.BURGER_KING
};
console.log(order);
