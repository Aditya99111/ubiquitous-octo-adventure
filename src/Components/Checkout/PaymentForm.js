import React from 'react'
import { Typography, Button} from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({checkoutToken , backstep , shippingData , onCaptureCheckout , nextStep }) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()
        if (!stripe || !elements ) return;
        
        const cardElement= elements.getElement(CardElement)

        const { error , paymentMethod } = await stripe.createPaymentMethod({type:"card" , card: cardElement})

        if (error) {
            console.log('[error]', error);
          } else {
            const orderData = {
              line_items: checkoutToken.live.line_items,
              customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
              shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
              fulfillment: { shipping_method: shippingData.shippingOption },
              payment: {
                gateway: 'stripe',
                stripe: {
                  payment_method_id: paymentMethod.id,
                },
              },
            };

            onCaptureCheckout(checkoutToken.id , orderData)
            nextStep()
        }

    }

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Typography variant="h3" align="center">payment methods</Typography>
            <br /><br/>

            {/* stripe elemets starts */}
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements , stripe})=>(
                        <form onSubmit={(e)=> handleSubmit(e, elements, stripe)}>
                            <CardElement/>
                            <br /><br />
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <Button variant="outlined" onClick={backstep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    pay : {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>

            </Elements>

            {/* stripe elemets ends */}

        </>
    )
}

export default PaymentForm
