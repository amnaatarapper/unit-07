import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';



class App extends Component {
  
  

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm />
          <Nav />


          <Switch>
            <Route path="/:name" component={PhotoContainer} />

          </Switch>

        </BrowserRouter>
        

      </div>
    )
  }
}

export default App;