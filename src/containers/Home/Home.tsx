import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import BasicCard from '../../components/BasicCard';
import { actions } from '../../reducers/tasks';

import styles from './styles';

import Props from './Props';
import State from './State';

export class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleAddNewTaskButton = this.handleAddNewTaskButton.bind(this);
    }

    handleAddNewTaskButton(): void {
        this.props.addTask({
            name: 'Super task'
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container={true} spacing={4} direction='row'>
                    {this.props.tasks.map((task: any, idx: number) => {
                        return (
                            <Grid key={idx} item={true} xs={6}>
                                <BasicCard />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container={true} spacing={3} direction='row'>
                    <Grid item={true} xs={12}>
                        <Button variant='contained' color='primary' onClick={this.handleAddNewTaskButton}>
                            Primary
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTask: bindActionCreators(actions.addTask, dispatch)
    };
};

export const HomeWithStyles = withStyles(styles)(Home);

export default connect(mapStateToProps, mapDispatchToProps)(
    HomeWithStyles
);
