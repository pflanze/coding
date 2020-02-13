// Error handling, "try..catch"
// try (...) and catch (e)
console.log("Hi");

let userAge = 25;
if (userAge == 25) {
  console.log("something else");
}
console.log("Hi");

// if only this if{} it breaks
let userName = "";
try {
  console.log("Hi this is trying phase");
  // cool();
  if (userName == "") throw "Sorry something went wrong";
  console.log("2nd phase");
} catch (err) {
  console.log("this error is" + err);
}

// try
// catch finds the error and handle it
