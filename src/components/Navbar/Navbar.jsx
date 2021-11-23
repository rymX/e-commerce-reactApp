import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
 import { ShoppingCart } from '@material-ui/icons';
 
// import logo from '../../public/assets/undraw_personal_documents_cgj5.svg'
import useStyles from './styles'


const Navbar = ( { totalItems }  ) => {
    const classes= useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        {/* <img src={logo} alt="commerce" height="25px" className={classes.image} /> */}
                        commerce shop
                    </Typography>
                    <div className={classes.grow}>

                    </div>
                    <div className={classes.button}>
                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                 <ShoppingCart /> 
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
