import React, { Component } from 'react';

// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';

class App extends Component {

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <Photo />
      </div>
    )
  }
}

export default App;