

let sto = document.querySelector("#btn1");
let pap = document.querySelector("#btn2");
let sis = document.querySelector("#btn3");
let userSelect = document.querySelector(".user-selec");
let compSelect = document.querySelector(".comp-selec");
let win = document.querySelector(".result-show");
let userPoints = document.querySelector(".user-points");
let compPoints = document.querySelector(".comp-points");

let clkBtn;
let userChoice;
let compChoice;
let winner;

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

function removeResultClasses() {
  win.classList.remove("win-show", "loss-show", "draw-show");
}

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
