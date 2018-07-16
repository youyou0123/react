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
import '../css/add.css'
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    // 增加数据
    Add = () => {
        let {GetPageNea} =this.props;
        // 获取元素
        let inputa = document.querySelector('.inputa')
        let inputs = inputa.querySelectorAll('input');
        let {tishi,history} = this.props;
        let arr=[];
        // 循环输入的value值
        for(let i=0; i<inputs.length; i++){
            // 将value值push到数组中
            arr.push(inputs[i].value);
        }
        let a = arr.some(e=>{
            return e==''
        })
        if(a){
            alert('请将内容填写完整')
            return;
        }
        // 定义获取没有输入值的情况
        let on = arr.some(e=>{
            return e==''
        })
        // 判断是否为空
        if(!on){
            // 传入参数
            GetPageNea(arr[0],arr[1],arr[2])
            // 判断填写完整就跳转，不完整不跳
            let that = this;
           setTimeout(function(){
               let {tishi} = that.props;
               if(tishi.code===0){
                alert('添加成功')
                history.push('/neaten')
            }else{
                alert('添加失败')
            }
           },100)
        }

        console.log(inputa)
    }


    render() {
        let {data} = this.props;
        return (
            <div className='content'>
            <div className="add">
                <div className="addnn">
                <p>
                    添加商品
                </p>
                </div>
                <div className="inputa">
                {/* <label>
                    商品编号：
                </label>
                    <input type="text" placeholder="请添加商品编号"/>
                    <br/> */}
                    品牌名称：<input type="text" placeholder="请添加品牌名称"/>
                    {/* <br/>
                    商品货号：<input type="text" placeholder="请添加货号"/> */}
                    <br/>
                    {/* 商品图片：
                    <br/> */}
                    商品价格：<input type="text" placeholder="请输入价格"/>
                    <br/>
                    商品库存：<input type="text" placeholder="请输入库存"/>
                </div>
                <button onClick = { this.Add } className="buttona">确认提交</button>
                <button onClick = { this.Add } className="buttona2">取消</button>
            </div>
            </div>
        );
    }

}

// 将数据传出去
export default connect((state, ownProps) => {
    console.log(state)
        return {
    //         data:state.reduers2.content,
            tishi:state.reduers1.content
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(Add));
    