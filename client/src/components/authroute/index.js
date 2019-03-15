// 检测登录/路由
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class AuthRoute extends React.Component{
  componentDidMount(){
    // 定义不需要跳转的路由
      const publicList = ['/login', '/reg']
      // 获取当前路由
      const pathName = this.props.location.pathname
      // 判断是否符合路由 indexOf返回首次出现的位置
      if(publicList.indexOf(pathName)>-1){
        return null
      }
    // 获取信息
    axios.get('/user/info').then((res)=>{
      if(res.data.code===1){
      }else{
        this.props.history.push('/login')
      }
    })
  }
  render(){
    return(
      null
    )
  }
}

export default withRouter(AuthRoute)