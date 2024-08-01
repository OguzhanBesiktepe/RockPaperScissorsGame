const options = ["rock", "paper", "scissors"]; //variables set rock paper and scissors

function getComputerChoice(){ //create a function
    const choice = options[Math.floor(Math.random() * options.length)]; //gets the length of our options and rounds to the nearest int, and selects randomly. 
    return choice; //returns randomly Rock, Paper, or Scissors 
}

function checkWinner(playerSelection,computerSelection){ //new function with 2 parameters 
    if(playerSelection == computerSelection){ // if the player and computer pick the same option 
        return "Tie"; //results in tie
    }
    else if( // this will be the winning options for the player/user
        (playerSelection == "rock" && computerSelection == "Scissors") ||
        (playerSelection == "scissors" && computerSelection == "Paper") ||
        (playerSelection == "paper" && computerSelection == "Rock")
        ){
            return "Player"; //results in Player Winning
        }
        else { //if player looses interaction every other options ==
            return "Computer";

        }
}

function playRound(playerSelection, computerSelection){ //new function using 2 existing parameters
    const result = checkWinner(playerSelection, computerSelection) //variable using checkWinner function with parameters
    if( result == "Tie"){ //if a tie occurs print
        return "Its a Tie!"
    }
    else if(result == "Player"){ //if player wins print
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{ //if computer wins print
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){ //gets playerchoice and validates it within our selection between Rock Paper & Scissors (upper & lower case w Invalid Responses)
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissors"); //will prompt the user for their choice
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){ // This function will set the game to over 5 rounds.
    let scorePlayer = 0; //both start at 0
    let scoreComputer = 0; //both start at 0
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) { //Loop for 5 rounds
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log (playRound(playerSelection, computerSelection));
        console.log ("--------"); // will differentiate between rounds
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++
        }
    }
    console.log("Game Over"); //Game is over message
    if(scorePlayer > scoreComputer){ //If player won more then print
        console.log("Player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner"); //If Computer won more then print
    }
    else{
        console.log("We have a tie!"); // If game is a tie print
    }

}
game() //Starting of our game