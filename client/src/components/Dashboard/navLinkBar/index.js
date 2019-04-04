import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import {
  TabBar
} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
@withRouter
class NavLinkBar extends Component {
  static propsTypes = {
    data: PropsTypes.array.isRequired
  }
  render() {
    // 过滤不需要显示的数据
    const navList = this.props.data.filter(v=>!v.hide)
    const {pathname} = this.props.location
    return (
      <TabBar>
        {
          navList.map(v=>(
            <TabBar.Item
              key={v.path}
              title={v.text}//标题
              icon={{uri:require(`../img/${v.icon}.png`)}} //所有的图标
              selectedIcon={{uri:require(`../img/${v.icon}-active.png`)}} //选中后的图标
              selected={pathname===v.path} // 当前选中的值 获取当前路径和当前所在的图标做对比
              onPress={()=>{
                this.props.history.push(v.path)
              }}// 点击跳转
            />
          ))
        }
      </TabBar>
    )
  }
}
export default NavLinkBar