let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let player;
let computer;
let rules = document.getElementById("rules");
let button = document.getElementById("button");
let span = document.getElementsByClassName("close")[0];

//images which load upon loading the page
window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "assets/images/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
        console.log(i);

    }
};

//checking for winner
document.addEventListener("click", function () {
    if (parseInt(playerScore.innerText) >= 5) {
        alert("You won!Click OK to play again")
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    }
    else if (parseInt(computerScore.innerText) >= 5) {
        alert("Computer won!Click OK to play again")
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    }
})

//player choice
function selectChoice() {

    player = this.id;
    document.getElementById("player-choice").src = `assets/images/${player}.png`;

    //computer choice
    computer = choices[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").src = `assets/images/${computer}.png`;

    //Score and Message
    let parsedplayerScore = parseInt(playerScore.innerText);
    let parsedcomputerScore = parseInt(computerScore.innerText);
    let result = document.getElementById('result');


    //result check
    if (player == computer) {
        result.innerHTML = 'Draw!';
    }
    else {
        if (player == "rock") {
            if (computer == "scissor") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "scissor") {
            if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }
        else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "spock") {
            if (computer == "scissor") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }



    }

}
//rules
button.onclick = function () {
    rules.style.display = "block";
};

span.onclick = function () {
    rules.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == rules) {
        rules.style.display = "none";
    }
};