// 做数据
import {combineReducers} from 'redux'
import * as actionTypes from '../App/actionTypes';



// 商品数据
const reduers1 = (state={content:[],page:''},action) => {
    switch(action.type){
        // 获取数据
        case 'GET_PA':
        let p=Object.assign({},state)
        p.content=action.data
        return p;
        //拿到某一页数据
        case 'GETNEA':
        let getAll=Object.assign({},state)
        getAll.content = action.data
        return getAll;
        //添加数据
        case 'GET_LIST':
        let add=Object.assign({},state)
        add.content=action.data
        return add;
        // 商品管理的页码
        case 'GET_N':
        let getnn=Object.assign({},state)
        getnn.page=action.data
        return getnn;

        default :
        return state;
    }
}
//用户管理
const reduers2 = (state={ord:[],page:'',newData:{}},action) => {
    switch(action.type){
        // 添加数据delData
        case 'ADD':
        let add = Object.assign({},state)
        add.newData =action.data
        return add;
        // 获取某页数据
        case 'GET':
        let newobj=Object.assign({},state)
        newobj.ord=action.data
        return newobj;
        // 页码数据
       case 'GET_PAGE':
       let page1=Object.assign({},state)
       page1.page = action.data
       return page1;

        default :
        return state;
    }
}
// 总订单页
const reduers3 = (state={ord:[],page:'',data:{}},action) => {
    switch(action.type){
        // 添加数据
        case 'DINGA':
        let add = Object.assign({},state)
        console.log(action.data,'就是这个')
        add.ord =action.data
        return add;
        // 当前页
        case 'DING':
        let dan=Object.assign({},state)
        dan.ord=action.data
        return dan;
        // 页码数据
       case 'ZONGP':
       let zongdd=Object.assign({},state)
       zongdd.page = action.data
       return zongdd;

        default :
        return state;
    }
}


const reducers = combineReducers({
    reduers1,
    reduers2,
    reduers3
});
export {reducers}