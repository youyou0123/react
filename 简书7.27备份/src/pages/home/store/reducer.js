
// 引入immutable库,用以保证state不被修改
import { fromJS } from 'immutable';
import * as constants from './constants';
// 当前主页中默认的列表内容
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    goodwriters:[],
    articlePage:1,
    showScroll:false
});

const changeHomenData = (state, action) => {
    //  用merge（）属性 替换上面接收的多个属性
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        goodwriters:fromJS(action.goodwriters)
    });
};
const addArticleList = (state, action) => {
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
};

export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomenData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        default:
        return state;
    }
}