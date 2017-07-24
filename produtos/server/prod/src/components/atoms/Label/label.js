import React, { Component } from 'react';

export default class Label extends Component {
    reducer(){
        return (
            <div>
                <Label {...this.props}>{this.props}</Label>
            </div>
        );
    }
}