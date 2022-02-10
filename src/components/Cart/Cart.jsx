import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';

import {Link } from 'react-router-dom';
import CartItem from './CartItem/CratItem';
import useStyles from './styles';import logo from "./empty-cart.png";

const path = "./empty-cart.png"


function Cart( { cart , handleUpdateCartQty ,handleDeleteFromCart, handleEmptyCart }) {
 
    const classes =useStyles();

    // to be rendred when cart is empty 
    const EmptyCart=()=>
        (
            <Container className={classes.emptyCard} >
          
            <CardMedia className={classes.media} image={logo}   />
        
               <Typography variant="h4" > Your cart is Empty !
               </Typography> 
               <br></br>
               <Typography variant="h5" >   <Link to='/' >Start  Shopping </Link> 
               </Typography> 

            </Container>   
        );
    
    if (!cart.line_items) return "Loding...";

    // to be rendred when cart is not empty
    const FilledCart=() =>
        (
            <Container className="filledCard">
       <Grid container spacing={2}  justifyContent="center" >
           { cart.line_items.map((item)=>(
               <Grid item xs={12} sm={4} Key={item.id}>
                  <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty}
          handleDeleteFromCart={handleDeleteFromCart} />
               </Grid>
           ))}

       </Grid>
       <div className={classes.cardDetails} >
<Typography variant="h4" >
    subtotal : {cart.subtotal.formatted_with_symbol}
     </Typography>
     <div>
         <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"  onClick={()=>{handleEmptyCart()}}>
Empty Cart
         </Button>
         <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" >
Checkout
         </Button>
        
     </div>
       </div>
      
      
       </Container>
        );
       
    

    return (
        <Container >
            <div className={classes.toolbar} />
<Typography className={classes.title} variant="h5" gutterBottom > Your shopping cart ( nb des piéces )</Typography>
{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
    )
}

export default Cart
