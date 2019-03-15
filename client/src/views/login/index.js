import React from 'react'
import Logo from '../../components/logo'
import {
  List,
  InputItem,
  WhiteSpace,
  WingBlank,
  Button
} from 'antd-mobile';
class login extends React.Component{
  constructor(props){
    super(props);
    this.reg = this.reg.bind(this)
  }
  // 注册
  reg(){
    this.props.history.push('/reg')
  }
  render(){
    return(
      <React.Fragment>
        <Logo />
        <List>
          <InputItem placeholder="请输入用户名">用户名</InputItem>
          <InputItem placeholder="请输入密码">密码</InputItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type="primary">登录</Button>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.reg}>注册</Button>
      </React.Fragment>
    )
  }
}

export default login