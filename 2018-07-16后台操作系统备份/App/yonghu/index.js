import React,{Component} from 'react';
// // 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/yonghu.css'

//引入侧边栏
import Sidebar from '../index/sidebar'
import Content from './content'
class Yonghu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {props} = this.props
        return (
            <div className="box"> 
                <Sidebar />
                <Content {...{props}}/>
            </div>
        );
    }
}

export default Yonghu;