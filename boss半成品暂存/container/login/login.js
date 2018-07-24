import React from 'react'
import Logo from '../../component/logo/logo'
import Register from '../register/register'
// 引入 Ant 
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this)
    }
    register(){
        console.log(123)
        this.props.history.push('/reginster')
    }
    render() {
        return (
            <div>
                <Logo />
                <h2>我是登录页</h2> 
                <WingBlank>
                    <List>
                         <WhiteSpace />
                        <InputItem>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                        <WhiteSpace />
                    </List>
                    <WhiteSpace />
                    <Button type="primary">登陆</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                    <WhiteSpace />
                </WingBlank>
            </div>
        );
    }
}

export default Login;