var player_wins = 0;
var ai_wins = 0;
var choice = 0;
document.getElementById("playBtn").addEventListener("click", playGame1);

function playGame1() {
    document.getElementById("playBtn").remove();
    playGame();
}
function playGame() {


    let rockBtn = document.createElement("button");
    rockBtn.innerHTML = "Rock";
    document.getElementById("start").appendChild(rockBtn);
    rockBtn.id = 'rpsBtn';

    let paperBtn = document.createElement("button");
    paperBtn.innerHTML = "Paper";
    document.getElementById("start").appendChild(paperBtn);
    paperBtn.id = 'rpsBtn';

    let scissorsBtn = document.createElement("button");
    scissorsBtn.innerHTML = "Scissors";
    document.getElementById("start").appendChild(scissorsBtn);
    scissorsBtn.id = 'rpsBtn';

    const btnArray = [];
    btnArray.push(rockBtn);
    btnArray.push(paperBtn);
    btnArray.push(scissorsBtn);

    //Rock
    btnArray[0].addEventListener("click", function () {
        console.log(btnArray[0]);
        Rock(btnArray);

    });

    //Paper
    btnArray[1].addEventListener("click", function () {
        console.log(btnArray[1]);
        Paper(btnArray);

    });

    //Scissors
    btnArray[2].addEventListener("click", function () {
        console.log(btnArray[2]);
        Scissors(btnArray);

    });

}


function Rock(btnArray) {
    //hide btns
    for (i = 0; i < 3; i++) {
        btnArray[i].style.visibility = "hidden";
    }

    //Create cd timer
    const playerDiv = document.createElement("div");
    const cdDiv = document.createElement("div");
    const aiDiv = document.createElement("div");
    playerDiv.id = "playerDiv";
    cdDiv.id = "cdDiv";
    aiDiv.id = "aiDiv";
    document.getElementById("start").appendChild(playerDiv);
    document.getElementById("start").appendChild(cdDiv);
    document.getElementById("start").appendChild(aiDiv);

    const cdDiv_rps = document.createElement("div");
    const cdDiv_timer = document.createElement("div");
    document.getElementById("cdDiv").appendChild(cdDiv_rps);
    document.getElementById("cdDiv").appendChild(cdDiv_timer);
    cdDiv_rps.id = "cdDiv_rps";
    cdDiv_timer.id = "cdDiv_timer";
    const cdRPS = document.createElement("p");
    const cdTxt = document.createElement("p");
    cdRPS.id = "cdRPS";
    cdTxt.id = "cdTxt";
    document.getElementById("cdDiv_rps").appendChild(cdRPS);
    document.getElementById("cdDiv_timer").appendChild(cdTxt);

    choice = 1;
    countDown(choice);
}

function Paper(btnArray) {
    //hide btns
    for (i = 0; i < 3; i++) {
        btnArray[i].style.visibility = "hidden";
    }

    //Create cd timer
    const playerDiv = document.createElement("div");
    const cdDiv = document.createElement("div");
    const aiDiv = document.createElement("div");
    playerDiv.id = "playerDiv";
    cdDiv.id = "cdDiv";
    aiDiv.id = "aiDiv";
    document.getElementById("start").appendChild(playerDiv);
    document.getElementById("start").appendChild(cdDiv);
    document.getElementById("start").appendChild(aiDiv);

    const cdDiv_rps = document.createElement("div");
    const cdDiv_timer = document.createElement("div");
    document.getElementById("cdDiv").appendChild(cdDiv_rps);
    document.getElementById("cdDiv").appendChild(cdDiv_timer);
    cdDiv_rps.id = "cdDiv_rps";
    cdDiv_timer.id = "cdDiv_timer";
    const cdRPS = document.createElement("p");
    const cdTxt = document.createElement("p");
    cdRPS.id = "cdRPS";
    cdTxt.id = "cdTxt";
    document.getElementById("cdDiv_rps").appendChild(cdRPS);
    document.getElementById("cdDiv_timer").appendChild(cdTxt);

    choice = 2;
    countDown(choice);
}

