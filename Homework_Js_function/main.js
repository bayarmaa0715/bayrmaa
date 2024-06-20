let array = [43, 56];
console.log("Quistion1 array: ", array);
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Quistion1 Array's Max numbers: ", max);
