const fs = require("fs");

let writer = fs
  .createWriteStream('newBigText.txt', { flags: "wx+" });
  .on("error", (err) => {
    console.log("err");
  });

writer.write("Hi this is new file done by Nodejs");