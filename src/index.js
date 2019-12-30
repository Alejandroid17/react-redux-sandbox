import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Snackbar } from 'react-redux-snackbar';
import store from './redux/store';

import Storage from './components/storage';
import OCR from './components/ocr';

const Root = (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/ocr' component={OCR} />
                <Route exact path='/storage' component={Storage} />
                <Redirect from='/' to='/ocr' />
            </Switch>
        </HashRouter>
        <Snackbar />
    </Provider>
);

ReactDom.render(Root, document.getElementById('root'));
