import React, { Component } from 'react'
export default class Count extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // console.log(this.sele.value)
    let { value } = this.sele
    let { count } = this.state;
    this.setState({
      count: count + value * 1
    })
  }
  delement = () => {
    let { value } = this.sele;
    let { count } = this.state;
    this.setState({
      count: count - value * 1
    })
  }
  oddCount = () => {
    let { value } = this.sele
    let { count } = this.state
    if ( count % 2 !== 0) {
      this.setState({
        count: count + value * 1
      })
    }
  }
  asncAddMent = () => {
    let { value } = this.sele
    let { count } = this.state
    if ( count % 2 === 0) {
      setTimeout(() => {
        this.setState({
          count: count + value * 1
        })
      }, 500)
    }
  }
  render () {
    let { count } = this.state
    return (
      <div className="CountName">
        <div>求和： { count }</div>
        <select ref={(c) => this.sele = c}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.delement}>-</button>
        <button onClick={this.oddCount}>奇数和加</button>
        <button onClick={ this.asncAddMent }>异步加</button>
      </div>
    )
  }
} 