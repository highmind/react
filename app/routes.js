import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import {App,Main} from './containers';

class Routes extends Component{

   constructor(props){
        super(props);
        // 相当于ES5 getInitalState
       
    }

  render(){

        return(
            <Router history={hashHistory}>
                 <Route path="/" component={App}>
                   <IndexRoute component={Main} /> //首页
                   <Route path="index/:id" component={Main} /> //本地
                 </Route>

            </Router>
        )
    }

}

export default Routes