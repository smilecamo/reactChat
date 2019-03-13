import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import {login} from './auth.redux'
class Auth extends Component{
  render(){
    const Auth = (
      <React.Fragment>
        <div>
          this is Auth
        </div>
        <button onClick={this.props.login}>登录</button>
      </React.Fragment>
    )
    return(
      <React.Fragment>
        {
          this.props.Authlogin ? <Redirect to='/' /> : Auth
        }
      </React.Fragment>
    )
  }
}
const mapState =(state) => {
  return {
    Authlogin: state.AuthRedux.islogin
  }
}

const actionCreators = {
  login
}
export default connect(mapState, actionCreators)(Auth)