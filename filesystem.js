var path=require("path")
console.log("dir name",path.dirname(__filename));
console.log("file name",path.basename(__filename));
console.log("file ext name",path.extname(__filename));