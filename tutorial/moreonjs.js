// alert("alert here")
console.log("printing statement which prints data in console")
console.error("this gives error ")
console.warn("to give warning")
//let and const are used most of the times instead of var
const score=10;//--> when u use const you have to initialise value to it which can't be alter later

let sco; //--> not compulsory to initialise it 

//data types in javascript
const names="rutuja";
const age=21;
// const rating=4.5;
// const x=null;
// const iscool=true;
// const grade='A';
// const y=undefined;
// let z;


//concatination
console.log("My name is "+ names +"and i am "+age+"years old");

const hello=`my name is ${names} and i am ${age} years old`;
console.log(hello)

//string methods
const s="this is the string";
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,5).toUpperCase()) //u can use more then one properties like this
console.log(s.replace("this","that"))
console.log(s.indexOf('is'))
console.log(s.split(" "))

//arrays in js
const numbers=new Array(1,2,3,4,5)
console.log(numbers)
const fruits=['apples','oranges','pears','pineapple']
console.log(fruits)

//inserting elements in an array
fruits[3]="grapes";
console.log(fruits)

fruits.push("mangoes")
fruits.unshift("strawberries")
fruits.pop();
console.log(Array.isArray('hello'));


//objects in the javascript

const person={
    firstname:'john',
    lastname:'Doe',
    age:30,
    hobbies:['music','movies','sports']
}

console.log(person.firstname,person.lastname,person.age,person.hobbies[1])

const todos=[
    {
        id:1,
        text:'take out trash',
        iscompleated:true
    },
    {
        id:2,
        text:'meeting with boss',
        iscompleated:true
    },
    {
        id:2,
        text:'dentist appt',
        iscompleated:false
    }
];
for (let index = 0; index < todos.length; index++) {
    const element = todos[index].text;
    console.log(`for loop no from ${element}`)
}

for(let todo of todos){
    console.log(todos.id)
}

//for each ,map,filter
todos.forEach(function(todo){
    console.log(todo.text)
});

const todoText=todos.map(function(todo){
    return todo.text
})

const todoTEct=todos.filter(function(todo){
    return todo.iscompleated==true;
}).map(function(todo){
    return todo.text
})

//to convert the arrays into json
const todoJSON=JSON.stringify(todos)
console.log(todoJSON)

//loops in javascript
const array=new Array(1,3,5,6,4)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`for loop no from ${element}`)
}

i=0
while (i<10) {
    console.log(`while loop number: ${i}`);
    i++;
}

//conditional statements in javascript
//== for  numbers
//=== for datatype 
//> < != 

// || -any one has to be true
// && -both has to be true


//ternary operator
const x=10;
const color=x>10 ? 'red' : 'blue';

//switch case
switch(color){
    case "red":console.log("color is red");break;
    case "blue":console.log("color is blue"); break;
    default:console.log("color is NOT red or blue");break;
}

//functions in js

function addnumn(num1,num2){
console.log(num1+num2);
}



const addnumr= (num1, num2)=>{
    console.log(num1+num2);
}


const addnum = (num1, num2)=>num1+num2;
addnum(5,5)

const addnumber= num1=>num1+5;
console.log(addnumber(5));

function person(firstname, lastname,dob){  //work as a constructor 
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob);
    person.prototype.getBirthYear=function(){
        return this.dob.getFullYear();
    }
    person.prototype.getFullName=function(){
        return `${this.firstname}${this.lastname}`;
    }
}
const person1=new person('john','dow','4-5-6765');
const person2=new person('john','dow','4-5-6765');
const person3=new person('john','dow','4-5-6765');
console.log(person1.firstname)
console.log(person2.dob.getFullYear());


//class in js

class person{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(window)

//single selectors 
// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName

//multipleselector
// document.querySelector
// document.querySelectorAll