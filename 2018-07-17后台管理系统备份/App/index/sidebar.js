import React,{Component} from 'react';
import {Link} from 'react-router-dom';

// 引入全局样式
import '../css/jointly.css'
import '../css/index.css'

class Sidebar extends Component {
    click= e =>{
        e.target.style.background="red";
    }
    render() {
        const pathName = window.location.pathname;
        return (
            <div className="menu">
                <div className="sidebar">
                    <h1>Agcney</h1>
                    <ul className="list">
                        <li className={pathName.includes('/index') ? 'active' : ''}>
                            <Link to="/index">
                                <span>首 页</span>
                            </Link>
                        </li>
                        <li className={pathName.includes('/neaten') ? 'active' : ''}>
                            <Link to="/neaten" >
                                <span>商品管理</span>
                            </Link>
                        </li>
                        <li className={pathName.includes('/yonghu') ? 'active' : ''}>
                            <Link to="/yonghu">
                                <span>用户管理</span>
                            </Link>
                        </li>
                        <li className={pathName.includes('/zongdd') ? 'active' : ''}>
                            <Link to="/zongdd">
                                <span>订单管理</span>
                            </Link>
                        </li>
                        {/* <li className={pathName.includes('/dingdan') ? 'active' : ''}>
                            <Link to="/dingdan">
                                <span>订单管理</span>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link to="/">
                                <span>退货处理</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>交易管理</span>
                            </Link>
                        </li> */}
                        <li className={pathName.includes('/huiyuan') ? 'active' : ''}>
                            <Link to="/huiyuan">
                                <span>会员管理</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/">
                                <span>消息管理</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>账户管理</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <header className="head">

                </header>
            </div>
        );
    }
}

export default Sidebar;