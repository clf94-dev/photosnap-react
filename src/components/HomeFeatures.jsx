import React from 'react'
import FeatureCard from './FeatureCard'
import {Grid} from '@material-ui/core'
import { HomeFeaturesData } from './HomeFeaturesData'

function HomeFeatures() {
    return (
        
            <Grid container direction='row'>
                {HomeFeaturesData.map(item => {
                    return (<FeatureCard
                    home='true'
                        key={item.index}
                        index={item.index}
                        title={item.title}
                        text={item.text}/>)
                })}
            </Grid>
        
    )
}

export default HomeFeatures
