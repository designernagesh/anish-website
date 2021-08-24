// alert("This is from External JS File.")

/* function sum(){
    let a =  5;
    let b = 10;
    console.log(a + b);
 }
sum(); */



/*var name = "nagesh";
var lastName = "Kumar";
var age = 21;
var online = true;
var something;

console.log(name);
console.log("The age is : " + age + " The type of varibale is: " + typeof name);
console.log("The age is :",age + " The type of varibale is: " + typeof age);
console.log( age + 10);
console.log("My first name : " + name + " and my last Name is :" + lastName);

console.log('I am online', online + " The type of varibale is: " + typeof online);

console.log(something + " The type of varibale is: " + typeof something);


var btn = document.getElementById("btn");
btn.addEventListener('click', () => alert("You clicked It"));

/* ES6 /
let myName = "Nagesh Kumar";
console.log(myName);

let y = 50;
if(true){
    var x = 10;
    let y = 20;
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);


var abc;
abc = "value assigend";
console.log(abc);

const z = "const Value";
console.log(z); */


// User Input
//let userName = prompt("What's your Name: ");
//console.log('username is ', userName);

let myInput = document.getElementById("myInput");

let getName = document.getElementById("getName");

getName.addEventListener('click', function(){
    console.log("The Entered Name is : ", myInput.value);
})



//Functions
let a = 10;
let b = 20;

function sum(){
    return a + b;
}

console.log(sum());
console.log(sum());
console.log(sum());

function total(a, b=10){
    return a + b;
}

console.log(total(50, 100));

console.log(total(100, 100));

console.log(total(60));

console.log(total(60, 90));


//Object
let employee = {
    id: 1,
    firstName: "Nagesh",
    lastName: "Kumar",
    name: "nagesh",
    age: 20,
    address:{
        city: "Hyderabad",
        zip: 500016
    },
    skills: ['HTML', 'CSS', 'Javascript', 'ReactJS'],
    fullName: function(){
        //console.log(this);
        // return this.firstName + " " + this.lastName;

        // template literals
        return `
            My First Name is: ${this.firstName} 
            and my last name is: ${this.lastName}
        `;
    }
}
console.log(employee.id);
console.log(employee.name);
console.log(employee.age);
console.log(employee.address.city);
console.log(employee.address.zip);
console.log(employee.skills);
console.log(employee.skills[3]);
console.log(employee.fullName());

console.log(this);


//Arrays
let arrayExample = ["nagesh", "mahesh", "suresh", 20, 30, 40];

console.log('first Value',arrayExample[0]);
console.log('fourth Value',arrayExample[3]);

console.log(arrayExample.length);

let numbers = [20, 40, 10, 0, 5];
//console.log(numbers.sort());

numbers.push(100);
console.log(numbers);

numbers.pop();
console.log(numbers);


numbers.unshift("kumar");
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(numbers[numbers.length - 1]);


let employees = [
	{	
		id	: 101,
		name	: "Nagesh",
		email	: "nagesh@gmail.com",
		phone	: 9030040302,
	},
	{
		id	: 102,
		name	: "Kumar",
		email	: "kumar@gmail.com",
		phone	: 9030020304,
	},
    {
		id	: 10.,
		name	: "Skumar",
		email	: "skumar@gmail.com",
		phone	: 9001220304,
	}
];


console.log(employees[0].id);
console.log(employees[1].name);
console.log(employees[2].email);


//if Condition
let age = 70;

if( age < 24){
    console.log('you are a man');
}
else if( age > 65 ){
    console.log("you are an adult");
}
else{
    console.log('you are a boy');
}

//Ternary
 let ageOfPerson = 15;
// let result;

// if (ageOfPerson >= 18) {
//       result = "You can vote.";
// } else {
//       result = "You can not vote yet.";
// }
// console.log(result);

ageOfPerson >= 12 ? console.log("You can vote.") : console.log("You can not vote yet.");


//switch
var grade = "A";

switch (grade){
  case "A":
    console.log("You did great!");
    //break;

  case "B":
    console.log("You did good!");
    //break;
 
  case "C":
    console.log("YOU FAILED!");
    //break;

  case "D":
    console.log("You Practice some more!");
    //break;

  default:
    console.log(grade,"is not a letter grade");
}


//strict equal

var aNum = 2;

if( aNum === "2"){
    console.log("it's same");
}
else{
    console.log("it's not same");
}

// Logical Operator && || != == ===
// var myName = prompt("Enter your Name");

// if(!(myName == "")){
// 	console.log("Hello", myName);
// }
// else{
// 	console.log("You did not enter your name!")
// }


//loop for 

// for (let i = 10; i <= 10; i++) {
//     console.log("The No. is: " + i );
// }


// Table 10
for(var i = 1; i <= 10; i++){
    console.log("10 x " + i + " = " + i * 10);
}

// let anArray = [ 'HTML', 'CSS', 'Javascript', 'ReactJS']

// for (let i = 0; i < anArray.length; i++) {
//     console.log(anArray[i]);    
// }

//Math
var myNum;
myNum = Math.round(3.1);
myNum = Math.floor(3.9);
myNum = Math.ceil(3.9);
myNum = Math.pow(3, 2);
myNum = Math.sqrt(100);
myNum = Math.abs(-100);
myNum = Math.min(10, 5, 2, 4, 3);
myNum = Math.max(1, 5, 7, 4, 3);
myNum = Math.PI;
myNum = Math.E;
console.log(myNum);

//Random Value
var randomNum = Math.random();
console.log(randomNum);
console.log(Math.floor(randomNum * 6) + 1);


