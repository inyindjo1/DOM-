const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");

let isXTurn = true;

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "") {
      cell.textContent = isXTurn ? "X" : "O";
      isXTurn = !isXTurn;
    }
  });
});

