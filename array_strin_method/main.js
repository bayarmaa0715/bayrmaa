const array1 = [1, 2, 3];
console.log(array1.push(5));
console.log("Quistion1: ", array1);

function createNewarray(arr, lengthNum) {
  for (let i = 0; i < lengthNum; i++) {
    arr.push(i + 1);
  }
  return arr;
}

let a = createNewarray([], 5);
console.log("Quistion2: ", a);

let t = prompt("Ta too oruulna uu Jishee: 100,122,128");
// let t = 1, 2, 3;
function createSumArg(t) {
  console.log("Quistion3: Tanii duriin too:", t);

  let k = t.split(",");
  console.log("Quistion3:Prompt-g array bolgoj salgah", k);

  let createToo = [];
  let sum = 0;
  let average = 0;

  for (let i = 0; i < k.length; i++) {
    console.log("Number bolgoh: ", typeof Number(k[i]));
    sum = sum + Number(k[i]);
    average = sum / k.length;
  }

  return { Quistion3_niilber: sum, dundaj: average };
}

let b = createSumArg(t);
console.log(b);

const array4 = "the quick brown fox";
function firstUpper(array4) {
  console.log(array4);
  let words = array4.split(" ");
  console.log("Ugsiig array bolgoy:", words);
  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
// const upperLetter = words[0].toUpperCase() + words.slice(1);
// console.log(upperLetter);

let function_firstUpper = firstUpper("d djsl jiguurxai ba tuunii angel");
console.log("Quistion4: ", function_firstUpper);

let input = ["hello", "world", "javascript", "array"];
var newWords = "";
function reverseWord(input) {
  return input.split("").reverse().join("");
}

// ene utgiig ygd harj bolohgu bgaag asuuh
// let so = reverseWord(input);
// console.log(so);

const textArr = ["hello", "world", "javascript", "array"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    r.push(reverseWord(inputArr[i]));
  }
  return r;
}
let ra = reverseArray(textArr);
console.log(textArr);
console.log("Quistion5: ", ra);

// Quistion6
// Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false

function searchAnimal(array0) {
  return array0.split(" ").includes("animal");
}
let prompt1 = prompt("animal gedeg ug zaawal bic");
let function_search = searchAnimal(prompt1);
console.log("Animal gedeg baigaa n unen eseh: ", function_search);

// Quistion7
// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг өөрсдөө зохионо.
// const data = [
//          {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000  casherId:1, date: '2022-11-01'},

//          {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000 casherId:1, date: '2022-11-01'},

//          {…}

//          {…}

//          {…}

// ];

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.

// 1. Нийт борлуулалтын дүнг тооцоолох.

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

// 4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 5400.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Berry",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 17000.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Straw",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 16000.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Sweet",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 19000.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Mocha",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 19000.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Coffee",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 12000.0,
    casherId: 1,
    date: "2022-11-01",
  },
];

function borluulalt(data) {
  let sum9 = 0;
  let sum10 = 0;
  for (i = 0; i < data.length; i++) {
    sum9 = sum9 + data[i].totalPrice;
    sum10 = sum10 + data[i].amount;
    // console.log(data);
  }
  let a = console.log("1. Нийт борлуулалтын дүн : ", sum9);
  let b = console.log("2. Нийт борлуулагдсан барааны тоо : ", sum10);
  // return a, b;
}
let borluultiin_dun = borluulalt(data);
console.log(borluultiin_dun);

function sort(data) {
  const sortData = data
    .sort(function (a, b) {
      return b.totalPrice - a.totalPrice;
    })
    .slice(0, 5);
  return sortData;
}

let sort_function = sort(data);
console.log("Haмгийн их зарагдсан 5 барааны жагсаалт ", sort_function);
let MINsortData = [];
function MINsort(data) {
  MINsortData = data
    .sort(function (a, b) {
      return a.totalPrice - b.totalPrice;
    })

    .slice(0, 5);
  for (i = 0; i < MINsortData; i++) {}
  return MINsortData;
}
let MINsort_function = MINsort(data);
console.log("Haмгийн baga зарагдсан 5 барааны жагсаалт ", MINsort_function);

console.log("ner", MINsortData[0].productName);
