function getComputerChoice() {
    let a = "Rock";
    let b = "Paper";
    let c = "Scissor";

    let randomnumber = Math.random();

    if (randomnumber < 0.33) {
        return a;
    } else if (randomnumber >= 0.33 && randomnumber < 0.66) {
        return b;
    } else {
        return c;
    }
}

function getHumanChoice() {
    let usersinput = prompt("Write any one of Rock, Paper, or Scissor").trim();
    usersinput = usersinput.charAt(0).toUpperCase() + usersinput.slice(1).toLowerCase();

    if (usersinput === "Rock" || usersinput === "Paper" || usersinput === "Scissor") {
        return usersinput;
    } else {
        console.log("Invalid input. Please enter Rock, Paper, or Scissor.");
        return getHumanChoice(); // Recursively call the function until a valid input is given
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("You win");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win");
        humanScore++;
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("You lose");
        computerScore++;
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("You win");
        humanScore++;
    } else {
        console.log("Tie");
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame();
