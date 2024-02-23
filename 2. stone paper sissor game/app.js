//step 1 intialize the elements

let sto = document.querySelector("#btn1");
let pap = document.querySelector("#btn2");
let sis = document.querySelector("#btn3");
let userSelect = document.querySelector(".user-selec");
let compSelect = document.querySelector(".comp-selec");
let win = document.querySelector(".result-show");
let userPoints = document.querySelector(".user-points");
let compPoints = document.querySelector(".comp-points");

// Step 2 Intialize Variables

let clkBtn;
let userChoice;
let compChoice;
let winner;

// Step 3 User Click the button and select the user value

sto.addEventListener(("click"), () => {
  clkBtn = "stone";
  chooseBtn();
  computerChoice();
  checkWinner();
});

pap.addEventListener(("click"), () => {
  clkBtn = "paper";
  chooseBtn();
  computerChoice();
  checkWinner();
});

sis.addEventListener(("click"), () => {
  clkBtn = "scissor";
  chooseBtn();
  computerChoice();
  checkWinner();
});

// Step 4 Update and Show the userchoice 

let chooseBtn = () => {
  if (clkBtn === "stone") {
    userChoice = "stone";
    userSelect.innerText = "stone";
  } else if (clkBtn === "paper") {
    userChoice = "paper";
    userSelect.innerText = "paper";
  } else if (clkBtn === "scissor") {
    userChoice = "scissor";
    userSelect.innerText = "scissor";
  }
  console.log("userChoice = ", userChoice);
};

// Step 5 Select and Show The computer Choice

let computerChoice = () => {
  let comChoice = Math.random() * 3;

  if (comChoice < 1) {
    compChoice = "stone";
    compSelect.innerText = "stone";
  } else if (comChoice < 2) {
    compChoice = "paper";
    compSelect.innerText = "paper";
  } else if (comChoice < 3) {
    compChoice = "scissor";
    compSelect.innerText = "scissor";
  }

  console.log("compChoice =", compChoice);
};

// Step 6 Check and Show the winner/Draw

let checkWinner = () => {
  if (
    (userChoice === "stone" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "stone") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    removeResultClasses();
    win.classList.add("win-show");
    win.innerText = "User Winner";
    winner = "user";
  } else if (
    (userChoice === "stone" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "stone")
  ) {
    removeResultClasses()
    win.classList.add("loss-show");
    win.innerText = "Computer Winner";
    winner = "computer";
  } else if (userChoice === compChoice) {
    removeResultClasses()
    win.classList.add("draw-show");
    win.innerText = "Draw";
    winner = "Draw";
  }
  console.log(winner);
  winPoints();
};

//Step 7 Remove the result after each winner

function removeResultClasses() {
  win.classList.remove("win-show", "loss-show", "draw-show");
}

// Step 8 show and update the compWinPoints and userWinPoints

let compWinPoints = 0;
let userWinPoints = 0;

let winPoints = () => {
  if (winner === "computer") {
    compWinPoints++;
    compPoints.innerText = compWinPoints;
  } else if (winner === "user") {
    userWinPoints++;
    userPoints.innerText = userWinPoints;
  }
};
