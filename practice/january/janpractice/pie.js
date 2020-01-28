/*Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:
equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
equalSlices(8, 3, 2) ➞ true
equalSlices(8, 3, 3) ➞ false
equalSlices(24, 12, 2) ➞ true */

const pie = (pieSlices, numPeople, slicePerPerson) => {
  return numPeople * slicePerPerson < pieSlices;
};

console.log(pie(8, 3, 2));
