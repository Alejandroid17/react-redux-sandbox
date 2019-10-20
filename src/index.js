import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Results from './components/results';
import Details from './components/details';
import store from './redux/store';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/results' component={Results} />
                <Route path='/details/:itemId' component={Details} />
                <Redirect from='/' to='/results' />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDom.render(Root, document.getElementById('root'));
