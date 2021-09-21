/*
 1. 创建该文件的目的是为了服务reducer, reducer的本质就是一个函数
 2. reducer会接收两个参数， 分别为之前的状态： (preState),动作对象
 action 
*/
import {
  INCREMENT,
  DECREMENT
} from './constant'
const defaultState = 0;
export default function count_reducer(preState = defaultState, action) {
  // 从action中对象中获取 type data
  const { type, data } = action
  // 根据type决定如何加上数据
  switch (type) {
    case INCREMENT: // 如果是加的话
     return preState + data
     case DECREMENT: // 如果是减的话
      return preState - data
      default:
        return preState
  }
}