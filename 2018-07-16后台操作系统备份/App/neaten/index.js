import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/neaten.css'

//引入侧边栏
import Sidebar from '../index/sidebar'
import Content from '../neaten/content'
class Neaten extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {props} = this.props
        return (
            <div className="box"> 
                <Sidebar />
                {/* 得到路由传过来的url地址 传给子级使用 */}
                <Content {...{props}}/>
            </div>
        );
    }
}

export default Neaten;