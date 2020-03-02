// var ourHeadline = document.getElementById("our-headline");
// var listItems = document.getElementById("our-list").getElementsByTagName("li");

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem);
// }

// function activateItem() {
//     ourHeadline.innerHTML = this.innerHTML;
// }

var ourList = document.getElementById('our-list');
var ourButton = document.getElementById('our-button');
var ourHeadline = document.getElementById('our-headline');
var listItems = document.getElementById('our-list').getElementsByTagName('li');

for (i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener('click', activateItem);
}

function activateItem() {
	ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener('click', createNewItem);

function createNewItem() {
	ourList.innerHTML += '<li>Something New</li>';
}

// https://www.youtube.com/watch?v=zPHerhks2Vg
//console.log ("Goodbye");

// Hit (alt+L, alt+O) to Open the Server

////////////////////////////////////
// Notes from Eloquent Javascript //
////////////////////////////////////

// Assign a variable
let total = 0;
let carName = 'Saab';

// Assignment operators update variables //
// =   x = y
// +=  x = x + y
// -=  x = x - y
// *=  x = x * y
// /=  x = x / y
// %=  x = x % y
// **= x = x ** y

// Arithmetic Operators //
// + Addition
// - Subtraction
// * Multiplication
// ** Exponentiation
// / Division
// % is used to represent the remainder operation. Also called modulo. 314 % 10 = 14
// ++ increment
// -- decrement

// Logical Operators //
// || represents the logical OR. It will return the value to its left when that can be converted to true and will return the value on its right otherwise
// && represents the logical AND. When the value to its left is something that converts to false, it returns that value, and otherwise returns the value on its right.'
// != not equal to

// == equal to
// ** exponentiation
// === equal value and equal type
// + concatenates or glues two strings together
// typeof operator produces a string value naming the type of the value you give it, string or number

// for loop first creates a variable, then there is an expression that checks whether the loop must continue, then there is a part that updates the loop after every iteration.

// Assign a variable

// Looping a Triangle
for (let line = '#'; line.length < 8; line += '#') {
	console.log(line);
}

// FizzBuzz
for (let n = 1; n <= 20; n++) {
	let output = '';
	if (n % 3 == 0) output += 'Fizz' + ' ';
	if (n % 5 == 0) output += 'Buzz';
	console.log(output || n);
}

// Checkerboard
let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += ' ';
		} else {
			board += '#';
		}
	}
	board += '\n';
}

console.log(board);

// A function definition is a regular binding where the value of the binding is a function.
// Functions have a set of parameters and a body, which contains the statements that are to be executed when the function is called
// A function can have multiple parameters or none at all

function name(parameter1, parameter2, parameter3) {
	// code to be executed
}

function myFunction(p1, p2) {
	return p1 * p2; // The function returns the product of p1 and p2
}

const square = function(x) {
	return x * x;
};

// These two arrow definitions of a function do the same thing
const square1 = (x) => {
	return x * x;
};
const square2 = (x) => x * x;

// Events //
// onchange
// onclick
// onmouseover
// onmouseout
// onkeydown
// onload

// Objects//
// Use objects when you want the element names to be strings
// Object definition
var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };

// Arrays //
// Arrays are objects. Use arrays when you want the element names to be numbers
// Arrays are used to store multiple values in a single variable
var cars = [ 'Saab', 'Volvo', 'BMW' ];

// Array for loop
var fruits, text, fLen, i;
fruits = [ 'Banana', 'Orange', 'Apple', 'Mango' ];
fLen = fruits.length;

text = '<ul>';
for (i = 0; i < fLen; i++) {
	text += '<li>' + fruits[i] + '</li>';
}
text += '</ul>';

document.getElementById('demo').innerHTML = text;

// Array for each loop
var fruits, text;
fruits = [ 'Banana', 'Orange', 'Apple', 'Mango' ];

text = '<ul>';
fruits.forEach(myFunction);
text += '</ul>';
document.getElementById('demo').innerHTML = text;

function myFunction(value) {
	text += '<li>' + value + '</li>';
}

// The Compare Function
// function(a,b){return a-b}

// For Loop
// for (statement 1; statement 2; statement 3) {
// code block to be executed
// }

//  Statement 1 is executed (one time) before the execution of the code block.
//  Statement 2 defines the condition for executing the code block.
//  Statement 3 is executed (every time) after the code block has been executed.

var text = '';
var i;
for (i = 0; i < 5; i++) {
	text += 'The number is ' + i + '<br>';
}
document.getElementById('demo').innerHTML = text;

// Statement 1 sets a variable before the loop starts (var i = 0).
// Statement 2 defines the condition for the loop to run (i must be less than 5). If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
// Statement 3 increases a value (i++) each time the code block in the loop has been executed.
