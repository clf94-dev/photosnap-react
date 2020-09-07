import React from 'react'

import Mountains from '../images/stories/desktop/mountains.jpg'
import Sunset from '../images/stories/desktop/cityscapes.jpg'
import Voyage from '../images/stories/desktop/18-days-voyage.jpg'
import Architec from '../images/stories/desktop/architecturals.jpg'

import World from '../images/stories/desktop/world-tour.jpg'
import Corners from '../images/stories/desktop/unforeseen-corners.jpg'
import King from '../images/stories/desktop/king-on-africa.jpg'
import Nowhere from '../images/stories/desktop/trip-to-nowhere.jpg'
import Rage from '../images/stories/desktop/rage-of-the-sea.jpg'
import Free from '../images/stories/desktop/running-free.jpg'
import Waves from '../images/stories/desktop/behind-the-waves.jpg'
import Waters from '../images/stories/desktop/calm-waters.jpg'
import Milky from '../images/stories/desktop/milky-way.jpg'
import Forest from '../images/stories/desktop/dark-forest.jpg'
import Beauty from '../images/stories/desktop/somwarpet.jpg'
import Dreams from '../images/stories/desktop/land-of-dreams.jpg'

import ArrowD from '../images/shared/desktop/arrow.svg'
import ArrowL from '../images/shared/desktop/arrow copy.svg'

import {Grid} from '@material-ui/core/'
import {Button} from './Button'
import './styles/button.css'

function HomeStoryCard(props) {
    const HomeStoriesIMGD = [
        Mountains,
        Sunset,
        Voyage,
        Architec,
        World,
        Corners,
        King,
        Nowhere,
        Rage,
        Free,
        Waves,
        Waters,
        Milky,
        Forest,
        Beauty,
        Dreams
    ];
    const Arrows = [ArrowL, ArrowD];

    return (

        <Grid item lg={3} sm={6} xs={12} className='story-cont'>
            <Grid container direction='row'>

                <Grid item lg={12} className='img-cont'>
                    <img src={HomeStoriesIMGD[props.index]} alt={props.alt}/>
                </Grid>
                <Grid item lg={12} className='text-col'>
                    <h4>{props.date}</h4>
                    <h3>
                        {props.title}
                    </h3>
                    <h4>{props.author}</h4>
                    <hr/>
                    <Button buttonSize='btn--wide' buttonStyle={props.btnStyle} link={props.link}>
                        <Grid container direction='row'>
                            <Grid item xs={8}>
                               READ STORY
                            </Grid>
                            <Grid item xs={4}>
                                <img src={Arrows[props.arrow]} alt="arrow"/>

                            </Grid>
                        </Grid>

                    </Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default HomeStoryCard
