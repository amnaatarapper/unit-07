import React, { Component } from 'react';
import axios from 'axios';


// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';



class App extends Component {
  
  state = {
    photos : [],
    
  }

  fetchData = () => {
    axios.get('https://api.unsplash.com/photos/random?count=6' + 
    `&client_id=e5fad60ae18ffcbe62cea64dd2f555033cd9bc323c9b07aed4082e2c327b9ac6`)
      .then( response => this.setState({photos: response.data}))
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  componentDidMount() {
    this.fetchData()
    console.log(this.state.photos)
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