const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const resultDisplay = document.getElementById("resultDisplay");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const reset = document.getElementById("reset");

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
    let final = Math.floor(Math.random() * 3)
    if(final === 0){
        return "Rock";
    }
    else if(final === 1){
        return "Paper";
    }
    else{
        console.log("Scissor");
        return "Scissor";
    }
}

rock.addEventListener("click" , function(){
    playerChoice.textContent = "Rock";
    let R = getComputerChoice();
    computerChoice.textContent = R;
    let result = checkWinner("Rock", R);
    resultDisplay.textContent = result;

    if(result === "Player Wins"){
        playerPoints++;
    }
    else if(result === "Computer Wins"){
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
});

paper.addEventListener("click" , function(){
    playerChoice.textContent = "Paper";
    let P = getComputerChoice();
    computerChoice.textContent = P;
    let result = checkWinner("Paper", P);
    resultDisplay.textContent = result;

    if(result === "Player Wins"){
        playerPoints++;
    }
    else if(result === "Computer Wins"){
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
});

scissor.addEventListener("click" , function(){
    playerChoice.textContent = "Scissor";
    let S = getComputerChoice();
    computerChoice.textContent = S;
    let result = checkWinner("Scissor", S);
    resultDisplay.textContent = result;

    if(result === "Player Wins"){
        playerPoints++;
    }
    else if(result === "Computer Wins"){
        computerPoints++;
    }

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
});

function checkWinner(player, computer){
    if(player === computer){
        return "Draw";
    }
    else if(player == "Rock" && computer == "Scissor" || player == "Paper" && computer == "Rock" || player == "Scissor" && computer == "Paper"){
        return "Player Wins";
    }
    else{
        return "Computer Wins"
    }
}

reset.addEventListener("click" , function(){
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    resultDisplay.textContent = "";
    playerChoice.textContent = "";
    computerChoice.textContent = "";
});
