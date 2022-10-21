import React from 'react'
import { images } from '../../constansts/images'

import './styles.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="logo-section">
        <h1 className="logo">CatWiki</h1>
        <img src={images.cat} alt="cat-logo" />
      </div>
      <p>created by username - devChallenge.io 2021</p>
    </div>
  );
}

export default Footer