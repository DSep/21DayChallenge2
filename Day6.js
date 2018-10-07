const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
];

/*
Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and
returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")
*/

function countColumns() {
    return GRID[0].length;
}

function countRows() {
    return GRID.length;
}

function gridSize() {
    return countColumns() + " x " + countRows();
}

function totalCells() {
    return countColumns() * countRows();
}

function convertColumn(str) {
    return str.charCodeAt(0) - 65;
}

function convertRow(str) {
    return parseInt(str[1], 10) - 1;
}

function lightCell(str) {
    let column = convertColumn(str);
    let row  = convertRow(str);
    let contents = GRID[row][column];
    return contents;
}

console.log(lightCell('B4'));