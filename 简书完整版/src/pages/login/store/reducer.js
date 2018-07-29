// 设置login文件夹的reducer
// 引入immutable库,用以保证state不被修改
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false
});

export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
        return state;
    }
}