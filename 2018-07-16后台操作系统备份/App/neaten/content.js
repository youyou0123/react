import React,{Component} from 'react';
import {connect} from 'react-redux'

// 引入方法
import * as actions from '../../actions/actions'
// 连接数据
import { bindActionCreators } from 'redux'
import {Redirect,Link} from 'react-router-dom'
// // 引入全局样式
import '../css/jointly.css'
// 引入当前样式
import '../css/neaten.css'


class Neaten extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:1
         };
    }
    // 生命周期  一上来就执行
    // componentWillMount(){
    //     console.log('开始注册')
    // }

   
    // // 初始的数据
    componentDidMount() {
        console.log('注册完成')
        let {GetNea,PageNea} = this.props;
        GetNea();
        PageNea();
        
    }
    // 页码
    pag = (i) => {
        let {Ge} = this.props;
        Ge(i+1);
        this.setState({num:i+1})
    }
    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('数据变化', nextProps, nextState)
    // }
    // shouldComponentUpdate() {
    //     console.log('判断是否可更新')
    //     return true;
    // }
    // componentWillUpdate(){
    //     console.log('准备更新')
    //     return true;
    // }
    // componentDidUpdate(){
    //     console.log('更新完成')
    // }
    render() {
        console.log('渲染')
        // 解构所有的数据
        let {data,pageNum} = this.props;
        let {num} = this.state;
        console.log(data)
        // 设置一个空数组，用来存放页码
        let html = [];
        // 循环所有页数
        for(let i=0;i<pageNum;i++){
            html.push(
                <span className={num==(i+1)?'active':''} key={i} onClick={()=>{this.pag(i)}}>
                    {i+1}
                </span>
            )
        }
        
        // 渲染每一条的数据
        let newArr =[];
        //判断如果获取成功，就渲染数据
        if(data.code!==0){
            console.log(data);
            newArr = data.map((e,i)=>{
                return (
                    <tr key={i}>
                        <td>
                            <label>
                                <input type="checkbox"/>
                                <span></span>
                            </label>
                        </td>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.huohao}</td>
                        <td>{<img className="img" src={require('../img/1.png')}/>}</td>
                        <td>{e.price}</td>
                        <td>{e.kucun}</td>
                        <td onClick={()=>{this.del(e.id)}}>删除</td>
                    </tr>
                )
            })
        }
        return (
            <section className="content">
            <nav className="nav">
                <div  className="nav-left">
                    <span>商品列表</span>
                </div>
               <div className="bread"></div>
               <div className="nav-right">
                <Link to="/addn"> 
                   <button className="btn1 btn3" onClick={this.add}>添加商品</button>
                </Link>
               </div>
            </nav>
            <div className="seek1">
                品牌名称：<input type="text" placeholder="请输入品牌名称" ref='ss'/>
                <button onClick={()=>{this.search()}}>搜索</button>
            </div>
            <div className="grid1">
                <table className="table1">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox"/>
                                    <span></span>
                                </label>
                            </th>
                            <th>商品编号</th>
                            <th>品牌名称</th>
                            <th>货号</th>
                            <th>商品图片</th>
                            <th>价格</th>
                            <th>库存</th>
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
                            <td>1</td>
                            <td>阿芙精油面膜</td>
                            <td>00001</td>
                            <td><img className="img" src={require('../img/1.png')}/></td>
                            <td>0304258</td>
                            <td>￥139.00</td>
                            <td>删除</td>
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
            data:state.reduers1.content,
            pageNum:state.reduers1.page
        }
    }, (dispatch) => bindActionCreators(actions, dispatch))(Neaten);