import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Users from './user/pages/Users'

const App = () => {
  return <Router>
    <Route path="/"> //this '/' will render '/'' and anything after is as well for example '/dshf' will also fetch same data as '/'
      <Users />
    </Route>
  </Router>;
};

export default App;
