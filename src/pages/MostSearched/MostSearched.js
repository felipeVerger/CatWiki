import React, { useEffect, useState } from 'react'
import { getBreeds } from '../../api/index.js';

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Loader from '../../components/Loader/Loader';

import './styles.scss';
import { Link } from 'react-router-dom';

const MostSearched = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds(10).then((data) => {
        setBreeds(data);
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if(!breeds.length) {
    return <Loader/>
  }
  return (
    <PageWrapper>
        <div className='searched-container'>
            <h2>Top 10 most searched breeds</h2>
            <div className='searched-card-container'>
                {
                    breeds.map((breed) => (
                        <div key={breed?.id} className='searched-card'>
                          <Link to={`/${breed.name}`}>
                            <img src={breed.image.url} alt={breed.name}/>
                          </Link>
                            <div className='card-content'>
                                <h3>{breed.name}</h3>
                                <p>{breed.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </PageWrapper>
  )
}

export default MostSearched