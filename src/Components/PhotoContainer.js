import React, {Component} from 'react';
import axios from 'axios';

import PhotoElement from './PhotoElement';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    
    state = {
        photos: [],
        isLoading: true
    };
    
    fetchData = (query) => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=24&query=${query}` + 
        `&client_id=e5fad60ae18ffcbe62cea64dd2f555033cd9bc323c9b07aed4082e2c327b9ac6`)
          .then( response => this.setState({ 
            photos: response.data.results,
            isLoading: false }))
          .catch( error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    componentWillMount() {
        const match = this.props.match.params.name
        this.fetchData(match)
    }

    componentDidUpdate() {
        const match = this.props.match.params.name
        this.fetchData(match)
    }


    render() {
        const data = this.state.photos;
        
        return (
            <div className="photo-container">
                <h2>{(this.state.isLoading) ? '' : `Results on ${this.props.match.params.name}`}</h2>
                <ul>
                {
                    (data.length > 0 ) ?
                        data.map( photo => <PhotoElement src={photo.urls.regular} alt={photo.alt_description} key={photo.id}/> ) 
                        : 
                        (this.state.isLoading) ? <h2 style={{textAlign: "center"}}>Loading...</h2> : <NotFound />
                }
                </ul>
            </div>
            
        );
    }
        
}
    


export default PhotoContainer;