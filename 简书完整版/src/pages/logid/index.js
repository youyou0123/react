import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button, Denglu, Zhuce, Line, Dian } from './style';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

// 设置注册页面
class Logid extends PureComponent {
    render(){
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Link to="/login">
                            <Denglu>登陆</Denglu>
                        </Link>
                        <Dian>.</Dian>
                        <Zhuce>注册</Zhuce>
                        <Line></Line>
                        <Input placeholder='请输入账号' innerRef={(input) => {this.account = input}}/>
                        <Input placeholder='请输入密码' type='password' innerRef={(input) => {this.password = input}}/>
                        <Input placeholder='请确认密码' type='password' innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password) }>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
        
    }
}
const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
})
export default connect(mapState,mapDispatch)(Logid);