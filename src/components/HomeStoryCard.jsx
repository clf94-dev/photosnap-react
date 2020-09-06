import React from 'react'

import Mountains from '../images/stories/desktop/mountains.jpg'
import Sunset from '../images/stories/desktop/cityscapes.jpg'
import Voyage from '../images/stories/desktop/18-days-voyage.jpg'
import Architec from '../images/stories/desktop/architecturals.jpg'
import {Grid} from '@material-ui/core/'
function HomeStoryCard(props) {
    const HomeStoriesIMGD = [Mountains, Sunset, Voyage, Architec];
    return (
       
            <Grid item lg={3} sm={6} xs={12} className='story-cont'>
                <Grid container direction='row'>

                    <Grid item lg={12} className='img-cont'>
                        <img src={HomeStoriesIMGD[props.index]} alt={props.alt}/>
                    </Grid>
                    <Grid item lg={12} className='text-col'>
                        <h3>
                            {props.title}
                        </h3>
                        <h4>{props.author}</h4>
                        <hr/>
                        <button>See Story</button>
                    </Grid>
                </Grid>
            </Grid>
    
    )
}

export default HomeStoryCard
