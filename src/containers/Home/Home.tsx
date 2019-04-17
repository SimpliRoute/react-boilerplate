import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import BasicCard from '../../components/BasicCard';

import styles from './styles';

import Props from './Props';
import State from './State';

class Home extends Component<Props, State> {
    render() {
        const { classes } = this.props;

        return (
          <div className={classes.root}>
              <Grid container={true} spacing={8}>
                  <Grid item={true} xs={6}>
                      <BasicCard />
                  </Grid>
                  <Grid item={true} xs={6}>
                      <BasicCard />
                  </Grid>
              </Grid>
          </div>
        );
    }
}

export default withStyles(styles)(Home);
