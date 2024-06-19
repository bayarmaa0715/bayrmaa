// Extra assignments
// Quistion1
// Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }

let hwArr = [1, 2, 3, 4, 5];
let max = hwArr[0];
let min = hwArr[0];
let hwSum = 0;
let hwArg = 0;

function maxoloh(hwArr) {
  for (let i = 0; i < hwArr.length; i++) {
    if (hwArr[i] > max) {
      max = hwArr[i];
    }
  }
  return max;
}
function minoloh(hwArr) {
  for (let i = 0; i < hwArr.length; i++) {
    if (hwArr[i] < min) {
      min = hwArr[i];
    }
  }
  return min;
}
function avgoloh(hwArr) {
  for (let i = 0; i < hwArr.length; i++) {
    hwSum += hwArr[i];
    hwArg = hwSum / hwArr.length;
  }
  return hwArg;
}
console.log("Array nubers: ", hwArr);

let soon = maxoloh(hwArr);
console.log("Max: ", soon);
let soo = minoloh(hwArr);
console.log("Max: ", soo);
let so = avgoloh(hwArr);
console.log("Average: ", so);

// Deerh bodoltiin towchlol biceglel

function findArgMaxMin(q1Arr) {
  let ih = q1Arr[0];
  let baga = q1Arr[0];
  let niilber = 0;
  let dundaj = 0;
  for (let i = 0; i < q1Arr.length; i++) {
    if (q1Arr[i] > ih) {
      ih = q1Arr[i];
    }
    if (q1Arr[i] < baga) {
      baga = q1Arr[i];
    }
    niilber += q1Arr[i];
  }
  dundaj = niilber / q1Arr.length;
  return {
    min: baga,
    max: ih,
    arg: dundaj,
  };
}
let q1Arr = [1, 2, 3, 4, 5, 6];
let result = findArgMaxMin(q1Arr);
console.log("Quistion 1: ", result);

// Quistion 2
// Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
// const orders = [ { orderId: 1, items: [{ itemName: 'Apple', price: 1 }, { itemName: 'Banana', price: 2 }] }, { orderId: 2, items: [{ itemName: 'Orange', price: 1.5 }, { itemName: 'Grapes', price: 3 }] } ];

const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];

function orderSum(orders) {
  let orderSum = 0;
  for (i = 0; i < orders.length; i++) {
    // console.log(orders[i].items);
    for (p = 0; p < orders[i].items.length; p++) {
      //   console.log(orders[i].items[p]);
      console.log(orders[i].items[p].price);
      orderSum = orderSum + orders[i].items[p].price;
    }
  }
  return orderSum;
}
let q2 = orderSum(orders);
console.log("Total product price: ", q2);

// Quistion 3
// Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
// output [ { original: 1, square: 1, cube: 1 }, { original: 2, square: 4, cube: 8 }, { original: 3, square: 9, cube: 27 },  { original: 4, square: 16, cube: 64 }, { original: 5, square: 25, cube: 125 } ]

// Quistion 4
// Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.
// const company = { name: 'TechCorp', address: '123 Silicon Valley', employees: [ { name: 'Alice', salary: 90000 }, { name: 'Bob', salary: 120000 }, { name: 'Charlie', salary: 110000 } ] };

const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000000 },
    { name: "Bob", salary: 1200000 },
    { name: "Charlie", salary: 10000 },
  ],
};

function MaxSalary(company) {
  //   console.log(company);
  let ajilcid = company.employees;
  let maxTsalin = ajilcid[0].salary;
  let maxName = "";
  for (let index = 0; index < ajilcid.length; index++) {
    // console.log(ajilcid[index]);
    if (ajilcid[index].salary >= maxTsalin) {
      maxTsalin = ajilcid[index].salary;
      maxName = ajilcid[index].name;
    }
  }
  return maxName;
}
let a = MaxSalary(company);
console.log("Max salary name:", a);
