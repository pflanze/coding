// find()

/**
 *
 *
 *
 *
 */

// OVERVIEW - find()

/**
 *
 *
 */

const myArray = [10, [], {}, "abc", true, 15];

const result = myArray.find(element => {
  console.log(element);
  return typeof element === "string";
});

console.log(result);

/**  the usage of find() method , for example server sends to the client array of
 * of JSON objects then you use map() method to convert this array of JSON objects
 * to the array of JavaScript objects and then I use find() method
 * in order to find specific object in this array.
 *
 */

// PRACTICE

/**
 *
 *
 *
 */

const myArr = [10, [], {}, "abc", true, 15];

// const result2 = myArr.find(element => typeof element === "boolean");
const result2 = myArr.find(element => {
  console.log(element);
  return typeof element === "string"; // if I change "number" to "string"
});

console.log(result2);
// 10, 10 - when is "number"
// [], {}, abc, abc (when change "number" to "string")

// CHALLENGE  1

/**
 * Create a function "findSinglePost" that will have two parameters
 * "postId" and "posts" and will return object with matched "postId".
 * If post isn't found - return "undefined"
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 }
];

const findSinglePost = (postId, posts) =>
  posts.find(post => post.postId === postId);

console.log(findSinglePost(6134, posts)); // {postId: 6134, commentsQuantity: 2}

console.log(findSinglePost(4511, posts)); // undefined
