const mongoose = require('mongoose')
// mongo地址
const db = require('./config/keys').mongoURI
// 链接
mongoose.connect(db, {
  useNewUrlParser: true
}).then(() => {
  console.log('connect success')
}).catch((err) => console.log(err))

const models ={
  user:{
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    'avatar':{'type':String},
    // 简介或职位简介
    'desc':{'type':String},
    // 职位名
    'title':{'type':String},
    // BOSS 专属字段
    'company':{'type':String},//公司
    'money':{'type':String},//薪酬
  }
}

for(let m in models){
  mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}