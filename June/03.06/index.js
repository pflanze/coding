const fs = require("fs");

// write listens for an error 
let writer = fs
  .createWriteStream('newBigText.txt', { flags: "wx+" });
  // event listener is .on
  .on("error", (err) => {
    console.log("err");
  })
  .on('open', function (fileData) {
    console.log("This is open");
    console.log(`file data : ${fileData}`);
  });

writer.write("Hi this is new file done by Nodejs");

writer.write(("Hi this is new file done by Nodejs"))
let newWriter = fs.createWriteStream("newText.txt", { flags: "w" });
newWriter.on("pipe", () => {
  console.log("cool something is piped in");
});

let reader = fs.createReadStream("newBigTest.txt").pipe(newWriter);