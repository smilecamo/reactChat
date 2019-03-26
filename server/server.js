const express = require('express')
// post请求
const bodyPerser = require('body-parser')
// 使用cookie
var cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyPerser.json())
app.use('/user', userRouter)

const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`server is port ${port}`)
})