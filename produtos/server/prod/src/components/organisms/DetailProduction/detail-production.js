import React, { Component } from 'react';
import './detail-production.scss';
import Button from '../../atoms/Button/button';
import * as actions from '../../../store/search/actions';
import { connect } from 'react-redux';
import * as reducer from '../../../store/search/reducer';

class DetailProduction extends Component {
    componentDidMount() {
		this.props.dispatch(actions.fetchItemById(this.props.match.params));
	}
    render(){
        console.log(this.props.item);
        
        const title = this.props.item.item ? this.props.item.item.title: '',
              amount = this.props.item.item? this.props.item.item.price.amount: '',
              decimals = this.props.item.item? this.props.item.item.price.decimals: '';
        return (
          <div className="details-production">
              <div className="details-production_container">
                <div className="details-production_img">
                    <img className="details-production__item-img" src={this.props.item.picture} /> 
                </div>
                <div className="details-production__title">
                    <span className="details-production__title-sales">Nuevo {this.props.item.sold_quantity} - vendidos </span>
                    <div className="details-production__title-span">
                        <span>{title}</span>
                    </div>
                    <p>
                        R$ {amount},
                        <span class="decimal">{decimals}</span>
                    </p>
                    
                    <div>
                        <Button className="btn btn-default btn-md">Comprar</Button>
                    </div>
                </div>
              </div>
              <div className="details-production__description">
                <p>{title}</p>
                <span>{this.props.item.description}</span>
              </div>
          </div>  
        );
    }
}

function mapStateToProps(state){
	return {
        item: reducer.getItems(state)
	};
}

export default connect(mapStateToProps)(DetailProduction); 