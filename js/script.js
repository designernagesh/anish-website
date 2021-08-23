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