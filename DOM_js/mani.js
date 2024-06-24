document.getElementById("text").style.color = "green";
document.getElementById("text").style.fontSize = "40px";
document.getElementById("text").style.backgroundColor = "yellow";
const el = document.getElementById("text");
el.style.textAlign = "center";

// Daraah baidlaar h1 text iiin utgiig solino 3 arga baina
// document.getElementById("text").textContent = "Pinecone academy";
document.getElementById("text").innerText = "<h1>ID platform</h1>";
// document.getElementById("text").innerHTML = "<h1>ID platform</h1>";
const myElement = document.createElement("h1");
myElement.textContent = "PP llo";
document.getElementById("test").appendChild(myElement);
console.log(myElement);

const boxEl = document.getElementsByClassName("box")[0];
const btnEl = document.getElementsByTagName("button")[0];
console.log(btnEl);
console.log(boxEl);
const colors = ["red", "yellow", "grey", "black", "pink", "green"];
let i = 0;

function changeBackroundColor() {
  console.log("Chnaged");
  boxEl.style.backgroundColor = colors[i];
  i++;
  if (i === colors.length) {
    i = 0;
  }
}

btnEl.addEventListener("click", changeBackroundColor);

const boxEl1 = document.getElementsByClassName("box")[1];
const btnEl1 = document.getElementsByTagName("button")[1];

let j = 0;
function changeBackroundColorRandom() {
  console.log("Chnaged");
  const CrandomColor = Math.floor(Math.random() * 256);
  const ArandomColor = Math.floor(Math.random() * 256);
  const BrandomColor = Math.floor(Math.random() * 256);
  boxEl1.style.backgroundColor =
    "rgb(" + CrandomColor + "," + ArandomColor + "," + BrandomColor + ")";
  //   boxEl1.style.backgroundColor = "rgb(" + randomColor + ",255,255)";
  //   j++;
  //   if (j === randomColor.length) {
  //     j = 0;
  //   }
}

btnEl1.addEventListener("click", changeBackroundColorRandom);

function generateColor() {
  console.log("Chnaged");
  const CrandomColor = Math.floor(Math.random() * 256);
  const ArandomColor = Math.floor(Math.random() * 256);
  const BrandomColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + CrandomColor + "," + ArandomColor + "," + BrandomColor + ")";
  return `rgb(${CrandomColor},${BrandomColor},${ArandomColor})`;
}

const boxEl2 = document.getElementsByClassName("box")[2];
const btnEl2 = document.getElementsByTagName("button")[2];
function rcolor() {
  boxEl2.style.backgroundColor = generateColor();
}

btnEl2.addEventListener("click", rcolor);
