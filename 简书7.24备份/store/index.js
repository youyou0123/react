import { createStore,compose, applyMiddleware } from 'redux';
//引入thunk中间件
import thunk from 'redux-thunk';
import reducer from './reducer';
// 调试工具使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;