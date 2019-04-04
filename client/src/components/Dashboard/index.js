import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile';
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from './navLinkBar'
import Boss from '../boss'
import Genius from '../genius'
function Msg(){
    return (
      <div>
        MSg
      </div>
    )
  }
function Me(){
    return (
      <div>
        Me
      </div>
    )
  }

@connect(
  state=>state
)
class Dashboard extends Component {
  render() {
    // 获取当前账号信息
    const user = this.props.user
    // 获取当前页面
    const {pathname} = this.props.location
    // 定义导航列表
    const NavList = [
      {
        path:'/boss',
        text:'牛人',
        icon:'boss',
        title:'牛人列表',
        component:Boss,
        hide:user.type === 'genius'
      },
      {
        path:'/genius',
        text:'BOSS',
        icon:'genius',
        title:'BOSS列表',
        component:Genius,
        hide:user.type === 'boss'
      },
      {
        path:'/msg',
        text:'消息',
        icon:'msg',
        title:'消息列表',
        component:Msg
      },
      {
        path:'/me',
        text: '我',
        icon:'user',
        title:'个人中心',
        component:Me
      },
    ]
    return (
      <div>
        {/* 头部导航栏 */}
        <NavBar className="fixed-top" mode="dark">{NavList.find(v=>v.path===pathname).title}</NavBar>
       {/* 中间内容区域 */}
        <div style={{marginTop:45}}>
          <Switch>
            {
              NavList.map(v=>(
                <Route key={v.path} path={v.path} component={v.component} />
              ))
            }
          </Switch>
        </div>
        {/* 底部导航栏 */}
        <NavLinkBar data={NavList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard
