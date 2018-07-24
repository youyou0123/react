
// 引入immutable库,用以保证state不被修改
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:2,
        title:'手绘',
        imgUrl:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:3,
        title:'人文社科',
        imgUrl:'//upload.jianshu.io/collections/images/494271/51164a1egd7b1a4a7c491_690.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:4,
        title:'简书电影',
        imgUrl:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:5,
        title:'历史',
        imgUrl:'//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:6,
        title:'读书',
        imgUrl:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:7,
        title:'摄影',
        imgUrl:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }]
});

export default (state = defaultState,action) =>{
    switch(action.type) {
        
        default:
        return state;
    }
}