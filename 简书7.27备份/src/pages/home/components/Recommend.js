import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
import { Link } from 'react-router-dom';

class Recommend extends PureComponent {
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return <Link to="/hot"> <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}  /></Link>
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState, null)(Recommend);