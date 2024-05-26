function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    let word = "rock"
    switch (randomInt) {
        case 0:
            break
        case 1:
            word = "paper"
            break
        case 2:
            word = "scissors"
            break
    }
    return word
}

function getHumanChoice() {
    let word = prompt("Please enter your choice of rock, paper, or scissors")
    word = word.toLowerCase()
    if (word != "rock" && word != "paper" && word != "scissors") {
        return getComputerChoice()
    }
    else {
        return word
    }
}

let humanScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
    let roundResult = "";
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            roundResult = "Tie! Both of you chose rock."
        }
        if (computerChoice == "paper") {
            ++computerScore
            roundResult = "You lost! Paper beats rock."
        }
        if (computerChoice == "scissors") {
            ++humanScore
            roundResult = "You won! Rock beats scissors.";
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            ++humanScore
            roundResult = "You won! Paper beats rock.";
        }
        if (computerChoice == "paper") {
            roundResult = "Tie! Both of you chose paper.";
        }
        if (computerChoice == "scissors") {
            ++computerScore
            roundResult = "You lost! Scissors beats paper.";
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            ++computerScore
            roundResult = "You lost! Rock beats scissors.";
        }
        if (computerChoice == "paper") {
            ++humanScore
            roundResult = "You won! Scissors beats paper.";
        }
        if (computerChoice == "scissors") {
            roundResult = "Tie! Both of you chose scissors.";
        }
    }

    resultDiv.textContent = `
        ${roundResult}
        Human: ${humanScore}, Computer: ${computerScore}
    `;

    if (humanScore >= 5) {
        resultDiv.textContent += `\nYou won the game!`;
        resetGame();
    } 
    else if (computerScore >= 5) {
        resultDiv.textContent += `\nComputer won the game!`;
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

let rockButton = document.querySelector(".rock")
rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
})

let paperButton = document.querySelector(".paper")
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
})

let scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
})

