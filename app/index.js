import 'rc-select/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Select, {Option, OptGroup} from 'rc-select';
import './index.css';

var newsNavData = [
  {id:0, name:'推荐', link: 'http://www.baidu.com/'},
  {id:1, name:'百家', link: 'http://www.baidu.com/'},
  {id:2, name:'本地', link: 'http://www.baidu.com/'},
  {id:3, name:'图片', link: 'http://www.baidu.com/'},
  {id:4, name:'娱乐', link: 'http://www.baidu.com/'},
  {id:5, name:'社会', link: 'http://www.baidu.com/'},
  {id:6, name:'军事', link: 'http://www.baidu.com/'},
  {id:7, name:'互联网', link: 'http://www.baidu.com/'},
  {id:8, name:'科技', link: 'http://www.baidu.com/'},
  {id:9, name:'女人', link: 'http://www.baidu.com/'},
  {id:10, name:'生活', link: 'http://www.baidu.com/'},
  {id:11, name:'国际', link: 'http://www.baidu.com/'},
  {id:12, name:'国内', link: 'http://www.baidu.com/'},
  {id:13, name:'体育', link: 'http://www.baidu.com/'},
  {id:14, name:'汽车', link: 'http://www.baidu.com/'},
  {id:15, name:'财经', link: 'http://www.baidu.com/'},
  {id:16, name:'房产', link: 'http://www.baidu.com/'},
  {id:17, name:'时尚', link: 'http://www.baidu.com/'},
  {id:18, name:'教育', link: 'http://www.baidu.com/'},
  {id:19, name:'人文', link: 'http://www.baidu.com/'},
  {id:20, name:'旅游', link: 'http://www.baidu.com/'}

];

var NewsNavLink = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
  },

  // getInitialState : function(){
  //   return {
  //       active : false
  //   };
  // },

  render: function(){
    return(
        <a href={this.props.link} className={this.props.active ? 'nav-link-active' : 'nav-link-disabled'} target="_blank" key={this.props.id}>{this.props.name}</a>
    )
  }


});

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

  render : function(){
      var defaultNum = this.props.defaultNum || 4; 
      var active = this.state.active;
      var navNodes = this.props.data.map(function(detail,index){
          if(index > defaultNum){
            return(
              <NewsNavLink key={detail.id} name={detail.name} link={detail.link} active={active} />
            )
          }
          return (
            <NewsNavLink key={detail.id} name={detail.name} link={detail.link} active={true} />
            // <a href={detail.link} target="_blank" key={detail.id}>{detail.name}</a>
          );
       
        
      })

      return (
        <div className="news-nav">
            {navNodes}
            <span className="news-more" onClick={this.toggleDown}>更多</span>
        </div>
        )
  }

});

ReactDOM.render(<NewsNav data={newsNavData} defaultNum = {11} />, document.getElementById('news-nav'));

//阿里react组件
let c = (
  <Select>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);

ReactDOM.render(c, document.getElementById('t2'));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>橙子新闻</h1>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));

// 下拉菜单
let dropInfo = [
  {
    text : "男明星",
    droparr : 
    [
      {id: 0, name : '彭于晏' },
      {id: 1, name : '霍建华' },
      {id: 2, name : '杨洋' }
    ]

  },
  {
    text : '女明星',
    droparr : 
    [
      {id: 0, name : '刘亦菲' },
      {id: 1, name : '杨幂' },
      {id: 2, name : '刘诗诗' }
    ]

  }

];

// 下拉菜单
let Dropdown = React.createClass({

  propTypes:{
    text  :   React.PropTypes.string.isRequired,
    options:  React.PropTypes.array.isRequired
  },

  getInitialState:function(){
      return {
        active : false
      };
  },

  //响应用户点击事件的回调函数
  toggleFold:function(){
     console.log(this.state.active);
     this.setState({
      active: !this.state.active
     });
   
  },

  render: function(){
    console.log(this.props);
    var optionsNodes = this.props.options.map(function(option){
      console.log(option)
          return (
            <li key={option.id}>{option.name}</li>
          );
        }
    );
    
    return (
      // 点击事件回调函数
      <div className={(this.state.active ? 'active' : '') +　" select"} onClick={this.toggleFold}> 
        {this.props.text}
        <ul className="dropdown">{optionsNodes}</ul>
      </div>
    );
    

  }


});

//新闻导航，带下来菜单，测试dropdown组件，是dropdown组件的 父组件
let NewsNavs = React.createClass({ 
  render : function(){
    console.log(this.props.options)
    let dropdownNodes = this.props.options.map(function(option,index){
        return (
          <Dropdown key={index} text={option.text}  options={option.droparr} />
        );
    }); 

    return (
      <div>
        {dropdownNodes}
      </div>
      
    );

   }

});


ReactDOM.render(<NewsNavs options={dropInfo} />, document.getElementById('dropdown'));
