#!/usr/bin/env node

// 引入内置模块
const child_process = require("child_process")

// 引入fs
const fs=require("fs")

// 调用 函数
let childprocess = createProcess()

function createProcess(){
    // 创建子进程
    let child = child_process.spawn("node",["./server.js"])

    //打印标准输出流 
    child.stdout.on("data",(data)=>{
        console.log(data.toString())
    })

    // 打印标准错误流
    child.stderr.on("data",(err)=>{
        console.log(err.toString())
    })
    return child;
}

// 监听文件的改变，重新启动服务
fs.watchFile("./server.js",()=>{
    console.log(5555555)
    childprocess.kill()
    childprocess = createProcess()
})

// watcher.on("change",()=>{
//     console.log(5555555)
//     childprocess.kill()
//     childprocess = createProcess()
// })

