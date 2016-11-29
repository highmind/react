import React,{Component} from 'react';
import { Link,IndexLink } from 'react-router';
import './index.css';


var NewsNavLink = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
  },

  render: function(){
    return(
        <Link to={this.props.link} activeClassName="route-active" className={this.props.active ? 'nav-link-active' : 'nav-link-disabled'}  key={this.props.id}>{this.props.name}</Link>
    )
  }


});

class NavLink extends React.Component{

    render(){
        return (
            <Link to={this.props.link} activeClassName="route-active" className={this.props.active ? 'nav-link-active' : 'nav-link-disabled'}  key={this.props.id}>{this.props.name}</Link>
        )
    }

}

export default NavLink;