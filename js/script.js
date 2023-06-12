// create a grid of 16x16 square divs

function createDiv() {
    const grid = document.querySelector('.grid')
    for (let i = 1; i <= 256; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', `div${i}`);
        grid.appendChild(div);
    };
}

createDiv()

// change the background color of the divs when hovering over them

function changeColor(e) {
    let div = document.getElementById(`${e.target.id}`);
    div.style.cssText = 'background-color: black;'
}

window.addEventListener('mouseover', function(event){
    changeColor(event);
})
