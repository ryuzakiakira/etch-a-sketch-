// create a grid of 16x16 square divs

const grid = document.querySelector('#grid')

function createDiv(sizeOfGrid = 36) {
    let girdSize = sizeOfGrid * sizeOfGrid
    for (let i = 1; i <= girdSize; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', `div${i}`);
        grid.appendChild(div);
    };
    let gridChange = document.querySelector('#grid');
    gridChange.style.cssText = `display: grid; grid-template-columns: repeat(${sizeOfGrid}, 1fr); grid-template-rows: repeat(${sizeOfGrid}, 1fr); border: solid 1px; box-shadow: 15px 15px 15px;`
}

createDiv()

// change the background color of the divs when hovering over them

function changeColor(e) {
    let div = document.getElementById(`${e.target.id}`);
    console.log(div.id)
    if (div.id !== 'grid') {
        div.style.cssText = 'background-color: black;'
    }
}

grid.addEventListener('mouseover', function(event){
    changeColor(event);
})

// reset the grid

function reset() {
    let divAll = document.querySelectorAll('#grid > div');
    divAll.forEach(div => grid.removeChild(div));
    createDiv()
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset)

// change grid size according to user input

function girdSize() {
    let sizeOfGrid = prompt('Please enter the size of the drawing Area. (Should not exceed 100)', '');
    if (sizeOfGrid > 100) {
        alert("Grid Size too big")
    } else {
        reset()
        createDiv(Number(sizeOfGrid));
    };
}

const gridButton = document.getElementById('changeGrid');
gridButton.addEventListener('click', girdSize);