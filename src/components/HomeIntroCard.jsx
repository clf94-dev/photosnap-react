import React from 'react'

import Create from '../images/home/desktop/create-and-share.jpg'
import Stories from '../images/home/desktop/beautiful-stories.jpg'
import Designed from '../images/home/desktop/designed-for-everyone.jpg'
import {Grid} from '@material-ui/core'
function HomeIntroCard(props) {
    const IntroIMGD = [Create, Stories, Designed]

    return (
        <div>
            <Grid container direction='row' className={props.classes}>
                <Grid item lg={8} sm={4} xs={12}>
                    <img src={IntroIMGD[props.index]} alt=""/>
                </Grid>
                <Grid item lg={4} sm={8} xs={12}>
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.text}</p>
                    <button>{props.btn}</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeIntroCard
