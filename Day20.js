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
Lighthouse HQ also wants a report of the safety of your GRID. Write another function called `safetyReport()` which will return your GRID with all of the values replaced by the percentage for how dangerous they are. The percentages for how dangerous a cell is were established in question #18.
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

function allCurrents() {
    let columns = GRID[0].length;
    let rows = GRID.length;
    let currents = [];

    for(let k = 0; k < rows; k++){
        for(let j = 0; j < columns; j++) {
            let cellContent = GRID[k][j] + "";
            if (cellContent === "~"){
                let row = String(k + 1);
                let column = String.fromCharCode(65 + j);
                currents.push(column + "" + row);
            }
        }
    }
    return currents;
}

function allRocks() {
    let columns = GRID[0].length;
    let rows = GRID.length;
    let rocks = [];

    for(let k = 0; k < rows; k++){
        for(let j = 0; j < columns; j++) {
            let cellContent = GRID[k][j] + "";
            if (cellContent === "^"){
                let row = String(k + 1);
                let column = String.fromCharCode(65 + j);
                rocks.push(column + "" + row);
            }
        }
    }
    return rocks;
}

function allShips() {
    let columns = GRID[0].length;
    let rows = GRID.length;
    let ships = [];

    for(let k = 0; k < rows; k++){
        for(let j = 0; j < columns; j++) {
            let cellContent = GRID[k][j] + "";
            if (cellContent === "v"){
                let row = String(k + 1);
                let column = String.fromCharCode(65 + j);
                ships.push(column + "" + row);
            }
        }
    }
    return ships;
}

function firstRock() {
  let rocks = allRocks();
  let firstRock = "";
  if (rocks.length > 0) {
    firstRock = rocks[0];
  }
  return firstRock;
}


function firstCurrent() {
  let currents = allCurrents();
  let firstCur = "";
  if (currents.length > 0) {
    firstCur = currents[0];
  }
  return firstCur;
}

function shipReport() {
  let ships = allShips();
  let leftMost, rightMost = "";
  leftMost = rightMost = ships[0];
  ships.forEach( function(ship) {
    if (convertColumn(ship) < convertColumn(leftMost)) {
      leftMost = ship;
    }
    if (convertColumn(ship) > convertColumn(rightMost)) {
      rightMost = ship;
    }
  });
  return [leftMost, rightMost];
}


function howDangerous(str) {
  let col = convertColumn(str);
  let row = convertRow(str);
  let cellContents = GRID[row][col];
  if (cellContents === "^") {
    return 100;
  } else if (cellContents === "~") {
    return 50;
  } else {
    return 0;
  }
}

function percentageReport() {
  let rockPerc = (allRocks().length / totalCells() * 100).toFixed(2); 
  let currPerc = (allCurrents().length / totalCells() * 100).toFixed(2);  
  return [rockPerc, currPerc];
}


function safetyReport() {
  let dangerPerc = { "^": 100.00, "~": 50.00, "": 0.00, "v": 0.00 }
  for (let i = 0; i < countRows(); i++) {
    for (let j = 0; j < countColumns(); j++) {
      GRID[i][j] = dangerPerc[GRID[i][j]];
    }
  }
  return GRID;
}


console.log();