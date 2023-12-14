let gameBoard = document.querySelector(".board");
let startBtn = document.querySelector(".button");
let gameStm = document.querySelector(".gameStatement");
let allCells = document.querySelectorAll(".cell");

// console.log(allCells);

let gamePlay = false;
let turn = "X";

startBtn.addEventListener("click", function () {

    if (gamePlay == false) {
        gameStm.innerHTML = "Player X's turn "
        startBtn.innerHTML = "Reset";
    } else {
        gameStm.innerHTML = "";
        startBtn.innerHTML = "Start"
    }

    gamePlay = !gamePlay;
})

// for(let i = 0 ;i<allCells.length;i++){
//     allCells[i].addEventListener("click",function(){
//         console.log(i + " clicked ");
//     })
// }

gameBoard.addEventListener("click", function (event) {

    if (gamePlay == true) {

        let myCell = event.target;

        if (turn == "X") {
            myCell.innerHTML = turn;
            turn = "0";
            
        } else {
            myCell.innerHTML = turn;
            turn = "X";
        }
        gameStm.innerHTML=`Player ${turn}'s turn `
    } else {

    }
})
