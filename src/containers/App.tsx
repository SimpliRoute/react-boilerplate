import React from 'react';

import { withConfig } from '../withConfig';
import { useStyles, Props } from './types';

import {
    AppBar, Button,
    IconButton, Toolbar,
    Typography
}  from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import Home from './Home';

const App = (props: Props): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="div"
                        variant="h6"
                        color="inherit"
                        className={classes.flex}
                    >
                        <div>ExampleApp</div>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Home />
        </div>
    );

};

export default withConfig(App);
