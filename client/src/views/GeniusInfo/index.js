import React, { Component } from 'react'
import {
  InputItem,
  TextareaItem,
  Button,
  NavBar
} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {updata} from '../../redux/user.redux'
import AvatarSelector from '../../components/AvatarSelector'
@connect(
  state=>state.user,
  {updata}
)
class GeniusInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      desc:'',
      avatar:''
    }
  }
  change(key,value){
    this.setState({
      [key]:value
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {
          redirect && redirect !== path? <Redirect to={redirect}/>:null
        }
        <NavBar>牛人完善信息页</NavBar>
        <AvatarSelector selectAvator={(v)=>{this.setState({avatar:v})}}></AvatarSelector>
        <InputItem onChange={v=>{
          this.change('title',v)
        }}>求职岗位</InputItem>
        <TextareaItem title='个人简介' autoHeight onChange={(v)=>this.change('desc',v)}></TextareaItem>
        <Button type="primary" onClick={()=>this.props.updata(this.state)}>提交</Button>
      </div>
    )
  }
}

export default GeniusInfo
