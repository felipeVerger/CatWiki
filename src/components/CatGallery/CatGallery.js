import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

import './styles.scss'

const CatGallery = ({breeds}) => {
  const location = useLocation().pathname;

  if (!breeds.length) {
    return <Loader/>;
  }
  return (
    <div className='gallery-container'>
      {breeds?.map((breed) => (
        <div key={breed.id} className='card'>
          <Link to={`/${breed.name}`} className='link'>
            <img src={breed.image?.url} alt={breed.name} />
            <h4>{location === '/' ? breed.name : ''}</h4> 
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CatGallery