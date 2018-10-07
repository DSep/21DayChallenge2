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
Write a function called gridSize() that will tell you the size of your grid in the format width x height. 
Your function should return a string, and in this example, your function should return the string '10 x 10'. 
But you have to make sure that you figure that string out by actually measuring your grid! Your code should 
make sure that it uses your countRows() and countColumns() functions that you've already finished.
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

console.log(gridSize());