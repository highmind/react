import React, { Component } from 'react';
import NewsLi from '../NewsLi';

class NewsList extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={}
    }

    render(){
        var newsNodes = this.props.data.map(function(detailData, index){
            return(
                <NewsLi key={index} data={detailData} />
            );
        }); 
        return(
          <div>{newsNodes}</div>
        )
    }

}

export default NewsList;