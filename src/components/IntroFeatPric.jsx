import React from 'react'
import { Grid } from '@material-ui/core'
import {IntroData} from './IntroData'

import Features from '../images/features/desktop/hero.jpg'
import Pricing from '../images/pricing/desktop/hero.jpg'

import './styles/App.css'


function IntroFeatPric(props) {
    const IntroImgD =[Features, Pricing];
    return (
        <div>
            <Grid container direction='row' className='feat-pric-intro'>
               
                <Grid item lg={5} sm={7} xs={12} className='text-col'>
                    <h2>
                        {IntroData[props.index].title}
                    </h2>
                    <p>{IntroData[props.index].text}</p>
                    
                </Grid>
                <Grid item lg={7} sm={5} xs={12} className='img-col'>
                    <img src={IntroImgD[props.index]} alt=""/>
                </Grid>
            </Grid>
        </div>
    )
}

export default IntroFeatPric
