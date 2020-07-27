import React from 'react';
import{
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import routes from './router/router.js';
import LeftTree from './common/leftTree/leftTree.js'
import Head from './common/head/head.js';
import Foot from './common/foot/foot.js';
import {Row,Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Row>
      <Col span={3}>
        <LeftTree/>
      </Col>
      <Col span={21}>
        <Head/>
        right
        <Foot/>
      </Col>
    </Row>
    // <div>
    //   <Switch>
    //     {
    //       routes.map(((item) => {
    //         return(
    //           <Route
    //             key={item.path}
    //             path = {item.path}
    //             component = {item.component}
    //           />
    //         )
    //       }))
    //     }
    //     {/* {这里用 redirect 进行首页自动跳转到 /home路由下， exact意味着精确匹配，当为 / 的时候才跳转到 /home} */}
    //     <Redirect exact from ='/'to={routes[0].path} />
    //     {/* 如果找不到页面就去404 */}
    //     <Redirect to = '/404'/>
    //   </Switch>
    // </div>
  );
}

export default App;
