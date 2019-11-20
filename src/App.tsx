import React, { FC, createContext } from 'react';
import { ConnectedRouter, push } from 'connected-react-router';
import { Provider, ReactReduxContextValue, connect } from 'react-redux';
import Routes from './routes';
import createStore from './createStore';
import history from './history';

const storeContext = createContext<ReactReduxContextValue>(
  (null as unknown) as ReactReduxContextValue
);

const store = createStore();

export interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Provider store={store} context={storeContext}>
      <ConnectedRouter history={history} context={storeContext}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default connect(null, { push })(App);
