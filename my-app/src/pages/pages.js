import Loadable from 'react-loadable';

const Loading =()=> null; //加载时不实现loading

const Home = Loadable({
    loader:()=>import('./home/home.js'), //按需加载 点击时只加载一个页面
    loading:Loading
});
const Details = Loadable({
    loader:()=>import('./details/details.js'),
    loading:Loading
})
const Head = Loadable({
    loader:()=>import('../common/head/head.js'),
    loading:Loading
})
const Foot = Loadable({
    loader:()=>import('../common/foot/foot.js'),
    loading:Loading
})
const Eror = Loadable({
    loader:()=>import('../common/404/404.js'),
    loading:Loading
})

export {
    Home, Details, Head, Foot,Eror
}


