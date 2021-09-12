import React from 'react'
import axios from 'axios'
import {
 Header,
 List
} from './components/index'
import './index.css'

export default class Github extends React.Component {
  state = {
    list: []
  }
  list = (value) => {
    axios.get(`https://api.github.com/search/users?q=${value}`)
    .then(res => {
      let {data: {items}} = res
      console.log(items)
      this.setState({
        list: items
      })
    }).catch(error => {
      console.log('error===', error)
    })
  }
  render () {
    let { list } = this.state
    return (
      <div className="github_name">
        <Header list={this.list}></Header>
        <List list={list}></List>
      </div>
    )
  }
}