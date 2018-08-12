import *as React from 'react';
import { BaseComponent } from "../../framework/BaseComponent";
import './footer.less';
import { inject, observer, injectReactIntl, injectRouter } from '../../framework/StoreMgr';

@injectReactIntl()
@injectRouter()
export class Footer extends BaseComponent<any, any>{

    render() {
        console.log(this.props);
        let containerStyle = {
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white'
        };
        return (
            <div style={containerStyle}>
                <div className="footer-container">
                    <div className="footer-left">牛逼信息技术有限公司&copy;版权所有</div>
                    <div className="footer-right">联系我们：<a href="javascript:mailto://xyz@nuibi.com">kefu@niubi.com</a></div>
                </div>
            </div>
        );
    }
}