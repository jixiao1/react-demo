import React, { Component } from 'react'
// import qs from 'querystring'
export default class home_content extends Component {
  render() {
    // let { search } = this.props.location
    // let result = qs.parse(search.slice(1))
    // let { id, title } = result
    let { age, name, count } = this.props.match.params
    console.log("this.props===", this.props)
    let { id, title } = this.props.location.state
    return (
      <div>
         <ul>
           {/* <li>name： {age}</li>
           <li>age: {name}</li>
           <li>count: {count}</li> */}
           {/* <li>name：{id}</li>
           <li>age: { title} </li>
           <li>count: </li> */}
            {/* <li>name: { id }</li>
           <li>age: { title }</li>
           <li>count: </li> */}
         </ul>
      </div>
    )
  }
}
