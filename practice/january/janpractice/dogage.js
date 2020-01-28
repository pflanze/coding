/*Create a function which calculates how old a dog is in doggie years. 
The function should accept one argument that is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!” */
/* 
const myDogAge = (age) => {
  //The first two human years of a dog's life count as 10.5 dog years each.
  let earlyYears = 2;
  earlyYears *= 10.5;
  // To account for calculation of later years
  laterYears = myAge - 2;
  // to calculate the number of dog years accounted for by your later years.
  laterYears *= 4;
  myAgeInDogYears = earlyYears + laterYears;
  myName = "Ernest";
  // Convert string to lowercase
  myName.toLowerCase();
  // statement that displays your name and age in dog years.
  console.log(
    `My name is ${myName}. I am ${myAgeInDogYears} old in dog years.`
  );
};
 */

const dogAge = age => {
  console.log(`Your doggo is ${age * 7} years old in dog years!`);
};
dogAge(2);
