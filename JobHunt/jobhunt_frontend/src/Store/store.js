import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import JobReducer from './Reducers/jobReducer';

const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            JobReducer:JobReducer,
        }), applyMiddleware(logger, thunk)
    );
    return store;
};

export { ConfigureStore as default };