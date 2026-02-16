function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3)

    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "paper";
    }
    else if(choice === 2){
        return "scissors";
    }
}

function getHumanChoice(){
    a = prompt("Tell your choice between Rock, Paper and Scissors").toLowerCase();
    return a;
}




function playGame(){
let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return "It's a  tie both choose the same no";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else {
    computerScore++;
    return "You lose";
  }
}

for(let i = 0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection,computerSelection));
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    
}
if (computerScore > humanScore) {
  return "Unlucky! You lose";
} else if(humanScore === computerScore) {
  return "Wow! It's a tie";
}
else{
    return "You win! let's go";
}
}
console.log(playGame());