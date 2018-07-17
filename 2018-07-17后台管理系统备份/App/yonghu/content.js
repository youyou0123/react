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

//     // 查询
//     search = (account) =>{
//         let {GetPage,Ge} = this.props;
//         fetch('http://localhost:88/api/weibo?act=search&account='+account)
//         .then(e => e.json())
//         .then(data => {
//             if(data.code == 0){
//                 Ge(),
//                 GetPage();
//             } 
//         });
//     }
    // 删除
    del = (id) =>{
        let {GetPage,Ge} = this.props;
        fetch('http://localhost:88/api/weibo?act=del&id='+id)
        .then(e => e.json())
        .then(data => {
            if(data.code == 0){
                Ge(),
                GetPage();
            } 
        });
    }
    // //批量删除
    // delall = (all) =>{
    //     let {GetPage,Ge} = this.props;
    //     fetch('http://localhost:88/api/dall?act=delall&all='+all)
    //     .then(e=>e.json())
    //     .then(data =>{
    //         if(data.code == 0){
    //             Ge(),
    //             GetPage();
    //         }
    //     })
    // }
    
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
        console.log(html)
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
                    <td onClick={()=>{this.del(e.id)}}>删除</td>
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
                            {newArr}
                        </tbody>
                    </table>
                    <div className="page">
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
            page:state.reduers2.page,
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(Content);
