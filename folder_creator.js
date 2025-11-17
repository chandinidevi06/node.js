var fs = require("fs");
var path = require("path");

var myfolder = path.join(__dirname, "myData");

if (!fs.existsSync(myfolder)) {
    fs.mkdirSync(myfolder);
    console.log("Created the folder successfully");
} else {
    console.log("Folder already exists");
}

