const container = document.querySelector(".container");
const resizeGrid = document.getElementById("resizeGrid");

let size = 16;

resizeGrid.addEventListener("click", () => {
  let input = parseInt(prompt("Enter number of squares (max 100):", "16"));

  if (!input) return;

  if (!isFinite(input) || size <= 0 || size > 100) {
    alert("Invalid input!");
    return;
  }

  size = input;

  createGrid(size);
});

function createGrid(squaresPerSide) {
  const gridSize = 960 / squaresPerSide;
  container.innerHTML = "";

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;

    grid.addEventListener("mouseover", (e) => {
      if (!e.target.dataset.hasColor) {
        e.target.style.backgroundColor = getRandomColor(); //#dfd0b8
        e.target.style.border = "none";
        e.target.dataset.hasColor = true;
        e.target.style.opacity = 0.1;
      }

      let currentOpacity = parseFloat(e.target.style.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        e.target.style.opacity = currentOpacity;
      }
    });
    container.appendChild(grid);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

createGrid(size);