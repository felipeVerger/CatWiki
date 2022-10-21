import React from 'react'

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import HeroSection from '../../components/HeroSection/HeroSection'
import Discover from '../../components/Discover/Discover'
import CatInformation from '../../components/CatInformation/CatInformation'

const Home = () => {
  return (
    <PageWrapper>
      <HeroSection/>
      <Discover/>
      <CatInformation/>
    </PageWrapper>
  )
}

export default Home