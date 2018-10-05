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
Write a function called countColumns() that will tell us the number of columns in our GRID. 
Again, remember that this has to work for all the lighthouse operators out there, no matter 
what size their area is. Also, your code will still be able to see the GRID variable, and you 
won't need to pass it as an argument to the function.
*/

function countColumns() {
  return GRID[0].length;
}

console.log(countColumns());