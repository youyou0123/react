import React,{Component} from 'react';
import {connect} from 'react-redux';
// 引入全局样式
import '../css/jointly.css'
import '../css/add.css'
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="add">
                <div className="input">
                <label>
                    商品编号：
                </label>
                    <input type="text" placeholder="请添加商品编号"/>
                    <br/>
                    品牌名称：<input type="text" placeholder="请添加品牌名称"/>
                    <br/>
                    商品货号：<input type="text" placeholder="请添加货号"/>
                    <br/>
                    商品图片：
                    <br/>
                    商品价格：<input type="text" placeholder="请输入价格"/>
                    <br/>
                    商品库存：<input type="text" placeholder="请输入库存"/>
                </div>
                <button>确认提交</button>

            </div>
        );
    }

}

export default Add;