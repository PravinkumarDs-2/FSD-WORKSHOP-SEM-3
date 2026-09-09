const fs = require('fs');
fs.writeFileSync('sribendu.txt', 'Hello my name is Pravin mishra', 'utf-8');
const read = fs.readFileSync('sribendu.txt','utf-8')
console.log('File is written successfully');
fs.appendFileSync('sribendu.txt', ' and I am learning Node.js', 'utf-8');
data = fs.readFileSync('sribendu.txt', 'utf-8'); 
console.log('3. UPDATE:', data);


// fs.unlinkSync('sribendu.txt');
// console.log('4. DELETE: File deleted successfully');
console.log(read);
if(fs.existsSync('sribendu.txt')){
    console.log('file exist');
}
else{
    console.log('file not')
}