import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleWare = createLogger()
const middleware = []

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        composeWithDevTools(), 
        preloadedState, 
        composeEnhancers(applyMiddleware(...middleware, loggerMiddleWare))
    )
}