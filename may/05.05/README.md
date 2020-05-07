### Promises in JavaScript

#### A Promise object represents a value that may not be available yet.

### What is a Promise

A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

#### The deffered object

the Promise object does not work alone. It works through what is called the deffered object. Remember that the Promise object represents a value. the deferred object represents an action. In fact, it is thanks to this action that the value of the Promise object will be available.

Two actions can be performed by the deferred object are :

He resolves the promise. In which case, it provides the Promise object with one and only one value. In this case, it calls the function resolve().

He rejects the promise. In this case, it provides the reason for the rejection. It calls for function reject().

A promise can only be fulfilled by one and only one action. It cannot be resolved and then rejected or resolved twice!

#### How Promises Work

A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

### Fulfilled: onFulfilled() will be called (e.g., resolve() was called)

### Rejected: onRejected() will be called (e.g., reject() was called)

### Pending: not yet fulfilled or rejected

A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.

The ES6 promise constructor takes a function. That function takes two parameters, resolve(), and reject().

#### Important Promise Rules

A standard for promises was defined by the Promises/A+ specification community. There are many implementations which conform to the standard, including the JavaScript standard ECMAScript promises.

Promises following the spec must follow a specific set of rules:
A promise or “thenable” is an object that supplies a standard-compliant .then() method.

A pending promise may transition into a fulfilled or rejected state.
A fulfilled or rejected promise is settled, and must not transition into any other state.

Once a promise is settled, it must have a value (which may be undefined). That value must not change.

Change in this context refers to identity (===) comparison. An object may be used as the fulfilled value, and object properties may mutate.
Every promise must supply a .then() method

```javascript
//js promise
let p = new Promise(function (resolve, reject) { ... } );

```

```javascript
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

p.then((message) => {
  console.log("This is in then " + message)
}).catch((message =>{
  console.log('This is in the catch' + message)
});
```

Promise is an object that allows one piece of code that waits for an asynchronous execution result (I call it Promise client) to communicate with the other piece of code that produces this result (I call it Promise provider).

The Promise provider creates the Promise object, and Promise client can “subscribe” to this result using code like this:

promise.then(resultCallback).catch(rejectCallback)
The line above is non-blocking; it returns control immediately and execution continues on the next line of code. When a Promise provider realizes that it has a result (for example an XMLHttpRequest is complete), it performs special actions that causes Promise to call Promise client’s resultCallback with result data. In a case where the Promise provider detects that something went wrong (for example an XMLHttpRequest has failed), it calls the rejectCallback with error data.

The result data passed to the resultCallback can in turn be a Promise, which means that you can create chains of the .then().catch() calls:

```javascript
promise.then(result1Callback).then(result2Callback).catch(reject1Callback);
t.then(result3Callback).catch(reject2Callback);
```

### Compare Callback with Promise

the point of using promise is not to use callbacks

### Callback example

```javascript
function watchMovieCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingMovie = false;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingMovie) {
    errorCallback({
      name: "User Watching Movie",
      message: "WebDevSimplified < Movie",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchMovieCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
```

### Promise example

```javascript

function watchMoviePromise() {
  let userLeft = false
  let userWatchingMovie = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      })
    } else if (userWatchingMovie) {
      reject({
        name: 'User Watching Movie',
        message: ' < Movie'
      })
    } else {
      resolve('Subscribe')
    }
  })
}
}

watchMoviePromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})

const recordMovieOne = new Promise((resolve, reject) => {
  resolve('Movie 1 Watched')
})


```

#### Promises are made immediately but they do not resolve until they are ready.

let promise = new Promise(function(resolve, reject) {
setTimeout(function() {
resolve('hello world');
}, );
});

promise.then(function(data) {
console.log(data);
});
