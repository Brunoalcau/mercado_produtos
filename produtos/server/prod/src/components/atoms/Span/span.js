import React, { Component }from 'react';
import './span.scss';
export default class Span extends Component {
    reducer() {
        return(
            <span {...this.props}>{props.children}</span>
        );
    }
}