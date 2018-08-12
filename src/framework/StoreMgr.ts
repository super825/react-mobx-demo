import { observer } from 'mobx-react';
import { action, computed, observable, configure } from 'mobx';
import * as React from 'react';
import { BaseComponent } from './BaseComponent';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

configure({ enforceActions: false });
let appStore = new Map();

const injectReactIntl = () => (Warpper: any) => {
    return injectIntl(Warpper) as any;
}

const injectRouter = () => (Warpper: any) => {
    return withRouter(Warpper) as any;
}

const inject = (...storeIds) => (Warpper: any) => {
    return class extends BaseComponent<any, any> {
        render() {
            let injectProps = {};
            storeIds.forEach(storeId => {
                if (appStore.has(storeId)) {
                    injectProps[storeId] = appStore.get(storeId);
                } else {
                    throw `${storeId} not found. Please create it first.`;
                }
            });
            return React.createElement(Warpper, { ...injectProps, ...this.props });
        }
    } as any
}

const createController = (storeId: string) => (Wrapper) => {
    if (appStore.has(storeId)) {
        throw `${storeId} has been created.`;
    } else {
        appStore.set(storeId, new Wrapper());
    }
}

function getController(storeId: string) {
    return appStore.get(storeId);
}

function removeControllers(...storeIds) {
    for (let storeId of storeIds) {
        appStore.delete(storeId);
    }
}

export {
    inject,
    createController,
    getController,
    removeControllers,
    action,
    computed,
    observable,
    observer,
    injectReactIntl,
    injectRouter
}