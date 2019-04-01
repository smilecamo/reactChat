import axios from 'axios'
import {getRedirectPath} from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
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
    case REGISTER_SUCCESS:
    // 注册成功
      return {...state,msg: '',isAuth: true,redirectTo: getRedirectPath(action.payload),...action.payload}
    // 登录成功
    case LOGIN_SUCCESS:
      return {...state,msg:'',isAuth:true,redirectTo: getRedirectPath(action.payload),...action.payload}
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
// 注册成功
function registerSuccess(data){
    return {
      payload:data,
      type: REGISTER_SUCCESS
    }
}
// 登录
function loginSuccess(data){
  return {
    type: LOGIN_SUCCESS,
    payload:data
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
        dispatch(loginSuccess(res.data.data))
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
        dispatch(registerSuccess({user,pwd,type}))
      } else {
        dispatch(errMsg(res.data.msg))
      }
    })
  }
}