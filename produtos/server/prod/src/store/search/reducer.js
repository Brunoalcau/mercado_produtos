import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
const initialState = Immutable({
  items: [],
  search : ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_FETCHED:
        return state.merge({
            items: action.items     
        });
    case types.SEARCH_INPUT:
        return state.merge({
            search: action.text     
        });
    default:
      return state;
  }
}


export function getInput(state){
    return state.search.search;
}

export function getItems(state){
    return state.search.items
}