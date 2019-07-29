import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';


// App's child components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';
import NotFound from './NotFound';



class App extends Component {
  
  state = {
    photos : [],
    
  }

  fetchData = (query) => {
    axios.get(`https://api.unsplash.com/search/photos?per_page=8&query=${query}` + 
    `&client_id=e5fad60ae18ffcbe62cea64dd2f555033cd9bc323c9b07aed4082e2c327b9ac6`)
      .then( response => this.setState({ photos: response.data.results }))
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  componentDidMount() {
    this.fetchData()
  }

  render() {
    console.log(this.state.photos)
    return (
      <div className="container">
        <BrowserRouter>
          <SearchForm />
          <Nav />


          <Switch>
            <Route path="/cats" render={ () => <Photo />} />
            <Route path="/dogs" render={ () => <Photo />} />
            <Route path="/computers" render={ () => <Photo />} />
            <Route component={NotFound} />
          </Switch>

        </BrowserRouter>
        

      </div>
    )
  }
}

export default App;