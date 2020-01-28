const twofer = (who = "you") => {
  return `Two for me and one for ${who}`;
};

console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"
