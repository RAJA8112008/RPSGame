let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#User-score");
const comScorepara = document.querySelector("#comp-score");

// Computer choice
const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
};

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
         userScore++;
         userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
          compScore++;
          comScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawMatch = () => {
    msg.innerText = "Game was draw. Try again!";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if (userChoice === compChoice) {
        drawMatch();
    } else {
        let userWin = true;

        if (compChoice === "rock") {
            userWin = userChoice === "scissor" ? false : true;
        } else if (compChoice === "paper") {
            userWin = userChoice === "scissor" ? true : false;
        } else {
            userWin = userChoice === "paper" ? false : true;
        }

        showWinner(userWin,compChoice,userChoice);
    }
};

