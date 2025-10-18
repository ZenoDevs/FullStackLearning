/*
=======================================
CONDITIONALS
======================================= 
*/

// ------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Stops when i is 3
  }
  console.log(i);
}

// When there is a smaller number of possible outcomes of
// truthy checks, it is still possible to use an if else statement,
// such as:

if (light == "green") {
  console.log("Drive");
} else if (light == "orange") {
  console.log("Get ready");
} else if (light == "red") {
  console.log("Dont' drive");
} else {
  //this block will run if no condition matches
  console.log("The light is not green, orange, or red");
}

// However, when there are many possible outcomes,
// it is better to use a switch statement, such as:

// However let's note that the switch case uses the strict equality operator (===)
//converting the previous if-else example with switch-case
var light = "green";

switch (light) {
  case "green":
    console.log("Drive");
    break;
  case "orange":
    console.log("Get ready");
    break;
  case "red":
    console.log("Don't drive");
    break;
  default:
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

// The break statement is necessary to prevent the code from running

/*
=======================================
EXERCISEs
======================================= 
*/

/*
=======================================
Are you old enough?
======================================= 
*/
var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

/*
=======================================
The days of the week
======================================= 
*/

var day = "Sunday";

switch (day) {
  case "Monday":
    console.log("It's Monday, the start of the work week.");
    break;
  case "Tuesday":
    console.log("It's Tuesday, the second day of the work week.");
    break;
  case "Wednesday":
    console.log("It's Wednesday, we're halfway through the work week.");
    break;
  case "Thursday":
    console.log("It's Thursday, the fourth day of the work week.");
    break;
  case "Friday":
    console.log("It's Friday, the last day of the work week.");
    break;
  case "Saturday":
    console.log("It's Saturday, the weekend has started.");
    break;
  case "Sunday":
    console.log("It's Sunday, the weekend is almost over.");
    break;
  default:
    console.log("There is no such day");
    break;
}

// ------------------------------------------------------------------------------------------

/*
=======================================
LOOPS
======================================= 
*/

// For loop
// It has 3 conditions that must be met

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// While loop

var counter = 3;
while (counter > 0) {
  console.log(counter);
  counter--;
}

/*
=======================================
EXERCISES
======================================= 
*/

for (let counter = 1; counter <= 5; counter++) {
  console.log(counter);
}
console.log("Counting completed!");

for (let counter = 5; counter > 0; counter--) {
  console.log(counter);
}
console.log("Countdown completed!");

var year = 2018;
var y = 5;
while (y > 0) {
  console.log(year++);
  y--;
}

/*
=======================================
EXERCISES
======================================= 
*/

for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

var i = 1;
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
      break;
  }
}
