import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CratItem'
import useStyles from './styles';


function Cart( { cart }) {
    console.log(cart);
 
    const classes =useStyles();

    const EmptyCart=()=>{
        return(     <Typography variant="subtitle1"  > you have no item in your cart , start adding Some ! </Typography> 
        )
    }
    const FilledCart=() =>{
        return(
            <>
       <Grid container spacing={3} >
           { cart.line_items.map((item)=>(
               <Grid item xs={12} sm={4} Key={item.id}>
                  <CartItem item={item} />
               </Grid>
           ))}

       </Grid>
       <div className={classes.cardDetails} >
<Typography variant="h4" >
    subtotal : {cart.subtotal.formatted_with_symbol}
     </Typography>
     <div>
         <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >
Empty Cart
         </Button>
         <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" >
Checkout
         </Button>
        
     </div>
       </div>
      
      
       </>
        )
       
    }
if (!cart.total_items) return("Loding...")
    return (
        <Container>
            <div className={classes.toolbar} />
<Typography className={classes.title} variant="h4" gutterBottom > Your shopping cart </Typography>
{!cart.total_items ? <EmptyCart /> : <FilledCart />}
            </Container>
    )
}

export default Cart
