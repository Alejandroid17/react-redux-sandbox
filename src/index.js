import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Snackbar } from 'react-redux-snackbar';
import store from './redux/store';

import Storage from './components/storage';
import OCR from './components/ocr';

const Root = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/ocr' component={OCR} />
                <Route path='/storage' component={Storage} />
                <Redirect from='/' to='/ocr' />
            </Switch>
        </BrowserRouter>
        <Snackbar/>
    </Provider>
);

ReactDom.render(Root, document.getElementById('root'));
