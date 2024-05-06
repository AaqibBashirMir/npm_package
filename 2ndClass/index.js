// reading files

const fs=require("node:fs");

console.log("A");

fs.readFileSync("simple.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

console.log("C")