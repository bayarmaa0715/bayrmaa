// alert("hello js example alert");
// console.log("Helloo");

let firtsname = "Bayarmaa";
let lastname = "Munkhbat";

let age = 23;
let country = "Khuvsgul";
let educatain = "Univercity";
let email = "bayarmaa.m49@gmail.com";
let phonenumber = "86367692";
let likedword = "Hollyshetmoney";
let surdageseh = true;
let job;
let angi = null;
console.log("Tаны нэр: ", firtsname);
console.log("Tаны овог: ", lastname);
console.log("Tаны нас: ", age);
console.log("Tаны төрсөн газар: ", country);

console.log("Tаны имэйл хаяг: ", email);
console.log("Tаны боловсролын байдал: ", educatain);
console.log("Сурдаг эсэх: ", surdageseh);
console.log("Tаны утсны дугаар: ", phonenumber);
console.log("Tаны хэлэх үг: ", likedword);
console.log("Tаны ажил: ", job);
console.log("Tаны анги: ", angi);
let comment = "comments make code readable";
console.log("Таны сэтгэгдэл: ", comment);

let number1 = 9,
  number2 = 2;
let sum = number1 + number2;
console.log("asuult5+: ", sum);
let ylgawat = number1 - number2;
console.log("asuult5-: ", ylgawat);
let divide = number2 / number1;
console.log("asuult5/: ", divide);
let multiple = number2 * number1;
console.log("asuult5*: ", multiple);

let a = 1,
  b = 3,
  c = 4;
let p = a + b + c;
console.log("asuult6: ", p);

//  quistion7 = 0.9GB
let gb = 16,
  gbb = 15;
bit = 128000000000;
let g7 = (gbb / gb) * bit;
console.log("asuult7: ", g7);

let ce = 16,
  f = 33.8;
bit = 1;
let g8 = ce * f;
console.log("asuult8: ", g8);

let far = 300;
bit = 1;
let g9 = far / f;
console.log("asuult9: ", g9);

let x = 15,
  y = 10;

let g10 = x + y;
console.log("asuult10+: ", g10);
let g10_1 = x - y;
console.log("asuult10_1-: ", g10_1);

let weeknumber = 7;
let Gargigiinner;
console.log("Tanii oruulsan w num:", weeknumber);
if (weeknumber === 1) {
  console.log("Gargigiin ner: Monday");
} else if (weeknumber === 2) {
  console.log("Gargigiin ner: Thusday");
} else if (weeknumber === 3) {
  console.log("Gargigiin ner: Wednesday");
} else if (weeknumber === 4) {
  console.log("Gargigiin ner: Thuersday");
} else if (weeknumber === 5) {
  console.log("Gargigiin ner: Friday");
} else if (weeknumber === 6) {
  console.log("Saturday");
} else if (weeknumber === 7) {
  console.log("Sunday");
} else {
  console.log("Tohiroh ner oldsongui bro");
}

// let k = prompt("Ta 1-7 n hoorond utga oruulna uu");
// console.log("Garaas awsan utga", k);

// let daynumber = Number(prompt("Ta 1-7 n hoorond utga oruulna uu"));
// let dayNer;
// if (daynumber === 1) {
//   dayNer = "Monday";
// } else if (daynumber === 2) {
//   dayNer = "Thusday";
// } else if (daynumber === 3) {
//   dayNer = "Wdenesday";
// } else if (daynumber === 4) {
//   dayNer = "Thuesday";
// } else if (daynumber === 5) {
//   dayNer = "Friday";
// } else if (daynumber === 6) {
//   dayNer = "Saturday";
// } else if (daynumber === 7) {
//   dayNer = "Sunday";
// } else {
//   console.log("Tohiroh ner oldsongui bro");
// }

// console.log("Tanii oruulsan too:", daynumber);
// console.log("Tohiroh utga:", dayNer);

let nas = 17;
let gender = "em";
if (age >= 18 && gender === "em") {
  console.log("Ta nasand hursen emegtei baina");
} else {
  console.log("Nasand hursen eregte bn");
}

let myage = 14;
if (myage > 25) {
  console.log("above25");
} else {
  console.log("below 25");
}

// uldegdel
let n = 2;
if ((n = 2)) {
  console.log("it’s even number");
} else {
  console.log("it’s not even number");
}

let j1 = 12,
  j2 = 45,
  j3 = 30;
if (j1 < j2 && j1 < j3) {
  console.log("Хамгийн бага тоо:", j1);
} else if (j2 < j1 && j2 < j3) {
  console.log("Хамгийн бага тоо:", j2);
} else if (j3 < j1 && j3 < j2) {
  console.log("Хамгийн бага тоо:", j3);
}

let l1 = 12,
  l2 = 45,
  l3 = 30;
if (l1 > l2 && l1 > l3) {
  console.log("Хамгийн их тоо:", l1);
} else if (l2 > l1 && l2 > l3) {
  console.log("Хамгийн их тоо:", l2);
} else if (l3 > l1 && l3 > l2) {
  console.log("Хамгийн их тоо:", l3);
}

