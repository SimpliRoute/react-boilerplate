export enum TasksActionTypes {
    GetTasks = 'GET_TASKS',
    GetTasksSuccess = 'GET_TASKS_SUCCESS',
    GetTasksFailed = 'GET_TASKS_FAILED',
}

export const initialState = [];

export const actions = {
    getTasks: () => ({ type: TasksActionTypes.GetTasks })
};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
        case TasksActionTypes.GetTasksSuccess:
            return action.items;
        default:
            return state;
    }
}
