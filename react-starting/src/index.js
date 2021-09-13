// 入口文件
// 引入React
import React from 'react'
// 引入 ReactDOM
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// 引入跟组件
import App from './App'
// 渲染跟组件
ReactDOM.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>, 
  document.getElementById('root'))