//Date
var todayDate = new Date();
// var todayDate = new Date(2021, 7, 24, 21, 55, 20, 3);
// var todayDate = new Date("Aug 24, 2021");

// var currentYear = todayDate.getFullYear();
// var currentYear = todayDate.getMonth();

// let dayOfWeek = todayDate.getDay();
// let dayOfMonth = todayDate.getDate();
let hours = todayDate.getHours();
// let minutes = todayDate.getMinutes();
// let seconds = todayDate.getSeconds();
// let milliSeconds = todayDate.getMilliseconds();

console.log(hours);


let currentTime = document.getElementById("currentTime");
currentTime.innerHTML = "Time Changed";

function dateTime(){
    let d = new Date();  
    let hours   = d.getHours();
    let minutes = d.getMinutes(); 	
    let seconds = d.getSeconds();
    let session = "AM";

    if(hours > 12){			
        hours = hours - 12;
        session = "PM";
      }else{
        hours;
      }
    
    currentTime.innerHTML = 
      `${hours} : ${minutes} : ${seconds} : ${session}`;   
  }
  setInterval(dateTime, 1000);

  //String Methods

  var myName = "Kumar mangalam";
    var myStreet = "2nd Lane, Vidya Nagar";
    var myCity = "Rayagada 765001";
    var myPhone = "123-345-6789";
    
    console.log(myName);
    console.log(myName.length);
    console.log(myName.charAt(0));

    console.log(myName.indexOf(" "));
  
    console.log(myName.lastIndexOf("a"));
    
    console.log(myName.trim());
    console.log(myName.toUpperCase());
    console.log(myName.toLowerCase());   

    console.log(myStreet.concat(" ", myCity));

    console.log(myStreet.split(","));

    console.log(myPhone.replaceAll("-","******"));

    console.log(myName.slice(6));
    
    console.log(myName.slice(0, myName.indexOf(" ")));   

    console.log(myName.slice(0, 6));

    console.log(myName.slice(myName.lastIndexOf(" ") + 1));

//Method Chaining

let user = "nagesh";

// let firstLetter = user.charAt(0);
// firstLetter = firstLetter.toUpperCase();
// user = firstLetter + user.slice(1);


user = user.charAt(0).toUpperCase() + user.slice(1);

console.log(user);

// break & continue
for(let i = 1; i <= 10; i++){
    if(i == 6){
        continue;
    }
    console.log(i);
}


// let abc = function welcome(name) {
//     return "Welcome!" + name
// }

//let abc = name => "Welcome! " + name;

//console.log(abc("Nagesh"));

// function welcome(firstName, lastName) {
//     return "Welcome!" + name
//   }

// let abc = (firstName, lastName) => `Welcome! ${firstName} and ${lastName}`;
// console.log(abc("Nagesh", "Kumar"));







// forEach(), map(), filter(), reduce()

let groceryList = [
    {
        name: "Apple", 
        price: 25, 
        category: "fruits"
    },
    {
        name: "Mangoes", 
        price: 35, 
        category: "fruits"
    },
    {name: "Tomatoes", price: 15, category: "vegetable"},
    {name: "Milk", price: 20, category: "misc"},
    {name: "Bread", price: 12, category: "misc"},
    {name: "Eggs", price: 18, category: "misc"},
 ];
 
 var newForEach = groceryList.forEach(x => console.log(`The Item: ${x.name} and it's price is: ${x.price} and it's in category ${x.category}`));

 console.log(newForEach);

 var newMapItems = groceryList.map(x => console.log(`The Item: ${x.name} and it's price is: ${x.price * 2}`));

 console.log(newMapItems);

 var filterPrice = groceryList.filter(item => item.price > 20);
 console.log(filterPrice);

 var totalPrice = groceryList.reduce((currentValue, item) => {
    return item.price + currentValue;
    }, 0);
    console.log('The Total Price is: ' + totalPrice);

//annonymous
    (function(){
        console.log('Immediately invoked function execution');
    })();

    
//sort
let strings = ["ramesh", "suresh", "anand", "kumar"];
console.log(strings.sort());
let numbers1 = [3, 14, 1, 2, 5];

//console.log(numbers1.sort());

numbers1.sort(function(x, y){
    return y - x;
  });

console.log(numbers1);

//Add and HTML
let dynamicDiv = document.getElementById("dynamicDiv");

let div = document.createElement("div");
div.setAttribute("class", "box");
div.setAttribute("style", "border: 2px solid blue; padding: 30px");
	
let h1 = document.createElement("h1");
h1.innerText = "<b>Lorem Ipsum</b> Dynamic Div Element";
div.append(h1);
	
let para = document.createElement("p");
para.innerHTML = "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industr..."
div.append(para);
	
let btn = document.createElement("button");
btn.innerText = "Click This Buttons";
btn.setAttribute("style", "background: red; color: white; padding: 20px; margin: 20px")
div.append(btn);
	
dynamicDiv.append(div);



//fetch API
let usersList = document.querySelector(".usersList");
//let usersList = document.getElementById("usersList");
let url = 'https://reqres.in/api/users';

fetch(url)
   .then(response => response.json())
   .then(result => {
      let users = result.data;
      //console.log(users);
      let list = "";
      users.map(user => {          
         htmlSegment = `<div class="col">
            <img class="card-img-top" src="${user.avatar}" alt="">
            <div class="card-body">
                <h3>${user.first_name} ${user.last_name}</h5>
                <p>${user.email}</p>              
              </div>
            </div>`
          list += htmlSegment;
          return usersList.innerHTML = list;
          })
        })
   // Handle the error
   .catch(error => console.log("The Error is: " + error));
