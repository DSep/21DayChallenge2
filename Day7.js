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
Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a
false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)
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

function isRock(str) {
    return lightCell(str) === "^";
}

console.log(isRock('D1'));