import React from 'react'
import {Card, Container, Typography, Button, Grid , CardActions , CardContent , CardMedia } from '@material-ui/core';
import useStyles from './styles.js'

function CratItem( {item , handleUpdateCartQty , handleDeleteFromCart}) {
    const classes = useStyles();

    return (
       <Card>
           <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
           <CardContent className={classes.CardContent} >
               <Typography variant="h4"> {item.name} </Typography>
               <Typography variant="h5"> {item.line_total.formatted_with_symbol} </Typography>

           </CardContent>
           <CardActions className={classes.CardActions} >
               <div className={classes.buttons} >
                   <button type="btton" size="small" onClick={()=>{handleUpdateCartQty(item.id , item.quantity-1)}} > 
                   -
                   </button>
                   <Typography> &nbsp; {item.quantity} &nbsp; </Typography>
                   <button type="btton" size="small"  onClick={()=>{handleUpdateCartQty(item.id , item.quantity+1)}} > 
                   +
                   </button>
               </div>
               <button type="button" variant="contained" color="secondary"  onClick={()=>{handleDeleteFromCart(item.id)}}>
                   remove
               </button>
           </CardActions>
       </Card>
    )
}

export default CratItem
