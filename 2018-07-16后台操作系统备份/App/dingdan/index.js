import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/dingdan.css'

//引入侧边栏
import Sidebar from '../index/sidebar'
import Content from '../dingdan/content'
class Dingdan extends Component {
    render() {
        return (
            <div className="box"> 
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default Dingdan;