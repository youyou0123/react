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
import '../css/yonghu.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:1
          };
    }
    
    
    // 初始的数据
    componentDidMount(){
        let {Ge,GetPage} = this.props;
        Ge();
        GetPage();
        
    }  
    // 页码
    pag = (i) => {
        let {Ge} = this.props;
        console.log(i)
        Ge(i+1);
        this.setState({num:i+1});
    }

    
    render() {
        // 解构所有的数据
        let {data,page} = this.props;
        console.log(data)
        let {num} = this.state;
        // 设置一个空数组，用来存放页码
        let html = []
        // 循环所有页数
        for(let i=0; i<page;i++){
            html.push(
                <span className={num==(i+1)?'active':''} key={i} onClick={()=>{this.pag(i)}}>
                    {i+1}
                </span>
            )
        }
        // 渲染每一条的数据
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
                    <td>{e.account}</td>
                    <td>{e.level}</td>
                    <td>{'￥：'+e.sum}</td>
                    <td>{e.num}</td>
                    <td><img className="img" src={require('../img/02.png')}/></td>
                    <td onClick={()=>{this.del2(e.id)}}>删除</td>
                </tr>
            )
        })
    }
        return (
            <section className="content">
                <nav className="nav">
                    <div  className="nav-left">
                        <span>用户管理</span>
                    </div>
                
                <div className="bread"></div>
                <div className="nav-right">
                    <Link to="/addy">
                        <button className="btn1" onClick={this.add}>添加用户</button>
                    </Link>
                </div>
                </nav>
                <div className="seek">
                    <div className="inputs">
                        <div >
                            用户搜索：
                            <input ref="ss" type="text" placeholder="请输入会员等级"/>
                            <button onClick={()=>{this.search2()}}>搜索</button>
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
                                <th>用户ID</th>
                                <th>用户账号</th>
                                <th>会员等级</th>
                                <th>消费金额</th>
                                <th>订单数量</th>
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
                                <td>5487546</td>
                                <td>金卡会员</td>
                                <td>￥：588.00</td>
                                <td>30</td>
                                <td><img className="img" src={require('../img/02.png')}/></td>
                                <td>
                                    <a>删除</a>
                                </td>
                            </tr> */}
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
                        <div className='pag'>
                            {html}
                        </div>
                    </div>
                </div>
        </section>
        );
    }
}


export default connect((state, ownProps) => {
        console.log(state)
        return {
            data:state.reduers2.ord,
            page:state.reduers2.page
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(Content);
