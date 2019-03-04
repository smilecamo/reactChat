import React, {
  PureComponent
} from 'react'
import {connect} from 'react-redux'
import {add,remove} from './index.redux'
import './App.css'
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      name: 'zhangsan',
      list: ['张无忌','赵敏','小昭']
    }
    this.handleBtn = this.handleBtn.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div className="a">{this.state.name} say i is demo</div>
        <button onClick={this.handleBtn}>改变</button>
        {/* 第二种改变this的指向 */}
        <button onClick={()=>this.handleBtn()}>改变</button>
        <ul>
          {this.state.list.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
        <p>this num is {this.props.num}</p>
        <button onClick={this.props.add}>加</button>
        <button onClick={this.props.remove}>减</button>
      </React.Fragment>
    )
  }
  handleBtn(){
    this.setState({
      name: 'lisi'+Math.random(),
      list: [...this.state.list, '李四' + Math.random()]
    })
  }
}
const mapStateProps=(state)=>{
  return {num: state}
}
const actionCreators = {add,remove}
export default connect(mapStateProps, actionCreators)(App)