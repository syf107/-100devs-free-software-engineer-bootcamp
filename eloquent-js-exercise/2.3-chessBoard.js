/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using new-
line characters to separate lines. At each position of the grid there is either a
space or a # character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding
size = 8 and change the program so that it works for any size , outputting a
grid of the given width and height.
*/

// make a board 8 x 8 first
let size = 8;

for (let row = 0; row < size; row++) {
  let hashRow = "";

  // if it's in odd column and even row, then print #.
  // if it's in even column and odd row, then print #.
  for (let column = 0; column < size; column++) {
    if (
      (column % 2 == 1 && row % 2 == 0) ||
      (column % 2 == 0 && row % 2 == 1)
    ) {
      hashRow += "#";

      // other than that, add the space.
    } else {
      hashRow += " ";
    }
  }
  console.log(hashRow);
}
