var board = document.getElementById("game-board");
var restartButton = document.getElementById("restart");
var currentPlayer = "X";
var cells = [];
function createBoard() {
    board.innerHTML = "";
    cells = [];
    var _loop_1 = function (i) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", function () { return makeMove(cell); }, { once: true });
        board.appendChild(cell);
        cells.push(cell);
    };
    for (var i = 0; i < 9; i++) {
        _loop_1(i);
    }
}
function makeMove(cell) {
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
        setTimeout(function () { return alert("Jogador ".concat(currentPlayer, " venceu!")); }, 100);
    }
    else if (cells.every(function (cell) { return cell.textContent !== ""; })) {
        setTimeout(function () { return alert("Empate!"); }, 100);
    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function checkWin(player) {
    var wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];
    return wins.some(function (combo) {
        return combo.every(function (index) { return cells[index].textContent === player; });
    });
}
restartButton.addEventListener("click", function () {
    currentPlayer = "X";
    createBoard();
});
// Inicia o jogo ao carregar
createBoard();
