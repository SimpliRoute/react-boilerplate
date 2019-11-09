import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { Provider } from 'react-redux';

import theme from './theme';

import configureStore from './store/configureStore';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

const store = configureStore({});

function withRoot(Component: React.ComponentType): any {
    function WithRoot(props: object): any {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Component {...props} />
                    </BrowserRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
    return WithRoot;
}

export default withRoot;
