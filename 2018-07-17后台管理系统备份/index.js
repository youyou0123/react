import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
// 引入thunk
import thunk from 'redux-thunk'; 
// 引入react-redux
import {Provider} from 'react-redux'

import {reducers} from './actions/reducers'
import {BrowserRouter as Router} from 'react-router-dom'
// 引入路由文件
import Myrouter from './App/Router/router'
// 引入全局样式
import './App/css/unify.css'


const store = createStore(reducers,applyMiddleware(thunk))
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Myrouter />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
if(module.hot){
    module.hot.accept()
}