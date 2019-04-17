import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default (initialState: object) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(
            reduxImmutableStateInvariant(),
            sagaMiddleware
        ))
    );
};
