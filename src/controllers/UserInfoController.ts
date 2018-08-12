import { observable, action, computed, autorun } from 'mobx';
import { UserInfo } from '../models/UserInfo';
import { createController } from '../framework/StoreMgr';

@createController('UserInfoController')
export class UserInfoController {
    @observable
    userInfo: UserInfo;

    constructor() {
        this.userInfo = new UserInfo();
        this.userInfo.id = '1';
        this.userInfo.name = 'ZhangSan';
        autorun(() => {
            console.log(this.report)
        });
    }

    @computed
    get report() {
        return `userid: ${this.userInfo.id}, userName: ${this.userInfo.name}`;
    }

    @action
    changeUser(userInfo: UserInfo) {
        this.userInfo = userInfo;
    }
}
