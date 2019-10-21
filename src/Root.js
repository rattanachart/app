import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter,Router } from 'react-router-dom';
import store from './utils/createStore';
/* Define your default translations */

export default props => {
    return (
            <Provider store={store}>
                <HashRouter>
                    {props.children}
                </HashRouter>
            </Provider>
    );
};
