import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Rem from '../libs/js/rem';  //处理rem的js
import './index.css';              //首页css
//app入口文件
const rootEl = document.getElementById('app');

ReactDOM.render(<Routes />,rootEl);

