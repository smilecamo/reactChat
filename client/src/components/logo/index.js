import React, { Component } from 'react'
import logoUrl from './logo60.png'
import './index.css'
class logo extends Component{
  render(){
    return(
      <div className="img">
        <img src={logoUrl} alt="logo"/>
      </div>
    )
  }
}

export default logo