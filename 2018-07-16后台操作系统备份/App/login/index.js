import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="box1">
                <div className="login">
                    <div className="denglu">登  陆</div>
                    <div className="zh">
                        <label>账号：</label>
                        <input type="text" placeholder="请输入用户名或注册邮箱"/>
                    </div>
                    <div className="mm">
                        <label>密码：</label>
                        <input type="password" placeholder="请输入密码"/>
                    </div>
                    <div className="xuanxiang">
                        <input className="checkbox" type="checkbox" />
                        <a className="a1">记住密码</a>
                        <a className="a2">密码重置</a>
                    </div>
                    <div className="button5">
                        <a>
                            点击登录
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;