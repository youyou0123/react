import React, { PureComponent } from 'react';
import { DownloadWrapper, Downloadleft,Saoma,Saoma2,Saoma3, Saoma4, Saoma5 } from './style';

class Download extends PureComponent {
    render(){
        const { loginStatus } = this.props;
            return (
                <DownloadWrapper>
                    <Downloadleft>
                        <img
                        className="do-img1"
                        src="//cdn2.jianshu.io/assets/web/misc-phone-69b812fa6eb049ce4a32ec03ab30416c.png"
                        alt=""
                        />
                        <Saoma>
                            扫码下载简书APP
                        </Saoma>
                        <Saoma2>
                            随时随地发现和创作内容
                        </Saoma2>
                        <img
                        className="do-img2"
                        src="//cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png"
                        alt=""
                        />
                        <Saoma3>
                            轻松创作精美图文
                        </Saoma3>
                        <Saoma4>
                            简单优雅的设计，可以一次创作多张图片、实时保存、
                            <br/>
                            多端同步，使创作分享更加方便快捷
                        </Saoma4>
                        <img
                            className="do-img3" 
                            src="//cdn2.jianshu.io/assets/web/misc-pic1-b2e2caa2aec8ff89bd6957f09b4e6fce.png"
                            alt=""
                        />
                        <img
                            className="do-img4" 
                            src="//cdn2.jianshu.io/assets/web/download-apps-page-bottom-qrcode-8c63808111ffb1746c08cbd262adbe2e.png"
                            alt=""
                        />
                        <Saoma5>
                            扫码下载简书APP
                        </Saoma5>
                    </Downloadleft>
                    
                </DownloadWrapper>
            )
        
        
    }
}


export default Download;