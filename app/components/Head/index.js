import React, { Component } from 'react';
import IcoLink from '../IcoLink';
import './index.css';

class Head extends React.Component{
    constructor(){
        super();
        // 相当于ES5 getInitalState
        this.state={
         
        }
    }

   
    render(){
         

        return (
          <div className="head">
            <h1 className="title">橙子新闻</h1>
            <IcoLink link={"http://www.baidu.com"} icoType={"iconfont icon-user"} linkCls={"user-center-btn"}  />
            <IcoLink link={"http://www.qq.com"} icoType={"iconfont icon-sousuolansousuo"} linkCls={"search-btn"}/>
          </div>
        )
    }


}

export default Head;