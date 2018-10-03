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
Write a function called countRows() which will tell us the number of rows in our GRID. Remember that other lighthouse
operators are going to be using this function, so it has to be able to work on a GRID of any size. It would be easy
to write a function that just did return 10; but that wouldn't help operators with bigger or smaller areas!

 */

function countColumns() {
  return GRID[0].length;
}

console.log(countColumns());