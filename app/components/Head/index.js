import React, { Component } from 'react';
import IcoLink from '../IcoLink';
import './index.css';

class Head extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={}
    }
    
    getNodes(type){

        switch (type){
            case 'MainHead':
                    return (
                        <div>
                            <IcoLink link={"http://www.baidu.com"} icoType={"iconfont icon-user"} linkCls={"user-center-btn"} />
                            <IcoLink link={"http://www.qq.com"} icoType={"iconfont icon-sousuolansousuo"} linkCls={"search-btn"} />
                            <h1 className="title">{this.props.name}</h1>
                        </div>
                    )
            break;
            case 'BackHead':
                    return (
                            <div>
                                <IcoLink link={"javascript:history.back();"} icoType={"iconfont icon-fanhui"} linkCls={"back-btn"} />
                                <h1 className="title">{this.props.name}</h1>
                            </div>
                    )
            break;
        }
    }

    render(){
        let headNodes = this.getNodes(this.props.type);
        return (
            <div className="head">
                {headNodes}
            </div>
        )
    }


}

export default Head;