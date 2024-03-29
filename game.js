let userInput = (prompt("Enter Your choice. \n Rock \n Paper \n Scissors"));
userInput = userInput.toUpperCase();

function getComputerChoice(){
    let compChoice;
    compChoice = Math.floor(((Math.random() * 10) % 3) + 1);
    switch(compChoice){
        case 1: 
            compChoice='ROCK';
            break;
        case 2: 
            compChoice='PAPER';
            break;
        case 3: 
            compChoice='SCISSORS';
            break;
    }
    return compChoice;
}

function gameRound(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        console.log("Draw");
    } else if(playerChoice == 'ROCK'){
        if (computerChoice == 'PAPER'){
            console.log("Computer wins");
        } else{
            console.log("User wins");
        }
    } else if(playerChoice == 'PAPER'){
        if (computerChoice == 'SCISSORS'){
            console.log("Computer wins");
        } else{
            console.log("User wins");
        }
    } else if(playerChoice == 'SCISSORS'){
        if (computerChoice == 'ROCK'){
            console.log("Computer wins");
        } else{
            console.log("User Wins");
        }
    }
    return;
}

function game(){
    for(let i=0; i<5; i++){
        gameRound(userInput,getComputerChoice());
    }
}

game();