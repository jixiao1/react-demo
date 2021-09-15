import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import MyLink from '../MyLink'
import home_about from '../home_about'
import Home_news from '../home_news'
export default class Router_Home extends Component {
  render() {
    return (
      <div>
        <MyLink to="/home/home_news">news</MyLink>
        <MyLink to="/home/home_about">about</MyLink>
        <Switch>
        <Route path="/home/home_news" component={home_about}></Route>
        <Route path="/home/home_about" component={Home_news}></Route>
        </Switch>
      </div>
    )
  }
}
