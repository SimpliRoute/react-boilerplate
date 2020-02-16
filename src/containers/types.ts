import { makeStyles } from '@material-ui/core';

export interface Props {}

export const useStyles = makeStyles(theme => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
}));