import React, { Component } from 'react';
import axios from 'axios';


// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';



class App extends Component {
  
  state = {
    gifs : [],
    
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
      </div>
    )
  }
}

export default App;