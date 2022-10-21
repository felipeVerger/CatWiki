import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBreedImageById, getBreeds, getBreedsByName } from '../../api';
import { images } from '../../constansts/images';

import BreedFeatures from '../../components/BreedFeatures/BreedFeatures';
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import CatGallery from '../../components/CatGallery/CatGallery';
import Loader from '../../components/Loader/Loader';

import './styles.scss';

const BreedDetail = () => {
  const { name } = useParams();
  const [breed, setBreed] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => { 
    getBreedsByName(name).then((response) => setBreed(response));
  }, [name]);

  useEffect(() => {
    getBreeds(10).then((response) => setPhotos(response));
  }, []);

  // when the component is mounted scroll to the top od the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!breed.length || !photos.length) {
    return <Loader />;
  }
  return (
    <PageWrapper>
      <div className='breed-container'>
        <div className='breed-block'>
          {breed.length ? breed.map((breed) => (
            <div key={breed.id} className='breed-card'>
              <img src={images.image1} alt='breed-img'/>
              <div className='breed-features-content'>
                <h2>{breed.name}</h2>
                <p>{breed.description}</p>
                <BreedFeatures breed={breed}/>
              </div>
            </div>
          )) : <h2>There is no information about this breed</h2>}
        </div>
        <div className='photos-block'>
            <h2>Other Photos</h2>
            <CatGallery breeds={photos}/>
        </div>
      </div>
    </PageWrapper>
  )
}

export default BreedDetail