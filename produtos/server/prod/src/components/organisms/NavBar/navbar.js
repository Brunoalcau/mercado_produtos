import React, { Component } from 'react'
import InputGroup from '../../molecules/Input-group/input-group';
import Icon from '../../atoms/Icon/icon';
import './navbar.scss';

export default class NavBar extends Component {
    render(){
        return(
            <header className="header">
                <nav className="nav-bar">
                    <div className="nav-bar-left">
                        <Icon className="icon-logo" />
                    </div>
                    <div className="nav-bar-right">
                        <InputGroup /> 
                    </div>
                </nav>
            </header>
        );
    }
}
