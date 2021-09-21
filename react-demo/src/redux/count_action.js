// 该文件生成action
import {
  INCREMENT,
  DECREMENT
} from './constant'
import store from './store'
export const createIncrement = data => ({type: INCREMENT, data})
export const createDelCrement = data => ({ type: DECREMENT, data})
// export const createAsyncIncrement = (data, time) => {
//   return (dispatch) => {
//     setTimeout(() => {
//        dispatch(createIncrement(data))
//     }, time)
//   }
// }