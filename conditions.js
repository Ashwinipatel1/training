// if (true) {
//   console.log("If block is excuted");
// }
// // if (false) {
// //   console.log("If block is excuted");
// // }
// let age = 20;
// if (age >= 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not eligible");
// }
// let a = true;
// if (false) {
//   console.log("Welcome to Payment");
// } else {
//   console.log("Login first");
// }

// let day = prompt("Enter a number: ");
// if (day == 1) {
//   console.log("Sun");
// } else if (day == 2) {
//   console.log("Mon");
// } else if (day == 3) {
//   console.log("Tue");
// } else if (day == 4) {
//   console.log("Wed");
// } else if (day == 5) {
//   console.log("Thu");
// } else if (day == 6) {
//   console.log("Fri");
// } else if (day == 7) {
//   console.log("Sat");
// } else {
//   console.log("Invalid");
// }

let x = Number(prompt("Enter a number: "));
let y = Number(prompt("Enter a number: "));
let z = Number(prompt("Enter a number: "));
if (x > y && x > z) {
  console.log("x is maximum");
} else if (y > x && y > z) {
  console.log("y is maximum");
} else if (z > x && z > y) {
  console.log("z is maximum");
} else if (x == y && x == z) {
  console.log("All are equal");
} else if (x == y && x > z) {
  console.log("x and y are equal and maximum");
} else if (x == z && x > y) {
  console.log("x and z are equal and maximum");
} else if (y == z && y > x) {
  console.log("y and z are equal and maximum");
} else {
  console.log("Invalid");
}
