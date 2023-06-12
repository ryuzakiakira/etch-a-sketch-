// create a grid of 16x16 square divs

function createDiv() {
    const grid = document.querySelector('.grid')
    for (let i = 0; i <= 255; i++) {
        let div = document.createElement('div')
        grid.appendChild(div)
    };
}

createDiv()