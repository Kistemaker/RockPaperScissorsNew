let userChoice
let computerChoice

for (i=0;i<3;i=i+1) {
    userChoice = prompt("choose paper, rock or scissors")
    generateComputerChoice()
    getResult()
}

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * 3 )
    console.log(randomNumber)

    if (randomNumber === 0){
        computerChoice = "rock"
    }
    if (randomNumber === 1) {
        computerChoice = "paper"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
}

function getResult() {
    if (computerChoice === userChoice) {
    result = "Its a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"
        }       
    if (computerChoice === "rock" && userChoice === "scissors") {
            result = "you lost!"
        }
    if (computerChoice === "paper" && userChoice === "scissors") {
            result = "you win!"
        }

    if (computerChoice === "paper" && userChoice === "rock") {
            result = "you lost!"
        }

    if (computerChoice === "scissors" && userChoice === "paper") {
            result = "you lose!"
        }

    if (computerChoice === "scissors" && userChoice === "rock") {
            result = "you win!"
        }
    
    alert("computer:"+computerChoice + " your choice:" + userChoice +" "+result)
}
