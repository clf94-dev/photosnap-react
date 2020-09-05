import React from 'react'
import { Grid} from '@material-ui/core'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <Grid container direction='row'>
                <Grid item direction='column' md={3} xs={12}>
                    <h2>PHOTOSNAP</h2>

                    <Grid direction='row'>
                        <i className='fas fa-facebook'></i>
                        <i className='fas fa-youtube'></i>
                        <i className='fas fa-twitter'></i>
                        <i className='fas fa-pinterest'></i>
                        <i className='fas fa-instagram'></i>
                    </Grid>
                </Grid>
                <Grid item direction='column' md={3} xs={12}>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link to='/stories'>
                        <h3>Stories</h3>
                    </Link>
                    <Link to='/features'>
                        <h3>Features</h3>
                    </Link>
                    <Link to='/pricing'>
                        <h3>Pricing</h3>
                    </Link>

                </Grid>
                <Grid item direction='column' md={3} xs={12}></Grid>
                <Grid item direction='column' md={3} xs={12}>
                    <button>Get an Invite</button>

                    <h5>
                        Copyright 2019. All Rights Reserved</h5>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
