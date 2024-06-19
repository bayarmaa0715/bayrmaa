function q1(t, t1) {
  if (t > t1) {
    console.log("Hamgiin ih to0: ", t);
  } else {
    console.log("Hamgiin ih to0: ", t1);
  }
}

q1(60, 9);

let arr = [4, 5, 6, 7, 8, 9];
function findIndex(searchArr, findToo) {
  console.log("Haih toonuud buleg: ", searchArr);
  console.log("Haih 1 sh too: ", findToo);
  for (i = 0; i <= searchArr.length - 1; i++) {
    if (searchArr[i] === findToo) {
      return i;
    }
  }
  return -1;
}

let idx = findIndex(arr, 5);
console.log("Index: ", idx);

idx = findIndex([5, 6, 88, 90, 8], 8);
console.log("Index: ", idx);

// exersice 3

// exersice 4
let sum = 0;
let average = 0;
let as = [1, 1, 1, 1, 1, 1, 1];
function numArr(as) {
  for (i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }
  for (i = 0; i < as.length; i++) {
    average = sum / as.length;
  }
}

console.log("Dundaj: ", average);
console.log("Niilber: ", sum);
