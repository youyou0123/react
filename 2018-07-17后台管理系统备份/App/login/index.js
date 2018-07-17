import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'',password:'' };
    }
// 注册
    login01 = () =>{
        let { username,password } = this.state;
        fetch('http://localhost:88/api/user/register?username='+username+'&password='+password)
        .then(e => e.json())
        .then(data => {
            if(data.code == 0){
                alert(1)
                // Ge(),
                // GetPage();
            } 
        });
    }
    // 输入密码
    pvalue = () =>{
        let input = document.querySelector('input')
        let inputs = input.querySelectorAll('input')
        
        console.log(inputs)

    }
    render() {
        return (
            <div className="box1">
                <div className="login1">
                    <button className="denglu">登  陆</button>
                    <button className="zhuce">注  册</button>
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
                <div className="login2">
                    <button className="denglu">登  陆</button>
                    <button className="zhuce">注  册</button>
                    <div className="zh2">
                            <label>账号：</label>
                            <input type="text" placeholder="请输入用户名或注册邮箱"
                            
                            />
                        </div>
                        <div className="mm2">
                            <label>密码：</label>
                            <input type="password" placeholder="请输入密码"
                            onChange={this.pvalue}
                            />
                        </div>
                        {/* <div className="mm3">
                            <label>确认密码：</label>
                            <input type="password" placeholder="请输入密码"/>
                        </div> */}
                        <div className="xuanxiang2">
                            <input className="checkbox" type="checkbox" />
                            <a className="a1">记住密码</a>
                            <a className="a2">密码重置</a>
                        </div>
                        <div className="button6">
                            <a onClick = { this.login01} >
                                点击注册
                            </a>
                        </div>

                </div>
            </div>
        );
    }
}

export default Login;