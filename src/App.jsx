import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/entries" component={Register} />
    </Switch>
  </div>
);

export default App;
