import * as constants from './constants'
// 引入immutable，用以生成不可修改的对象
import { fromJS } from 'immutable'
// 引入axios 用以请求数据
import axios from 'axios';


const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
});
export const mouseLeave = ()=>({
    type:constants.MOUSE_LEAVE
});
export const changePage = (page)=>({
    type:constants.CHANGE_PAGE,
    page
});


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            // console.log('error');
        })
    }
}