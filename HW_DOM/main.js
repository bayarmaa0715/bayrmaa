function generateColor() {
  // console.log("Chnaged");z
  const CrandomColor = Math.floor(Math.random() * 256);
  const ArandomColor = Math.floor(Math.random() * 256);
  const BrandomColor = Math.floor(Math.random() * 256);
  const DrandomColor = Math.random();
  // console.log(DrandomColor);
  //   return "rgb(" + CrandomColor + "," + ArandomColor + "," + BrandomColor + ")";
  return `rgba(${CrandomColor},${BrandomColor},${ArandomColor},${DrandomColor})`;
}
const btnEl1 = document.getElementsByTagName("button")[0];
const boxs = document.getElementsByClassName("box");

function zcolor() {
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].style.backgroundColor = generateColor();
  }
}

btnEl1.addEventListener("click", zcolor);

const btnEl2 = document.getElementById("addColor");

function addBox() {
  const newBox = document.createElement("div");
  newBox.className = "box";
  const main = document.getElementsByClassName("box_container")[0];
  main.appendChild(newBox);
}
btnEl2.addEventListener("click", addBox);

const btnEl3 = document.getElementById("btnChange");
btnEl3.addEventListener("click", () => {
  for (i = 0; i < boxs.length; i++) {
    boxs[i].classList.toggle("bigBox");
  }
});

const btnPlay = document.getElementById("btnPlay");

btnPlay.addEventListener("click", function () {
  // play saunds
  const audio = document.getElementsByTagName("audio")[0];
  // audio.src = ""; duu solih

  audio.play();
  console.log(audio);
});

// const boxEl = document.getElementsByClassName("box")[0];
// function changeBackroundColor() {
//   boxEl.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor);

// // const btnEl = document.getElementsByTagName("button")[0];
// const boxEl1 = document.getElementsByClassName("box")[1];
// function changeBackroundColor1() {
//   boxEl1.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor1);

// const boxEl2 = document.getElementsByClassName("box")[2];
// function changeBackroundColor2() {
//   boxEl2.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor2);

// const boxEl3 = document.getElementsByClassName("box")[3];
// function changeBackroundColor3() {
//   boxEl3.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor3);

// const boxEl4 = document.getElementsByClassName("box")[4];
// function changeBackroundColor4() {
//   boxEl4.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor4);

// const boxEl5 = document.getElementsByClassName("box")[5];
// function changeBackroundColor5() {
//   boxEl5.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor5);

// const boxEl6 = document.getElementsByClassName("box")[6];
// function changeBackroundColor6() {
//   boxEl6.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor6);

// const boxEl7 = document.getElementsByClassName("box")[7];
// function changeBackroundColor7() {
//   boxEl7.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor7);

// const boxEl8 = document.getElementsByClassName("box")[8];
// function changeBackroundColor8() {
//   boxEl8.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor8);

// const boxEl9 = document.getElementsByClassName("box")[9];
// function changeBackroundColor9() {
//   boxEl9.style.backgroundColor = generateColor();
// }
// changeBackroundColor();
// btnEl1.addEventListener("click", changeBackroundColor9);
