import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import NavLink from './NavLink';
import IcoLink from '../IcoLink';
import './index.css';

class Nav extends React.Component{
    constructor(){
        super();
        // 相当于ES5 getInitalState
        this.state={
          active : false
        }
    }

    //触发时，更改激活状态
    toggleDown(e){
        this.setState({
          active:!this.state.active
        });
    };
   
    render(){
         let defaultNum = this.props.defaultNum || 11; 
         let active = this.state.active;
         // 当导航链接超过一定数量，隐藏超出的链接
         let navNodes = this.props.data.map(function(detail, index){
              if(index == 0){ //页面进入时，激活当前状态，使用react-router
                return(
                  <IndexLink key={index} to="/" activeClassName="route-active">
                    {detail.name}
                  </IndexLink>
                );
              }
              else if(index > defaultNum){
                return(
                  <NavLink key={detail.id} name={detail.name} link={detail.link} active={active} />
                )
              }
              else{
                return (
                  <NavLink key={detail.id} name={detail.name} link={detail.link} active={true} />
                );
              }
                   
        })

        return (
             <div className="news-nav">
                 {navNodes}
                <IcoLink link={"javascript:void(0)"}  clickEvent={this.toggleDown.bind(this)} icoType={"iconfont icon-jia"} linkCls={"news-more"}  />
            </div>
        )
    }


}

export default Nav;