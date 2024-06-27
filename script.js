// document.getElementById("prompt").addEventListener("click", function() {
//     let userInput = prompt("Please enter you prefered size in squares per side: ");
//     document.getElementById("grid-container").innerHTML = createGrid(userInput);
// })


// function createGrid() {
//     let gridSize = 15;
//     let grid = "";
//     for (let i = 0; i <= gridSize; i++) {
//         for (j = 0; j <= gridSize; j++) {
//             grid += '<div class="square"></div>';
//         }
//         grid += '<br>';
//     }
//     return grid;
// }

// var elements = document.getElementsByClassName("square");

// for (let i = 0; i < elements.length; i++) {
//     //Making square black upon hover
//     elements[i].addEventListener("mouseenter", function(event) {
//         event.target.style.backgroundColor = "black";
//     })
//     //Making square white again upon hover end
//     elements[i].addEventListener("mouseleave", function(event) {
//         event.target.style.backgroundColor = "white";
//     })
// }   

document.getElementById("prompt").addEventListener("click", function() {
    let userInput = prompt("Please enter your preferred size in squares per side: ");
    document.getElementById("grid-container").innerHTML = createGrid(userInput);
    addEventListeners();
})

function createGrid(gridSize) {
    let grid = "";
    for (let i = 0; i <= gridSize; i++) {
        for (j = 0; j <= gridSize; j++) {
            grid += '<div class="square"></div>';
        }
        grid += '<br>';
    }
    return grid;
}

// Call this function after the grid is created
function addEventListeners() {
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
}

// Initial grid creation
document.getElementById("grid-container").innerHTML = createGrid(15);
addEventListeners();
