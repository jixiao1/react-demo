import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from './component/home'
import Back from './component/back'
import Header from './component/Header'
import MyLink from './component/MyLink'
import Test from './component/Test'
import './index.css'
export default class Link_Router extends Component {
  render() {
    return (
       <div>
         <Header a= {1}/>
        <div>
            {/* <NavLink to="/home" activeClassName="selected">home</NavLink>
            <NavLink to="/back" activeClassName="selected">back</NavLink> */}
            <MyLink to="/home" abc="123">home</MyLink>
            <MyLink to="/back" abc="456">back</MyLink>
          <div>
           <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/back" component={Back}></Route>
              <Route path="/home"  component={Test}></Route>
              {/* 路由重定向 */}
              <Redirect to="/back"/>
           </Switch>
          </div>
        </div>
      </div>
    )
  }
}
