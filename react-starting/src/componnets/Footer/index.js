import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  allChange = (event) => {
    this.props.checkedAllTodo(event.target.checked)
  }
  clearAllList = () => {
    console.log(`清除已经完成的`)
    this.props.clearFisahedList()
  }
  render() {
    let { list } = this.props;
    // 总数
    let allcount = list.length
    // 已完成的数量
    // let fished = 0;
    // for(let i =0; i<list.length; i++) {
    //   if (list[i].todo) {
    //     fished += 1
    //   }
    // }
    let fished = list.reduce((pre, current) => {
        return pre + (current.todo ? 1 : 0)
    }, 0)
    console.log('fished===', fished)
    return (
      <div className="footer">
        <input type="checkbox"
        checked={fished === allcount && allcount!==0 ? true : false}
        onChange={this.allChange}/>
        <span>已完成{fished}/总数{ allcount }</span>
        <button onClick={this.clearAllList}>清楚已完成任务</button>
      </div>
    )
  }
}
