import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const CheckoutForm = ({ course }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const {price} = course;

  useEffect(() => {
    const apiKey = import.meta.env.VITE_Payment_Gateway;
    const accessToken = localStorage.getItem('access-token')
    fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
              "Stripe-Account": apiKey,
            },
            body: JSON.stringify({price}),
          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data)
          })
        },[])

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) {
      return
  }

  const card = elements.getElement(CardElement);
  if (card === null) {
      return
  }

  const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
  })

  if (error) {
      console.log('error', error)
      setCardError(error.message);
  }
  else {
      setCardError('');
      // console.log('payment method', paymentMethod)
  }


  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );

  if (confirmError) {
      console.log(confirmError);
  }
  // console.log(paymentIntent)

}

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/3 mx-auto'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn btn-secondary btn-sm mt-6' disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-700'>{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
