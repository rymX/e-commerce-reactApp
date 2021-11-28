import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { Link ,
    useLocation
  } from "react-router-dom";
 import { ShoppingCart } from '@material-ui/icons';
 
// import logo from '../../public/assets/undraw_personal_documents_cgj5.svg'
import useStyles from './styles';

  

const Navbar = ( { totalItems }  ) => {
    const classes= useStyles();
    var location = useLocation();
    return (
        <div>
            
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
              
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        {/* <img src={logo} alt="commerce" height="25px" className={classes.image} /> */}
                        commerce shop
                    </Typography>
                    
                    <div className={classes.grow}>

                    </div>
                    {location.pathname === '/' && ( <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                 <ShoppingCart /> 
                            </Badge>
                        </IconButton>
                    </div> )}
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
