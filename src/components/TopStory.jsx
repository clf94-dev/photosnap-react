import React from 'react'
import {Grid} from '@material-ui/core'

import TopStoryIMG from '../images/stories/desktop/moon-of-appalacia.jpg'

function TopStory() {
    return (
        <div>
            <Grid container direction='row' className='topStory-cont'>
                <Grid item md={6} xs={12} className='text-col'>
                    <h4 className='intro-p'>Last month's featured story</h4>
                    <h2>Hazy full moon of Appalachia</h2>
                    <Grid container direction='row'>
                        <p>
                            March 2nd 2020</p>
                        <p className='author-p'>by John Appleseed</p>
                    </Grid>
                    <p>
                        The dissected plateau area, while not actually made up of geological mountains,
                        is popularly called "mountains," especially in eastern Kentucky and West
                        Virginia, and while the ridges are not high, the terrain is extremely rugged.
                    </p>
                    <button>Read the Story</button>

                </Grid>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={TopStoryIMG} alt="moon of appalacia"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopStory
