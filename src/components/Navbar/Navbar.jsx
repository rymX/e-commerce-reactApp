import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { Link ,
    useLocation
  } from "react-router-dom";
 import { ShoppingCart  } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';




 
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
                        Forman Store
                    </Typography>

{/* 
                    <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search products , brands and categories "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>


                    
                    <div className={classes.grow}>

                    </div>
                    {/* display cart badg only for home components  */}
                    {location.pathname === '/' && ( <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                 <ShoppingCart />
                            </Badge>
                            <Badge  color="secondary" >
                            &nbsp; Cart
                            </Badge>
                        </IconButton>
                    </div> )}
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
