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
Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "v", "", "", "", "", "", "~", "", ""])
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
    let ans =  str.charCodeAt(0) - 65;
    if (ans >= countColumns() || ans < 0) return false;
    return ans;
}

function convertRow(str) {
  let ans;
  if (str.length == 3) {
    ans =  parseInt(str[1] + str[2], 10) - 1;
  } else if (str.length == 2){
    ans = parseInt(str[1], 10) - 1;
  }
  if (ans >= countRows() || ans < 0) return false;
  return ans;
}

function lightCell(str) {
  if (str.length > 3 || str.length < 2) return false;
  let column = convertColumn(str);
  let row  = convertRow(str);
  if (column === false || row === false) return false;
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

function lightColumn(col) {
  let column = convertColumn(col);
  let colContents = [];
  let numCols = countColumns();
  for (var i = 0; i < 10; i++) {
    colContents.push(GRID[i][column]);
  }
  return colContents;
}

console.log();