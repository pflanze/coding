/*XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
XO(“ooxx”) ➞ true
XO(“xooxx”) ➞ false
XO(“ooxXm”) ➞ true (case insensitive)
XO(“zpzpzpp”) ➞ true (returns true if no x and o)
XO(“zzoo”) ➞ false 
*/

const xo = str => {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    let charAt = str.charAt(i);
    if (charAt === "x") x++;
    if (charAt === "o") o++;
  }
  return x === o;
};
console.log(xo("oxoxoxox"));
