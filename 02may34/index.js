// console.log("hello world");

const fs=require("node:fs");
const path=require("node:path");
const wifi=require("node-wifi");
const os=require("node:os")
const childProcess=require("node:child_process");
const { stringify } = require("node:querystring");
const { json } = require("stream/consumers");
// fs.writeFile(filename,fileData,callbackFn)
const str="Login time(2:30am-11:30am)"
const writeDataToFile=(fileName,dataToWrite)=>{ 
    fs.writeFile(fileName,dataToWrite,(err)=>{
        if(err){
            console.log(err);
            return;
         }
        console.log('file written successfully');
    })
}
// writeDataToFile("user.json",JSON.stringify(users));

const readFile=(fileName)=>{
    const data=fs.readFileSync(fileName,{encoding:"utf-8"})
    //     if(err){
    //         console.log(err);
    //         return null;
    //     }
    //     console.log(data);
     return data

}

// readFile();

const appendFile=()=>{
    fs.appendFile("log.txt","\n"+ str,(err,output)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("appendFile method is done too");
    })

}

// appendFile();


/**
 * File data modification:
 * 1.Read the file 
 * 2. modify the data in nodejs variable 
 * 3. Write the file
 *
 */

const users=[
    {
        name:"tony stark",
        age:"50"
    },
    {
        name:"Aaqib",
        age:"23"
    },
    {
        name:"Farhat",
        age:"27"
    },
]

// writeDataToFile("user.json",JSON.stringify(users))
const fileData=readFile("user.json");
const data=JSON.parse(fileData);
const updatedData=data.map(user=>{
    if(user.name==="Aaqib"){
        return{
            ...user,
            age:24,
        }
    }
    else{
        return user;
    }
})
// console.log(updatedData);

// writeDataToFile("user.json",JSON.stringify(updatedData))


// readFile()


// const deleteFile=(fileName)=>{
//     fs.unlink(fileName,(err)=>{
//         if(err){
//             console.log
//         }
//     })
// }


// delete a file
const deleteFile=(fileName)=>{
    fs.unlink(fileName,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file deleted successfully");
    })
}

// deleteFile("log.txt")

// console.log(__dirname)
// console.log(__filename);

const parse=path.parse("E:\fs14react\backendMod6\audio.mp3");
console.log(parse);

const extName=path.extname("E:\fs14react\backendMod6\audio.mp3");


const joinedPath= path.join("/classes/geekster","fs-12");

// childProcess
// childProcess.exec("calc")

wifi.init({
    iface: null // network interface, choose a random wifi interface if set to null
  });
  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
    } else {
    //   console.log(networks);
      /*
          networks = [
              {
                ssid: '...',
                bssid: '...',
                mac: '...', // equals to bssid (for retrocompatibility)
                channel: <number>,
                frequency: <number>, // in MHz
                signal_level: <number>, // in dB
                quality: <number>, // same as signal level but in %
                security: 'WPA WPA2' // format depending on locale for open networks in Windows
                security_flags: '...' // encryption protocols (format currently depending of the OS)
                mode: '...' // network mode like Infra (format currently depending of the OS)
              },
              ...
          ];
          */
    }
  });

  console.log(os.networkInterfaces());


