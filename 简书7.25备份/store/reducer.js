// 整合reducers
import { combineReducers } from 'redux-immutable';
// 引入header下面的reducer
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';


const reducer =  combineReducers({
    header:headerReducer,
    home:homeReducer
})
export default reducer;