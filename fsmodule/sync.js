const fs= require('fs');
fs.writeFileSync('secastudent.txt', 'this is experiment no 2','utf8');
console.log('file is written succesfully');
const data=fs.readFileSync("secastudent.txt",'utf-8');
console.log('file content is given as:',data);