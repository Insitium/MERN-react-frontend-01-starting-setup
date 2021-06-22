import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Users from './user/pages/Users'

const App = () => {
  return (
  <Router>
    <Route path="/" exact> //'exact will ensure that only '/' works and anything beyond that slash will not fetch the same result as '/'
      <Users />
    </Route>
    <Redirect to ="/" /> This redirect will redirect the unmade links to the specified page which is '/'
  </Router>
  );
};

export default App;
