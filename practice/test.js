let scores = "75, 70, 85, 90, 100";
let scoresArr = scores.split(",");
console.log(scoresArr);
let scoresSum = 0;
for (let i = 0; i < scoresArr.length; i++) {
  scoresSum += parseInt(scoresArr[i]);
}
console.log(scoresSum);
for (let i = 0; i < scoresArr.length; i++) {
  scoresArr[i] += "score";
}
console.log(scoresArr);
/**i++ 
i = i+1 // this one i can use 
i+=1 // this is global better to be used */
