// //without parameters and arguments
// function demo() {
//   console.log("Hello iam a function");
// }
// demo();

// //with parameters and arguments

// function add1(a, b) {
//   console.log(a + b);
// }
// add1(5, 6);
// add1(6, 8);
// add1(10, 9);

// function isPalindrome(str) {
//   let revStr = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   if (str == revStr) {
//     console.log("Palindrome");
//   } else {
//     console.log("not a palindrome");
//   }
// }
// isPalindrome("sir");
// isPalindrome("level");
// isPalindrome("madam");
// isPalindrome("branch");

// let x = function () {
//   console.log("Function");
// };
// x();

// function demo() {
//   console.log("Hello");
// }
// demo();

// let x = () => {
//   console.log("Hello");
// };
// x();

// let x = (a, b) => console.log(a + b);
// x(19 + 9);

// function add(a, b) {
//   return a + b;
// }
// let x = add(5, 5);
// console.log(x);

// let x = (a, b) => a + b;
// console.log(x(10, 30));

// let x = (a, b) => {
//   return a + b;
// };
// console.log(x(10, 30));

// for (var i = 1; i <= 5; i++) {
//   console.log("* ".repeat(i));
// }

// function hof(a) {
//   return a;
// }
// let x = hof([1, 2, 3, 4, 5]);
// console.log(x);

// function hof(a) {
//   return a;
// }
// let x = hof(function () {
//   return "this is a function";
// });
// console.log(x());

// let users = ["Navya", "Vishnu", "Keshav", "Ashhh", "Leena"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
// let x = users.map((user) => {
//   return user;
// });
// console.log(x);
// let y = users.forEach((user) => {
//   return user;
// });
// console.log(y);

// var a = 10;
// let b = 30;
// function x() {
//   var user = "Ash";
//   let company = "Amazon";
//   const sal = 123;
//   console.log(user);
//   console.log(company);
//   console.log(sal);
// }
// x();

// function x() {
//   var a = 10;
//   let b = 20;
//   console.log(a, b);
//   function y() {
//     let p = "js";
//     let q = "React";
//     console.log(p, q);
//     function z() {
//       const username = "Ash";
//       console.log(username);
//     }
//     z();
//   }
//   y();
// }
// x();
