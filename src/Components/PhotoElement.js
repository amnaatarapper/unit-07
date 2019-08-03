import React from 'react';
import Img from 'react-image'
import loading from './loading.svg';

const PhotoElement = ({src, alt}) => {
    return (
        <li>
            <Img 
                src={`${src}`}
                alt={`${alt}`}
                loader={<img src={loading} alt="loading" className="img-loader"/>}
            />
        </li>
    );      
}

export default PhotoElement;