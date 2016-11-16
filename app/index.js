import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('app'));

// 下拉菜单
var dropInfo = [
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


var Dropdown = React.createClass({

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
var NewsNav = React.createClass({ 
  render : function(){
    console.log(this.props.options)
    var dropdownNodes = this.props.options.map(function(option,index){
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


ReactDOM.render(<NewsNav options={dropInfo} />, document.getElementById('dropdown'));
