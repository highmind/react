import React from 'react';
import ReactDOM from 'react-dom';
import { Link,IndexLink } from 'react-router';
import NavLink from './NavLink';
import IcoLink from '../IcoLink';
import './index.css';

class Nav extends React.Component{
    constructor(props){
    super(props);
        // 相当于ES5 getInitalState
        let activeData = this.getDataFromLocal();
        this.state={
            active : activeData
        }
    }
    // 从localStorage中获取导航展开和关闭状态
    getDataFromLocal(){
      let navShowMore = localStorage.getItem('NavShowMore');
      return (navShowMore != null)? this.strToBool(navShowMore) : false
    }

    // "true" 和 false字符串转布尔
    strToBool(str){
      if(str == 'true'){
        return true
      }else{
        return false
      }
    }

    //触发时，更改激活状态,是否展开菜单，
    //设置localStorage，用于用户展开菜单以后，刷新页面，菜单继续展开
    toggleDown(e){
        this.setState({
          active:!this.state.active
        });
        //切换展开和关闭状态时,同时设置localStorage
        localStorage.setItem('NavShowMore', !this.state.active);
    }
   
    render(){
         let defaultNum = this.props.defaultNum || 11; 
         let active = this.state.active;
         // console.log(this.props.data)
         // 当导航链接超过一定数量，隐藏超出的链接
         let navNodes = this.props.data.map(function(detail, index){
               //页面进入时，激活当前状态，使用react-router
              if(index == 0){ 
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