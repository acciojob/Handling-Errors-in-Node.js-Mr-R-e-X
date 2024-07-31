const fs = require("fs");
const http = require("http");
function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("File not found");
    } else {
      console.log(data);
    }
  });
}

// TODO: Call printFileContents with the command-line argument
const server = http.createServer((req, res) => {
  printFileContents("output.txt");
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Hello World!");
});
