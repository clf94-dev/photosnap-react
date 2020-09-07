import React from 'react'



import HomeStoryCard from './HomeStoryCard'
import { Grid } from '@material-ui/core'
import { HomeStoriesData } from './HomeStoriesData'

import './styles/App.css'

function HomeStories() {
   
    return (
        <div>
            <Grid container direction='row' >
                {HomeStoriesData.map(item => {
                    return (<HomeStoryCard
                        key={item.index}
                        index={item.index}
                        title={item.title}
                        author={item.author}
                        alt={item.imgALT}
                        btnStyle={item.btnStyle} 
                        arrow={item.arrow}
                        link={item.link} />)
                })}
            </Grid>
        </div>
    )
}

export default HomeStories
