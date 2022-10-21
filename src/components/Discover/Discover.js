import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import { getBreeds } from '../../api';

import CatGallery from '../CatGallery/CatGallery';

import './styles.scss';

const Discover = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds(4).then((response) => setBreeds(response));
  }, []);

  return (
    <div className='discover-container'>
        <div className='discover-content'>
            <Link to='/mostSearched' className='search-breed-button'>Most Searched Breeds</Link>
            <div className='discover-title-section'>
                <h2>66+ Breeds For you <br/> to discover</h2>
                <div>
                    <Link to='/mostSearched' className='btn-link'>See more</Link>
                    <BsArrowRight/>
                </div>
            </div>
            <CatGallery breeds={breeds}/>
        </div>
    </div>
  )
}

export default Discover