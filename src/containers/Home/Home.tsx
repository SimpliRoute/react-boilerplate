import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Grid, Button
} from '@material-ui/core';

import { useStyles, Props } from './types';
import { AppState, Task } from '../../store/configureStore';


import BasicCard from '../../components/BasicCard';
import { actions } from '../../reducers/tasks';

const Home = (props: Props): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const tasks: Task[] = useSelector((state: AppState) => state.tasks);

    const handleAddNewTaskButton = (): void => {
        dispatch(actions.addTask({
            name: 'Super task',
        }));        
    };

    return (
        <div className={classes.root}>
            <Grid container={true} spacing={4} direction="row">
                {tasks.map((task: Task, idx: number) => {
                    return (
                        <Grid key={idx} item={true} xs={6}>
                            <BasicCard />
                        </Grid>
                    );
                })}
            </Grid>
            <Grid container={true} spacing={3} direction="row">
                <Grid item={true} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddNewTaskButton}
                    >
                        Primary
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};


export default Home;
