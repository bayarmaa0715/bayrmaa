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
console.log(input);
var newWords = "";
function reverseWord(input) {
  for (i = 0; i < input.length; i++) {
    newWords = input[i].split();
    console.log(newWords);
    for (j = 0; j < newWords.length; j++) {
      // newWords = newWords[j].reverse();
      console.log(a);
    }
  }
}

let f_reverseWord = reverseWord(input);
console.log("Quistion5: ", f_reverseWord);
