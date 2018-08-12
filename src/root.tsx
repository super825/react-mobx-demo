import * as React from 'react';
import { LocaleProvider, } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { BaseComponent } from './framework/BaseComponent';
// import { HashRouter, Switch, Route } from 'react-router-dom';
// import { Login } from './views/login';
// import { Home } from './views/home';
// import { Header } from './views/header';
// import { Footer } from './views/footer';
import { IntlProvider } from 'react-intl';
import { App } from './app';

export class Root extends BaseComponent<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <IntlProvider locale="zh">
                <LocaleProvider locale={zhCN}>
                    <App />
                </LocaleProvider>
            </IntlProvider >
        )
    }
}