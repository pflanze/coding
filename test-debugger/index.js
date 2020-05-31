function add(x, y) {
  console.log("i am adding")
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x + y;
  var result = x - y;
  return result;
}

1. machIrgendwas().then(function () {
  return machIrgendwasAnders();
});

Will give back a promise when given promise is resolved the value is what returned from function call machIrgendwasAnders

2. machIrgendwas().then(function () {
  machIrgendwasAnders ();
});

When prmoise is resolved it will just invoke machIrgendwasAnders and will not return anything future resolve for the promise would be undefined.

3. machIrgendwas().then(machIrgendwasAnders());
Its equivalent to above it just invokes machIrgendwasAnders when promise is resolved

4. machIrgendwas().then(machIrgendwasAnders);
Its equivalent to first question where the function is invoked and also return result of machIrgendwasAnders can be accessed by resolving again


document.getElementById("addResult").innerText = "Sum : " + add(4, 2)