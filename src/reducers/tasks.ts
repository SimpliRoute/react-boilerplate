enum TasksActionTypes {
    GetTasks = 'GET_TASKS',
    GetTasksSuccess = 'GET_TASKS_SUCCESS',
    GetTasksFailed = 'GET_TASKS_FAILED',
    AddTask = 'ADD_TASK',
}

export const initialState = [];

export const actions = {
    getTasks: () => ({ type: TasksActionTypes.GetTasks }),
    addTask: (task: any) => ({ type: TasksActionTypes.AddTask, payload: task }),
};

export default (state: any = initialState, action: any) => {
    switch (action.type) {
        case TasksActionTypes.GetTasksSuccess:
            return action.items;
        case TasksActionTypes.AddTask:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
