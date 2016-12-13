import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, Link, applyRouterMiddleware } from 'react-router';
import {App, Main, Detail} from './containers';
import { useScroll } from 'react-router-scroll';//react-router滚动条位置中间件
class Routes extends Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
    }

    render(){
        return(
            <Router history={hashHistory} render={applyRouterMiddleware(useScroll())}>
                 <Route path="/" component={App}>
                    <IndexRoute component={Main} /> //首页
                    <Route path="index/:id" component={Main} />  //栏目切换
                    <Route path="detail/:id" component={Detail} /> //详情页
                    <Redirect from='*' to='/'  />
                 </Route>
            </Router>
        )
    }

}

export default Routes