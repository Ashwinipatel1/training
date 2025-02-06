// // console.log(10);
// // let p1 = new Promise((resolve, reject) => {});
// // console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//   resolve("Success");
// });
// p2.then((response) => {
//   console.log(response);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("Finally Printing for both"));

// let p3 = new Promise((resolve, reject) => {
//   reject("Failures");
// });

// p3.then((data) => {
//   console.log(error);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("Finally Printing for both"));

// function fetchusers() {
//   let x=fetch("https://jsonplaceholder.typecode.com/users");
//   x.then((response)=>{
//     return response.json().then(data=>{
//       console.log(data);
//     })
//   })
//   .catch(err=>console.log(err))
// }
// fetchusers();

// localStorage.setItem("user1", "Ashwini");
// localStorage.setItem("user2", "leens");
// localStorage.setItem("user3", "anjali");
// localStorage.setItem("user4", "sru");
// localStorage.setItem("user5", "ashh");
// localStorage.setItem("user6", "sam");

// let user6 = localStorage.getItem("user6");
// console.log(user6);

// localStorage.removeItem("user1");



// let userDetails = {
//   name: "Srujana",
//   age: 24,
//   place: "Hyderabad",
// };
// console.log(userDetails);
// console.log(typeof userDetails);
// let x = JSON.stringify(userDetails);
// console.log(x);
// console.log(typeof x);

// let y = JSON.parse(x);
// console.log(y);




// async function fetchusers() {
//   let response = await fetch("https://api.github.com/users");
//   let data = await response.json();
//   console.log(data);
// }
// fetchusers();
