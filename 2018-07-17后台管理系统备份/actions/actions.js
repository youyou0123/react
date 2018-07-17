import * as actionTypes from '../App/actionTypes';
// 方法

/*
    总订单页
*/ 

// 页码
export function Zongp(data){
    return {
        type:'ZONGP',
        data
    }
}

// 获取页码
export const zongddPage=() => {
        return dispatch => {
         return  fetch('http://localhost:88/api/Zongdd?act=get_page_count')
                .then(e => e.json())
                .then(data => {
                console.log(data)
                    dispatch(Zongp(data.count))
                });
        }
    };

// 获取当页数据
export function Ding(data){
    return {
        type:'DING',
        data
    }
}
// 获取某一页数据的中间件 
export const GetDing=(n=1) => {
        return dispatch => {
         return  fetch('http://localhost:88/api/zongdd?act=get&page='+n)
                .then(e => e.json())
                .then(data => {
                console.log(data)
                   dispatch(Ding(data))
                });
        }
    };


// 增加数据的接口
export function DingA (data){
    return {
        type:'DINGA',
        data
    }
}
// 增加数据的中间件
export const DingAdd = (a,l,s,n) => {
        return dispatch => {
            return fetch('http://localhost:88/api/zongdd?act=add&name='+a+'&consignee='+l+'&phone='+s+'&price='+n)
                .then(e => e.json())
                .then(data => {
                    console.log(data,'kankan');
                    dispatch(DingA(data))
                });
        }
    };


/*
    用户管理页面
*/ 
// 增加数据接口yonghu
export function Add (data){
    return {
        type:'ADD',
        data
    }
}
// 获取数据yonghu
export function get(data){
    return {
        type:'GET',
        data
    }
}

// 获取页码数据 yonghu
export function getp(data){
    return {
        type:'GET_PAGE',
        data
    }
}

// 增加数据的中间件  yonghu
export const AddList = (a,l,s,n) => {
        return dispatch => {
            return fetch('http://localhost:88/api/weibo?act=add&account='+a+'&level='+l+'&sum='+s+'&num='+n)
                .then(e => e.json())
                .then(data => {
                    dispatch(Add(data))
                });
        }
    };

// 获取某一页数据的中间件 yonghu 
function Ge(n=1){
    console.log('来来')
    return dispatch => {
        return  fetch('http://localhost:88/api/weibo?act=get&page='+n)
                .then(e => e.json())
                .then(data => {
                    console.log(data,'新的数组')
                    dispatch(get(data))
                });
        }
}


// 获取页码中间件 yonghu
export const GetPage=() => {
        return dispatch => {
         return  fetch('http://localhost:88/api/weibo?act=get_page_count')
                .then(e => e.json())
                .then(data => {
                    dispatch(getp(data.count))
                });
        }
    };




/* 
    商品管理页面
*/


// 增加数据
export function AddNea (data){
    return {
        type:'ADDNEA',
        data
    }
}
// 获取数据
export function getA(data){
    return {
        type:'GETNEA',
        data
    }
}

// 获取页码数据 
export function getn(data){
    return {
        type:'GET_N',
        data
    }
}
// 获取增加数据
export function getList(data){
    return {
        type:'GET_LIST',
        data
    }
}

// 增加数据
export const GetPageNea=(a,l,n) => {
        return dispatch => {
         return  fetch('http://localhost:88/api/Neaten?act=add&name='+a+'&price='+l+'&kucun='+n)
                .then(e => e.json())
                .then(data => {
                console.log(data)
                    dispatch(getList(data))
                });
        }
    };

// 获取某一页数据的中间件 
export const GetNea=(n=1) => {
        return dispatch => {
         return  fetch('http://localhost:88/api/Neaten?act=get&page='+n)
                .then(e => e.json())
                .then(data => {
                console.log(data)
                    dispatch(getA(data))
                });
        }
    };

// 获取页码中间件 
export const PageNea=() => {
        return dispatch => {
         return  fetch('http://localhost:88/api/Neaten?act=get_page_count')
                .then(e => e.json())
                .then(data => {
                console.log(data)
                    dispatch(getn(data.count))
                });
        }
    };

    export {Ge} ;