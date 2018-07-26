import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store'
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
 } from './style';

 class Header extends Component {
    // 设置搜索框下的菜单显示
    getListArea (){
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        // 将immutable对象转为可修改的普通js对象
        const newList = list.toJS();
        const pageList = [];
        // 判断 如果 newList 中有内容，才走下面循环，避免刚开始无内容时加载空数组，返回unefined
        if ( newList.length ) {
            // 设置换一批
            for(let i = (page - 1) * 10 ; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe626;</i>
                                换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render (){
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to="/">
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login 
                        ? 
                        <NavItem onClick={logout} className="right">退出</NavItem> 
                        : 
                        <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused':''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe617;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Link to='/login'>
                        <Button className="reg">注册</Button>
                    </Link>
                </Addition>
            </HeaderWrapper>
        );
    }
 }

const mapStateToProps = (state) => {
    return {
       focused: state.getIn(['header','focused']),
       list: state.getIn(['header','list']),
       page: state.getIn(['header','page']),
       totalPage: state.getIn(['header','totalPage']),
       mouseIn: state.getIn(['header','mouseIn']),
       login: state.getIn(['login','login'])
    }
}
const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(list){
            // 为了避免无意义的请求，判断只有list内容等于0的时候才发送请求
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle+3000) +'deg)';
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }            
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);