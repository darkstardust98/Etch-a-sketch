document.getElementById("grid-container").innerHTML = createGrid();

function createGrid() {
    const gridSize = 15;
    let grid = "";
    for (let i = 0; i <= gridSize; i++) {
        for (j = 0; j <= gridSize; j++) {
            grid += '<div class="square"></div>';
        }
        grid += '<br>';
    }
    return grid;
}

var elements = document.getElementsByClassName("square");

for (let i = 0; i < elements.length; i++) {
    //Making square black upon hover
    elements[i].addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "black";
    })
    //Making square white again upon hover end
    elements[i].addEventListener("mouseleave", function(event) {
        event.target.style.backgroundColor = "white";
    })
}   

document.getElementById("prompt").addEventListener("click", function() {
        let userInput = prompt("Please enter you prefered size in squares per side: ");
}) 
