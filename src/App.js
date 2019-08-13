import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <Router> 
      <Switch>  
        <Route exact path="/" component={ Home } />
        <Route path="/recipes" component={ Home } />
        <Route path="/recipes/new" component={ Home } />
        <Route path="/recipes/:recipeID" component={ Home } />

      </Switch>
    </Router>
  );
}

export default App;
