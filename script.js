document.getElementById("grid-container").innerHTML = createGrid();

function createGrid() {
    const gridSize = 15;
    let grid = "";
    for (i = 0; i <= gridSize; i++) {
        for (j = 0; j <= gridSize; j++) {
            grid += '<div class="square"></div>';
        }
        grid += '<br>';
    }
    return grid;
}


// console.log("test");