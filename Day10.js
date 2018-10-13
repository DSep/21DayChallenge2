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
Write a function called lightRow().
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

function isCurrent(str) {
    return lightCell(str) === "~";
}

function isShip(str) {
    return lightCell(str) === "v";
}

function lightRow(row) {
  row--;
  let rowContents = GRID[row];
  return rowContents;
}

console.log();