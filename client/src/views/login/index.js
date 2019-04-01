import React from 'react'
import Logo from '../../components/logo'
import {
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile';
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {login}
)

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      pwd:''
    }
    this.reg = this.reg.bind(this)
    this.login = this.login.bind(this)
  }
  // 注册
  reg(){
    this.props.history.push('/reg')
  }
  // 登录
  login() {
    // this.props.history.push('/reg')
    this.props.login(this.state)
  }
  // 改变值
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  render(){
    return(
      <React.Fragment>
        {/* 跳转 */}
        {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null}
        <Logo />
        {/* 错误信息 */}
        {this.props.msg?<p>{this.props.msg}</p>:null}
        <List>
          <InputItem placeholder="请输入用户名"
          onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
          <InputItem placeholder="请输入密码"
          onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.login}>登录</Button>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={this.reg}>注册</Button>
      </React.Fragment>
    )
  }
}

export default Login