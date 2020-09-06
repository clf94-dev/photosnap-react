import React from 'react'
import Cta from '../Cta'
import IntroFeatPric from '../IntroFeatPric'
import Prices from '../Prices'

function Pricing() {
    return (
        <div>
            <IntroFeatPric index='1'/>
            <Prices />
            <Cta/>
        </div>
    )
}

export default Pricing
