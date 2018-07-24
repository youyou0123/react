import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
// @withRouter
class AuthRoute extends React.Component {
    componentDidMount(){
        // 获取用户信息
        axios.get('/user/info')
        .then(res=>{
            if(res.status === 200){
                if(res.data.code === 0){
                    // 有登录信息的
                }else{
                    // 没有登录信息的
                    this.props.history('/')
                    // console.log(this.props.history)
                }
                
            }
        })
        // 判断是否登陆
        // 现在的URL地址   login是不需要跳转的
        // 用户是否完善个人信息（选择头像、个人简介)
    }
    render(){
        return <p>判断跳转的地方</p>
    }
}

export default AuthRoute;