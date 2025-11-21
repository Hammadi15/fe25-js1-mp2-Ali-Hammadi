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
// rollBtn = display.style = "none"
const formInput = document.querySelector("#formInput");
const RoundEl = document.querySelector("#Round");

rollBtn.style.display = "none";
freezeBtn.style.display = "none";
roundPointPEl.style.display = "none";
RoundEl.style.display = "none";
totalPointBtn.style.display = "none";
wonH1El.style.display = "none";
document.querySelector("#Score").style.display = "none";
console.log(RNG);

const form = document.querySelector("#formInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  playerName.innerText = enterName.value;
  enterName.style.display = "none";
  document.querySelector("#nameButton").style.display = "none";

  rollBtn.style.display = "block";
  freezeBtn.style.display = "block";
  roundPointPEl.style.display = "block";
  RoundEl.style.display = "block";
  totalPointBtn.style.display = "block";
  wonH1El.style.display = "block";
  document.querySelector("#Score").style.display = "block";
});

rollBtn.addEventListener("click", () => {
  console.log("throw");
  RNG = Math.ceil(Math.random() * 6);
  const scoreH1El = document.querySelector("#Score");
  scoreH1El.innerText = `You Rolled:${RNG}`;
  totalPointBtn.innerText = `total points: ${totalPoints}`;

  console.log(RNG);
  roundPoints += RNG;

  roundPointPEl.innerText = `Round Point: ${roundPoints}`;

  RoundEl.innerText = `Round: ${rounds}`;

  if (RNG === 1) {
    roundPoints = 0;
    rounds += 1;
    roundPointPEl.innerText = `Round Point: ${0}`;
    RoundEl.innerText = `Round: ${rounds}`;
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
