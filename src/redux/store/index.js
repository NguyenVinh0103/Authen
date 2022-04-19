import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import combinedReducer from '../reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
})

const rootStore = createStore(combinedReducer, applyMiddleware(logger, sagaMiddleware))
export default rootStore

sagaMiddleware.run(rootSaga)
