import * as React from 'react';

import {
    Button, Card, CardActions, 
    CardContent, Typography 
} from '@material-ui/core';

import { useStyles, Props } from './types';

const BasicCard = (props: Props): JSX.Element => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    Word of the Someday
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default BasicCard;
