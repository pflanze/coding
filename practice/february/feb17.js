//Write a JavaScript program to convert a given number to hours and minutes.
function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

//
var timeSpent = "1:25:58",
  amountPerHour = 100,
  time = timeSpent.split(":").reduce((r, a, i) => r + a * Math.pow(60, -i), 0),
  result = time * amountPerHour;

console.log("time", time);
console.log("amount", result.toFixed(2));
