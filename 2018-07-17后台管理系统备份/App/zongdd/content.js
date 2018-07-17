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
            num:1,
            data:[]
         };
    }
    // 初始的数据
    componentDidMount(){
        let {GetDing,zongddPage} = this.props;
        
        // GetDing();
        // console.log(GetDing)
        this.getdata();
        zongddPage();
    }
    getdata = (n=1) => {
        fetch('http://localhost:88/api/zongdd?act=get&page='+n)
        .then(e => e.json())
        .then(data => {
            console.log(data,'sbs')
           this.setState({
                data
            })
         });
    }
    
    // 页码
    pag = (i) => {
        let {GetDing} = this.props;
        GetDing(i+1);
        this.setState({num:i+1});
    }
    
    // 删除
    del = (id) => {
        let {GetDing,zongddPage} = this.props;
        fetch('http://localhost:88/api/Zongdd?act=del&id='+id)
        .then(e => e.json())
        .then(data =>{
            if(data.code == 0){
                GetDing();
                zongddPage();
            }
        });
    
    }
    
    render() {
        // 解构所有数据
        let {page} =this.props;
        let {num,data} = this.state;
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
        if(data.code!==0){
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
                        <td>{'￥：'+e.price+'.00'}</td>
                        <td><img className="img" src={require('../img/02.png')}/></td>
                        <td>
                            <Link to="/dingdan">
                                <span onClick={this.dingdan}>查看</span>
                            </Link>
                            <Link to="/zongdd">
                                <span onClick={this.del(e.id)}>删除</span>
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <section className="content">
                <nav className="nav">
                    <div  className="nav-left">
                        <span>订单管理</span>
                    </div>
                    <div className="bread"></div>
                    <div className="nav-right">
                    <Link to="/addd">
                        <button className="btn1" onClick={this.add}>添加订单</button>
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
                        {newArr}
                    </tbody>
                </table>
                <div className="page">
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
            page1:state.reduers3.page
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(Content);
    
    