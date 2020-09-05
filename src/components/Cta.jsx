import React from 'react'
import { Grid } from '@material-ui/core'
import CtaBGD from '../images/shared/desktop/bg-beta.jpg'
function Cta() {
    return (
        <div>
        <Grid container className='cta-cont'>
           <img src={CtaBGD} alt="beta bag"/> 

           <Grid container direction='row' className='cta-content'>
               <Grid item md={6} xs={12}>
                   <h2>  We're in Beta. Get your invite today!</h2>
               </Grid>
               <Grid item md={6} xs={12}>
                   <button>Get An Invite</button>
               </Grid>
           </Grid>
            </Grid> 
        </div>
    )
}

export default Cta
