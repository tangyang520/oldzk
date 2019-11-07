// 引入 http 模块
const http = require("http")

const fs=require("fs")

// 启动服务
const server = http.createServer((req,res)=>{
    // 定义接口
    if(req.url==="/json"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({code:1,arr:[1,2,3,4,5,6]}))
    }else if(req.url==="/txt"){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("text1111")
    }else if(req.url==="/jpg"){
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        let imgBuf=fs.readFileSync("./1.jpg")
        
        res.end(imgBuf)
    }else{
        res.end("ok")
    }
})

// 监听端口
server.listen( process.env.PORT || 3000,()=>{
    console.log(process.env.PORT)
    console.log("服务启动成功")
})