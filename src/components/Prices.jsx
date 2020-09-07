import React, {useState} from 'react'
import {Switch, Grid} from '@material-ui/core/';

import './styles/buttonPrices.css'
import {useLovelySwitchStyles} from '@mui-treasury/styles/switch/lovely';
import './styles/App.css'
import {ButtonPrices} from './ButtonPrices.jsx'



export default function Prices() {
    const [checked,
        setCheck] = useState(false);
    const lovelyStyles = useLovelySwitchStyles();

    const handleClick = () => {
        console.log(checked);
        setCheck(!checked);
    }
    return (
        <div>
            <div className="pricing-section">
                <div className="pricing-wrapper">
                   

                    <Grid
                        className='switch'
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}>
                        <Grid item className='options'>Monthly</Grid>
                        <Grid item>
                            <Switch
                                classes={lovelyStyles}
                                checked={checked}
                                onClick={handleClick}
                                name="checked"/>
                        </Grid>
                        <Grid item className='options'>Yearly</Grid>
                    </Grid>
                    <div
                        className="pricing-container"
                        style={{
                        display: !checked
                            ? 'flex'
                            : 'flex'
                    }}>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3 className='light'>Basic</h3>
                                <p className='text'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                                <h2 className='light'>{
                                     checked
                                            ? '$190.00'
                                            : '$19.99'
                                    }</h2>
                                    <p>per month</p>
    
                                <ButtonPrices  buttonSize='btnP--wide' buttonStyle='btnP--primary'>
                                PICK PLAN
                                </ButtonPrices>
                            </div>
                        </div>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3>Pro</h3>
                                <p className='text'>More advanced features available. Recommended for photography veterans and professionals.</p>
                                <h2>{checked?'$390.00':'$39.99'}</h2>
                                <p>per month</p>
                                <ButtonPrices  buttonSize='btnP--wide' buttonStyle='btnP--outline'>
                                PICK PLAN
                                </ButtonPrices>
                            </div>
                        </div>
                        <div className="pricing-container-card">
                            <div className="pricing-container-cardInfo">
                                <h3 className='light'>Business</h3>
                                <p className='text'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                                <h2 className='light'>{checked?'$990.00':'$99.99'}</h2>
                                <p>per month</p>
                                <ButtonPrices  buttonSize='btnP--wide' buttonStyle='btnP--primary'>
                                    PICK PLAN
                                </ButtonPrices>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}