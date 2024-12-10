// Variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}.`;
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to update the UI
function updateUI(resultText) {
    // Update round result
    document.getElementById("round-result").textContent = resultText;

    // Update scores
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    // Check if a player has reached 5 points
    if (playerScore === 5 || computerScore === 5) {
        const winnerText =
            playerScore === 5
                ? "Congratulations! You won the game!"
                : "Sorry, you lost. Better luck next time!";
        document.getElementById("winner").textContent = winnerText;

        // Disable buttons
        document.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });
    }
}

// Event listener function for player choices
function handlePlayerChoice(event) {
    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", handlePlayerChoice);
document.getElementById("paper").addEventListener("click", handlePlayerChoice);
document.getElementById("scissors").addEventListener("click", handlePlayerChoice);
