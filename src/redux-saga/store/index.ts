import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducer"
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger()
const saga = createSagaMiddleware()
const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(saga, logger))
)

saga.run(rootSaga)

export default store;
