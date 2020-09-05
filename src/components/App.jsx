import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Navbar from './Navbar';

function App() {
    return (
        <div>
              <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/stories' component={Stories}></Route>
                    <Route path='/features' component={Features}></Route>

                    <Route path='/pricing' component={Pricing}></Route>
                    
                </Switch>
                
            </Router>
        </div>
    )
}

export default App
