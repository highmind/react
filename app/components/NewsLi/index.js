import React, { Component } from 'react';
import './index.css';

class NewsLi extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={
         
        }
    }
    
    getImgNodes(imgData){
        let imgNodes = imgData.map(function(imgDetailData, index){
            return (
              <img width="100%" src={imgDetailData} key={index} alt="" />
            )
        })
        return imgNodes
    }

    getNodes(type){
      let imgNodes = this.getImgNodes(this.props.data.imgUrl);

      switch (type){
        // 单张图形式
        case 1:
          return(
            <div className="news-wrap">
                <div className="news-img">
                    <a href={this.props.data.url}>
                        {imgNodes}
                    </a>
                </div>
                <div className="news-con">
                    <h4>
                        <a href={this.props.data.url}>
                            {this.props.data.title}
                        </a>
                    </h4>
                    <p className="time-bar">{this.props.data.time}</p>
                </div>
            </div>
          )
        break;
        // 三张图形式
        case 2:
            return(
              <div className="news-wrap2">
                  <div className="news-con2">
                      <h4>
                          <a href={this.props.data.url}>
                              {this.props.data.title}
                          </a>
                      </h4>
                  </div>
                  <div className="news-img2">
                      <a className="img-wrap" href={this.props.data.url}>
                          {imgNodes}
                      </a>
                  </div>
                  <p className="time-bar">{this.props.data.time}</p>
                  
              </div>  
            )
        break;
      }   
    }

    render(){
        let newsNodes = this.getNodes(this.props.data.displayType);
        return (
          <div>
              {newsNodes}
          </div>
        )
    }


}

export default NewsLi;