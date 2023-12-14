let gameBoard = document.querySelector(".board");
let startBtn = document.querySelector(".button");
let gameStm = document.querySelector(".gameStatement");
let allCells = document.querySelectorAll(".cell");

// console.log(allCells);

let gamePlay = false ;

startBtn.addEventListener("click",function(){

    if(gamePlay == false ){
        gameStm.innerHTML="Player X's turn "
    startBtn.innerHTML="Reset";
    }else{
        gameStm.innerHTML="";
        startBtn.innerHTML="Start"
    }

    gamePlay = !gamePlay;
})

// for(let i = 0 ;i<allCells.length;i++){
//     allCells[i].addEventListener("click",function(){
//         console.log(i + " clicked ");
//     })
// }

gameBoard.addEventListener("click",function(event){
    console.log(event.target);
})
