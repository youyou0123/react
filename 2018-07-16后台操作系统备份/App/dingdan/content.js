import React,{Component} from 'react';
// 引入link
import { Redirect,Link} from 'react-router-dom'
// // 引入全局样式
import '../css/jointly.css'
import '../css/dingdan.css'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section className="content">
            <nav className="nav">
                <div  className="nav-left">
                    <span>订单详情</span>
                </div>
               
               <div className="bread"></div>
               <div className="nav-right">
               <Link to="/zongdd">
               <button className="btn1" onClick={this.zongdd}>返回列表</button>
               </Link>
                   
               </div>
            </nav>
            <div className="div-1">
                <div className="div-1-1">
                    <span>基本信息</span>
                </div>
                <div className="div-1-2">
                    <table className="table" border="1" ailgn="center">
                        <thead>
                            <tr>
                                <th>订单编号</th>
                                <th>发货流水号</th>
                                <th>用户账号</th>
                                <th>发货方式</th>
                                <th>物流单号</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>201015874589</td>
                                <td>3335471015874589</td>
                                <td>悠游01</td>
                                <td>顺丰快递</td>
                                <td>201015874589</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="div-1">
                <div className="div-1-1">
                    <span>收货人信息</span>
                </div>
                <div className="div-1-2">
                    <table className="table" border="1" ailgn="center">
                        <thead>
                            <tr>
                                <th>收货人</th>
                                <th>手机号码</th>
                                <th>邮政编码</th>
                                <th>收货地址</th>
                                <th>支付金额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>赵云</td>
                                <td>138388888</td>
                                <td>4518587</td>
                                <td>北京市海淀区</td>
                                <td>￥38586.00元</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid2">
               <div className="div-1-1">
                        <span>订单信息</span>
                    </div>
            <table className="table" border="1" ailgn="center">
                    <thead>
                        <tr className="tr">
                            <th>商品图片</th>
                            <th>商品名称</th>
                            <th>商品货号</th>
                            <th>商品货号</th>
                            <th>商品属性</th>
                            <th>商品数量</th>
                            <th>订单小计</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className="img" src={require('../img/1.png')}/></td>
                            <td>商品</td>
                            <td>阿芙精油面膜</td>
                            <td>00001</td>
                            <td>0304258</td>
                            <td>￥139.00</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td><img className="img" src={require('../img/1.png')}/></td>
                            <td>商品</td>
                            <td>阿芙精油面膜</td>
                            <td>00001</td>
                            <td>0304258</td>
                            <td>￥139.00</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td><img className="img" src={require('../img/1.png')}/></td>
                            <td>商品</td>
                            <td>阿芙精油面膜</td>
                            <td>00001</td>
                            <td>0304258</td>
                            <td>￥139.00</td>
                            <td>删除</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/zongdd">
                    <button className="btn9" onClick={this.zongdd}>返回列表</button>
                </Link>
            </div>
        </section>
        );
    }
}

export default Content;
