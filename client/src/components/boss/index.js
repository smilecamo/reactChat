import React, { Component } from 'react'
import axios from 'axios'
class Boss extends Component {
  componentDidMount(){
    axios.get('/user/list?type=boss')
      .then(res=>{
        if(res.data.code===0){
          console.log(res.data.data);
        }
      })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Boss
