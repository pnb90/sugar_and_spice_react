import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Home from './components/Home'
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe'

function App() {
  // const divStyle = {
  //   marginLeft: "15em";
  // }


  return (
    <Router> 
      <Navbar />
      <div style={{marginLeft: '15em'}}>
        <Switch>  
          <Route exact path="/" component={ Home } />
          <Route path="/recipes/new" component={ NewRecipe } />
          <Route path="/recipes/:recipeID" component={ Recipe } />
          <Route path="/recipes" component={ Home } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
