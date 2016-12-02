import React, { Component } from 'react'
// import {NewsList, Loading} from '../../components';
import Axios from'axios'; //引入axios处理ajax
import Mock from 'mockjs';
//新闻详情页面
// mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
  "data" : {
          "title" : "@csentence(16,24)",
          "author": "@cword(4)",
          "imgUrls" : [
            { "url" : "http://localhost:8080/images/news-img1.jpg"},
            { "url" : "http://localhost:8080/images/news-img2.jpg"},
            { "url" : "http://localhost:8080/images/news-img3.jpg"}
          ],
          "time" : "@time",
          "content" : "@cparagraph(8)" 
        }  

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '800'
})


class Detail extends Component{
    constructor(props){
        super(props);
        // 第一步
        console.log('执行getInitialState')
        this.state = {
          data : [],
          imgUrls : []
        }
    }

    getData(id){
        let self = this;
        let url = 'http://mockdata/get/detail';
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
          let resData = res.data;
          console.log('详情页面获取到的数据为：');
          console.log(resData);

          self.setState({
            data : resData.data,
            imgUrls : resData.data.imgUrls
          })
          
        })
    }


    componentDidMount(){
        console.log('执行componentDidMount')
        // 初始化数据
        let id = this.props.params.id;
        console.log('详情页获取到的传值id: '+ id)
        this.getData(id); 
    }

    render(){

        let imgNodes = this.state.imgUrls.map(function(data, index){
            console.log(data.url)
            return (
             <img src={data.url} key={index} alt="" />
            )
        })

        return(
          <div className="detail-wrap">
            <h4 className="detail-title">{this.state.data.title}</h4>
            <div className="detail-bar">
              <span className="detail-author">{this.state.data.author}</span>
              <span className="detail-time">{this.state.data.time}</span>
              {imgNodes}
            </div>
            <div className="detail-con">
              {this.state.data.content}
            </div>
          </div>
        )
    }

}

export default  Detail

