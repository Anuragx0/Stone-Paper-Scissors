userScore = 0;
compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const compChoicetext = document.querySelector("#comp-choice-text");
const userChoicetext = document.querySelector("#user-choice-text");
const compImg = document.querySelector("#comp-img");
const userImg = document.querySelector("#user-img");


const genCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() *3);
    // const rndIdx = 2;
    console.log("Computer choice =",choices[rndIdx]);
    return choices[rndIdx];
}

const gameDraw =  () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#1C1C1C"
}


const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    compChoicetext.innerText = compChoice;
    userChoicetext.innerText = userChoice;
    userImg.setAttribute("src",`image/${userChoice}.png`);
    compImg.setAttribute("src",`image/${compChoice}.png`);


    const showWinner = () => {
        if(userWin) {
            console.log("User wins!");
            msg.innerText = `You win!, your ${userChoice} Beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
        } else {
            console.log("Computer wins!");
            msg.innerText = `You loose!, ${compChoice} Beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
        }
    }

    if(userChoice === compChoice) {
        gameDraw();
    }else{
        userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "scissors"){
                userWin = true;
                console.log("User wins!");
            }else{
                userWin = false;
                console.log("Computer wins!");
            }
        }else if(userChoice === "paper"){
            if(compChoice === "rock"){
                userWin = true;
                console.log("User wins!");
            }else{
                userWin = false;
                console.log("Computer wins!");
            }
        }else if (userChoice === "scissors"){
            if(compChoice === "paper"){
                userWin = true;
                console.log("User wins!");
            } else{
                userWin = false;
                console.log("Computer wins!");
            }
        }
        showWinner();
    }
}
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})