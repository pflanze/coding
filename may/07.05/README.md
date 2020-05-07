Async Await

```javascript
async function f() {
  return 1;
}
```

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

### await makes JavaScript wait until that promise settles and returns its result.

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

### await literally makes JavaScript wait until the promise settles, and then go on with the result
