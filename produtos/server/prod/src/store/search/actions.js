import _ from 'lodash';
import * as types from './actionTypes';
import itemsService from '../../services/items';

export function fetchItems(text) {
  return async(dispatch, getState) => {
    try {
      const items = await itemsService.getItems(text);
      dispatch({ type: types.SEARCH_FETCHED, items });
    } catch (error) {
      console.error(error);
    }
  };
};
export function fetchItemById(id) {
  return async(dispatch, getState) => {
    try {
      const items = await itemsService.getItems(id);
      dispatch({ type: types.SEARCH_FETCHED, items });
    } catch (error) {
      console.error(error);
    }
  };
};

export function setInput(text) {
    return async(dispatch, getState) => {
        dispatch({type: types.SEARCH_INPUT, text});
    };
}
