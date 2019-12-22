import React, { Component } from 'react';
import withRoot from '../withRoot';
import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import Home from './Home';

import State from './State';
import Props from './Props';

class App extends Component<Props, State> {
    state: State = {
        open: true,
    };

    render() {
        const { classes } = this.props;
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
                            <div>ExampleApp {this.state.open}</div>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Home />
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(App));
