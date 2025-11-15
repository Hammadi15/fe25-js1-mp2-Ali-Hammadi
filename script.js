const form = document.querySelector("form");
let RNG = Math.ceil(Math.random() * 6);
let rounds = 0;
let totalGameScore = 0;

const roundElm = document.querySelector("#round");

const freezeButton = document.querySelector("#freezeButton");

console.log(RNG);
const listThrowListOne = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#userName").value;
  console.log(name);
  const userPel = document.querySelector("#userNameDisplay");
  userPel.innerText = name;
});

const throwButton = document.querySelector("#throwButton");
throwButton.addEventListener("click", (event) => {
  event.preventDefault();

  const roundPoint = document.querySelector("#roundPoint");
  const RoundPoint = document.querySelector("#RoundPoint");
  listThrowListOne.push(RNG);

  const throwPointTotal = listThrowListOne.reduce((sum, num) => sum + num, 0);

  roundPoint.innerHTML = listThrowListOne.join("<br>");
  RoundPoint.innerText = throwPointTotal;

  RNG = Math.ceil(Math.random() * 6);
  rounds++;
  roundElm.innerText= `amount of rounds ${rounds}`

  if (RNG === 1) {
    roundElm.innerText = 0;
    RoundPoint.innerText = 0;
    listThrowListOne.length = 0;
    rounds++;
  }
});
freezeButton.addEventListener("click", (event) => {
  event.preventDefault();
  const totalPoint = document.querySelector("#totalPoint");
  const endMessage = document.querySelector("#endMessage");

  const RoundPoint = listThrowListOne.reduce((sum, num) => sum + num, 0);
  totalGameScore += RoundPoint;
  totalPoint.innerText = totalGameScore;

  listThrowListOne.length = 0;



  if (totalGameScore >= 100) {
    endMessage.innerText = `Spelet är slut! Det tog ${rounds} omgångar.`;
  }
});
