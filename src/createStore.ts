import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  createStore as reduxCreateStore,
  combineReducers,
  Middleware,
  applyMiddleware
} from 'redux';
import defaultState from './defaultState';
import history from './history';
import reducers from './reducers';

export default function createStore() {
  const middlewares: Middleware[] = [reduxThunk, routerMiddleware(history)];
  const composeEnhancers = composeWithDevTools({});
  const reducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });
  return reduxCreateStore(
    reducer,
    defaultState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
