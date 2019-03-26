import React from 'react'
import Logo from '../../components/logo'
import {
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile';
class reg extends React.Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this)
    this.reg = this.reg.bind(this)
    this.state={
      type:"genius",
      user:'',
      password:'',
      againPassword:''
    }
  }
  // 注册
  login() {
    this.props.history.push('/login')
  }
  // 改变值
  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }
  reg(){
    console.log(this.state);
  }
  render(){
    const RadioItem = Radio.RadioItem;
    return(
      <React.Fragment>
        <Logo />
        <List>
          <InputItem
          placeholder="请输入用户名"
          onChange={v=>this.handleChange('user',v)}
          >用户名</InputItem>
          <InputItem 
          placeholder="请输入密码"
          type="password"
          onChange={v=>this.handleChange('password',v)}
          >密码</InputItem>
          <InputItem 
          placeholder="请再次输入密码"
          type="password"
          onChange={v=>this.handleChange('againPassword',v)}
          >确认密码</InputItem>
          <RadioItem 
          checked={this.state.type === 'genius'}
          onChange={()=>this.handleChange('type','genius')}
          >牛人</RadioItem>
          <RadioItem 
          checked={this.state.type === 'BOSS'}
          onChange={()=>this.handleChange('type','BOSS')}
          >BOSS</RadioItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.reg}>注册</Button>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.login}>登录</Button>
      </React.Fragment>
    )
  }
}

export default reg