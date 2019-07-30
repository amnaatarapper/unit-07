import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';



class App extends Component {
  
  

  render() {
    return (
      <div className="container">

        
        <SearchForm />          
        <Nav />
          
        <Switch>

          <Route path="/:name" component={PhotoContainer} />

        </Switch>

        
        

      </div>
    )
  }
}

export default App;