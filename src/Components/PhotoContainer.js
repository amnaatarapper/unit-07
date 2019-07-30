import React, {Component} from 'react';
import axios from 'axios';

import PhotoElement from './PhotoElement';
import NotFound from './NotFound';
import apiKey from '../config';
import loading from './loading.svg';

class PhotoContainer extends Component {

    
    state = {
        photos: [],
        isLoading: true
    };
    
    fetchData = (query) => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=8&query=${query}` + 
        `&client_id=${apiKey}`)
          .then( response => this.setState({ 
            photos: response.data.results,
            isLoading: false }))
          .catch( error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    
    componentDidMount() {
        this.fetchData(this.props.match.params.name)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location.key !== prevProps.location.key) {
          this.fetchData(this.props.match.params.name);
        }
    }  
    
    
    render() {
        
        
        return (
            <div className="photo-container">
                <h2>{(this.state.isLoading) ? '' : `Results on ${this.props.match.params.name}`}</h2>
                <ul>
                {
                    (this.state.photos.length > 0 ) ?
                        this.state.photos.map( photo => <PhotoElement src={photo.urls.regular} alt={photo.alt_description} key={photo.id}/> ) 
                        : 
                        (this.state.isLoading) ? <img src={loading} height="100px" width="100px" alt="loading" />
                                                : 
                                                <NotFound />
                }
                </ul>
            </div>
            
        );
    }
        
}
    


export default PhotoContainer;