import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Snackbar } from 'react-redux-snackbar';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';
import AppBar from './components/appBar';

import AppSidebar from './components/appSidebar';
import routers from './components/router';

const Root = () => {

    const [sidebarState, setState] = useState(false);

    const setSidebarState = () => setState(!sidebarState); 

    return (
        <Provider store={store}>
            <HashRouter>
                <AppBar
                    hasAutocomplete={false}
                    sidebarState={sidebarState}
                    setSidebarState={() => setSidebarState()}
                />
                <AppSidebar
                    sidebarState={sidebarState}
                    content={routers}
                />
                <Snackbar />
            </HashRouter>
        </Provider>
    )
};

ReactDom.render(<Root />, document.getElementById('root'));
