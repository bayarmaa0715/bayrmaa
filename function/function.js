let a = 10;
let b = 20;
function hevle() {
  console.log(" a,b 2 toonii niilber:", a + b);
}

function hevle2(too1, too2) {
  console.log("duriin 2 toonii niilber:", too1 + too2);
}

function nemeh(x, y) {
  return x + y;
}

console.log("Functions");
hevle();
hevle2(33, 45);
hevle2(33, 40);
nemeh(12, 4);
let sum = nemeh(12, 4);
console.log("utga butsaah Return punnkts", sum);

function divide(too1, too2) {
  console.log("duriin 2 toonii huwaah:", too1 / too2);
}
function nem(too1, too2) {
  console.log("duriin 2 toonii nemeh:", too1 + too2);
}

function urjih(too1, too2) {
  console.log("duriin 2 toonii urjih:", too1 * too2);
}

function hasah(too1, too2) {
  console.log("duriin 2 too hasah:", too1 - too2);
}

divide(25, 5);
nem(5, 5);
urjih(2, 3);
hasah(8, 5);

function divide1(too1, too2) {
  return too1 / too2;
}
function nem1(too1, too2) {
  return too1 + too2;
}

function urjih1(too1, too2) {
  return too1 * too2;
}

function hasah1(too1, too2) {
  return too1 - too2;
}

let h1 = divide1(25, 5);
let h2 = nem1(5, 5);
let h3 = urjih1(2, 3);
let h4 = hasah1(8, 5);
console.log("return huwaah: ", h1);
console.log("return nemeh: ", h2);
console.log("return urjih: ", h3);
console.log("return hasah: ", h4);
