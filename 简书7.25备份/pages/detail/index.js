import React, { Component } from 'react';
import { DetailWrapper,Header,Contern } from './style';

class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>阿里90后工程师利用ARM硬件特性开启安卓8终端“上帝模式”</Header>
                <Contern>
                    <img src="//upload-images.jianshu.io/upload_images/447546-f19278b880199423.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/650"/>
                    <p>
                        <b>在工作中，我们常会发现有的人总能轻而易举地把任务完成地又快又好.</b>而有的人要么慢吞吞拖了好久都做不完，要么最后产出的结果总是令上司抓狂。这就是岗位专家和普通员工的区别啦。没错，公司里，在相同的岗位上总会存在着那么一两个人，他们是高效员工，他们的业绩总是名列前茅，他们总能解决一般员工解决不了的问题。
                    </p>
                    <p>
                        在工作中，我们常会发现有的人总能轻而易举地把任务完成地又快又好，而有的人要么慢吞吞拖了好久都做不完，要么最后产出的结果总是令上司抓狂。这就是岗位专家和普通员工的区别啦。没错，公司里，在相同的岗位上总会存在着那么一两个人，他们是高效员工，他们的业绩总是名列前茅，他们总能解决一般员工解决不了的问题。
                    </p>
                </Contern>
            </DetailWrapper>
        )
    }
}
export default Detail;