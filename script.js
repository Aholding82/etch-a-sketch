const container = document.querySelector('#container');
const body = document.querySelector('body');
var imax= 10;


const grid = document.createElement('div')
grid.setAttribute('id','grid');
gridSetup(imax);
container.appendChild(grid);
var squares = document.querySelectorAll('#square');

var button = document.createElement('button');
button.setAttribute('id','reset');
button.addEventListener('click', resetButton);
button.textContent = 'RESET';
container.appendChild(button);

mouseSetup();

function resetButton () {
    grid.replaceChildren();
    imax = window.prompt('Please enter the grid element number');
    console.log(imax);
    if (imax > 100) {
        return alert('Please enter a value below 100')
    }
    gridSetup(imax);
    mouseSetup();
}

function gridSetup (imax) {
    for (var i = 0; i < imax; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (var j = 0; j < imax; j++) {
            var square = document.createElement('div');
            square.setAttribute('id','square');
            square.textContent = '';
            console.log('change')
            row.appendChild(square);
        }
    }
}


function mouseSetup () {
    var squares = document.querySelectorAll('#square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', m_over);
        square.addEventListener('mouseout', m_out);
        square.addEventListener('mousedown', clickUpdate);
    })
}


function m_over() {
    this.style.backgroundColor = 'cyan';
}

function m_out() {
    this.style.backgroundColor = 'white';
}

function clickUpdate() {
    this.removeEventListener('mouseover', m_over);
    this.removeEventListener('mouseout', m_out);
    this.style.backgroundColor = 'black';
}
