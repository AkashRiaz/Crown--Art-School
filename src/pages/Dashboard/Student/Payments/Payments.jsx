import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payments = () => {
  const location = useLocation();
  const [price, setPrice] = useState(null);
  const [className, setClassName] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const priceParam = searchParams.get('price');
    const classNameParam = searchParams.get('className');
    setPrice(priceParam);
    setClassName(classNameParam);
  }, [location.search]);

  return (
    <div>
      <h2>Payment: {price}</h2>
      <h2>Class Name: {className}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} className={className} />
      </Elements>
    </div>
  );
};

export default Payments;
