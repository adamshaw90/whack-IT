let currClownTile;
let currBoyTile;


window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setClown, 1000);
    setInterval(setBoy, 2000)
}


function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

function setClown() {

    if (currClownTile) {
        currClownTile.innerHTML = "";
    }

    let clown = document.createElement("img");
    clown.src = "./images/clown.png";

    
    let num = getRandomTile();
    currClownTile = document.getElementById(num);
    currClownTile.appendChild(clown);
}

function setBoy() {

    if (currBoyTile) {
        currBoyTile.innerHTML = "";
    }

    let boy = document.createElement("img");
    boy.src = "./images/boy.png";

    let num = getRandomTile();
    currBoyTile = document.getElementById(num);
    currBoyTile.appendChild(boy);
}



function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currClownTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currBoyTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}