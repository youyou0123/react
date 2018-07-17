
import React,{Component} from 'react';
import Login from '../login/index'
import App from '../index/index'
import Neaten from '../neaten/index'
import Addn from '../addn/index'
import Addy from '../addy/index'
import Addd from '../addd/index'
import Zongdd from '../zongdd/index'
import Dingdan from '../dingdan/index'
import Yonghu from '../yonghu/index'
import Huiyuan from '../huiyuan/index'

//引入路由和重定向
import {Route,Redirect} from 'react-router-dom';


class Myrouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Route exact path="/" render={()=>{
                    return <Login />
                }}/>
                <Route exact path="/login" render={()=>{
                    return <Redirect to="/login"/>
                }}/>
                <Route exact path="/index" render={()=>{
                    return <App />
                }}/>
                {/* 如果没有设定跳转到哪一页，就强行重定向到第一页 */}
                <Route exact path="/neaten" render={()=>{
                    return <Neaten />
                    // return <Redirect to="/neaten/1"/>
                }}/>

                <Route exact path="/addn" render={()=>{
                    return <Addn />
                }}/>
                <Route exact path="/yonghu" render={(props)=>{
                    return <Yonghu {...{props}}/>   
                }}/>
                <Route exact path="/addy" render={()=>{
                    return <Addy />
                }}/>
                <Route exact path="/zongdd" render={()=>{
                    return <Zongdd />
                }}/>
                <Route exact path="/addd" render={()=>{
                    return <Addd />
                }}/>
                <Route exact path="/dingdan" render={()=>{
                    return <Dingdan />
                }}/>
                <Route exact path="/huiyuan" render={()=>{
                    return <Huiyuan />
                }}/>
                
            </div>
        );
    }
}

export default Myrouter;