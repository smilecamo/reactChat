import axios from 'axios'
import {getRedirectPath} from '../util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
  redirectTo:'', 
  isAuth:false,
  msg:'',
  user:'',
  pwd:'',
  type:''
}
export function user(state = initState, action) {
  switch(action.type){
    // 完善信息成功
    case AUTH_SUCCESS:
      return {...state,msg:'',redirectTo: getRedirectPath(action.payload),...action.payload}
    // getInfo
    case LOAD_DATA:
      return {...state,...action.payload}
    // 注册失败
      case ERROR_MSG:
      return {...state,isAuth:false,msg:action.msg}
    default:
      return state
  }
}
// 报错信息
function errMsg(msg){
  return {
    msg,
    type: ERROR_MSG
  }
}
// 验证
function authSuccess(data){
  return {
    type: AUTH_SUCCESS,
    payload:data
  }
}
// 完善信息
export function updata(data){
    return dispatch=>{
    axios.post('/user/updata',data).then(res=>{
      if(res.status === 200&&res.data.code===0){
        // 返回后端数据
        dispatch(authSuccess(res.data.data))
        console.log(res.data.data);
      }else{
        dispatch(errMsg(res.data.msg))
      }
    })
  }
}
// 获取用户信息并存储
export function userinfo(data){
  return {
    type: LOAD_DATA,
    payload:data
  }
}
// 登录
export function login({user,pwd}){
  if(!user||!pwd){
    return errMsg('用户名或密码不能为空')
  }
  return dispatch=>{
    axios.post('/user/login',{user,pwd}).then(res=>{
      if(res.status === 200&&res.data.code===0){
        // 返回后端数据
        dispatch(authSuccess(res.data.data))
      }else{
        dispatch(errMsg(res.data.msg))
      }
    })
  }
}

// 注册
export function register({user,pwd,repeqtpwd,type}){
  if(!user||!pwd){
    return errMsg('用户名或密码不能为空')
  }
  if (pwd !== repeqtpwd){
    return errMsg('密码不一致')
  }
  // 异步
  return dispatch=>{
    axios.post('user/register', {user,pwd,type}).then(res => {
      if (res.status === 200 & res.data.code === 0) {
        dispatch(authSuccess({user,pwd,type}))
      } else {
        dispatch(errMsg(res.data.msg))
      }
    })
  }
}