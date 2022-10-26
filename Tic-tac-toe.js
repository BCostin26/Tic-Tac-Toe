let counter = 0;
let id;
let playerTurn = "X";
let btnIds = ["", "", "", "", "", "", "", "", ""];
let winMods = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function selectButton(id) {
    ++counter;
    document.getElementById(id).innerHTML = playerTurn;
    document.getElementById(id).disabled = true;
    btnIds[id] = playerTurn;
    if (playerTurn == "X") {
        playerTurn = "O";
    } else {
        playerTurn = "X";
    }
    document.getElementById("player").innerHTML = "It`s player '" + playerTurn + "' turn!";
    if (counter > 4) {
        winnerCheck();
    }
}

function winnerCheck() {
    for (let i = 0; i <= 7; ++i) {
        if (btnIds[winMods[i][0]] == "X" && btnIds[winMods[i][1]] == "X" && btnIds[winMods[i][2]] == "X") {
            document.getElementById(winMods[i][0]).style.backgroundColor = "lightgreen";
            document.getElementById(winMods[i][1]).style.backgroundColor = "lightgreen";
            document.getElementById(winMods[i][2]).style.backgroundColor = "lightgreen";
            document.getElementById("player").innerHTML = "Player 'X' is the winner!"
            document.getElementById("player").style.color = "lightgreen";
            endGame();
        } else if (btnIds[winMods[i][0]] == "O" && btnIds[winMods[i][1]] == "O" && btnIds[winMods[i][2]] == "O") {
            document.getElementById(winMods[i][0]).style.backgroundColor = "lightgreen";
            document.getElementById(winMods[i][1]).style.backgroundColor = "lightgreen";
            document.getElementById(winMods[i][2]).style.backgroundColor = "lightgreen";
            document.getElementById("player").innerHTML = "Player 'O' is the winner!"
            document.getElementById("player").style.color = "lightgreen";
            endGame();
        }
    }
    if (counter == 9) {
        endGame();
    }
}

function endGame() {
    for (let i = 0; i <= 8; ++i) {
        document.getElementById(i).disabled = true;
        if (counter == 9) {
            document.getElementById(i).style.backgroundColor = "lightyellow";
            document.getElementById("player").innerHTML = "It`s a tie!";
        }
    }
    let btn = document.createElement("button");
    btn.id = "resetBtn";
    btn.className = "resetBtn";
    btn.innerHTML = "Reset Game!";
    document.getElementById("resetBtn").appendChild(btn);
    btn.onclick = function () {
        window.location.reload();
    }
}
