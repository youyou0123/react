import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Topic from './components/Topic';
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

class Hot extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img" 
                        src="//cdn2.jianshu.io/assets/web/seven-hot-344e8726a99ec07a8d552b33fe50be82.png"
                        alt=""
                    />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
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
export default connect(mapState,mapDispatch)(Hot);