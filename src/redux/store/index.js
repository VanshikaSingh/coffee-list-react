
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger"
import ReduxPromise from "redux-promise";
import coffeeReducer from '../reducer';
import { onLoadCoffees } from '../../app.sagas';
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [logger, sagaMiddleWare, ReduxPromise];
//const composedEnhancer = compose(composeWithDevTools(), applyMiddleware(...middlewares))


 export const store =  createStore(
    coffeeReducer , composeWithDevTools(
        applyMiddleware(...middlewares)
      )

)
sagaMiddleWare.run(onLoadCoffees)

export default store;