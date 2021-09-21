// 引入CreaStore, 专门创建redux中最为核心的Store对象
import { createStore, applyMiddleware } from 'redux'
// 引入CountReducer服务的reducer
import CountReducer from './count_reducer'
import thunk from 'react-thunk'
// 暴露Store
export default createStore(CountReducer, applyMiddleware(thunk))