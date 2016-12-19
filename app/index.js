import React from 'react';
import ReactDOM from 'react-dom';
import Rem from '../libs/js/rem';  //处理rem的js
import { Router, Route, IndexRoute, Redirect, hashHistory,browserHistory, applyRouterMiddleware, Link} from 'react-router';
import Routes from './routes';
import './index.css';
import './MockData';
//app入口文件
const rootEl = document.getElementById('app');
ReactDOM.render(<Router history={browserHistory} routes={Routes}></Router>,rootEl);

