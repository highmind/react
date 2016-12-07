import React, { Component } from 'react'
// 主容器
class App extends Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState,
        console.log('-------App--------')
        console.log('主容器App执行getInitialState')
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        console.log('-------App--------')
        console.log('主容器App执行componentDidMount')
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

