import React, { Component } from 'react';
import Button from '../../atoms/Button/button';
import Icon from '../../atoms/Icon/icon';
import Input from '../../atoms/Input/input';
import { connect } from 'react-redux';
import './input-group.scss';
import * as actions from '../../../store/search/actions';
import * as reducer from '../../../store/search/reducer';

class InputGroup extends Component {
    render(){
        return(
             <div className="group">
                <Input className="input-search" onChange={ this.handleChange.bind(this) } placeholder="Nunca dejes de Buscar"/>
                <span>
                    <Button onClick={ this.onClick.bind(this) } className="btn btn-gray btn-sm btn-group">
                        <Icon className="icon-search" />
                    </Button>
                </span>
             </div>
        );
    }
    onClick(){
        this.props.dispatch(actions.fetchItems(this.props.search));
    }

    handleChange(e) {
        this.props.dispatch(actions.setInput(e.target.value));
    }
}

function mapStateToProps(state){
	return {
        search: reducer.getInput(state)
	};
}
export default connect(mapStateToProps)(InputGroup);