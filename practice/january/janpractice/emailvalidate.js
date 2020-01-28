/*Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
The string must contain an “@” character.
The string must contain a “.” character.
The “@” must have at least one character in front of it.
e.g. “john@example.com” is valid while “@example.com” is invalid.
The “.” and the “@” must be in the appropriate places.
e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid. 

*/

const email = str => {
  let at = str.indexOf("@");
  let dot = str.lastIndexOf(".");
  if (at < 0) {
    return false;
  }
  if (at < dot) {
    return true;
  }
  return false;
};
console.log(email("tom.smith@gmail.com"));
