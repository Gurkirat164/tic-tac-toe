let gamebox = document.querySelectorAll(".game-box");
let resetbtn = document.querySelector(".reset-button");
let newgamebtn = document.querySelector(".new-game-button");
let xwincount = document.querySelector(".score-x");
let owincount = document.querySelector(".score-o");

let turnx = true;
let winx = 0;
let wino = 0;

xwincount.innerText = winx;
owincount.innerText = wino;

const win_conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
]

gamebox.forEach((box) => {
      box.addEventListener("click", () => {
            if (turnx) {
                  box.innerText = "X";
                  turnx = false;
            }
            else {
                  box.innerText = "O";
                  turnx = true;
            }
            box.disabled = true;
            checkWin();

      })
})

const lockall = () => {
      for (let box of gamebox) {
            box.disabled = true;
      }
}

const unlockall = () => {
      for (let box of gamebox) {
            box.disabled = false;
      }
}

const resetGame = () => {
      for (let box of gamebox) {
            box.innerText = "";
            box.style.backgroundColor = "";
      }
}

const updateScore = () => {
      xwincount.innerText = winx;
      owincount.innerText = wino;
}

const checkWin = () => {
      for (let condition of win_conditions) {
            let pos1val = gamebox[condition[0]].innerText;
            let pos2val = gamebox[condition[1]].innerText;
            let pos3val = gamebox[condition[2]].innerText; 

            if (pos1val != "" && pos2val != "" && pos3val != "") {
                  if (pos1val == pos2val && pos2val == pos3val) {
                        gamebox[condition[0]].style.backgroundColor = "green";
                        gamebox[condition[1]].style.backgroundColor = "green";
                        gamebox[condition[2]].style.backgroundColor = "green";      
                        lockall();
                        if (pos1val == "X") {
                              winx++;
                              updateScore();
                        }
                        else {
                              wino++;
                              console.log(wino + "O wins!");
                              updateScore();
                        }
                  }
            }
      }
}

resetbtn.addEventListener("click", () => {
      resetGame();
      unlockall();
      turnx = true;
})

newgamebtn.addEventListener("click", () => {
      resetGame();
      unlockall();
      winx = 0;
      wino = 0;
      updateScore();
      turnx = true;
      gamebox.forEach((box) => {
            box.style.backgroundColor = "";
      })
})

