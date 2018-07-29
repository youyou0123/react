// 处理加载页面问题，使用组件达到点击哪个页面就加载哪个，提高性能
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        return  <div>
                    <img style={{width:"500px", height:"500px",margin:"50px 0 0 350px"}}
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532670679632&di=96d6fe6988d8f5aa56cf66b0b8e4882b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F377adab44aed2e73d2511f178c01a18b87d6fa55.jpg"
                    alt=""
                    />
                </div>
    }
});

export default () => <LoadableComponent />