import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
export default class MyLink  extends Component {
  render() {
    return (
      <div>
        <NavLink activeClassName="selected" {...this.props}></NavLink>
      </div>
    )
  }
}
