import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GsGP8KHpnjf1J0scvjBcJ0icvk9mvEBzbml5B3RggwyeNF0jsqEYvbHE83redspfnLCqnSZfiFClbXot0AWuGf200MYjuXkUy'

    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
