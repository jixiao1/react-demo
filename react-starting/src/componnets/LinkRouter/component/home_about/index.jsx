import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import home_content from '../home_content'
export default class home_about extends Component {
  state = {
    list: [
      { id: '001', content: '菜单1', age: 20},
      { id: '002', content: '菜单2', age: 22},
      { id: '003', content: '菜单3', age: 24}
    ]
  }
  render() {
    let {list} = this.state
    return (
      <div>
        {/* params传递参数 */}
        {/* searchchuan */}
        <ul>
        {/* {
          list.map((listObj) => {
            return (
             <Link key={listObj.id}
              to={`/home/home_news/detail/${listObj.id}/${listObj.content}/${listObj.age}`}
              >{listObj.content}</Link>
            )
          })
        } */}
        {
          list.map((listObj) => {
            return (
             <Link key={listObj.id}
              to={`/home/home_news/detail/?id=${listObj.id}&title=${listObj.content}`}
              >{listObj.content}</Link>
            )
          })
        }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/home_news/detail/:name/:count/:age' component={home_content}/> */}
        {/* search无需接收 */}
        <Route path='/home/home_news/detail' component={home_content}/>
      </div>
    )
  }
}
