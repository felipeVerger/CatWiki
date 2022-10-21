import React from 'react'

import './styles.scss'

const Levels = ({ level }) => {
  return (
    <div className="levels">
      {
        [1, 2, 3, 4, 5].map((item, i) => (
          <span key={i} className={`${level >= item ? 'painted' : 'not-painted'}`}></span>
        ))
      }
    </div>
  )
}

const BreedFeatures = ({ breed }) => {
  return (
    <div className='features-container'>
      <ul>
        <li><span>Temperament:</span> {breed.temperament}</li>
        <li><span>Origin:</span> {breed.origin}</li>
        <li><span>Life Span:</span> {`${breed.life_span} years`}</li>
        <li><span>Adaptability:</span> <Levels level={breed.adaptability}/></li>
        <li><span>Affection Level:</span> <Levels level={breed.affection_level}/></li>
        <li><span>Child Friendly:</span> <Levels level={breed.child_friendly}/></li>
        <li><span>Grooming:</span> <Levels level={breed.grooming}/></li>
        <li><span>Intelligence:</span> <Levels level={breed.intelligence}/></li>
        <li><span>Health issues:</span> <Levels level={breed.health_issues}/></li>
        <li><span>Social needs:</span> <Levels level={breed.social_needs}/></li>
        <li><span>Stranger friendly:</span> <Levels level={breed.stranger_friendly}/></li>
      </ul>
    </div>
  )
}

export default BreedFeatures