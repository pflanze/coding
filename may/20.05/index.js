//callbacks one more time
// let's make hot chocolate

function prepareHotChocolate(callback) {
  // first step
  setTimeout(() => {
    let milk = "boiled";
    // one milk boiled start next step
    callback(milk, callback2);
  }, 2000);
}

function callback(milk, callback2) {
  if (milk == "boiled") {
    let chocolate = "added";
    // one chocolate boiled start next step
    callback2(chocolate, callback3);
  }
}
function callback2(chocolate, callback3) {
  if (chocolate == "added") {
    let marshmallow = "added";
    // one marshmallow boiled start next step
    callback3(marshmallow);
  }
}

function callback3(marshmallow) {
  if (marshmallow == "added") {
    console.log("Cool your drink is ready");
  }
}

// calling the function

prepareHotChocolate(callback);