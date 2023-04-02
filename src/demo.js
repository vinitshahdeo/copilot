// function to design tic tac toe board
function designBoard() {
    var board = document.getElementById("board");
    var boardDesign = "";
    for (var i = 0; i < 9; i++) {
        boardDesign += "<div class='box' id='box" + i + "' onclick='playGame(this.id)'></div>";
    }
    board.innerHTML = boardDesign;
}

// function to play the game
function playGame(boxId) {
    var box = document.getElementById(boxId);
    if (box.innerHTML == "") {
        if (player == 1) {
            box.innerHTML = "X";
            player = 2;
        } else {
            box.innerHTML = "O";
            player = 1;
        }
    }
    checkWinner();
}

// function to check the winner
function checkWinner() {
    var box0 = document.getElementById("box0").innerHTML;
    var box1 = document.getElementById("box1").innerHTML;
    var box2 = document.getElementById("box2").innerHTML;
    var box3 = document.getElementById("box3").innerHTML;
    var box4 = document.getElementById("box4").innerHTML;
    var box5 = document.getElementById("box5").innerHTML;
    var box6 = document.getElementById("box6").innerHTML;
    var box7 = document.getElementById("box7").innerHTML;
    var box8 = document.getElementById("box8").innerHTML;

    if (box0 != "" && box0 == box1 && box1 == box2) {
        alert("Player " + box0 + " has won the game!");
    }
    if (box3 != "" && box3 == box4 && box4 == box5) {
        alert("Player " + box3 + " has won the game!");
    }
    if (box6 != "" && box6 == box7 && box7 == box8) {
        alert("Player " + box6 + " has won the game!");
    }
    if (box0 != "" && box0 == box3 && box3 == box6) {
        alert("Player " + box0 + " has won the game!");
    }
    if (box1 != "" && box1 == box4 && box4 == box7) {
        alert("Player " + box1 + " has won the game!");
    }
    if (box2 != "" && box2 == box5 && box5 == box8) {
        alert("Player " + box2 + " has won the game!");
    }
    if (box0 != "" && box0 == box4 && box4 == box8) {
        alert("Player " + box0 + " has won the game!");
    }
    if (box2 != "" && box2 == box4 && box4 == box6) {
        alert("Player " + box2 + " has won the game!");
    }
}
