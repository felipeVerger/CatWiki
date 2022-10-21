import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import { images } from '../../constansts/images';

import './styles.scss';

const imagesArray = [images.image1, images.image2, images.image3];

const CatInformation = () => {
  return (
    <div className="container">
      <div className="block-content">
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <div>
          <button>Read more</button>
          <BsArrowRight />
        </div>
      </div>
      <div className="block-images">
        <div className='column'>
            <img src={images.image2} alt='cat-image2' className='image1'/>
            <img src={images.image1} alt='cat-image1' className='image2'/>
        </div>
        <img src={images.image3} alt='cat-image3' className='image3'/>
      </div>
    </div>
  );
}

export default CatInformation