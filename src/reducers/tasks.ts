import { Task } from '../store/configureStore';

enum TasksActionTypes {
    GetTasks = 'GET_TASKS',
    GetTasksSuccess = 'GET_TASKS_SUCCESS',
    GetTasksFailed = 'GET_TASKS_FAILED',
    AddTask = 'ADD_TASK',
}

export const initialState = [];

export interface TaskActionType {
    type: TasksActionTypes;
    payload?: Task;
    items?: Task[];
}

export const actions = {
    getTasks: (): TaskActionType => ({ type: TasksActionTypes.GetTasks }),
    addTask: (task: Task): TaskActionType => ({ type: TasksActionTypes.AddTask, payload: task }),
};

export default (state: Task[] = initialState, action: TaskActionType): Task[] => {
    switch (action.type) {
        case TasksActionTypes.GetTasksSuccess:
            return action.items!;
        case TasksActionTypes.AddTask:
            return state.concat([action.payload!]);
        default:
            return state;
    }
};
