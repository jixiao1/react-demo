import React, { Component } from 'react'
import axios from 'axios'

export default class Git_Header extends Component {
  HandlerIut = () => {
  let {bc: {value}} = this
  console.log("bc====", value)
   this.props.list(value)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='请输入你要搜索的' ref={c => this.bc = c}/>
        <button onClick={this.HandlerIut}>点击</button>
      </div>
    )
  }
}
