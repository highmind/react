import React, { Component } from 'react'
import {NewsList, Head, Nav, Slider, Loading} from '../../components';
import Axios from'axios'; //引入axios处理ajax
//首页页面
class Main extends Component{
    constructor(props){
        super(props);
        console.log('--------Containers/Main--------')
        console.log('Main执行getInitialState')
        this.ignoreLastFetch = false;
        this.state = {
          newslist : [],   // 新闻列表数据
          nav : [],        //导航数据
          slider : [],     //轮播图数据
          sliderId : 0,
          loading : true   //loading参数
        }
    }

    getData(id){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
        this.setState({
          loading : true   //loading参数
        })

        let self = this;
        let url = 'http://mockdata/get/newslist';
        console.log('Main请求的url为：' + url);
        Axios.get(url).then(function(res){
            console.log('--------Containers/Main--------')
            console.log('Main获取到的数据为：');
            console.log(res.data.slider);
            if(!self.ignoreLastFetch){
                self.setState({
                    newslist : res.data.data,
                    slider : res.data.slider.data,
                    sliderId : res.data.slider.id,
                    loading : false
                })
            }

            console.log(res.data.slider)
            // 设置滚动条位置
            self.setPosition();
        })

    }
    
    // 设置滚动条位置
    setPosition(){
        let path = this.props.location.pathname;
        let scrollTop = localStorage.getItem(path) || 0;
        window.scrollTo(0, scrollTop); 
    }

    componentDidMount(){
        console.log('--------Containers/Main--------');
        console.log('Main执行componentDidMount');

        let url = 'http://mockdata/get/nav';
        let self = this;
        let NavData = localStorage.getItem('NavData');
        // 如果导航数据在本地存在，则不请求远程数据
        if(NavData != null){
            self.setState({
                nav:JSON.parse(NavData)
            })
        }else{
            Axios.get(url).then(function(res){
              console.log(res.data)
                self.setState({
                    nav:res.data.data
                })
                localStorage.setItem("NavData", JSON.stringify(res.data.data));
            })
        }

        // 初始化新闻列表数据
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
              console.log("Main执行componentDidUpdate");
              this.getData(id);
            }
        }
     
    }

    componentWillUnmount () {
        // 上面步骤四，在组件移除前忽略正在进行中的请求
        this.ignoreLastFetch = true
    }

    render(){
        return( 
              <div>
                  <Head name="橙子新闻" type="MainHead"/>
                  <Nav data={this.state.nav}/>
                  <div>
                      <Loading active={this.state.loading} />
                      <div className={this.state.loading ? "con-hide" : "con-show"}>
                        <Slider id={this.state.sliderId} data={this.state.slider} />
                        <NewsList data={this.state.newslist} />
                      </div>
                  </div>
              </div>
        )
    }

}    
export default  Main

