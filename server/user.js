const express = require('express')
// 加密
const utils = require('utility');
const Router = express.Router()
// 映入工具库
const model = require('./model')
// 创建user模型
const User = model.getModel('user')
const _filter ={"pwd":0,'__v':0}
Router.get('/list',(req,res)=>{
  User.remove({},()=>{})
  User.find({},(err,doc)=>{
    res.json(doc)
  })
})
// 获取信息
Router.get('/info',(req,res)=>{
  const {userid} = req.cookies
  if(!userid){
    return res.json({code:1})
  }
  User.findOne({_id:userid},_filter,function(err,doc){
    if(err){
      return res.json({code:1,msg:'后端出错啦'})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
  })
  
})
// 注册
Router.post('/register', (req, res) => {
  const {user,pwd,type} = req.body
  User.findOne({user},(err,doc)=>{
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }else{
      // 此处用到md5加密
      User.create({user,type,pwd:pwdMd5(pwd)},(e,d)=>{
        if(e){
          return res.json({code:1,msg:'后端出错'})
        }else{
          return res.json({code:0})
        }
      })
    }
  })
})
// 登录
Router.post('/login',(req,res)=>{
  const {user,pwd} = req.body
  User.findOne({user,pwd:pwdMd5(pwd),},_filter,(err,doc)=>{
    if(!doc){
      res.json({code:1,msg:'用户名或密码错误'})
    }else{
      res.cookie('userid', doc._id)
      res.json({code:0,data:doc})
    }
  })
})
// 加强密码
function pwdMd5(pwd){
  const salt = 'ss#$@#pcojsa__@65656-+/';
  return utils.md5(utils.md5(pwd + salt))
}
module.exports = Router