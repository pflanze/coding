/* A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for
 a lifetime supply of your favorite snack. 
 The function should accept two arguments: age and amount per day. 
 The function should calculate the amount that will be consumed for the rest of your life 
 given a constant max age. 
 Bonus Accept floating point values for amount per day and round the result.
i.e.
calcSupply(25, 2) 
➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.” */

function lifeTimeSupply(maxAge, numSnacks) {
  console.log(
    `You will need ${Math.round(
      numSnacks * 365 * maxAge
    )} bars of chocolate (${numSnacks} a day) to last you till the age of ${maxAge}.`
  );
}
lifeTimeSupply(100, 1.7);
