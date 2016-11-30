import React, { Component } from 'react'
import {NewsList} from '../../components';
import Axios from'axios'; //引入axios处理ajax

class Main extends Component{

    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        let url = 'http://localhost/api/news.json';
        Axios.get(url).then(function(res){
          console.log(res.data); 
        })
        // 第一步
        console.log('执行getInitialState')
         this.state={
          data : []
        }
    }

    getData(id){
        let self = this;
        let url = 'http://localhost:8080/api/news' + id +'.json';
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
          console.log('获取到的数据为：');
          console.log(res.data);
          self.setState({
            data : res.data
          })
          
        })
    }


    componentDidMount(){
        
        // 上面的步骤2，在此初始化数据
        console.log('执行componentDidMount')
        // 初始化数据
        this.getData('tuijian'); 
    }

    componentDidUpdate(prevProps) {
        // 上面步骤3，通过参数更新数据
        let oldId = prevProps.params.id;
        console.log('oldId '+ oldId)
        let id = this.props.params.id;
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
     
      }

     render(){
        return(
          <div>
            <NewsList data={this.state.data} />
          </div>
        )
     }


}


export default  Main

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
