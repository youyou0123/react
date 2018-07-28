import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

// 引入样式文件
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

class Topicmin extends PureComponent {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img style={{ width:'630px',height:'200px' }}
                        className="banner-img" 
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532705137912&di=a7c905762c7f76f1c5d15d10d1118c76&imgtype=0&src=http%3A%2F%2Fpic11.photophoto.cn%2F20090422%2F0008020216610676_b.jpg"
                        alt=""
                    />
                    <List />
                </HomeLeft>
                <HomeRight>
                    {/* <Recommend /> */}
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopshow)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopshow)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopshow(e){
        // 判断如果高度超过300px，状态为假，显示返回顶部提示
        if( document.documentElement.scrollTop > 300 ){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapState,mapDispatch)(Topicmin);