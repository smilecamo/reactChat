const express = require('express')
const mongoose = require('mongoose')
// post请求
const bodyPerser = require('body-parser')
// 使用cookie
var cookieParser = require('cookie-parser')
// mongo地址
const db = require('./config/keys').mongoURI
// 用户路由
const user = require('./routes/api/user')

// 链接
mongoose.connect(db, {
  useNewUrlParser: true
}).then(() => {
  console.log('connect success')
}).catch((err) => console.log(err))
const app = express()
app.use(cookieParser())
app.use('/user', user)
app.get('/',(req,res)=>{
  res.send('success')
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`server is port ${port}`)
})