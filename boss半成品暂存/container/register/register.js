import React from 'react'
import Logo from '../../component/logo/logo'
// 引入 Ant 
import { List,InputItem,Radio,WingBlank,WhiteSpace,Button } from 'antd-mobile'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type:'tiancai' //或者boss
        }
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo />
                <InputItem>用户名</InputItem>
                <WhiteSpace/>
                <InputItem>密码</InputItem>
                <WhiteSpace/>
                <InputItem>确认密码</InputItem>
                <WhiteSpace/>
                <RadioItem checked={this.state.type=='tiancai'}>牛人</RadioItem>
                <WhiteSpace/>
                <RadioItem checked={this.state.type=='boss'}>BOSS</RadioItem>
                <WhiteSpace/>
                <Button type="primary">注册</Button>
            </div>
        );
    }
}

export default Register;