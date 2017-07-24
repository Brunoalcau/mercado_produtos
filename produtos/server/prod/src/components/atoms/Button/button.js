import React, { Component } from 'react';
import './button.scss'; 
export default class Button extends Component {
    render(){
        return (
            <button {...this.props}>{this.props.children}</button>
        );
    }
}