import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,IndexLink, Link, hashHistory } from 'react-router'
import Rem from '../libs/js/rem';  //处理rem的js
import './index.css';              //首页css
import Axios from'axios'; //引入axios处理ajax
import {IcoLink} from './components';
import {Head} from './components';
import {Nav} from './components';
import {NewsList} from './components';

// 主导航数据
var newsNavData = [
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

];



// 主容器组件
// this.props.children这里用于路由切换时，传入组件
var  App = React.createClass({

     getInitialState : function(){
        return {};

     },

     render: function(){
        return(
          <div>
              <Head />
              <Nav data={newsNavData} />
              {this.props.children}
          </div>
        );
     }

});



var Index = React.createClass({
      // 使用axios获取假数据
      getData : function(id){
        var self = this;
        var url = 'http://localhost:8080/api/news' + id +'.json';
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
          console.log('获取到的数据为：');
          console.log(res.data);
          self.setState({
            data : res.data
          })
          
        })
        
      },

      getInitialState : function(){
        // 这里测试跨域访问，对业务逻辑无实际意义需,要apache开启跨域访问
        var url = 'http://localhost/api/news.json';
        Axios.get(url).then(function(res){
          console.log(res.data); 
        })
        // 第一步
        console.log('执行getInitialState')
        return {
          data : []
        };

      },

      componentDidMount: function(){
        
        // 上面的步骤2，在此初始化数据
        console.log('执行componentDidMount')
        // 初始化数据
        this.getData('tuijian');
       
      },
      //完成渲染新的props或state时，调用
      componentDidUpdate: function(prevProps) {
        // 上面步骤3，通过参数更新数据
        var oldId = prevProps.params.id;
        console.log('oldId '+ oldId)
        var id = this.props.params.id;
        console.log('newId '+ id)
        if (id !== oldId){
            // 如果路由获取不到参数，获取推荐数据
            if(typeof(id) == 'undefined'){
              console.log(111);
              console.log("id是 " + id + " componetWillReceiveProps")
              this.getData('tuijian');
            }
            // 否则获取相应栏目数据，根据id查询
            else {
              console.log("百家-componetWillReceiveProps")
              this.getData(id);
            }

        }
     
      },

      componentWillUnmount: function() {
        // 上面步骤四，在组件移除前忽略正在进行中的请求
        // this.ignoreLastFetch = true
      },

    

      componentWillMount:function(){
        console.log('执行componentWillMount')
        // this.setState({
        //       data : newsData
        //   })
      },


     render: function(){
        return(
          <div>
            <NewsList data={this.state.data} />
          </div>
        )
     }

});

ReactDOM.render((

  <Router history={hashHistory}>
    
    <Route path="/" component={App}>
      <IndexRoute component={Index} /> //首页
      <Route path="index/:id" component={Index} /> //本地
    </Route>

  </Router>

), document.getElementById('app'))

