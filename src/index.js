import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HjcLogin from './login/HjcLogin';
import dva from 'dva';

// 1. Initialize
const app = dva();

// 3. Model 下面也是采用遍历key获取到所有的model，避免了臃肿的代码

require('hjc-web-fragments/src/models').default.forEach(key => app.model(key.default));
app.router(require('./router').default);
// 5. Start
app.start('#root');

// ReactDOM.render(<HjcLogin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
