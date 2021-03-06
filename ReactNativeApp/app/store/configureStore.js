import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers';
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
  return createStore(rootReducers, initialState, enhancer)
}

const store = configureStore({});

export default store;
