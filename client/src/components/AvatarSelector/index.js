import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Grid,
  List
} from 'antd-mobile';
class AvatarSelector extends Component {
  static propsTypes = {
    selectAvator: PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                        .split(',')
                        .map(v=>({
                          icon:require(`../img/${v}.png`),
                          text:v
                        }))
    const GridHeader = this.state.text?
                                      (<div><span>已选择头像</span>
                                        <img style={{width:20}} src={this.state.icon} alt=""/>
                                      </div>)
                                    :<div>请选择头像</div>
    return (
      <React.Fragment>
        <List renderHeader={()=>GridHeader}>
          
          <Grid data={avatarList} columnNum={5} onClick={elm=>{
            this.setState(elm)
            this.props.selectAvator(elm.text)
          }}></Grid>
        </List>
      </React.Fragment>
    )
  }
}

export default AvatarSelector
