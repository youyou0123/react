import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import store from './store';
import Login from './pages/login';
import Logid from './pages/logid';
import Write from './pages/write';
import Download from './pages/download';
import Hot from './pages/hot';
import Topicmin from './pages/topicmin';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/logid' exact component={Logid}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/hot' exact component={Hot}></Route>
              <Route path='/topicmin/:id' exact component={Topicmin}></Route>
              <Route path='/download' exact component={Download}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider> 

    );
  }
}

export default App;
