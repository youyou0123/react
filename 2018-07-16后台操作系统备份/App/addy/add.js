import React,{Component} from 'react';
import {connect} from 'react-redux';
// 引入方法
import * as actions from '../../actions/actions'
// 连接数据
import { bindActionCreators } from 'redux'
// 引入withRouter组件
import {withRouter} from 'react-router-dom'
// 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/addy.css'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    // 增加
    Add = () => {
        console.log('加加加')
        // 解构actions中的 AddList 
        let {AddList} = this.props;
        // 获取元素
        let inputy = document.querySelector('.inputy');
        let inputs = inputy.querySelectorAll('input');
        // 解构tishi history
        let {history} = this.props;
        let arr = [];
        // 循环value值
        for(let i = 0;i<inputs.length;i++){
            // 将value值push到数组中
            arr.push(inputs[i].value);
        }
        // 定义符合空的值
        let on = arr.some(e=>{
            return e==''
        })
        // 判断value值是否为空
        if(!on){
            // 传入值
            AddList(arr[0],arr[1],arr[2],arr[3]);
            // 判断填写完整时成功就跳转，失败就不跳转
            let{tishi} = this.props;
            if(tishi.code===0){
                alert('添加成功');
                history.push('/yonghu');
            }else if(tishi.code===-1){
                alert('添加失败')
            }
        }else{
            alert('请将内容填写完整')
        }
    }
   
    render() {
        return (
            <div className='content'>
                <div className="addy">
                    <div className="addyy">
                        <p>
                            添加用户信息
                        </p>
                    </div>
                    <div className="inputy">
                        用户账号：<input type="text" placeholder="请添加用户账号"/>
                        <br/>
                        消费金额：<input type="text" placeholder="请添加消费金额"/>
                        <br/>
                        会员等级：<input type="text" placeholder="请输入会员等级"/>
                        <br/>
                        订单数量：<input type="text" placeholder="请输入订单数量"/>
                    </div>
                    <button onClick = {this.Add} className="buttony">
                        确认提交
                    </button>
                    <button onClick = {this.Add} className="buttony2">
                        取消
                    </button>
                </div>
            </div>
        );
    }

}
// 将数据传出去
export default connect((state, ownProps) => {
        console.log(state)
        return {
            data:state.reduers2.content,
            tishi:state.reduers2.ord
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(Add));
