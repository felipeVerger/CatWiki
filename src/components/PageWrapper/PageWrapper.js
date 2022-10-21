import React from 'react'
import Footer from '../Footer/Footer';
import {images} from '../../constansts/images';
import './styles.scss';
import { Link } from 'react-router-dom';

const PageWrapper = ({children}) => {
  return (
    <div className='page-container'>
        <Link to='/'>
          <img src={images.logo} alt='logo'/>
        </Link>
        <div className='page-wrapper'>
            {children}
        </div>
    </div>
  )
}

export default PageWrapper