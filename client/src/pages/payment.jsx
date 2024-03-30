import React, { useEffect, useState } from 'react'
import axios from 'axios'
const key='pk_test_51O55ZECtxK40cakWTxT9MiAe3qnGrYbdq8F4XecRQuak7NpGJ3t8s0qAilSWjkazR3LPnjQlRZdbzHHXbLyS4rx300uUsUZDrD'
import StripeCheckout from 'react-stripe-checkout';
const Payment = () => {

    const [stripeToken,setStripeToken]=useState(null)
    const onToken=(token) => {
        setStripeToken(token)
    }
    useEffect(()=>{
if(stripeToken){
    axios.post('http://localhost:5000/api/checkout/payment',{
        tokenId:stripeToken?.id,
        amount:2000
    }).then(({data})=>{
        console.log(data);
    }).catch(err =>console.log(err));
}
    },[stripeToken])
  return (
    <div>
        <StripeCheckout 
        name='bela shop'
        billingAddress
        description='your payment is $20'
        stripeKey={key}
        shippingAddress
        amount={2000}
        token={onToken}
        >
            <button>pay now</button>
        </StripeCheckout>
    </div>
  )
}

export default Payment