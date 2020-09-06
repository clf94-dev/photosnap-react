import React from 'react'

import Mountains from '../images/stories/desktop/mountains.jpg'
import Sunset from '../images/stories/desktop/cityscapes.jpg'
import Voyage from '../images/stories/desktop/18-days-voyage.jpg'
import Architec from '../images/stories/desktop/architecturals.jpg'
import { Grid } from '@material-ui/core'
function HomeStoryCard(props) {
    const HomeStoriesIMGD = [Mountains, Sunset, Voyage, Architec];
    return (
        <div>
            <Grid item lg={3} sm={6} xs={12}>
                <img src={HomeStoriesIMGD[props.index]} alt={props.alt}/>
                <h4>
                    {props.title}
                </h4>
                <p>{props.author}</p>
                <hr/>
            </Grid>
        </div>
    )
}

export default HomeStoryCard
