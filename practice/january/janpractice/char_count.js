// exercise 1
// count ocurences
function char_count(str, letter) {
  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("Mother only noob", "o"));
