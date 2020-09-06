import React from 'react'
import {Grid} from '@material-ui/core';

import Responsive from '../images/features/desktop/responsive.svg'
import Limit from '../images/features/desktop/no-limit.svg'
import Embed from '../images/features/desktop/embed.svg'

function FeatureCard(props) {
    const featIMGD = [Responsive, Limit, Embed]
    return (
        <div>

            <Grid item lg={4} sm={12} xs={12} >
                <img src={featIMGD[props.index]} alt=""/>
                <h4>{props.title}</h4>
                <p>{props.text}</p>

            </Grid>

        </div>
    )
}

export default FeatureCard
