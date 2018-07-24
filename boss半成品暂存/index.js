import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { createStore,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux'
// import Dashboard from './Dashboard'
import reducers from './reducer'
import { 
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import './config'
import Login from "./container/login/login"
import Register from "./container/register/register"
import AuthRoute from './component/authroute.js/authroute'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

    ReactDom.render(
        (<Provider store={store}> 
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </div>
            </BrowserRouter>
        </Provider>),
        document.getElementById('root')
    )

