// Types - fundamental changes in TS 
// Typescript enforces typing via erorr messaging but will NOT stop compilation 
// due to error

// string
let str:any= "hello!"
str =" this is a new string"
str = Number(str)
// number

let num:number = 100

// boolean
let bool:boolean;
bool = false
// ANY - new one!
let whatever:any;

whatever = 1;

whatever = bool;
// UNIONS!   
let year: number | string;
year = 1967;
year = "1999"

//  Arrays
let arr:Function[]= []
let arr2:number[]= []

arr.push( ()=>{console.log("hi"), ()=>{return 'world'}})
arr2.push(1, 10000, 23020320)

console.log(arr)
console.log(arr2)

// TUPLES - ????
let tup;

// Aliases
let alias;

//   OBJECTS!
let person = {
    name: "tim",
    age:48,
}
person.name = "Carlos"
person.name = 10 
person.email = ""

type stringNum = string | number

let year2:stringNum = "1979"
year2= 1797;

//interfaces
interface bookInterface {
    title:string,
    publisher:string
    publishYear:number
}
let thisBook:bookInterface = {
    title:"how to typescirpt",
    publisher:"microsoft",
    publishYear: 2021
}
//  private and public methods
class book implements bookInterface {
    title;
    publisher;
    publishYear; 
    private salesFigures;

    constructor(
        title:string, 
        publisher:string, 
        publishYear:number,
        salesFigures:number,
        // optional value
     ){
            
            this.title = title,
            this.publisher = publisher,
            this.publishYear = publishYear,
            this.salesFigures = salesFigures
         
    }
    getSales(){
        console.log(this.salesFigures)
    }
}
let bookOne:book = new book(
    "lord of the flies",
     "western press", 
     1955, 
     100000,
     "stuff"
    )
    // display hidden value from private
    console.log(bookOne)


// Functions and declaring
// Js classic
// const add = (a,b, c ) => { return a+b }
// TS implementation
const  add = (a:number, b:number):number =>{
    return a+b 
}
add(2,2)
add("2", 2)
// optional arguments

const add3 = (a:number, b:number, c?:number) =>{
    return a+b+c
}
add3(1,2)

//  V O I D! (Void)
// this function retruns nothing and does nothing
// and it returns VOID - only null or undefined can be assigned to void
const dontDoAnything = ():void =>{
    console.log("this does nothing")
}
dontDoAnything()


//  DOM & typecasting - stranger cases
//  typecasting is the concept of applying a type to somehting
//  that can't totally be implicit

// let input = document.querySelector("#name")
// this fails because of typecasting to an HTML element
// check value
//  works because of HTMLInput element
let input = document.querySelector('input')
//  display ? due to null possibility
input?.value

// typecast to different type
// let input = document.querySelector('#name') as HTMLInputElement
// defaults to type Element which is not an InputElement 
// we need to tell TS what kind of dom element this is
let age = document.querySelector('#age') as HTMLInputElement;
// auto builds to form class - no need to cast
let form = document.querySelector("form")

// let form = document.querySelector("form")!
const greeting = document.querySelector('.greeting') as HTMLDivElement
// cast to div element in order to update innerHtml
//  display ? because element may be null

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    greeting?.innerText
})
//  other way of fixing this would be to add a ! to the form variable


//  Generics 
//  Sometimes we may need a gnereic typed function.  We declare as such
// we default a <T> to our default type in this case
const doSomething = <T>(arg:T): T=>{
    return arg
}
// use cases : 
doSomething<string>("this")
doSomething<number>(11)
doSomething<Function>(doSomething)
doSomething<bookInterface>(bookOne)

//  generics in classes
// we can keep generics in our interfaces 
interface randomVar<T> {
    id:number,
    randomData:T
}

let random:randomVar<string> = {
    id:1,
    randomData:"this is data"
}
let random2:randomVar<number> = {
    id:2,
    randomData:2
}

// Enum  - assigning words to numerics
//  works in databases mostly
enum restaurants {BURGER_KING, McDonalds, Pizza_hut, Bodega}
const order = { 
    price:20,
    provider: restaurants.BURGER_KING
}

console.log(order)


