import React,{Component} from 'react';
import { Link } from 'react-router';
import Carousel from 'nuka-carousel';
import './index.css';

class Slider extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={
            
        }
    }
    
    render(){
        return (
            <Carousel>
                <Link to="/detail/04">
                    <img width="100%" src="/images/timg1.jpg"/>
                </Link>
                <Link to="/detail/04">
                    <img width="100%" src="/images/timg2.jpg"/>
                </Link>
                <Link to="/detail/04">
                    <img width="100%" src="/images/timg3.jpg"/>
                </Link>
            </Carousel> 
        )
    }
}

export default Slider;
      