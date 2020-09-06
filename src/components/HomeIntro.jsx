import React from 'react'
import {HomeIntroData} from './HomeIntroData'
import HomeIntroCard from './HomeIntroCard'
import {Grid} from '@material-ui/core'

function HomeIntro() {
    return (
        <div>

            {HomeIntroData.map(item => {
                return (
                   
                        <HomeIntroCard key ={item.index}
                        index={item.index}
                        title={item.title}
                        text={item.text} 
                        classes={item.classes} 
                        btn={item.btn} />
                 
                )
            })}

        </div>
    );
}

export default HomeIntro;
