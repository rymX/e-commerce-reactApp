import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import usestyles from './styles'
// const products = [
// {id:'1', name:'shoes', desc:'runnig shoes' , price:'44', image:''}
// ,
// {id:'2', name:'shoes2', desc:'runnig shoes 1' , price:'14', image:'https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg'},
// {id:'3', name:'shoes3', desc:'runnig shoes 3', price:'4', image:'https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg'}
// ]
const Products = ({ products , onAddToCart })=>{
    const classes = usestyles();
    return(
<main className={classes.content}>
    <div className={classes.toolbar}>
    <Grid container justifyContent='center' spacing={4}>
{/* {this.props.products.map((product)=>(
    <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
 <Product product={product} />
    </Grid>
))} */}
{products.map((product)=>(

    <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
        
 <Product product={product} onAddToCart={onAddToCart}/>
    </Grid>
))}
    </Grid>
    </div>
</main>
    )

}
export default Products;