const http = require("http");
const fs = require("fs");
const { log } = require("console");
const path=require("path")
const PORT = 4000;
const DATA_PATH=path.join("data","product.json");
console.log(DATA_PATH);

// function handleServer(request, response) {
//     if (request.url === "/product" && request.method === "GET") {
//         try {
//             const PATH = "product.json"

//             const data = JSON.parse(fs.readFileSync(PATH, { encoding: 'utf-8' }))

//             response.writeHead(200, { "content-type": "application/json" });
//             response.end(JSON.stringify(data))
//         }
//         catch (err) {
//             response.writeHead(500, { "content-type": "application/json" });
//             response.end(JSON.stringify({
//                 message: "internal server happened"
//             }))
//         }
//         response.end("done")

//     }


// }

// const server = http.createServer(handleServer)

server.listen(PORT,()=>{
    console.log("server started at"+PORT);
})