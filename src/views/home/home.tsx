import *as React from 'react';
import { BaseComponent } from "../../framework/BaseComponent";
import './home.less';

export class Home extends BaseComponent<any, any>{
    render() {
        return (
            <div className="home-container">
                <div className="home-advertising">
                    {/* <video src="http://www.zhangxinxu.com/study/media/cat.mp4" width="100%" height="264" controls></video> */}
                    <video
                        id="my-player"
                        className="video-js"
                        controls
                        width="100%"
                        height="350"
                        preload="auto"
                        poster="//vjs.zencdn.net/v/oceans.png"
                        data-setup='{}'>
                        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                        <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="http://videojs.com/html5-video-support/" target="_blank">
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                </div>
                <div className="home-bulletin">通知</div>
                <div className="home-menu">菜单</div>
                <div className="home-promotion">脱销抢购</div>
                <div className="home-hot">热卖单品</div>
                <div className="home-new">新品上架</div>
            </div>
        );
    }
}