import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { WriteWrapper, WriteBox, Input, Button } from './style';

class Write extends PureComponent {
    render(){
        const { loginStatus } = this.props;
        if(loginStatus){
            return (
                <WriteWrapper>
                    <WriteBox> 写文章界面
                    </WriteBox>
                </WriteWrapper>
            )
        }else{
            return <Redirect to='/login' />
        }
        
    }
}
const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})


export default connect(mapState,null)(Write);