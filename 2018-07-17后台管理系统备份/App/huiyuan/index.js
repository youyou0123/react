import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/huiyuan.css'

//引入侧边栏
import Sidebar from '../index/sidebar'
import Content from '../huiyuan/content'
class Huiyuan extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="box"> 
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default Huiyuan;