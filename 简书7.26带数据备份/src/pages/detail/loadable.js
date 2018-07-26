// 处理加载页面问题，使用组件达到点击哪个页面就加载哪个，提高性能
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        return <div>正在加载</div>
    }
});

export default () => <LoadableComponent />