import React, { useEffect, useState } from 'react'
import { images } from '../../constansts/images'
import { useNavigate } from 'react-router-dom';
import { getBreeds } from '../../api';

import './styles.scss'

const HeroSection = () => {
  const [search, setSearch] = useState('');
  const [breedName, setBreedName] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBreeds().then((data) => {
      setBreedName(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/${search}`);
    }
  }

  return (
    <div className='hero-container'>
        <div className='hero-content-wrapper'>
            <div className='logo-section'>
                <h1 className='logo'>CatWiki</h1>
                <img src={images.cat} alt='cat-logo'/>
            </div>
            <p>Get to know more about your cat breed</p>
                <form onSubmit={handleSubmit} className='input-section'>
                    <select
                      className='select'
                      value={search}
                      placeholder='Search for a breed'
                      onChange={(e) => setSearch(e.target.value)}
                    >
                      {breedName?.map((breed) => (
                        <option key={breed.id} value={breed.name}>{breed.name}</option>
                      ))} 
                    </select>
                    <button className='submit-button' type='submit'>search</button>
                </form>
        </div>
    </div>
  )
}

export default HeroSection