function Scissors(btnArray) {
    //hide btns
    for (i = 0; i < 3; i++) {
        btnArray[i].style.visibility = "hidden";
    }

    //Create cd timer
    const playerDiv = document.createElement("div");
    const cdDiv = document.createElement("div");
    const aiDiv = document.createElement("div");
    playerDiv.id = "playerDiv";
    cdDiv.id = "cdDiv";
    aiDiv.id = "aiDiv";
    document.getElementById("start").appendChild(playerDiv);
    document.getElementById("start").appendChild(cdDiv);
    document.getElementById("start").appendChild(aiDiv);

    const cdDiv_rps = document.createElement("div");
    const cdDiv_timer = document.createElement("div");
    document.getElementById("cdDiv").appendChild(cdDiv_rps);
    document.getElementById("cdDiv").appendChild(cdDiv_timer);
    cdDiv_rps.id = "cdDiv_rps";
    cdDiv_timer.id = "cdDiv_timer";
    const cdRPS = document.createElement("p");
    const cdTxt = document.createElement("p");
    cdRPS.id = "cdRPS";
    cdTxt.id = "cdTxt";
    document.getElementById("cdDiv_rps").appendChild(cdRPS);
    document.getElementById("cdDiv_timer").appendChild(cdTxt);

    choice = 3;
    countDown(choice);
}

//COUNTDOWN TIMER 3..2..1
function countDown(choice) {
    const rps = [];
    rps.push("Scissors");
    rps.push("Paper");
    rps.push("Rock");

    //cd
    let count = 3;
    const timer = setInterval(() => {

        if (count === 0) {
            clearInterval(timer);
            //  document.getElementById("cdDiv_rps").style.visibility = "hidden";
            //  document.getElementById("cdTxt").style.visibility = "hidden";
            document.getElementById("cdDiv_rps").remove();
            document.getElementById("cdTxt").remove();
            startGame(choice);
            aiPlay();

            return;
        }
        document.getElementById("cdDiv_rps").innerHTML = rps[count - 1];
        document.getElementById("cdTxt").innerHTML = count;
        console.log(count);
        count--;
    }, 1000);
}

//CREATE IMAGE
function startGame(choice) {

    const img_player = document.createElement("img");
    const img_vs = document.createElement("img");

    switch (choice) {
        case 1:
            img_player.src = "img/rock.png";
            console.log("You chose option 1");
            break;
        case 2:
            img_player.src = "img/paper.png";
            console.log("You chose option 2");
            break;
        case 3:
            img_player.src = "img/scissors.png";
            console.log("You chose option 3");
            break;
        default:
            console.log("Invalid choice");
    }

    img_vs.src = "img/vs.png";
    document.getElementById("cdDiv").appendChild(img_vs);



    //PLAYER WINS TXT
    const player1 = document.createElement("div");
    player1.id = "player1";
    const playerTxt = document.createElement("p");
    playerTxt.id = "playerTxt";
    document.getElementById("playerDiv").appendChild(player1);
    document.getElementById("player1").appendChild(playerTxt);
    updatePlayerWins();
    document.getElementById("playerDiv").appendChild(img_player);

    //CHOICE TXT
    const playerChoice = document.createElement("div");
    playerChoice.id = "playerChoice";
    const playerChoiceTxt = document.createElement("p");
    playerChoiceTxt.id = "playerChoiceTxt";
    document.getElementById("playerDiv").appendChild(playerChoice);
    document.getElementById("playerChoice").appendChild(playerChoiceTxt);
    if (choice == 1) {

        document.getElementById("playerChoiceTxt").innerHTML = "Rock";
    }
    else if (choice == 2) {

        document.getElementById("playerChoiceTxt").innerHTML = "Paper";
    }
    else if (choice == 3) {

        document.getElementById("playerChoiceTxt").innerHTML = "Scissors";
    }

    //Play Again Btn
    let playAgainBtn = document.createElement("button");
    playAgainBtn.innerHTML = "Play Again";
    document.getElementById("cdDiv").appendChild(playAgainBtn);
    playAgainBtn.id = 'playAgainBtn';
    document.getElementById("playAgainBtn").addEventListener("click", playAgain);


}


