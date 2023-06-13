import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const CheckoutForm = ({ course }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {price} = course;

  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price, axiosSecure])

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

  setProcessing(true)

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
