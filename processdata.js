var fs = require("fs").promises; 
async function processData() {
    try {
        await fs.writeFile("example.txt", "hello i am the text file");
        var myData = await fs.readFile("example.txt", "utf-8");
        var updatedFile = myData.toUpperCase();
        await fs.writeFile("example.txt", updatedFile);
        var result = await fs.readFile("example.txt", "utf-8");
        console.log(result);
    } catch (err) {
        console.error("Error");
    }
}
processData();




