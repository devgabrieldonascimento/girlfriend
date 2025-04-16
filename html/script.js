let card = document.querySelector(".card");
let teasingMessage = document.getElementById("teasing");

let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");

let question = document.querySelector(".question");
let answer = document.querySelector(".answer");

let yesMoveCount = 0;
const maxYesMoves = 5;

// Botão "SIM" se move por 5 vezes antes de funcionar
yesButton.addEventListener("click", function (e) {
  if (yesMoveCount < maxYesMoves) {
    e.preventDefault();
    yesMoveCount++;

    // Mostrar mensagem
    teasingMessage.style.display = "block";

    // Mover aleatoriamente dentro do card
    let maxX = card.clientWidth - yesButton.offsetWidth;
    let maxY = card.clientHeight - yesButton.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    yesButton.style.position = "absolute";
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;

    setTimeout(() => {
      teasingMessage.style.display = "none";
    }, 800);
  } else {
    // Comportamento normal após 5 fugas
    card.style.backgroundImage =
      "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    question.style.display = "none";
    answer.style.display = "flex";
  }
});

// Botão "NÃO" se move dentro do card
noButton.addEventListener("mouseover", function () {
  let maxX = card.clientWidth - noButton.offsetWidth;
  let maxY = card.clientHeight - noButton.offsetHeight;

  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});