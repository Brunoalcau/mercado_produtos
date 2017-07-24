import React , { Component } from 'react';
import './list-view.scss';
import ListRow from '../../molecules/List-row/list-row';
import { connect } from 'react-redux';
import * as actions from '../../../store/search/actions';
import * as reducer from '../../../store/search/reducer';
import _ from 'lodash';
class ListView extends Component {
    render(){
        return (           
            <section className="list-view">
                {_.map(this.props.items.items, this.renderListRow.bind(this))}
            </section>
        );
    }
    renderListRow(e) {
        console.log(e);
        return <ListRow className="list-row" item={e}/>;
    }
}

function mapStateToProps(state){
	return {
        items: reducer.getItems(state)
	};
    
}
export default connect(mapStateToProps)(ListView);