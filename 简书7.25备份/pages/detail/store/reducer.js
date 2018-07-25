
// 引入immutable库,用以保证state不被修改
import { fromJS } from 'immutable';
import * as constants from './constants';

export default (state = defaultState,action) => {
    switch(action.type) {
        
        default:
        return state;
    }
}