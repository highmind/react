import React, { Component } from 'react';
import './index.css';

class NewsLi extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={
         
        }
    }

   
    render(){
         

        return (
          <div className="news-wrap">
          <div className="news-img">
              <a href={this.props.data.url}>
                  <img width="100%" src={this.props.data.imgUrl} alt="" />
              </a>
          </div>
          <div className="news-con">
              <h4>
                  <a href={this.props.data.url}>
                      {this.props.data.title}
                  </a>
              </h4>
              <p>{this.props.data.time}</p>
          </div>
        </div>
        )
    }


}

export default NewsLi;