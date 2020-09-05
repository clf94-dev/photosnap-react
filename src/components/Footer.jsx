import React from 'react'
import { Grid} from '@material-ui/core'
import {Link} from 'react-router-dom';

import Logo from '../images/shared/desktop/logo copy.svg'

function Footer() {
    return (
        <div>
            <Grid container direction='row' className='footer-cont'>
                <Grid item direction='column' md={3} xs={12}>
                <img src={Logo} alt="logo"/> 

                    <Grid direction='row' className='social-row'>
                        <i className='fab fa-facebook faceb fa-gradient'></i>
                        <i className='fab fa-youtube yout'></i>
                        <i className='fab fa-twitter twitt'></i>
                        <i className='fab fa-pinterest pint'></i>
                        <i className='fab fa-instagram instag'></i>
                    </Grid>
                </Grid>
                <Grid item direction='column' md={3} xs={12} className='footer-links'>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link to='/stories'>
                        <p>Stories</p>
                    </Link>
                    <Link to='/features'>
                        <p>Features</p>
                    </Link>
                    <Link to='/pricing'>
                        <p>Pricing</p>
                    </Link>

                </Grid>
                <Grid item direction='column' md={3} xs={12}></Grid>
                <Grid item direction='column' md={3} xs={12} className='copy-col'>
                    <button>Get an Invite</button>

                    <p>
                        Copyright 2019. All Rights Reserved</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
