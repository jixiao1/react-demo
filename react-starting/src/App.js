// 采用类组件的写法
import React from 'react'
import { 
  Hello,
  Welcome
} from './componnets'

class App extends React.Component {
  render () {
    return <div>
      <Hello/>
      <Welcome/>
    </div>
  }
}
export default App