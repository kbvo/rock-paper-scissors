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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("Tie! Both of you chose rock.")
            }
            if (computerChoice == "paper") {
                ++computerScore
                console.log("You lost! Paper beats rock.")
            }
            if (computerChoice == "scissors") {
                ++humanScore
                console.log("You won! Rock beats scissors.")
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                ++humanScore
                console.log("You won! Paper beats rock.")
            }
            if (computerChoice == "paper") {
                console.log("Tie! Both of you chose paper.")
            }
            if (computerChoice == "scissors") {
                ++computerScore
                console.log("You lost! Scissors beats paper.")
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                ++computerScore
                console.log("You lost! Rock beats scissors.")
            }
            if (computerChoice == "paper") {
                ++humanScore
                console.log("You won! Scissors beats paper.")
            }
            if (computerChoice == "scissors") {
                console.log("Tie! Both of you chose scissors.")
            }
        }
    }
    

    for (i = 0; i < 5; ++i) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log("You: " + humanScore + " Computer: " + computerScore)
    }
}

playGame();

