import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute,IndexLink, Link, hashHistory } from 'react-router'
import Routes from './routes';
import Rem from '../libs/js/rem';  //处理rem的js
import './index.css';              //首页css
// import Axios from'axios'; //引入axios处理ajax
const rootEl = document.getElementById('app');

ReactDOM.render(<Routes />,rootEl);
// 主容器组件
// this.props.children这里用于路由切换时，传入组件
// var  App = React.createClass({

//      getInitialState : function(){
//         return {};

//      },

//      render: function(){
//         return(
//           <div>
//               <Head />
//               <Nav />
//               {this.props.children}
//           </div>
//         );
//      }

// });



// var Index = React.createClass({
//       // 使用axios获取假数据
//       getData : function(id){
//         var self = this;
//         var url = 'http://localhost:8080/api/news' + id +'.json';
//         console.log('请求的url为：' + url);
//         Axios.get(url).then(function(res){
//           console.log('获取到的数据为：');
//           console.log(res.data);
//           self.setState({
//             data : res.data
//           })
          
//         })
        
//       },

//       getInitialState : function(){
//         // 这里测试跨域访问，对业务逻辑无实际意义需,要apache开启跨域访问
//         var url = 'http://localhost/api/news.json';
//         Axios.get(url).then(function(res){
//           console.log(res.data); 
//         })
//         // 第一步
//         console.log('执行getInitialState')
//         return {
//           data : []
//         };

//       },

//       componentDidMount: function(){
        
//         // 上面的步骤2，在此初始化数据
//         console.log('执行componentDidMount')
//         // 初始化数据
//         this.getData('tuijian');
       
//       },
//       //完成渲染新的props或state时，调用
//       componentDidUpdate: function(prevProps) {
//         // 上面步骤3，通过参数更新数据
//         var oldId = prevProps.params.id;
//         console.log('oldId '+ oldId)
//         var id = this.props.params.id;
//         console.log('newId '+ id)
//         if (id !== oldId){
//             // 如果路由获取不到参数，获取推荐数据
//             if(typeof(id) == 'undefined'){
//               console.log(111);
//               console.log("id是 " + id + " componetWillReceiveProps")
//               this.getData('tuijian');
//             }
//             // 否则获取相应栏目数据，根据id查询
//             else {
//               console.log("百家-componetWillReceiveProps")
//               this.getData(id);
//             }

//         }
     
//       },

//       componentWillUnmount: function() {
//         // 上面步骤四，在组件移除前忽略正在进行中的请求
//         // this.ignoreLastFetch = true
//       },

    

//       componentWillMount:function(){
//         console.log('执行componentWillMount')
//         // this.setState({
//         //       data : newsData
//         //   })
//       },


//      render: function(){
//         return(
//           <div>
//             <NewsList data={this.state.data} />
//           </div>
//         )
//      }

// });

// ReactDOM.render((

//   <Router history={hashHistory}>
    
//     <Route path="/" component={App}>
//       <IndexRoute component={Index} /> //首页
//       <Route path="index/:id" component={Index} /> //本地
//     </Route>

//   </Router>

// ), document.getElementById('app'))

