import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory,browserHistory, applyRouterMiddleware, Link} from 'react-router';
import {App, Main, Detail} from './containers';

class Routes extends Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
    }
    //路由切换时候，保存滚动条位置
    savePosition(router){
        console.log('routes savePosition')
        let scrollTop = document.body.scrollTop
        console.log(router)
        let path = router.location.pathname
        if (path) {
            if (scrollTop) localStorage.setItem(path, scrollTop)
            if (localStorage.getItem(path) && !scrollTop) localStorage.removeItem(path)
        }
    }
    // 滚动到顶部
    goScrollTop() {
        console.log('goTop.....')
        window.scrollTo(0, 0)
    }

    render(){
        return(
          <Router history={hashHistory}>
                 <Route path="/" component={App}>
                    <IndexRoute component={Main} onLeave={this.savePosition} /> //首页
                    <Route path="index/:id" component={Main} onLeave={this.savePosition} />  //栏目切换
                    <Route path="detail/:id" component={Detail} onEnter={this.goScrollTop} /> //详情页
                    <Redirect from='*' to='/'  />
                 </Route>
         </Router>
        )
    }

}

//  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
//                  <Route path="/" component={App}>
//                     <IndexRoute component={Main} onLeave={this.savePosition} /> //首页
//                     <Route path="index/:id" component={Main} onLeave={this.savePosition} />  //栏目切换
//                     <Route path="detail/:id" component={Detail} onEnter={this.goScrollTop} /> //详情页
//                     <Redirect from='*' to='/'  />
//                  </Route>
// </Router>

export default Routes