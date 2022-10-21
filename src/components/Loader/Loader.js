import React from 'react'
import { Ring } from '@uiball/loaders'
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader-container'>
      <Ring size={40} lineWeight={5} speed={2} color="black" />
    </div>
  )
}

export default Loader