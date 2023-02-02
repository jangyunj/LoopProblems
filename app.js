//1. Ignore even

for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//2. FizzBuzz

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i & (5 == 0)) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

//3. Print evens with do loop

let i = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

//3.5 Exercise#2 with do loop

let x = 0;
while (x <= 100) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log(x, "FIZZBUZZ");
  } else if (x % 3 == 0) {
    console.log(x, "FIZZ");
  } else if (x % 5 == 0) {
    console.log(x, "BUZZ");
  } else {
    console.log(x);
  }
  x++;
}

