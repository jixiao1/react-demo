import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  keyUphNA = (event) =>{
    let { keyCode,target } = event
    if (event.keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('请输入添加')
      return
    }
    let obj = {id: nanoid(), name: target.value, todo: false}

    this.props.todoList(obj)
    target.value = ''
  }
  static propTypes = {
    todoList: PropTypes.func
  }
  render() {
    return (
      <div className="Header">
        <input type="text" placeholder='请输入你要输入的' onKeyUp={this.keyUphNA}/>
      </div>
    )
  }
}
