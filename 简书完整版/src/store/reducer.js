// 整合reducers
import { combineReducers } from 'redux-immutable';
// 引入header下面的reducer
import { reducer as headerReducer } from '../common/header/store';
// 引入home下面的reducer
import { reducer as homeReducer } from '../pages/home/store';
// 引入detal下面的reducer
import { reducer as detailReducer } from '../pages/detail/store';
// 引入login下面的reducer
import { reducer as loginReducer } from '../pages/login/store';

const reducer =  combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer;