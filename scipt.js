//inisizitaion

let totalAttemp = 5;
let attemp = 0;
let totalWon = 0;
let totalLoss = 0;

//finde elements

let from = document.querySelector("form");
let card_body = document.querySelector(".card_body");
let input_section = document.querySelector("#input_section");
let button = document.querySelector("#btn_id");
let WonMassage = document.querySelector(".wonMassage");
let reamainAttempt = document.querySelector(".reamain_attempt");
let lossWonMassage = document.createElement("p");

from.addEventListener("submit",function(event){
  event.preventDefault();
  attemp++;
  if(attemp==5){
    input_section.disabled = true;
    button.disabled = true;
  } if(attemp <6){
    let guessNumber = Number(input_section.value);
    checkResult(guessNumber);
    reamainAttempt.innerHTML = `Remaining Attemp ${totalAttemp - attemp}`;
  }
  input_section.value = "";
});

function checkResult (input_section){
  let getRandomNumber = randomNumber(5);
  if(getRandomNumber===input_section){
    WonMassage.innerHTML = `You Have won`;
    totalWon++;
  }else{
    WonMassage.innerHTML = `Your Have loss Random Number was ${getRandomNumber}`;
    totalLoss++;
  }
  lossWonMassage.innerHTML = `Won : ${totalWon} , Loss : ${totalLoss}`;
  lossWonMassage.classList.add("larg");
  card_body.appendChild(lossWonMassage);
}
function randomNumber(collect){
return Math.floor(Math.random() * collect) + 1;
};
