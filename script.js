let totalPoints = 0;
let roundPoints = 0;
let rounds = 0;
const playerName = document.querySelector("h1");
const enterName = document.querySelector("#nameInput");
let RNG = Math.ceil(Math.random() * 6);
const roundPointPEl = document.querySelector("#roundPoint");
const totalPointBtn = document.querySelector("#totalPoint");
const wonH1El = document.querySelector("#won");
const freezeBtn = document.querySelector("#freezeButton");
const rollBtn = document.querySelector("#rollButton");

const RoundEl = document.querySelector("#Round");
console.log(RNG);

const startBtn = document
  .querySelector("#nameButton")
  .addEventListener("click", () => {
    playerName.innerText = enterName.value;
    enterName.style.display = "none";
    document.querySelectorAll("button")[0].style.display = "none";
  });

rollBtn.addEventListener("click", () => {
  console.log("throw");
  RNG = Math.ceil(Math.random() * 6);
  const scoreH1El = document.querySelector("#Score");
  scoreH1El.innerText = `You Rolled:${RNG}`;

  console.log(RNG);
  roundPoints += RNG;

  roundPointPEl.innerText = `Round Point: ${roundPoints}`;

  if (RNG === 1) {
    roundPoints = 0;
    roundPointPEl.innerText = `Round Point: ${0}`

  }
});

freezeBtn.addEventListener("click", () => {
  console.log("frreze");
  rounds++;
  RoundEl.innerText = `Round: ${rounds}`;

  totalPoints += roundPoints;
  totalPointBtn.innerText = `total points: ${totalPoints}`;
  roundPoints = 0;
  roundPointPEl.innerText = `Round Point: ${0}`;

  if (totalPoints >= 100) {
    wonH1El.innerText = `You Won with ${totalPoints} points and ${rounds} rounds`;
       rollBtn.disabled = true;
    freezeBtn.disabled = true;
  }
});
