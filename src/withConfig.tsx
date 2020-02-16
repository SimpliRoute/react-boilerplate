import * as React from 'react';

import { 
    MuiThemeProvider, CssBaseline 
} from '@material-ui/core';

import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';


const store = configureStore({
    tasks: []
});

export const withConfig = (
    Component: React.ComponentType
): React.ComponentType => {
    return (props: object): JSX.Element => (
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