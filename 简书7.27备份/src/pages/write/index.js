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
                    <WriteBox>
                        <img style={{ width:'100%',height:'100%' }}
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532687737750&di=4515db43b31a38369a455d3195424c0b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Ddf00e7fcebfe9925df0161105dd03bb3%2F241f95cad1c8a7862c3eb5376c09c93d70cf50f7.jpg"
                        /> 
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