for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

let n = 100;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i + " is a even number");
  } else {
    console.log(i + " is a odd number");
  }
}

let a = 5;
let result = 1;
for (let i = 1; i <= a; i++) {
  result *= i;
}
console.log(result);

// do-while loop:

let i = 1;
do {
  console.log("Hello");
  i++;
} while (i <= 5);
