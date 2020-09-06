import React from 'react'
import Navbar from '../Navbar'
import HomeIntro from '../HomeIntro'
import HomeStories from '../HomeStories';
import HomeFeatures from '../HomeFeatures';

import '../styles/App.css'


function Home() {
    return (
        <div>
       <HomeIntro />
       <HomeStories/>
       <HomeFeatures/>

        </div>
    );
}

export default Home;
