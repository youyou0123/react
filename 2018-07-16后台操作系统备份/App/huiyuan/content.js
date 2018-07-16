import React,{Component} from 'react';
// // 引入全局样式
import '../css/jointly.css'
import '../css/huiyuan.css'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section className="content">
            <nav className="nav">
                <div  className="nav-left">
                    <span>会员等级设置</span>
                </div>
               
               <div className="bread"></div>
               <div className="nav-right">
                   <button className="btn1">关闭订单</button>
               </div>
            </nav>
            <div className="grid3">
                <div className="div-1-11">
                    <span>数据列表</span>
                </div>
                <table className="table3" border="1" ailgn="center">
                    <thead className="thead1">
                        <tr className="tr1">
                            <th >等级名称</th>
                            <th>默认会员等级</th>
                            <th>成长值满足点</th>
                            <th>免运费标准</th>
                            <th>评价奖励</th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr1">
                            <td>普通会员</td>
                            <td><img className="img" alt="" src={require('../img/02.png')}/></td>
                            <td>1</td>
                            <td>199元/笔</td>
                            <td>+5成长值/条</td>
                            <td>无</td>
                            <td>
                                <a>
                                    编辑
                                </a>
                            </td>
                        </tr>
                        <tr className="tr1">
                            <td>黄金会员</td>
                            <td><img className="img" alt="" src={require('../img/03.png')}/></td>
                            <td>4</td>
                            <td>199元/笔</td>
                            <td>+5成长值/条</td>
                            <td>无</td>
                            <td>
                                <a>
                                    编辑
                                </a>
                            </td>
                        </tr>
                        <tr className="tr1">
                            <td>白银会员</td>
                            <td><img className="img" alt="" src={require('../img/02.png')}/></td>
                            <td>5</td>
                            <td>199元/笔</td>
                            <td>+5成长值/条</td>
                            <td>无</td>
                            <td>
                                <a>
                                    编辑
                                </a>
                            </td>
                        </tr>
                        <tr className="tr1">
                            <td>黄金会员</td>
                            <td><img className="img" alt="" src={require('../img/03.png')}/></td>
                            <td>4</td>
                            <td>199元/笔</td>
                            <td>+5成长值/条</td>
                            <td>无</td>
                            <td>
                                <a>
                                    编辑
                                </a>
                            </td>
                        </tr>
                        <tr className="tr1">
                            <td>白银会员</td>
                            <td><img className="img" alt="" src={require('../img/02.png')}/></td>
                            <td>5</td>
                            <td>199元/笔</td>
                            <td>+5成长值/条</td>
                            <td>无</td>
                            <td>
                                <a>
                                    编辑
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        );
    }
}

export default Content;