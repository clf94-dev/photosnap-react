import React from 'react'

import Create from '../images/home/desktop/create-and-share.jpg'
import Stories from '../images/home/desktop/beautiful-stories.jpg'
import Designed from '../images/home/desktop/designed-for-everyone.jpg'
import {Grid} from '@material-ui/core'
import {Button} from './Button'
import './styles/button.css'

import ArrowD from '../images/shared/desktop/arrow.svg'
import ArrowL from '../images/shared/desktop/arrow copy.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function HomeIntroCard(props) {
    const IntroIMGD = [Create, Stories, Designed]
    const Arrows=[ArrowL, ArrowD];

    return (
        <div>
            <Grid container direction='row' className={props.classes} data-aos='fade-up' data-aos-duration='1500'>
                <Grid item lg={7} sm={5} xs={12} className='img-col'>
                    <img src={IntroIMGD[props.index]} alt=""/>
                </Grid>
                <Grid item lg={5} sm={7} xs={12} className='text-col'>
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.text}</p>
                 <Button buttonSize='btn--wide' buttonStyle={props.btnStyle} link={props.link}>
                        <Grid container direction='row'>
                            <Grid item xs={8}>
                                {props.btn}
                            </Grid>
                            <Grid item xs={4}>
                                <img src={Arrows[props.arrow]} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeIntroCard
