const http=require('http');
const PORT=4000;

const server=http.createServer((request,response)=>{
    console.log(("request",request.url));
    console.log("request method",request.method);
    if(request.url==="/greet"&&request.method==="GET"){
        console.log("serve is /greet with get http")
    
    response.writeHead(200, {'content-type': 'application/json'})
    const data={
        message:"hello world"
    }
    response.end(JSON.stringify(data));
}
else{
    response.writeHead(404, {"content-type": 'application/json'})
    response.end(JSON.stringify({
        message:"API ENDPOINT NOT FOUND"
    }))
}

     
})


server.listen(4000,()=>{
    console.log("sever is started at PORT"+ PORT)
})