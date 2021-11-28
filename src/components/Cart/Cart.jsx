import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {Link } from 'react-router-dom';
import CartItem from './CartItem/CratItem';
import useStyles from './styles';


function Cart( { cart , handleCartQty ,handleDeleteFromCart, handleEmptyCart }) {
    console.log(cart);
 
    const classes =useStyles();

    const EmptyCart=()=>
        (
               <Typography variant="subtitle1"  > you have no item in your cart , start adding Some !  <Link to='/' >Start Adding Some </Link> 
               </Typography> 
                
        );
    
    if (!cart.line_items) return"Loding...";
    const FilledCart=() =>
        (
            <>
       <Grid container spacing={3} >
           { cart.line_items.map((item)=>(
               <Grid item xs={12} sm={4} Key={item.id}>
                  <CartItem item={item} handleCartQty={handleCartQty}
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
      
      
       </>
        );
       
    

    return (
        <Container>
            <div className={classes.toolbar} />
<Typography className={classes.title} variant="h4" gutterBottom > Your shopping cart </Typography>
{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
    )
}

export default Cart
