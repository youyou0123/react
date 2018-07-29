import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// 引入组件
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
// 引入出口文件
import { actionCreators } from './store';
// 引入样式
import { BackTop } from './style';

// 引入样式文件
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

//  主页面设置
class Home extends PureComponent {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img" 
                        src="//upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""
                    />
                    <Topic />
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
    // 设置生命周期，组件渲染之后调用下面代码
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }
    // 生命周期结束时卸载下面代码
    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopshow)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopshow)
    }
}

const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
});

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
export default connect(mapState,mapDispatch)(Home);