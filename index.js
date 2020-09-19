document.body.setAttribute('style', 'margin: 0;');

let container = document.createElement("div");
document.body.appendChild(container);

function createGrid(squareNumber) {
    container.setAttribute('style', `width: 600px; height: 600px; margin: 100px auto 0; border: black 10px solid; display: grid; grid-template-rows: repeat(${squareNumber}, 1fr); grid-template-columns: repeat(${squareNumber}, 1fr);`);

    for (i=1; i<= squareNumber*squareNumber; i++) {
        let newSquareDiv = document.createElement('div');
        newSquareDiv.classList.add('colorChange');
        container.appendChild(newSquareDiv);
    }

    let colorChange = document.querySelectorAll('.colorChange');
    colorChange.forEach( (child) => {
        child.addEventListener('mouseenter', () => {
            let red = Math.ceil(Math.random()*100),
                green = Math.ceil(Math.random()*100),
                blue = Math.ceil(Math.random()*100);
            child.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
        });
    });
}


createGrid(5);

let button = document.querySelector('.button');
button.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let pencilSize = (prompt('Choose a number of squares between 2 and 64:'));
    if (pencilSize>64 || pencilSize<2) return;
    createGrid(pencilSize);
})
