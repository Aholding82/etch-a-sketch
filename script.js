// Designating and setting up the containeers for the document
// 3 containers: container - buttons
//                         - grid
//
// buttons and grid are children of container
const container = document.querySelector('#container');
const body = document.querySelector('body');
const buttons = document.createElement('div')
buttons.classList.add('buttons')
container.appendChild(buttons)

var imax= 10;

// Creating  the grid and appending it to the container
const grid = document.createElement('div')
grid.setAttribute('id','grid');
gridSetup(imax);
container.appendChild(grid);

var squares = document.querySelectorAll('#square');

// Reset button setup
var reset = document.createElement('button');
reset.setAttribute('id','reset');
reset.addEventListener('click', resetButton);
reset.textContent = 'RESET';
buttons.appendChild(reset);

// Size change button
var dimension = document.createElement('button');
dimension.setAttribute('id', 'dimensions');
dimension.textContent = 'SIZE'
dimension.addEventListener('click', dimensionChange);
buttons.appendChild(dimension);

mouseSetup();

//function that varies the value of imax from a given user input
function dimensionChange () {
    imax = window.prompt('Please enter the grid element number');
    resetButton();
}

//function that removes all children appended to the grid container and then creates
// a new set of white background squares. Resets the grid space
function resetButton () {
    grid.replaceChildren();
    console.log(imax);
    if (imax > 100) {
        return alert('Please enter a value below 100')
    }
    gridSetup(imax);
    mouseSetup();
}

// grid setup, takes the imax dimension then sets up the grid by looping through a row and 
// creating an equal number of squares for that row, then moving onto the next
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

// sets up the mouseover and click functionality
function mouseSetup () {
    var squares = document.querySelectorAll('#square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', m_over);
        square.addEventListener('mouseout', m_out);
        square.addEventListener('mousedown', clickUpdate);
    })
}

// function for the mouseover interaction
function m_over() {
    this.style.backgroundColor = 'cyan';
}
 
// function for the mouseout interaction
function m_out() {
    this.style.backgroundColor = 'white';
}

//function for the click interaction. It removes the mouseover and mouseout functions from a
// a given square once it is clicked
function clickUpdate() {
    this.removeEventListener('mouseover', m_over);
    this.removeEventListener('mouseout', m_out);
    this.style.backgroundColor = 'black';
}
