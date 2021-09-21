import React, { Component } from 'react'
import store from '../../../src/redux/store'
import {
  createIncrement, 
  createDelCrement
  // createAsyncIncrement
} 
  from '../../redux/count_action'
export default class Redux_count extends Component {
  componentDidMount = (() => {
    // 重新调用render更新页面
    store.subscribe(() => {
      this.setState({})
    });
  })
  increment = () => {
    let { value } = this.selectName
    // 用dispatch派发
    // store.dispatch({type: 'increment', data: value*1});
    store.dispatch(createIncrement(value * 1));
  }
  delement = () => {
    let { value } = this.selectName
    // store.dispatch({type: 'decrement', data: value*1});
    store.dispatch(createDelCrement(value * 1));
  }
  asnycIncrement = () => {
    let { value } = this.selectName
    let data = store.getState()
    if (data % 2 !== 0) {
      store.dispatch(createIncrement(value * 1));
    }
  }
  asyncAdd = () => {
    let { value } = this.selectName
    setTimeout(() => {
      store.dispatch(createIncrement(value * 1));
    }, 1000)
    // store.dispatch(createAsyncIncrement(value * 1, 500));
  }
  render() {
    return (
      <div>
        <div>求和：{ store.getState()}</div>
        <select ref={c => this.selectName = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.delement}>-</button>
        <button onClick={this.asnycIncrement}>奇数的和的时候加</button>
        <button onClick={this.asyncAdd}>异步加</button>
      </div>
    )
  }
}
