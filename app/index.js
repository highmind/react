import 'rc-select/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Select, {Option, OptGroup} from 'rc-select';
import { Router, Route, IndexRoute,IndexLink, Link, hashHistory,browserHistory } from 'react-router'
import Rem from '../libs/js/rem'
import '../libs/css/iconfont.css'; //iconfont.cn字体图标
import './index.css';
// 主导航
var newsNavData = [
  {id:0, name:'推荐', link: 'tuijian'},
  {id:1, name:'百家', link: 'baijia'},
  {id:2, name:'本地', link: 'baijia1'},
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

];

// 图标链接组件
// <IcoLink link={"http://www.baidu.com"} icoType={"iconfont icon-user"} linkCls={"user-center-btn"}  />
// link 链接地址
// icoType 图标类型，配合iconfont.cn 字体图标使用
// linkCls 组件css类名，用于设置样式
//  
var  IcoLink = React.createClass({
      propTypes:{
        link: React.PropTypes.string.isRequired,
        icoType : React.PropTypes.string.isRequired,
        linkCls : React.PropTypes.string,
        clickEvent : React.PropTypes.func
      },

     render : function(){
        return(
            <a href={this.props.link}  onClick={this.props.clickEvent} className={this.props.linkCls}>
              <i className={this.props.icoType}></i>
            </a>
        );
     }
});


// 导航组件
// 配合react-router，不是要a标签，使用link
var NewsNavLink = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
  },

  render: function(){
    return(
        <Link to={this.props.link} activeClassName="route-active" className={this.props.active ? 'nav-link-active' : 'nav-link-disabled'}  key={this.props.id}>{this.props.name}</Link>
    )
  }


});

// 导航链接组件
var NewsNav = React.createClass({

  propTypes:{
    data:  React.PropTypes.array.isRequired
  },

  getInitialState : function(){
    return {
        active : false
    };
  },

  toggleDown : function(){
    this.setState({
      active:!this.state.active
    });
  },
 //导航比较复杂，使用了react-router中的IndexLink处理，首页当前样式问题
  render : function(){
      var defaultNum = this.props.defaultNum || 11; 
      var active = this.state.active;
      var navNodes = this.props.data.map(function(detail,index){
          if(index == 0){
            return(
              <IndexLink key={index} to="/" activeClassName="route-active">
                {detail.name}
              </IndexLink>
            );
          }
          else if(index > defaultNum){
            return(
              <NewsNavLink key={detail.id} name={detail.name} link={detail.link} active={active} />
            )
          }
          else{
            return (
              <NewsNavLink key={detail.id} name={detail.name} link={detail.link} active={true} />
            );
          }
               
      })

      return (
        <div className="news-nav">
            {navNodes}
            <IcoLink link={"javascript:void(0)"}  clickEvent={this.toggleDown} icoType={"iconfont icon-jia"} linkCls={"news-more"}  />
        </div>
      )
  }

});



// 头部组件容器
var  Head = React.createClass({
      propTypes:{
        link:  React.PropTypes.string,
        icoData: React.PropTypes.string
      },

     render : function(){
        return(
          <div className="head">
            <h1 className="title">橙子新闻</h1>
            <IcoLink link={"http://www.baidu.com"} icoType={"iconfont icon-user"} linkCls={"user-center-btn"}  />
            <IcoLink link={"http://www.qq.com"} icoType={"iconfont icon-sousuolansousuo"} linkCls={"search-btn"}/>
          </div>
     
        );
     }
});



// 新闻组件
var newsData = [
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img1.jpg',
      time : '10分钟前',
      title : '苹果手机曝出奇葩故障：播放这段五秒视频就死机'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img2.jpg',
      time : '20分钟前',
      title : '谣言止于智者，乐视芯片被断货消息不实！'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img3.jpg',
      time : '30分钟前',
      title : '乔纳森不再负责苹果产品设计？究竟是怎么了'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img4.jpg',
      time : '40分钟前',
      title : 'OPPO和vivo如何延续增长？'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img5.jpg',
      time : '50分钟前',
      title : '亚欧14国ATM机被攻击自动吐钱，或与东欧黑客团体有关'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img6.jpg',
      time : '60分钟前',
      title : '卡巴斯基：黑五金融钓鱼攻击数量激增'
    },
  
];

// 百家栏目数据
var newsDataBJ = [
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img1.jpg',
      time : '10分钟前',
      title : '苹果手机曝出奇葩故障：播放这段五秒视频就死机-百家'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img2.jpg',
      time : '20分钟前',
      title : '谣言止于智者，乐视芯片被断货消息不实！-百家'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img3.jpg',
      time : '30分钟前',
      title : '乔纳森不再负责苹果产品设计？究竟是怎么了-百家'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img4.jpg',
      time : '40分钟前',
      title : 'OPPO和vivo如何延续增长？-百家'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img5.jpg',
      time : '50分钟前',
      title : '亚欧14国ATM机被攻击自动吐钱，或与东欧黑客团体有关-百家'
    },
    {
      url: "http://www.baidu.com",
      imgUrl : '/images/news-img6.jpg',
      time : '60分钟前',
      title : '卡巴斯基：黑五金融钓鱼攻击数量激增-百家'
    },
  
];


