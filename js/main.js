// Conditionals: Ternary Operators

// Syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let response = soup ? "yes we have soup." : "sorry no soup today.";
console.log(response);

// Chained Ternary Operators

let isCustomerBanned = false;

let soupAccess = isCustomerBanned
  ? "Sorry no soup for you!"
  : soup
  ? `Yes we have ${soup} today!`
  : "Sorry no soup today.";
console.log(soupAccess);

// Another Example

let testScore = 60;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";

console.log(`My Grade is a ${myGrade}`);

// Rock Paper Siccor

let playerOne = "rock";
let rpc = ["rock", "paper", "siccor"];
let computer = rpc[Math.floor(Math.random() * 3)];

let result =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "rock" && computer === "paper"
    ? "Computer Wins"
    : playerOne === "paper" && computer === "siccor"
    ? "Computer Wins"
    : playerOne === "siccor" && computer === "rock"
    ? "Computer Wins"
    : "Player Wins";
console.log(result);
