import style from 'styled-components';
import logoPic from '../../statics/logo.png';   
export const HeaderWrapper = style.div`
    position:relative; 
    height:56px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = style.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = style.div`
    width:960px;
    height:100%;
    margin: 0 auto;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem = style.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333; 
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#EB6F5A;
    }
`
export const SearchWrapper = style.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`   


export const NavSearch = style.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all 0.2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const SearchInfo = style.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0, .2)
`
export const SearchInfoTitle = style.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoSwitch = style.span`
float：right;
margin-left:100px;
font-size：13px;
cursor:pointer;
.spin{
    display:block;
    float:right;
    font-size:12px;
    margin-right:90px;
    transition:all 0.2 ease-in;
    transform-origin: center center;
}
`
export const SearchInfoList = style.div`
overflow:hidden;
`

export const SearchInfoItem = style.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
margin:5px 5px 15px 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
`

export const Addition = style.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = style.div`
    float:right;
    line-height:38px;
    margin:9px 20px 0 0;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }

`