const board = document.getElementById("game-board") as HTMLDivElement;
const restartButton = document.getElementById("restart") as HTMLButtonElement;

let currentPlayer = "X";
let cells: HTMLDivElement[] = [];

function createBoard() {
  board.innerHTML = "";
  cells = [];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => makeMove(cell), { once: true });
    board.appendChild(cell);
    cells.push(cell);
  }
}

function makeMove(cell: HTMLDivElement) {
  cell.textContent = currentPlayer;
  if (checkWin(currentPlayer)) {
    setTimeout(() => alert(`Jogador ${currentPlayer} venceu!`), 100);
  } else if (cells.every(cell => cell.textContent !== "")) {
    setTimeout(() => alert("Empate!"), 100);
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin(player: string): boolean {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6]             // diagonais
  ];

  return wins.some(combo =>
    combo.every(index => cells[index].textContent === player)
  );
}

restartButton.addEventListener("click", () => {
  currentPlayer = "X";
  createBoard();
});

// Inicia o jogo ao carregar
createBoard();
