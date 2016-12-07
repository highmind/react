import React, { Component } from 'react'
import Axios from'axios'; //引入axios处理ajax
import {Head, Loading} from '../../components';
import './index.css';
import Mock from 'mockjs';
//新闻详情页面
// mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
  "data" : {
    "title" : "@csentence(16,24)",
    "author": "@cword(4)",
    "imgUrls" : [
        { "url" : "http://localhost:8080/images/detail-img1.jpg"},
        { "url" : "http://localhost:8080/images/detail-img2.jpg"},
        { "url" : "http://localhost:8080/images/detail-img3.jpg"}
    ],
    "time" : "@time",
    "content" : "<p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p>" 
  }  

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '800'
})

class Detail extends Component{
    constructor(props){
        super(props);
        console.log('--------Container/Detail--------');
        console.log('执行getInitialState');
        this.state = {
            data : [],
            imgUrls : [],
            loading : true
        }
    }

    getData(id){
        let self = this;
        let url = 'http://mockdata/get/detail';
        console.log('--------Container/Detail--------');
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
            let resData = res.data;
            console.log('--------Container/Detail--------');
            console.log('详情页面获取到的数据为：');
            console.log(resData);

            self.setState({
                data : resData.data,
                imgUrls : resData.data.imgUrls,
                loading : false
            }) 
        })
    }

    componentDidMount(){
        console.log('--------Container/Detail--------');
        console.log('执行componentDidMount')
        // 初始化数据
        let id = this.props.params.id;
        console.log('详情页获取到的传值id: '+ id)
        this.getData(id); 
    }

    render(){
        // 图片数据为数组，生成图片节点
        let imgNodes = this.state.imgUrls.map(function(data, index){
            return (
                <img width="100%" src={data.url} key={index} alt="" />
            )
        })

        return(
           
            <div className="detail-wrap"> 
                <Head name="橙子新闻" type="BackHead" />
                <Loading active={this.state.loading} />
                <div className="detail-con">
                    <h4 className="detail-title">{this.state.data.title}</h4>
                    <div className="detail-bar">
                        <span className="detail-author">{this.state.data.author}</span>
                        &nbsp;<span className="detail-time">{this.state.data.time}</span> 
                    </div>
                    {imgNodes}
                    <div className="detail-text" dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                </div>
          </div>
        )
    }

}

export default  Detail

