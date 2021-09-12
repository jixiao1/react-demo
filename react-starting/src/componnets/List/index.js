import React, { Component } from 'react'
import ListItem from '../ListItem'
import PropTypes from 'prop-types';
import './index.css'

export default class List extends Component {
  static propTypes = {
     list: PropTypes.array.isRequired,
     upDateList: PropTypes.func.isRequired
  }
  render() {
    let { list, upDateList, delteUpList } = this.props
    return (
      <div className="list_container">
        {
          list.map(todo => {
            return <ListItem key={todo.id} {...todo}
            upDateList={upDateList}
            delteUpList={delteUpList}/>
          })
        }
      </div>
    )
  }
}
