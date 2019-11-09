import { WithStyles } from '@material-ui/core/styles';
import styles from './styles';

export default interface Props extends WithStyles<typeof styles> {
    tasks: any[];
    addTask(task: any): void;
}
