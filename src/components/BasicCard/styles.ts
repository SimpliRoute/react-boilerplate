import { createStyles } from '@material-ui/core';

const styles = () =>
    createStyles({
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            marginBottom: 16,
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

export default styles;
