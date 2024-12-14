
const game_elemenets = ["Rock", "Paper", "Scissors"];

var humanScore = 0;
var ComputerScore = 0;
const gameRound = 5;

//Computer Choice Part
function getComputerChoice(){

    var randomNumber = Math.floor(Math.random()*game_elemenets.length);
    var temporary_answer = game_elemenets[randomNumber];

    return temporary_answer;
}


//Human Choice Part
function getHumanChoice(i){
    
    const userChoice = getValidInput(`For round ${i} Please enter your choice: rock, paper or scissors`, game_elemenets);

    return userChoice;
}


//For case sensitivity
function getValidInput(promptMessage, game_elemenets) {
    while (true) {
        try {
            
            let userInput= prompt(promptMessage);
            userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

            if (game_elemenets.includes(userInput)) {
                return userInput; 
            } else {
                
                throw new Error(`Valid Login: "${userInput}". Valid options: ${game_elemenets.join()}`);
            }
        } catch (error) {
            
            console.error(error.message);
        }
    }
}

// Main function to play game
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log(`The game is a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        ComputerScore++;
    }

    console.log(`Current Score - You: ${humanScore}, Computer: ${ComputerScore}`);
}

// For game rounds
function playGame(){
    for(var i = 1; i<=gameRound;i++){
        console.log(`Round ${i}:`);
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(i);
        playRound(humanSelection,computerSelection);
    }

    if (humanScore > ComputerScore) {
        console.log(`Congrats. You beat the computer. Your score is ${humanScore}, Computer score is ${ComputerScore}.`);
    } else if (humanScore < ComputerScore) {
        console.log(`Computer beats you. Your score is ${humanScore}, Computer score is ${ComputerScore}.`);
    } else {
        console.log(`It's a tie! Both scores are ${humanScore}.`);
    }
}

playGame();








