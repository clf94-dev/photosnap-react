import React from 'react'
import Cta from '../Cta'
import FullFeatures from '../FullFeatures'
import IntroFeatPric from '../IntroFeatPric'

function Features() {
    return (
        <div>
          <IntroFeatPric index='0'/>
          <FullFeatures/>
          <Cta/>  
        </div>
    )
}

export default Features
