import React, { PureComponent } from 'react';
// 链接最外层 stort
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TopicWrapper,TopicItem } from '../style';

class Topic extends PureComponent {
    render(){
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item,index) => (
                        <Link key={index} to={'/topicmin/'+ item.get('id')}>
                            <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt=""
                            />
                                {item.get('title')}
                            </TopicItem>
                        </Link>
                    ))
                }
            </TopicWrapper>
            
        )
    }
}
const mapState = (state) => ({
    list:state.get('home').get('topicList')
});
export default connect(mapState,null)(Topic);