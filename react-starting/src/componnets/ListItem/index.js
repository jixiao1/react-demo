import React, { Component } from 'react'
import './index.css'

export default class ListItem extends Component {
  state = {
    mouse: false
  }
  // 用同一函数采用高阶函数 进入和离开的事件
  handlermouse = (flag) => {
    return () => {
      console.log('flag===', flag)
      this.setState({
        mouse: flag
      })
    }
  }
  //  勾选和取消勾选触发的函数 
  changeHandler = (id) => {
    return (event) => {
      console.log('event, id', event.target.checked, id)
      this.props.upDateList(event.target.checked, id)
    }
  }
  deleteHandler = (id) =>{
    console.log('id====', id)
    if(window.confirm('你确定删除吗')) {
      this.props.delteUpList(id)
    }
  }
  render() {
    let { id, name, todo } = this.props
    let { mouse } = this.state
    return (
      <div className="list_item" onMouseEnter={this.handlermouse(true)}
      onMouseLeave={this.handlermouse(false)}
      style={{backgroundColor: mouse ? '#ddd': '#ccc'}}>
        <input type="checkbox" checked={todo} onChange={this.changeHandler(id)}/>
        <span>{ name }</span>
        <button style={{display: mouse ? 'block': 'none'}}
        onClick={() => this.deleteHandler(id)}>删除</button>
      </div>
    )
  }
}
