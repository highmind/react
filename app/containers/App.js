import React, { Component } from 'react'
import {IcoLink, Head, Nav, NewsList} from '../components';
import Axios from'axios'; //引入axios处理ajax
class App extends Component{

    constructor(props){
        super(props);
        // 相当于ES5 getInitalState,使用rap的假数据
    
        // 第一步
        console.log('执行getInitialState')

        this.state = {
            data:[]
        }

    }

    componentDidMount(){

        // 上面的步骤2，在此初始化数据
        console.log('执行componentDidMount')
        // 初始化数据
        let url = 'http://192.168.0.120:8080/api/nav.json';
        //let url = 'http://rap.taobao.org/mockjsdata/10903/nav.json';
        let self = this;
        Axios.get(url).then(function(res){
          self.setState({
            data:res.data.data
          })
        })
    }

    render(){
        return(
          <div>
              <Head />
              <Nav data = {this.state.data}/>
              {this.props.children}
          </div>
        )
    }

}

export default  App

