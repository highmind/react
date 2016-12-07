import React, { Component } from 'react'
import {NewsList, Head, Nav, Loading} from '../../components';
import Axios from'axios'; //引入axios处理ajax
import Mock from 'mockjs';
// mock数据
Mock.mock('http://mockdata/get/newslist', 'get', {
    "data" : [
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(16,24)"
        },
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/01",
          //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img4.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img5.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#0/detail/01",
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

//首页页面
class Main extends Component{
    constructor(props){
        super(props);
        console.log('--------Containers/Main--------')
        console.log('Main执行getInitialState')
        this.state = {
          newslist : [],   // 新闻列表数据
          nav : [],        //导航数据
          loading : true   //loading参数
        }
    }

    getData(id){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
        this.setState({
          newslist: [],
          loading:true
        })

        let self = this;
        let url = 'http://mockdata/get/newslist';
        console.log('Main请求的url为：' + url);
        Axios.get(url).then(function(res){
            console.log('--------Containers/Main--------')
            console.log('Main获取到的数据为：');
            console.log(res.data);
            self.setState({
                newslist : res.data.data,
                loading : false
            })
        })
    }

    componentDidMount(){
        console.log('--------Containers/Main--------')
        console.log('Main执行componentDidMount')
        let url = 'http://localhost:8080/api/nav.json';
        let self = this;
        Axios.get(url).then(function(res){
          self.setState({
              nav:res.data.data
          })
        })
        // 初始化数据
        this.getData('tuijian'); 
    }

    componentDidUpdate(prevProps) {
        // 上面步骤3，通过参数更新数据
        let oldId = prevProps.params.id;
        console.log('--------Containers/Main--------')
        console.log('Main执行componentDidUpdate');
        console.log('oldId '+ oldId);
        let id = this.props.params.id;
        console.log('newId '+ id);
        if (id !== oldId){
            // 如果路由获取不到参数，获取推荐数据
            if(typeof(id) == 'undefined'){
              console.log("id是 " + id + " componetWillReceiveProps");
              this.getData('tuijian');
            }
            // 否则获取相应栏目数据，根据id查询
            else {
              console.log('--------Containers/Main--------')
              console.log("Main执行componetWillReceiveProps");
              this.getData(id);
            }
        }
     
    }

    render(){
        return(
          <div>
              <Head name="橙子新闻" type="MainHead"/>
              <Nav data = {this.state.nav}/>
              <div>
                  <Loading active={this.state.loading} />
                  <NewsList data={this.state.newslist} />
              </div>
          </div>
        )
     }

}

export default  Main

