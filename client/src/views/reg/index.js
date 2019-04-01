import React from 'react'
import Logo from '../../components/logo'
import {
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {
  Redirect
}from 'react-router-dom'
@connect(
  state => state.user,
  {register}
)
class reg extends React.Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this)
    this.reg = this.reg.bind(this)
    this.state={
      type:"genius",
      user:'',
      pwd:'',
      repeqtpwd:''
    }
  }
  // 登录
  login() {
    this.props.history.push('/login')
  }
  // 改变值
  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }
  // 注册
  reg(){
    this.props.register(this.state)
  }
  render(){
    const RadioItem = Radio.RadioItem;
    return(
      <React.Fragment>
        {/* 跳转 */}
        {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null}
        <Logo />
        {/* 错误信息 */}
        {this.props.msg?<p>{this.props.msg}</p>:null}
        <List>
          <InputItem
          placeholder="请输入用户名"
          onChange={v=>this.handleChange('user',v)}
          >用户名</InputItem>
          <InputItem 
          placeholder="请输入密码"
          type="pwd"
          onChange={v=>this.handleChange('pwd',v)}
          >密码</InputItem>
          <InputItem 
          placeholder="请再次输入密码"
          type="pwd"
          onChange={v=>this.handleChange('repeqtpwd',v)}
          >确认密码</InputItem>
          <RadioItem 
          checked={this.state.type === 'genius'}
          onChange={()=>this.handleChange('type','genius')}
          >牛人</RadioItem>
          <RadioItem 
          checked={this.state.type === 'boss'}
          onChange={()=>this.handleChange('type','boss')}
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