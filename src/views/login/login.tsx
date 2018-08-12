// import * as _ from 'lodash';
import * as React from 'react';
import { observer, inject } from '../../framework/StoreMgr';
import { BaseComponent } from '../../framework/BaseComponent';
import { UserInfo } from '../../models/UserInfo';

@inject('UserInfoController')
@observer
export class Login extends BaseComponent<any, any> {

    componentWillMount() {
        let controller: any = this.props.UserInfoController;
        let userinfo = new UserInfo();
        userinfo.id = '2';
        userinfo.name = 'Lisi';
        controller.changeUser(userinfo);
    }

    handleSubmit() {
        const refs: any = this.refs;
        let userinfo = new UserInfo();
        userinfo.id = refs.txtUserID.value;
        userinfo.name = refs.txtUserName.value;
        let controller: any = this.props.UserInfoController;
        controller.changeUser(userinfo);
    }

    handleChange(){
        const refs: any = this.refs;
        let userinfo = new UserInfo();
        userinfo.id = refs.txtUserID.value;
        userinfo.name = refs.txtUserName.value;
        let controller: any = this.props.UserInfoController;
        controller.changeUser(userinfo);
    }

    render() {
        let controller: any = this.props.UserInfoController;
        return (
            <div>
                <div>
                    用户ID: <input key="txtUserID" ref="txtUserID" type="text" value={controller.userInfo.id} onChange={this.handleChange.bind(this)}/><br />
                    用戶名: <input key="txtUserName" ref="txtUserName" type="text" value={controller.userInfo.name} onChange={this.handleChange.bind(this)}/><br />
                    <input type="button" value='提交' onClick={this.handleSubmit.bind(this)} />
                </div>
                <div>
                    输出: 用户ID：{controller.userInfo.id}，用戶名: {controller.userInfo.name}
                </div>
            </div>
        )
    }
}