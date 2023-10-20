const express = require('express')
require('dotenv').config()
const server=express()
const cors=require('cors')
const router=require('./Routers/route')
server.use(cors())
server.use(express.json())
require('./connection/db')
server.use(router)
const port=3003 || process.env.port

server.listen(port,()=>{
    console.log(`server is running ${port} in this port`)
})