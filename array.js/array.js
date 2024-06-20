let values = [1, 100, 5, 15, 5];
console.log("values[o]-o", values);

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum = sum + values[i];
  //   sum = sum % 20;
}

console.log("sum ", sum);

let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log("Fruits name:", fruits);
console.log("Fruits name:", fruits[0]);
console.log("Fruits name:", fruits[4]);
console.log("Fruits name:", fruits[2]);

let numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63, 677];
let shirheg = 0;
let tShirheg = 0;
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 > 0) {
    console.log("Sondgoi too:", numbers[i]);
    shirheg += 1;
  } else {
    console.log("Tegsh too:", numbers[i]);
    shirheg += 1;
  }
}
console.log("Sondgoi too shirheg: ", shirheg);
console.log("Tegsh too shirheg: ", tShirheg);

let nums = [-1, 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log("Array iin length:", nums);
let niilber = 0;
let average = 0;
let tegshNiilber = 0;
let sondgoiNiilber = 0;
let max = nums[0];
let min = nums[0];
let sondgoiUrjwer = 1;

for (let i = 0; i < nums.length; i++) {
  niilber = niilber + nums[i];
  //   console.log("Niilber: ", niilber);
}
for (let i = 0; i < nums.ength; i++) {
  average = niilber / nums.length;
}
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 > 0) {
    sondgoiNiilber = sondgoiNiilber + nums[i];
  } else {
    tegshNiilber += nums[i];
  }
  sondgoiUrjwer = sondgoiUrjwer * nums[i];
}

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  } else if (nums[i] < min) {
    min = nums[i];
  }
}
console.log("Niilber: ", niilber);
console.log("Dundaj: ", average);
console.log("Tegsh toonuudiin niilber: ", tegshNiilber);
console.log("Sondgoi toonuudiin niilber: ", sondgoiNiilber);
console.log("Max: ", max);
console.log("Min: ", min);
console.log("Sondgoi urjwer: ", sondgoiUrjwer);

// 10 хүртэлх натурал тоог хэвлэх программ бич
// 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// 100 хүртэлх натурал тооны нийлбэрийг олох программ бич output: 5050
// N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич input: 101 output: 5151
// N тооны факториал олох программ бич input: 4 output: 24
// Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич input: 123 output: 6
// Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол input: 1234 output: 6
// N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// Өгөгдсөн эерэг тооны урвууг хэвлэх программ бич input: 123 output: 321

let q2Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Quistion 1:", q2Nums);

for (let i = 0; i < 10; i++) {
  if (q2Nums[i] % 2 > 0) {
    console.log("Quistion2 sondgoi too:", q2Nums[i]);
  } else {
    console.log("Quistion3 tegsh too:", q2Nums[i]);
  }
}

let q4Sum = 0;

for (let i = 0; i <= 100; i++) {
  q4Sum = q4Sum + i;
}
console.log("Quistion4 niilber:", q4Sum);

let q5Sum = 0;

for (let i = 0; i <= 101; i++) {
  q5Sum = q5Sum + i;
}
console.log("Quistion4 niilber:", q5Sum);

// let q6Nums = [1, 2, 3, 4];
let fact = 1;
for (let i = 1; i < 5; i++) {
  fact = fact * i;
}
console.log("Quistion6 factorial: ", fact);
let q7Sum = 0;
for (i = 1; i < 4; i++) {
  q7Sum += i;
}
console.log("Quistion7 niilber: ", q7Sum);

let q8Sum = 0;
for (i = 1; i < 5; i++) {
  if (i % 2 <= 0) {
    q8Sum += i;
  }
}
console.log("Quistion8 tegsh toonii niilber: ", q8Sum);

let q9Sum = 0;
for (i = 0; i < 500; i++) {
  if (i % 2 > 0) {
    q9Sum += i;
  }
}
console.log("Quistion9 N hurtelh too:", i);
console.log("Quistion9 sondgoi toonii niilber: ", q9Sum);
