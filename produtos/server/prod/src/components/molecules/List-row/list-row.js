import React, { Component } from 'react';
import Icon from '../../atoms/Icon/icon';
import './list-row.scss';
import * as actions from '../../../store/search/actions';
import * as reducer from '../../../store/search/reducer';
import { connect } from 'react-redux';

class ListRow extends Component {
    render(){
        const className = this.props.item.free_shippping ? 'icon-shipping' : '';
        const href = `/detail-production/${this.props.item.id}`;
        return (
            <a className="list-row-container" href={href}>
                <div {...this.props}>
                    <img className="item-img" src={this.props.item.picture} /> 
                </div>
                <div className="list-row-text">
                    <p className="list-row-text__price">
                        <span>$ {this.props.item.price.current}</span>
                        <Icon className={className}/>
                    </p>
                    <span>
                        {this.props.item.title}
                    </span>
                </div>
                <div className="list-row-text__address">
                    <p>{this.props.item.condition}</p>
                </div>
            </a>
        );
    }

    onClickRow(){
        // this.props.dispatch()
        console.log(this.props.item);
    }
}
function mapStateToProps(state){
	return {
        
	};
}
export default connect(mapStateToProps)(ListRow);