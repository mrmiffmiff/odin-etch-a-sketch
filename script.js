const canvas = document.querySelector(".canvas");
const canvasStyles = window.getComputedStyle(canvas);
let canvasWidth = parseInt(canvasStyles.getPropertyValue("width"));
let canvasHeight = parseInt(canvasStyles.getPropertyValue("height"));

let gridSize = 16;

function generatePseudoGrid(gridSize) {
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

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    clearPseudoGrid();
    generatePseudoGrid(gridSize);
})

const resizeButton = document.querySelector(".resizeButton");
resizeButton.addEventListener("click", () => {
    do {
        gridSize = prompt("How many squares should be in each row and column? Between 1 and 100", 16);
    } while (gridSize < 1 || gridSize > 100);
    clearPseudoGrid();
    generatePseudoGrid(gridSize);
})

generatePseudoGrid(gridSize);

//may return to this someday for gradient color change and for other colors but for now I'm satisfied