let boxes = document.querySelectorAll(".btn");
let game = document.querySelector("#gmae");
let reset = document.querySelector("#reset");
let showMsg = document.querySelector(".msg-container");
let winMsg = document.querySelector("#win-msg");
let newGame = document.querySelector("#new-game");
let choose = document.querySelector(".choose");
let btnX = document.querySelector(".ch-btn1");
let btnO = document.querySelector(".ch-btn2");
let main = document.querySelector(".main");
let sec1 = document.querySelector(".ch");



// Step 1 Chooe X and O


let turnOne;

btnX.addEventListener(("click"), ()=>{
  
  turnOne = true;
  console.log("X")
  turnCheck();
});
btnO.addEventListener(("click"), ()=>{
  turnOne = false;
  turnCheck();
});

// Step 2 Hide Choose section and show the game

let turnCheck = () =>{
  main.classList.remove("hide");
  sec1.classList.add("hide");
  
}

// Step 3 Play the Game

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnOne === true) {
      btn.innerText = "X";
      btn.style.color = "#df9213";
      turnOne = false;
    } else {
      btn.innerText = "O";
      btn.style.color = "#c90076";
      turnOne = true;
    }
    btn.disabled= true;
    winnerCheck();
  });
});


// Step 4 Check the Winner

const winnerStage = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let winnerCheck = () => {
  for(let win of winnerStage){
      let pos1 = boxes[win[0]].innerText;
      let pos2 = boxes[win[1]].innerText;
      let pos3 = boxes[win[2]].innerText;

      

      if(pos1!== "" && pos2 !== "" && pos3 !== ""){
        if(pos1 === pos2 && pos2 === pos3){
          winnerShow(pos1);
          disabled();
        }
      }
  }

  if(clickCount() && draw()){
    drawshow();
  }
  
}

// Step 5 Draw the Game

let draw = () =>{
  for(let box of boxes){
    if(box.innerText=""){
      return false;
    }
  }
  return true;
}

// Step 6 after win Disable the Boxes

let disabled = () =>{
  for(let box of boxes){
    box.disabled=true;
  }
}

// step 7 After the click reset button enabled the boxes

let enabled = () =>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText = "";
    count=0;
    showMsg.classList.add("hide");
    sec1.classList.remove("hide");
    main.classList.add("hide");
  }
}

// step 8 reset the Game

let resetGame = () =>{
  turnOne;
  enabled();
}

reset.addEventListener(("click"),resetGame);
newGame.addEventListener(("click"),resetGame);

// Step 9 Show the Winner Or Show the Draw

let winnerShow = (winner) =>{
  winMsg.innerText= `Congragulation ${winner} is Winner`;
  showMsg.classList.remove("hide");
}


let drawshow = () => {
  winMsg.innerText= `Draw`;
  showMsg.classList.remove("hide");
}

// Step 10 Count the Click

let count = 0;
let clickCount = () =>{
  
  count++;
 if(count === 9 ){
   return true;
 }
 return false;
  

}

