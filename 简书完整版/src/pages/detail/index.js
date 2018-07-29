import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// 引入路由组件
import { withRouter } from 'react-router-dom';
// 引入样式组件
import { DetailWrapper,Header,Contern } from './style';
// 引入store 下面的index出口文件
import { actionCreators } from './store';

class Detail extends PureComponent {
    render(){
        return (
            <DetailWrapper>
                <Header>{ this.props.title }</Header>
                {/* 处理字符被转译情况 */}
                <Contern dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        console.log(this.props.match.params.id)
    }
}
// 获取数据
const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});
// 发起请求
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));