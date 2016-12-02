import React, { Component } from 'react';
import './index.css';

class Loading extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={
         
        }
    }
  
    render(){ 
        return (
            <div className={this.props.active ? 'loading loading-show' : 'loading-hide'}> 
               <span></span> 
               <span></span>
               <span></span>
               <span></span> 
               <span></span> 
            </div>
        )
    }

}

export default Loading;