// 新闻列表项组件
// data 新闻数据
var NewsLi = React.createClass({
    propTypes:{
        data:  React.PropTypes.object.isRequired
      },
    render: function(){
      return (
        <div className="news-wrap">
          <div className="news-img">
              <a href={this.props.data.url}>
                  <img width="100%" src={this.props.data.imgUrl} alt="" />
              </a>
          </div>
          <div className="news-con">
              <h4>
                  <a href={this.props.data.url}>
                      {this.props.data.title}
                  </a>
              </h4>
              <p>{this.props.data.time}</p>
          </div>
        </div>
      );
    }
});


// 新闻列表
var  NewsList = React.createClass({

     // propsTypes:{
     //   data: React.PropsTypes.array.isRequired
     // },

     render : function(){
        var newsNodes = this.props.data.map(function(detailData, index){
            return(
              <NewsLi key={index} data={detailData} />
            );
        }); 

        return(
          <div>
            {newsNodes}
          </div>
        )
     }

});


// 路由设置
// var Router
// <NewsList data={newsData} />
var  App = React.createClass({

     getInitialState : function(){
        return {};

     },

     render: function(){
        return(
          <div>
              <Head />
              <NewsNav data={newsNavData} />
              {this.props.children}
          </div>
        );
     }

});

var Index = React.createClass({

     getInitialState : function(){
        return {};

     },

     render: function(){
        return(
          <div>
            <NewsList data={newsData} />
          </div>
        );
     }

});

var BaiJia = React.createClass({

     getInitialState : function(){
        return {};

     },

     render: function(){
        return(
          <div>
            <NewsList data={newsDataBJ} />
          </div>
        );
     }

});


ReactDOM.render((

  <Router history={hashHistory}>
    
    <Route path="/" component={App}>
      <IndexRoute component={Index} /> //首页
      <Route path="tuijian" component={Index} /> //推荐
      <Route path="baijia" component={BaiJia} /> //百家
    </Route>

  </Router>

), document.getElementById('app'))

// ReactDOM.render(<App />, document.getElementById('app'));

//阿里react组件
// let c = (
//   <Select>
//     <Option value="jack">jack</Option>
//     <Option value="lucy">lucy</Option>
//     <Option value="yiminghe">yiminghe</Option>
//   </Select>
// );

// ReactDOM.render(c, document.getElementById('t2'));


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>橙子新闻</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

// 下拉菜单
// let dropInfo = [
//   {
//     text : "男明星",
//     droparr : 
//     [
//       {id: 0, name : '彭于晏' },
//       {id: 1, name : '霍建华' },
//       {id: 2, name : '杨洋' }
//     ]

//   },
//   {
//     text : '女明星',
//     droparr : 
//     [
//       {id: 0, name : '刘亦菲' },
//       {id: 1, name : '杨幂' },
//       {id: 2, name : '刘诗诗' }
//     ]

//   }

// ];

// 下拉菜单
// let Dropdown = React.createClass({

//   propTypes:{
//     text  :   React.PropTypes.string.isRequired,
//     options:  React.PropTypes.array.isRequired
//   },

//   getInitialState:function(){
//       return {
//         active : false
//       };
//   },

//   //响应用户点击事件的回调函数
//   toggleFold:function(){
//      console.log(this.state.active);
//      this.setState({
//       active: !this.state.active
//      });
   
//   },

//   render: function(){
//     console.log(this.props);
//     var optionsNodes = this.props.options.map(function(option){
//       console.log(option)
//           return (
//             <li key={option.id}>{option.name}</li>
//           );
//         }
//     );
    
//     return (
//       // 点击事件回调函数
//       <div className={(this.state.active ? 'active' : '') +　" select"} onClick={this.toggleFold}> 
//         {this.props.text}
//         <ul className="dropdown">{optionsNodes}</ul>
//       </div>
//     );
    

//   }


// });

//新闻导航，带下来菜单，测试dropdown组件，是dropdown组件的 父组件
// let NewsNavs = React.createClass({ 
//   render : function(){
//     console.log(this.props.options)
//     let dropdownNodes = this.props.options.map(function(option,index){
//         return (
//           <Dropdown key={index} text={option.text}  options={option.droparr} />
//         );
//     }); 

//     return (
//       <div>
//         {dropdownNodes}
//       </div>
      
//     );

//    }

// });


// ReactDOM.render(<NewsNavs options={dropInfo} />, document.getElementById('dropdown'));
