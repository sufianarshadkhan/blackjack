let firstCard=12;
let secondCard=9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive=true;
let message = "";

let playPara = document.getElementById("play-para");
let cardPara = document.getElementById("card-para");
let sumPara = document.getElementById("sum-para");

function startGame(){
    cardPara.textContent = "Cards: " + firstCard + "  " + secondCard;
    sumPara.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw the new card?";
        hasBlackJack=false;
    }
    else if(sum === 21){
        message = "Congrats! You've got BlackJack";
        hasBlackJack=true;
    }
    else{
        message = "You're out of the game";
        hasBlackJack=false;
        isAlive=false;
    }
    playPara.textContent = message;
}

function newCard(){
    let thirdCard=2;
    sum += thirdCard;
    startGame();
}