let month = 5;
let season;
if (month === 1) {
  season = "Winter";
} else if (month === 2) {
  season = "Spring";
} else if (month === 3) {
  season = "Spring";
} else if (month === 4) {
  season = "Spring";
} else if (month === 5) {
  season = "Summer";
} else if (month === 6) {
  season = "Summer";
} else if (month === 7) {
  season = "Summer";
} else if (month === 8) {
  season = "Autumn";
} else if (month === 9) {
  season = "Autumn";
} else if (month === 10) {
  season = "Autumn";
} else if (month === 11) {
  season = "Winter";
} else if (month === 12) {
  season = "Winter";
}

console.log("Таны дуртай улирал: ", season);

let aa = 85,
  bb = 75,
  cc = 96,
  dd = 69;

if (aa > 80) {
  aa = aa;
} else {
  aa = 0;
}
if (bb > 80) {
  bb = bb;
} else {
  bb = 0;
}

if (cc > 80) {
  cc = cc;
} else {
  cc = 0;
}
if (dd > 80) {
  dd = dd;
} else {
  dd = 0;
}

console.log("80s ih toonii niilber: ", aa + bb + cc + dd);

let a1 = 3,
  b1 = 7,
  c1 = 2,
  d1 = 4;

if (a1 < 5) {
  a1 = a1;
} else {
  a1 = 1;
}
if (b1 < 5) {
  b1 = b1;
} else {
  b1 = 1;
}

if (c1 < 5) {
  c1 = c1;
} else {
  c1 = 1;
}
if (dd < 5) {
  d1 = d1;
} else {
  d1 = 1;
}

console.log("5s baga toonii urjwer: ", a1 * b1 * c1 * d1);

let onoo = 67;
let Ner = "Bat";
let unelgee;

if (onoo < 60) {
  unelgee = "Mash muu";
} else if (onoo <= 70) {
  unelgee = "Hangalttai";
} else if (onoo <= 80) {
  unelgee = "Dund";
} else if (onoo <= 90) {
  unelgee = "Sain";
} else if (onoo <= 100) {
  unelgee = "Mash sain";
}

console.log("Тэнцсэн эсэх:", Ner, onoo, unelgee);

let k1 = 120;
let k2 = 33;
let k3 = 10;
let k4 = 12;
if (k1 < k2 && k1 < k3) {
  console.log("Хамгийн бага тоо:", k1);
} else if (k2 < k1 && k2 < k3) {
  console.log("Хамгийн бага тоо:", k2);
} else if (k3 < k1 && k3 < k2) {
  console.log("Хамгийн бага тоо:", k3);
}

let at1 = 88,
  at2 = 108,
  at3 = 89;
let bt1 = 88,
  bt2 = 91,
  bt3 = 110;
if (
  (at1 + at2 + at3) / 3 > (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 > 100 &&
  at1 + at2 + at3 > 100
) {
  console.log("Түхүүлсэн баг:a team award");
} else if (
  (at1 + at2 + at3) / 3 < (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 > 100 &&
  at1 + at2 + at3 > 100
) {
  console.log("Түхүүлсэн баг:b team award");
} else if (
  (at1 + at2 + at3) / 3 < (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 > 100 &&
  at1 + at2 + at3 < 100
) {
  console.log("Түхүүлсэн баг:b team award");
} else if (
  (at1 + at2 + at3) / 3 > (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 < 100 &&
  at1 + at2 + at3 > 100
) {
  console.log("Түхүүлсэн баг:a team award");
} else if (
  (at1 + at2 + at3) / 3 >= (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 < 100 &&
  at1 + at2 + at3 < 100
) {
  console.log("Түхүүлсэн баг:Ялагч байхгүй");
} else if (
  (at1 + at2 + at3) / 3 <= (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 < 100 &&
  at1 + at2 + at3 < 100
) {
  console.log("Түхүүлсэн баг:Ялагч байхгүй");
} else if (
  (at1 + at2 + at3) / 3 === (bt1 + bt2 + bt3) / 3 &&
  bt1 + bt2 + bt3 > 100 &&
  at1 + at2 + at3 > 100
) {
  console.log("Түхүүлсэн баг:Багуудын оноо тэнцсэн");
}

let height = 140,
  ageChild = 9,
  hasAdult = true;
if (height >= 140 && ageChild >= 10) {
  console.log("Дугуй унаж болох эсэх: Тийм");
} else {
  console.log("Дугуй унаж болох эсэх: Үгүй");
}
if ((hasAdult = true)) {
  console.log("Дугуй унаж болох эсэх: Тийм");
} else {
  console.log("Дугуй унаж болох эсэх: not allowed to ride");
}

let r1 = 7,
  r2 = 22,
  r3 = 13,
  r4 = 30;
if (r1 % 11 > 0) {
  r1 = r1;
} else {
  r1 = 0;
}

if (r2 % 11 > 0) {
  r2 = r2;
} else {
  r2 = 0;
}

if (r3 % 11 > 0) {
  r3 = r3;
} else {
  r2 = 0;
}

if (r4 % 11 > 0) {
  r4 = r4;
} else {
  r4 = 0;
}
console.log("11д хуваагддаг тооны нийлбэр:", r1 + r2 + r3 + r4);
