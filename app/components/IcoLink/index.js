import React,{Component} from 'react';
import './iconfont.css';
import './IcoLink.css';


class IcoLink extends React.Component{
    // static propTypes = {
    //     link       : React.PropTypes.string.isRequired,
    //     icoType    : React.PropTypes.string.isRequired,
    //     linkCls    : React.PropTypes.string,
    //     clickEvent : React.PropTypes.func
    //   };
    // static defaultProps = {
    //    link : 'http://www.baidu.com',
    //    icoType : 'user-icon',
    //    linkCls : 'test',
    //    clickEvent : ''
    // }

    // static propTypes = {
    //     link       : React.PropTypes.string.isRequired,
    //     icoType    : React.PropTypes.string.isRequired,
    //     linkCls    : React.PropTypes.string,
    //     clickEvent : React.PropTypes.func
    // }

    render(){

        return (
             <a href={this.props.link}  onClick={this.props.clickEvent} className={this.props.linkCls}>
              <i className={this.props.icoType}></i>
            </a>
        )
    }


}

export default IcoLink;