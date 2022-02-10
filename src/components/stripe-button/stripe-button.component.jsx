import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KROPoHTQ8nySPFC9E7JkNU5mIxYBoCWCYZ7aTWcH2CTWXu4o4KHIPcbpfVRnCi6yrjySAx0DFbLLSrHH5SQwu4B00RkMyGtkj';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    }
    return(
        <StripeCheckout 
            label="Pay Now"
            name='Sam Shah Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;