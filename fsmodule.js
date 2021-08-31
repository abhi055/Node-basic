const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err,val) => {
//     console.log(err,val)
// });

// const a = fs.readFileSync('file.txt')

// console.log(a.toString())



// fs.writeFile("file2.txt","This is data", ()=>{
//     console.log("written to the file")
// })

const b = fs.writeFileSync("file2.txt","This is data3")
console.log(b)
console.log("finish reading file")