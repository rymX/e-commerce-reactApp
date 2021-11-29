import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'


import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

function Checkout({cart}) {

  const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData , setShippingDtata]= useState({})

  useEffect(()=>{
const generateToken = async () => {
  try{
const token = await commerce.checkout.generateToken(cart.id , {type : 'cart'});
setCheckoutToken(token)
  }
  catch{}
}
generateToken();
  },[cart]);
const nextStep = ()=> setActiveStep((prevStep)=> prevStep+1) ;
const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

const next =(data)=>{
setShippingDtata(data);
nextStep();
}
    

const Form =()=> ( activeStep === 0 ? <AdressForm  checkoutToken={checkoutToken} next={next} /> : <PaymentForm checkoutToken={checkoutToken}/> )

const Confirmation=()=>(
  <div>
    Confirmation
  </div>
)

    return (
        <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken &&  <Form />}
        </Paper>
      </main>
    </>
    )
}

export default Checkout
