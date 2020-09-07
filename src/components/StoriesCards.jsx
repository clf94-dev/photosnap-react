import React from 'react'


import HomeStoryCard from './HomeStoryCard'
import { Grid } from '@material-ui/core'

import './styles/App.css'
import { FullStoriesData } from './FullStoriesData'


function StoriesCards() {
    return (
        <div>
             <Grid container direction='row' >
                {FullStoriesData.map(item => {
                    return (<HomeStoryCard
                        key={item.index}
                        date={item.date}
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

export default StoriesCards
