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
        this.state={
          active : false,
          data : [
                  {id:0, name:'推荐', link: 'index/tuijian'},
                  {id:1, name:'百家', link: 'index/baijia'},
                  {id:2, name:'本地', link: 'index/bendi'},
                  {id:3, name:'图片', link: 'baijia2'},
                  {id:4, name:'娱乐', link: 'baijia3'},
                  {id:5, name:'社会', link: 'baijia4'},
                  {id:6, name:'军事', link: 'baijia5'},
                  {id:7, name:'互联网', link: 'baijia6'},
                  {id:8, name:'科技', link: 'baijia7'},
                  {id:9, name:'女人', link: 'baijia8'},
                  {id:10, name:'生活', link: 'baijia9'},
                  {id:11, name:'国际', link: 'baijia10'},
                  {id:12, name:'国内', link: 'baijia11'},
                  {id:13, name:'体育', link: 'baijia12'},
                  {id:14, name:'汽车', link: 'baijia13'},
                  {id:15, name:'财经', link: 'baijia14'},
                  {id:16, name:'房产', link: 'baijia15'},
                  {id:17, name:'时尚', link: 'baijia16'},
                  {id:18, name:'教育', link: 'baijia17'},
                  {id:19, name:'人文', link: 'baijia18'},
                  {id:20, name:'旅游', link: 'baijia19'}

                ]
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
         let navNodes = this.state.data.map(function(detail, index){
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