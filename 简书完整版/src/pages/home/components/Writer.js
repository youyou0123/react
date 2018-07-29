import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { WriterWrapper, WriterItem,Item1, Item2, Item3  } from '../style';

class Writer extends PureComponent {
    render(){
        return (
            <WriterWrapper>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                                <WriterItem key={item.get('id')}>
                                    <img src= {item.get('imgUrl')}
                                        alt=""
                                    />
                                    <Item1>{item.get('title')}</Item1>
                                    <Item2>+关注</Item2>
                                    <Item3>{item.get('desc')}</Item3>
                                </WriterItem>
                            </Link>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.get('home').get('goodwriters')
});
export default connect(mapState,null)(Writer);