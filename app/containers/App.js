import React, { Component } from 'react'
// 主容器
class App extends Component{

    constructor(props){
        super(props);
        // 相当于ES5 getInitalState,使用rap的假数据
        // 第一步
        console.log('主容器app开始执行getInitialState')
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log('主容器APP开始执行componentDidMount')
        // 初始化数据
    }

    render(){
        return(
          <div>
              {this.props.children}
          </div>
        )
    }

}

export default  App