const start = document.getElementById("start");

function aiPlay() {
    const img_ai = document.createElement("img");

    //AI CHOICE TXT
    const ai_choice = document.createElement("div");
    ai_choice.id = "ai_choice";
    const aiChoiceTxt = document.createElement("p");
    aiChoiceTxt.id = "aiChoiceTxt";

    //AI WINS TXT
    const ai1 = document.createElement("div");
    ai1.id = "ai1";
    const aiTxt = document.createElement("p");
    aiTxt.id = "aiTxt";
    document.getElementById("aiDiv").appendChild(ai1);
    document.getElementById("ai1").appendChild(aiTxt);
    updateAIWins();

    //AI RANDOMIZE
    var randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);

    if (randomNum == 1) {
        img_ai.src = "img/rock.png";
        document.getElementById("aiDiv").appendChild(img_ai);
        document.getElementById("aiDiv").appendChild(ai_choice);
        document.getElementById("ai_choice").appendChild(aiChoiceTxt);
        document.getElementById("aiChoiceTxt").innerHTML = "Rock";

        if (choice == 1) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "Tie Game";
        }
        else if (choice == 2) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Win";
            player_wins++;
            updatePlayerWins();

        } else if (choice == 3) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Lose";
            ai_wins++;
            updateAIWins();

        }

    }
    else if (randomNum == 2) {
        img_ai.src = "img/paper.png";
        document.getElementById("aiDiv").appendChild(img_ai);
        document.getElementById("aiDiv").appendChild(ai_choice);
        document.getElementById("ai_choice").appendChild(aiChoiceTxt);
        document.getElementById("aiChoiceTxt").innerHTML = "Paper";
        if (choice == 1) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Lose";
            ai_wins++;
            updateAIWins();

        }
        else if (choice == 2) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "Tie Game";

        } else if (choice == 3) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Win";
            player_wins++;
            updatePlayerWins();

        }
    }
    else if (randomNum == 3) {
        img_ai.src = "img/scissors.png";
        document.getElementById("aiDiv").appendChild(img_ai);
        document.getElementById("aiDiv").appendChild(ai_choice);
        document.getElementById("ai_choice").appendChild(aiChoiceTxt);
        document.getElementById("aiChoiceTxt").innerHTML = "Scissors";

        if (choice == 1) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Win";
            player_wins++;
            updatePlayerWins();
        }

        else if (choice == 2) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "You Lose";
            ai_wins++;
            updateAIWins();
        }

        else if (choice == 3) {
            const endBanner = document.createElement("div");
            endBanner.id = "endBanner";
            const endBannerTxt = document.createElement("p");
            endBannerTxt.id = "endBannerTxt";
            start.parentNode.insertBefore(endBanner, start);
            document.getElementById("endBanner").innerHTML = "Tie Game";
        }
    }

    const endBannerTxt = document.createElement("p");
    endBannerTxt.id = "endBannerTxt";
    start.parentNode.insertBefore(endBanner, start);


}

function updatePlayerWins() {
    document.getElementById("playerTxt").innerHTML = "PLAYER WINS: " + player_wins;
}

function updateAIWins() {
    document.getElementById("aiTxt").innerHTML = "AI WINS: " + ai_wins;
}

function playAgain() {
    destroyEverything();
    playGame();
}

function destroyEverything() {
    document.getElementById("endBanner").remove();
    document.getElementById("rpsBtn").remove();
    document.getElementById("rpsBtn").remove();
    document.getElementById("rpsBtn").remove();
    document.getElementById("playerDiv").remove();
    document.getElementById("cdDiv").remove();
    document.getElementById("aiDiv").remove();
}