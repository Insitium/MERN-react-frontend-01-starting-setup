import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
  <Router>
    <Switch>
    <Route path="/" exact> //'exact will ensure that only '/' works and anything beyond that slash will not fetch the same result as '/'
      <Users />
    </Route>
    <Route path = "/places/new" exact>
      <NewPlace />
    </Route>
    <Redirect to ="/" /> 
    
    </Switch>
  </Router>
  );
};

export default App;
