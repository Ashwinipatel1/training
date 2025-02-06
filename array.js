// const users = ["ashh", "leena", "sujji", "Anjali"];
// console.log(users[0]);

// users.pop();
// console.log(users);

// users.unshift("Vinnu");
// console.log(users);

// users.shift();
// console.log(users);

// console.log(users.reverse());
// let x = users.join(" ");
// console.log(x, typeof x);

// let frontend = ["Html", "css", "js", "reactjs", "Angular"];
// let backend = ["node js", "Express js", "java", "PHP"];
// let fullstack = frontend.concat(backend);
// console.log(fullstack);

// let userdetails = {
//   name: "Ash",
//   age: 19,
//   city: "Hyd",
// };
// console.log(userdetails);
// console.log(userdetails.name);

// let userdetails = {
//   name: "Ash",
//   age: 19,
//   city: "Hyd",
//   adress: {
//     area: "Narsapur",
//     StreetNo: 2,
//     pincode: 500055,
//   },
// };
// console.log(userdetails);
// console.log(userdetails.name);
// console.log(userdetails.adress.pincode);
// console.log(userdetails.adress.StreetNo);

// let user1 = {
//   name: "Ash",
//   city: "us",
// };
// let user2 = {
//   name: "sam",
//   city: "newyork",
// };
// let user3 = {
//   name: "Mike",
//   city: "Paris",
// };
// console.log(user1.name);

// let users = [
//   {
//     name: "Ash",
//     city: "us",
//   },
//   {
//     name: "sam",
//     city: "newyork",
//   },
//   {
//     name: "Mike",
//     city: "Paris",
//   },
// ];
// users.map((user) => {
//   console.log(user.name);
// });

localStorage.setItem("user1","Ashwini");
localStorage.setItem("user2","leens");
localStorage.setItem("user3","anjali");
localStorage.setItem("user4","sru");
localStorage.setItem("user5","ashh");
localStorage.setItem("user6","sam");

let user6=localStorage.getItem("user6");
console.log(user6);

localStorage.removeItem('user1');

