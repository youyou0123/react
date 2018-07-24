import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home;