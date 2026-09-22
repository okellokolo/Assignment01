//STEP 1
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibraryFunction;

// STEP 2
//Numeric literal
let a = 23;
//String literal
let b = "Hello world";
//Boolean literal
let c = true;
let d = false;
//A null
let e = 78;
x = null;

//STEP 3
let f = 15;
let g = 3;
let h = f * g + 3;

//STEP 4
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let nyourAge;
let referalSource;
let scontactYou;

//STEP 5
//Different ways to declare a variable
let someMonthfirstName = "Charles";
var sLastName = "Okello";
const nZipCode = "92111";

//STEP 6
let theResult = 17 + " here is the string";
console.log(theResult);

//STEP 7
// The first variable, adding a Boolean and a String
let theResults = true + " is the answer";

// Second variable
let secondResult = "The coerced result is: ";

// Display the coerced result
console.log(secondResult + theResults);

//STEP 8
let someString =
  'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

//STEP 9
//A variable that produce null
let x = 23;
x = null;
alert(x); //null
//A variable that produce undefined
y = 11;
alert(y); //undefined

//STEP 10
console.log(typeof "Hello World");
// Output: "string"

console.log(typeof "21");
// Output: "number"

console.log(typeof false);
// Output: "boolean"

console.log(typeof undeclared);
// Output: "undefined"

//STEP 11
let userName = "Charles Okello";
alert("Hello, " + userName + "Welcome to JavaScript class!");

//STEP 12
let names = "Charles Okello";
alert("Hi", +names);

//STEP 13
let course = "javaScript";
alert(course);

//STEP 14
let userNames = "Charles Okello";
alert("Hello, " + userNames + "\n Welcome to JavaScript class!");

//STEP 15
let answer = prompt("What is your name?");
alert("My name is " + answer);

//STEP 16
let course1 = prompt("What course are you taking?");
alert(course1);

// STEP 17
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum);

//STEP 18
let x = 20;
x += 20;
console.log(x);

//STEP 19
let x = 20;
x *= 5;
console.log(x);

//STEP 20
let y = 20 % 3;
y /= 1;
console.log(y);

//STEP 21
let x = 30;
let y = 50;
console.log(x > 10 && y < 60); //result is true

//STEP 22
const canVote = 21;
const actuallAge = 16;

const idealCase = actuallAge < canVote && canVote >= 21;
Cconsole.log(idealCase); //false
