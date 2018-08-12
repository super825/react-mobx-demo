import * as React from 'react';
import { BaseComponent } from "../../framework/BaseComponent";
import './header.less';
import { inject, observer, injectReactIntl, injectRouter } from '../../framework/StoreMgr';

@injectReactIntl()
@injectRouter()
@inject('UserInfoController')
@observer
export class Header extends BaseComponent<any, any>{

    logonOut() {
        // this.props.history.push("/login");
        location.hash = "/login";
    }

    render() {
        let leftMenuStyle = {
            fontSize: '18px',
            marginLeft: '40px'
        };

        let rightMenuStyle = {
            marginLeft: '10px',
            marginRight: '10px'
        }

        return (
            <div className="header-container" >
                <div className="header-left">
                    <span >logo</span>
                    <span style={leftMenuStyle}><a href="#/home">首页</a></span>
                    <span style={leftMenuStyle}>产品</span>
                    <span style={leftMenuStyle}>服务</span>
                </div>
                <div className="header-right">
                    <span style={rightMenuStyle}>搜索</span>|
                    <span style={rightMenuStyle}><a href="#/login">{this.props.UserInfoController.userInfo.name}</a></span>|
                    <span style={rightMenuStyle}>购物车</span>|
                    <span style={rightMenuStyle}>收藏夹</span>|
                    <span style={rightMenuStyle}>我的足迹</span>|
                    <span style={rightMenuStyle}>我的关注</span>|&nbsp;&nbsp;
                    <span >帮助</span>
                </div>
            </div>
        );
    }
}