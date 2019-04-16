import { createStyles } from '@material-ui/core';

const styles = () => createStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        padding: 30
    },
    title: {
        fontSize: 14,
        marginBottom: 16
    }
});

export default styles;
