import React, { Component } from 'react'
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import AvatarSelector from '../../components/AvatarSelector'
import {updata} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
  state=>state.user,
  {updata}
)

class BossInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',//公司名称
      title: '', //招聘职位
      money:'',//职位薪资
      desc: '', //职位简介
    }
  }
  // 改变值
  change(key,value){
    this.setState({
      [key]: value
    }
    )
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <React.Fragment>
        {
          redirect && redirect !== path ? <Redirect to={this.props.redirectTo} />:null
        }
        <NavBar mode="dark">Boss完善信息页</NavBar>
        <AvatarSelector selectAvator={(v)=>{this.setState({avatar:v})}}></AvatarSelector>
        <InputItem onChange={(v)=>this.change('name',v)}>公司名称</InputItem>
        <InputItem onChange={(v)=>this.change('title',v)}>招聘职位</InputItem>
        <InputItem onChange={(v)=>this.change('money',v)}>职位薪资</InputItem>
        <TextareaItem title='职位要求' autoHeight onChange={(v)=>this.change('desc',v)}></TextareaItem>
        <Button type="primary" onClick={()=>this.props.updata(this.state)}>提交</Button>
      </React.Fragment>
    )
  }
}
export default BossInfo