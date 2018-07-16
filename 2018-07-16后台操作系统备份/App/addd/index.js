import React,{Component} from 'react';
//引入侧边栏
import Sidebar from '../index/sidebar'
import Add from '../addd/addd'
// 引入全局样式
import '../css/unify.css'
import '../css/jointly.css'
import '../css/addd.css'


class Addd extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {props} = this.props
        return (
            <div className="box"> 
                <Sidebar />
                <Add />
            </div>
        );
    }
}

export default Addd;