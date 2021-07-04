import React from 'react';
import { BrowserRouter as Router,
   Route,
    Redirect,
     Switch}
      from 'react-router-dom';


import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
  <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path="/" exact> //'exact will ensure that only '/' works and anything beyond that slash will not fetch the same result as '/'
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
    <UserPlaces />
    </Route>
    <Route path = "/places/new" exact>
      <NewPlace />
    </Route>
    <Redirect to ="/" /> 
    </Switch>
    </main>
  </Router>
  );
};

export default App;

//the :userID in </Route>
    //<Route path="/:userId/places" exact>
    //<UserPlaces />
 // </Route>
 //is the dynamic link which can be changed and does not need to be fixed

 