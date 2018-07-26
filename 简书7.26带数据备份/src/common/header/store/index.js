// 设置一个reducer 的出口文件，方便链接
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';
// 导出 reducer
export { reducer, actionCreators, constants }