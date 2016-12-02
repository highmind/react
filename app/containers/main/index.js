import React, { Component } from 'react'
import {NewsList, Loading} from '../../components';
import Axios from'axios'; //引入axios处理ajax
import Mock from 'mockjs';
// mock数据
Mock.mock('http://mockdata/get/newslist', 'get', {
    "data" : [
         {
          "url": "http://.baidu.com1",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(16,24)"
        },
        {
          "url": "http://www.baidu.com2",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "http://www.baidu.com3",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "http://www.baidu.com4",
          //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img4.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "http://www.baidu.com5",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img5.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "http://www.baidu.com6",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img6.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        }

    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '800'
})

class Main extends Component{

    constructor(props){
        super(props);
        // 相当于ES5 getInitalState,使用rap的假数据
        // let url = 'http://rap.taobao.org/mockjsdata/10903/nav.json';
        // let url = 'http://mockdata/get/newslist';
        // Axios.get(url).then(function(res){
        //   console.log(res.data.data); 
        // })
        // 第一步
        console.log('执行getInitialState')
         this.state = {
          data : [],
          loading : true //loading参数
        }
    }

    getData(id){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
        this.setState({
          data: [],
          loading:true
        })

        let self = this;
        // let url = 'http://rap.taobao.org/mockjsdata/10903/newslist.json?colname=' + id;
        let url = 'http://mockdata/get/newslist';
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
          console.log('获取到的数据为：');
          console.log(res.data);
          self.setState({
            data : res.data.data,
            loading : false
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
            <Loading active={this.state.loading} />
            <NewsList data={this.state.data} />
          </div>
        )
     }


}


export default  Main

