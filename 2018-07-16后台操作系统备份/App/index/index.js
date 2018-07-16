import React,{Component} from 'react';
// // 引入全局样式
import '../css/jointly.css'
import '../css/index.css'

//引入侧边栏
import Sidebar from '../index/sidebar'
import Content from '../index/content'
import Tuindex from '../index/tuindex'

class App extends Component {
    render() {
        return (
            <div className="box"> 
                <Sidebar />
                <Content />
                <Tuindex />
            </div>
        );
    }
}

export default App;