/*
Looping a Triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writ-
ing .length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

// make a declaration of number of calls and assign it to 7.
let numberOfCalls = 7;
let hashContainer = "";
// create a loop to make seven calls.
for (let i = 1; i <= numberOfCalls; i++) {
  // add the new hashtag each loop.
  hashContainer += "#";
  // print the hashContainer
  console.log(hashContainer);
}
