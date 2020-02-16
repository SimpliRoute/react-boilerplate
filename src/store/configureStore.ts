import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

// enable when create rootSaga
// import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export interface Task {
    name: string;
}

export interface AppState {
    tasks: Task[];
}

export const configureStore = (initialState: AppState): Store => {    
    const store: Store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware),
        ),
    );

    // enable when create rootSaga
    // sagaMiddleware.run(rootSaga);

    return store;
};
