import React, { Component } from 'react'
import {IcoLink, Head, Nav, NewsList} from '../components';
class App extends Component{
 
    render(){
        return(
          <div>
              <Head />
              <Nav />
              {this.props.children}
          </div>
        )
    }

}

export default  App

