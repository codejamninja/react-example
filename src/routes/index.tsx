import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export interface RoutesProps {}

const Routes: FC<RoutesProps> = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">ABOUT</Route>
        <Route path="/users">USERS</Route>
        <Route path="/">HOME</Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;
