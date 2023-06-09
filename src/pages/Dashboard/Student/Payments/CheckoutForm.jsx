import { useStripe ,CardElement,useElements} from '@stripe/react-stripe-js';
import React,{useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';

const CheckoutForm = ({price, className}) => {
  const [clientSecret, setClientSecret] = useState("");
  console.log('inside checkout page',price, className)
    const stripe = useStripe()
    const element = useElements()
    const {user} = useContext(AuthContext)
    const [cardError, setCardError]= useState(' ')

    useEffect(() => {
      const fetchClientSecret = async () => {
        try {
          const response = await fetch("http://localhost:5000/createPayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(price),
          });
          
          if (!response.ok) {
            throw new Error("Failed to fetch client secret");
          }
          
          const data = await response.json();
          console.log(data.clientSecret);
        } catch (error) {
          console.error("Error fetching client secret:", error);
        }
      };
    
      fetchClientSecret();
    }, []);
    
  

    const handleSubmit =async(event)=>{
        event.preventDefault()

        if(!stripe || !element){
            return;
        }
        const card = element.getElement(CardElement)
        if(card===null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            setCardError(error.message)
        }
        else{
            setCardError(' ')
            console.log('payment method', paymentMethod)
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment( clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email:user?.email || 'Unknown',
                name: user?.displayName || 'unknown'
              },
            },
          },
        );
        if(confirmError){
          setCardError(confirmError)
        }

        console.log(paymentIntent)
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