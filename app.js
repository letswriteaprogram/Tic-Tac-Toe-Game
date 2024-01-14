const boxes = document.querySelectorAll(".box");
const reset_btn = document.querySelector(".reset-btn");
const message = document.querySelector(".message");

let player_X = true;
let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count = 0;

reset_btn.addEventListener("click", newgame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count += 1;
    if (player_X) {
      box.innerText = "X";
      player_X = false;
    } else {
      box.innerText = "O";
      player_X = true;
    }
    box.disabled = true;
    checkwinner();
    playercolour(box);
  });
});

function playercolour(box) {
  if (box.innerHTML === "X") {
    box.style.color = "#a5aaf7";
  } else {
    box.style.color = "#e589f3";
  }
}

function checkwinner() {
  winpatterns.forEach((pattern) => {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    if (pos1 && pos2 && pos3) {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
      if (count == 9) {
        message.innerHTML = `no one is winner, please hit restart and try again`;
        message.style.display = "block";
      }
    }
  });
}

function showWinner(winner) {
  message.innerHTML = `congratulation , winner is ${winner}`;
  message.style.display = "block";
  btnDisabled();
}

function btnDisabled() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function newgame() {
  count = 0;
  player_X = true;
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
    message.style.display = "none";
  }
}



