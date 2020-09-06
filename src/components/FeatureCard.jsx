import React from 'react'
import {Grid} from '@material-ui/core';

import Responsive from '../images/features/desktop/responsive.svg'
import Limit from '../images/features/desktop/no-limit.svg'
import Embed from '../images/features/desktop/embed.svg'
import Domain from '../images/features/desktop/custom-domain.svg'
import Boost from '../images/features/desktop/boost-exposure.svg'
import Drag from '../images/features/desktop/drag-drop.svg'

function FeatureCard(props) {
    const featIMGD = [Responsive, Limit, Embed, Domain, Boost, Drag]
    return (
        

            <Grid item lg={4}  md={props.home? 4:6} sm={props.home? 6:12} xs={12} className='feat-card' >
                <img src={featIMGD[props.index]} alt=""/>
                <h3>{props.title}</h3>
                <p>{props.text}</p>

            </Grid>

        
    )
}

export default FeatureCard
