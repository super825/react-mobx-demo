import * as React from 'react';
// import { LocaleProvider, } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import { BaseComponent } from './framework/BaseComponent';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Login } from './views/login';
import { Home } from './views/home';
import { Header } from './views/header';
import { Footer } from './views/footer';
// import { IntlProvider } from 'react-intl';

export class App extends BaseComponent<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HashRouter>
                <div className="root-container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}