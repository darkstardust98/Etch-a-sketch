document.getElementById("grid-container").innerHTML(
    function createGrid() {
        const gridSize = 15
        for (i = 0, i <= gridSize, i++) {
            for (j = 0, j <= gridSize, j++) {
                var newDiv = document.createElement("div");
                newDiv.id = "square";
                document.body.appendChild(newDiv);
            }
        }
    }
)