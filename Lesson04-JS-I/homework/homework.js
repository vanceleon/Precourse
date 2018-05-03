//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "Vance Leon" ;

//create a number variable, it an be any number
const newNum = 44 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function.
//All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

const str12 = function returnString(str) {
  //simply return the string provided: str
  str = "Vance";
  console.log(str);

}

str12();

const add = function add(x, y) {

  x = 5;
  y = 6;
  return x + y;

};
add();

const sub = function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  x = 5
  y = 5
  return x - y;
};
sub();

const mult = function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  x = 9
  y = 9
  return x * y;
};
mult();

const num = function divide(x, y) {
  // multiply x by y and return the value
  // code here
  x = 96
  y = 12
  return x /= y;
};
num();

const num = function areEqual(x, y) {
  // multiply x by y and return the value
  // code here
  x = 12
  y = 12
  return x == y;
};
num();

const sameLength = function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  str1 = "Vance";
  str2 = "Leon";

  if(console.log(str1.length) !== console.log(str2.length)) {
      return false;

  }
      return true;
}
sameLength();

const greatThan = function lessThanNinety(num) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here

  if(num < 90) {
      return true;

  }
      return false;
};
greatThan(100);

const greatThan1 = function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here

if(num > 50) {
    return true;

}
    return false;
};
greatThan1(100);

const remain = function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  x = 51;
  y = 5;
  return x % y

}
remain();


const evenNum = function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here

  if (num % 2 == 0) {
      return true;
  }
      return false;
}
evenNum(24);

const oddNum = function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here

  if (num % 2 == 1) {
      return true;
  }
      return false;
}
oddNum(25);


const expon = function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return Math.pow(4,2);
  // code here
}
expon();


const expon2 = function cube(num) {

  return Math.pow(4,3);
}
expon2();



const expon3 = function raiseToPower(num, exponent) {

  return Math.pow(4,20);
}
expon3();


const numRound = function roundNumber(num) {

  return Math.round(7.98);
}
numRound();


const numRound2 = function roundUp(num) {

  return Math.ceil(7.2);
}
numRound2();


const exclamationPoint = function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
   console.log(`${statement}`,'!');

}
const statement = 'Hello';
exclamationPoint(statement);

const fullName = function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  firstName = "Vance";
  lastName = "Leon";
  fullName = firstName + lastName;
  return fullName;
}
fullName();


const hiStat = function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  console.log(`${statement}`, " Hello, I am Vance");
}
const statement = "Dan"
hiStat(statement);

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

const areaRect = function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  length = 9
  width = 12
  return length * width;
}
areaRect();

const areaTri = function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  length = 9
  width = 12
  return (length * width)/2;

}
areaTri();

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
