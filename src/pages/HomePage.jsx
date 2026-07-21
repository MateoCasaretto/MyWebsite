import React from 'react'
import AboutMeComponent from '../features/components/AboutMeComponent'
import ImageComponent from '../features/components/ImageComponent'

const HomePage = () => {
  return (
    <div className="home-page" id="home">
        <AboutMeComponent />
        <ImageComponent />
    </div>
  )
}

export default HomePage