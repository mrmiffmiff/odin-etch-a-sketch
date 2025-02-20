const canvas = document.querySelector(".canvas");
const canvasStyles = window.getComputedStyle(canvas);
let canvasWidth = parseInt(canvasStyles.getPropertyValue("width"));
let canvasHeight = parseInt(canvasStyles.getPropertyValue("height"));

function generatePseudoGrid(gridSize = 16) {
    const boxWidth = canvasWidth / gridSize;
    const boxHeight = canvasHeight / gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');

            square.style.width = `${boxWidth}px`;
            square.style.height = `${boxHeight}px`;
            square.classList.add("gridSquare");

            square.addEventListener("mouseenter", () => {
                darken(square);
            });

            canvas.appendChild(square);
        }
    }
}

function darken(square) {
    square.classList.add("drawn");
}

function unDarken(square) {
    square.classList.remove("drawn");
}

function clearPseudoGrid() {
    const squares = document.querySelectorAll(".gridSquare");
    squares.forEach((currentValue) => {
        unDarken(currentValue);
        canvas.removeChild(currentValue);
    });
}

generatePseudoGrid();