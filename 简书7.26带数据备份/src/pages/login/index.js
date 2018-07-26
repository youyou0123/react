import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button, Denglu, Zhuce, Line, Dian } from './style';
import { actionCreators } from './store';


class Detail extends PureComponent {
    render(){
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Denglu>登陆</Denglu>
                        <Dian>.</Dian>
                        <Zhuce>注册</Zhuce>
                        <Line></Line>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
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
export default connect(mapState,mapDispatch)(Detail);