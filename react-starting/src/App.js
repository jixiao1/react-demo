// 采用类组件的写法
import React from 'react'
import axios from 'axios'
// import { 
//   Hello,
//   Welcome
// } from './componnets'
import { 
  Header,
  List,
  Footer,
  Github
} from './componnets'

class App extends React.Component {
  // 状态在哪里操作状态的方法就在哪里
  state = {
    list: [
      {id: '001', name: '吃饭', todo: false },
      {id: '002', name: '睡觉', todo: true },
      {id: '003', name: '敲代码', todo: true },
      {id: '004', name: '打豆豆', todo: false },
      {id: '005', name: '打游戏', todo: true }
    ]
  }
  // 添加
  AddList = (name1) => {
    let {list} = this.state;
    console.log('name===', name1)
     this.setState({
       list: [name1, ...list]
     })
  }
  // 更新
  upDateList = (done, id) => {
    let {list} = this.state;
    let newList = list.map((item) => {
      // 选择这个的时候，勾选单选框
      if(item.id === id) return {...item, todo: done}
      else return item
    })
    console.log("newList===", newList)
    this.setState({
      list: newList
    })
  }
  //  删除
  delteUpList = (id) => {
    let { list } = this.state;
    // 删除list的某一项
    let newList = list.filter((listObj) => {
      return listObj.id !== id
    })
    this.setState({
      list: newList
    })
  }
  // 所有已经勾选的
  checkedAllTodo = (todo) => {
    let { list } = this.state
    // 加工数据
     let newArr = list.map((item) => {
       return {...item, todo}
     })
     this.setState({
       list: newArr
     })
  }
  // 清除已经完成的todolist
  clearFisahedList = () => {
    // 获取数据
    let { list } = this.state
    let newList = list.filter((item) => {
      return !item.todo
    })
    this.setState({
      list: newList
    })
  }
  getStateData = () => {
    axios.get('/api/student').then((res) => {
      console.log(res.data)
    }).catch(error => {
      console.log('失败了===', error)
    })
  }
  getCarData = () => {
    axios.get('/abc/car').then((res) => {
      console.log(res.data)
    }).catch(error => {
      console.log(error)
    })
  }
  render () {
    let { list } = this.state
    return <div>
      {/* <Hello/>
      <Welcome/> */}
      <Header todoList={this.AddList}/>
      <List list={list} upDateList={this.upDateList} delteUpList={this.delteUpList}/>
      <Footer list={list}
      checkedAllTodo={this.checkedAllTodo}
      clearFisahedList={this.clearFisahedList}></Footer>
      <button onClick={this.getStateData}>点击发送数据</button>
      <button onClick={this.getCarData}>请求汽车的数据</button>
      <Github></Github>
    </div>
  }
}
export default App