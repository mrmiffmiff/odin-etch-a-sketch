const canvas = document.querySelector(".canvas");
const canvasStyles = window.getComputedStyle(canvas);
let canvasWidth = parseInt(canvasStyles.getPropertyValue("width"));
let canvasHeight = parseInt(canvasStyles.getPropertyValue("height"));

let gridSize = 16;

function generatePseudoGrid() {
    const boxWidth = canvasWidth / gridSize;
    const boxHeight = canvasHeight / gridSize;
    console.log(boxWidth);
    console.log(boxHeight);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');

            square.style.width = `${boxWidth}px`;
            square.style.height = `${boxHeight}px`;

            canvas.appendChild(square);
        }
    }
}

generatePseudoGrid();