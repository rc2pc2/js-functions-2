
// ? recupero il wrapper
const gridElement = document.getElementById('grid');

for (let index = 0; index < 64; index++) {
    const actualCell = createElement('div', 'cell');

    actualCell.addEventListener('click', function(){
        actualCell.classList.toggle('selected');
    });

    gridElement.appendChild(createElement('div', 'cell'))
}


/**
 * Functions
 */

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 */
function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}