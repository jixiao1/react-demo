import React, { Component } from 'react'
import './index.css'
export default class Git_List extends Component {
  render() {
    let { list } = this.props
    console.log("list ======**8", list)
    return (
      <div className="icon_count">
        {
          list.map((item) => {
            return <div className="icon_img" key={item.id}>
              <a href={item.html_url}>
                <img src={item.avatar_url} className="img_src"/>
              </a>
            </div>
          })
        }
      </div>
    )
  }
}
