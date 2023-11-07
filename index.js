let firstCard;
let secondCard;
let sum = 0;
let card = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";


let playPara = document.getElementById("play-para");
let sumPara = document.getElementById("sum-para");
let cardPara = document.getElementById("card-para");
let playerOne = document.getElementById("player-one");

let player = {
    name:"sam",
    chips: 145
}

playerOne.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    firstCard = getRandomNumber();
    secondCard = getRandomNumber();
    hasBlackJack = false;
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
  
    sumPara.textContent = "Sum: " + sum;
    cardPara.textContent = "Cards: ";
    for (let i = 0; i < card.length; i++) {

        cardPara.textContent += card[i] + " ";
    }
    if (sum <= 20) {
        message = "Will you draw a new card";
    }
    else if (sum === 21) {
        message = "You've got blackjack";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    playPara.textContent = message;
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    }
    else if (randomNumber > 10) {
        return 10;
    }
    else{
        return randomNumber;
    }
}

function newCard(){
   if(isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomNumber();
    sum += thirdCard;
    card.push(thirdCard);
    renderGame();
   }
}
