const express = require('express')
const mongoose = require('mongoose')
const bodyPerser = require('body-parser')
const db = require('./config/keys').mongoURI
const user = require('./routes/api/user')

// 链接
// mongoose.connect(db, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('connect success')
// }).catch((err) => console.log(err))
const app = express()

app.use('/data', user)
const port = process.env.PORT || 5000
app.listen(port,()=>{
  console.log(`server is port ${port}`)
})