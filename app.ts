// Types - fundamental changes in TS 
// Typescript enforces typing via erorr messaging but will NOT stop compilation 
// due to error
// const add = (a:number, b:number) =>{
//     return a + b
// }
// console.log(add("1", 11))

// string
let str = "this is a string"

// number

let num = 10


// boolean
let bool = true


// ANY - new one!
let whatever:any = "this is antyitng"


// UNIONS!  - looser typed variable  OR super strict

let year:(number | string);
year = 1979;
year = "1979"



//  Arrays
let arr:Function[] = []

let arr2 = []

// TUPLES - ????
// strict typed array
// look up never on empty array
let tup = ["has to be string", 20, {}]
tup.push()
let tup2: ( string | number )[]=[]

// Aliases - custom type for reused Unions

type stringNum = string | number

let thisThing: stringNum = 10;
thisThing = "this is now a thing"
//   OBJECTS!


//interfaces - strict typed objects
interface personInterface {
    name:string,
    age:(number | string),
    job:string
}
let person:personInterface = {
    name:"tim",
    age:35,
    job:"janitor"

}
interface bookInterface {
    title:string,
    publisher:string,
    publishYear: string | number
    
}
let thisBook:bookInterface = {
    title:"whatever",
    publisher:"amazon",
    publishYear:1920
    
}
//  private and public methods - and passing classes
class book implements bookInterface {
    title;
    publisher;
    publishYear; 

    constructor(
        title:string, 
        publisher:string, 
        publishYear:( number | string ),
        private salesFigures:number,
        // optional value
     ){
        this.title = title,
        this.publisher = publisher,
        this.publishYear = publishYear

    }
    printSales = () =>{
        alert(this.salesFigures)
    }
    
    
}
let bookOne:book = new book(
    "lord of the flies",
     "western press", 
     1955, 
     100000
    )
    // display hidden value from private
    console.log(bookOne)


// Functions and declaring
// Js classic

// const add = ( a, b ) => { return a+b }

// TS implementation
// const  add = (a:number, b:number):number =>{
//     return a+b 
// }

// optional arguments

const add3 = (a:number, b:number ) =>{
 
}
add3(1,2)
add3(1,2)

//  V O I D! (Void)
// this function retruns nothing and does nothing
// and it returns VOID - only null or undefined can be assigned to void

const dontDoAnything = ():void =>{
    console.log("this does nothing")
}
dontDoAnything()


//  DOM & typecasting - stranger cases
//  typecasting is the concept of applying a type to something
//  that can't totally be implicit

// let input = document.querySelector("#name")
// this fails because of typecasting to an HTML element
//  works because of HTMLInput element

let input2 = document.querySelector('input')
console.log(input2!.value)
//  display ? due to null possibility


// typecast to different type
let input = document.querySelector('#name') as HTMLInputElement
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
// we can keep generics in our interfaces  the same way


// Enum  - assigning words to numerics
//  works in databases mostly
enum restaurants {BURGER_KING, McDonalds, Pizza_hut, Bodega}
const order = { 
    price:20,
    provider: restaurants.BURGER_KING
}

console.log(order)


