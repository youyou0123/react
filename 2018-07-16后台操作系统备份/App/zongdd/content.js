import React,{Component} from 'react';
import { connect } from 'react-redux';
// 引入方法
import * as actions from '../../actions/actions'
// 连接数据
import { bindActionCreators } from 'redux'
// 引入link
import { Redirect,Link} from 'react-router-dom'
// // 引入全局样式
import '../css/jointly.css'
import '../css/zongdd.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:1
         };
    }
    // 初始的数据
    componentDidMount(){
        let {GetDing,zongddPage} = this.props;
        GetDing();
        zongddPage();
        // console.log(Ding)
    }
    
    // 页码
    pag = (i) => {
        let {Ding} = this.props;
        Ding(i+1);
        this.setState({num:i+1});
    }


    render() {
        // 解构所有数据
        let {data,page} =this.props;
        let {num} = this.state;
        // 设置一个空数组
        let html = []
        // 循环所有页数
        for(let i=0; i<page;i++){
            html.push(
                <span className={num==(i+1)?'active':''} key={i} onClick={()=>{this.pag(i)}}>
                    {i+1}
                </span>
            )
        }
        console.log(html)
        // 渲染每一条数据
        let newArr = [];
        console.log(data)
        // if(data.code!==0){
            newArr = data.map((e,i)=>{
                return(
                    <tr key={i}>
                        <td>
                            <label>
                                <input type="checkbox"/>
                                <span></span>
                            </label>
                        </td>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.consignee}</td>
                        <td>{e.phone}</td>
                        <td>{'￥：'+e.price}</td>
                        <td><img className="img" src={require('../img/02.png')}/></td>
                        <td>
                            <Link to="dingdan">
                                <span onClick={this.dingdan}>查看详情</span>
                            </Link>
                        </td>
                    </tr>
                )
            })
        // }
        return (
            <section className="content">
                <nav className="nav">
                    <div  className="nav-left">
                        <span>订单管理</span>
                    </div>
                    <div className="bread"></div>
                    <div className="nav-right">
                    <Link to="/addd">
                        <button className="btn1">添加订单</button>
                    </Link>
                    </div>
                </nav>
            <div className="seek">
                <div className="inputs">
                    <div >
                        <span>订单查询：</span>
                        <input type="text" placeholder="订单编号"/>
                        <button>搜索</button>
                    </div>
                </div>
            </div>
            <div className="grid">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox"/>
                                    <span></span>
                                </label>
                            </th>
                            <th>订单编号</th>
                            <th>用户账号</th>
                            <th>收货人</th>
                            <th>收货人联系方式</th>
                            <th>订单金额</th>
                            <th>账号启用状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>
                                <label>
                                    <input type="checkbox"/>
                                    <span></span>
                                </label>
                            </td>
                            <td>ID124562</td>
                            <td>悠游</td>
                            <td>呦呦呦</td>
                            <td>152348579515</td>
                            <td>￥：588.00</td>
                            <td><img className="img" src={require('../img/02.png')}/></td> */}
                            {/* <td>
                                <Link to="dingdan">
                                    <span onClick={this.dingdan}>查看详情</span>
                                </Link>
                            </td> */}
                        {/* </tr> */}
                        {newArr}
                    </tbody>
                </table>
                <div className="page">
                    {/* <div className="pag">
                        <a href="">上一页</a>
                        <i>1</i>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>...
                        <span>10</span>
                        <a href="">下一页</a> 到 第
                        <input type="text" placeholder="1"/> 页 
                        <button>确定</button>
                    </div> */}
                    {html}
                </div>
            </div>
        </section>
        );
    }
}

export default connect((state, ownProps) => {
        console.log(state)
        return {
            data:state.reduers3.ord,
            page:state.reduers3.page
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(Content);
    
    