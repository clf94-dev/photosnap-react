import React from 'react'
import {Grid} from '@material-ui/core'
import CtaBGD from '../images/shared/desktop/bg-beta.jpg'
import CtaBGM from '../images/shared/mobile/bg-beta.jpg'
import CtaBGT from '../images/shared/tablet/bg-beta.jpg'

import ArrowD from '../images/shared/desktop/arrow.svg'
import ArrowL from '../images/shared/desktop/arrow copy.svg'

import { Button } from './Button'
import './styles/button.css'
import zIndex from '@material-ui/core/styles/zIndex'

function Cta() {
    return (
        <div>
            <Grid container className='cta-cont'>
                <img src={CtaBGD}  srcset={`${CtaBGM} 756w, ${CtaBGD} 1500w, ${CtaBGT} 1280w`}  alt="beta bag"/>

                <Grid container direction='row' className='cta-content'>
                    <Grid item md={6} xs={12}>
                        <h2>
                            We're in Beta. Get your invite today!</h2>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Button buttonSize='btn--wide' buttonStyle='btn--read'>
                            <Grid container direction='row'>
                                <Grid item xs={8}>
                                    GET AN INVITE
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={ArrowL} alt="arrow" />

                                </Grid>
                            </Grid>

                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cta
