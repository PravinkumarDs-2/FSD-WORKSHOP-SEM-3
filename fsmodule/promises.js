const fs = require("fs").promises;
async function writeFile(){
    try {
        await fs.writeFile("promise.txt", "hello students!");
        console.log("file created and data written succesfully.");
    } catch (error) {
        console.log("Error:",error);
    }
}

writeFile();

async function deleteg() {
    try {
         await fs.appendFile("promise.txt", )
    }
}