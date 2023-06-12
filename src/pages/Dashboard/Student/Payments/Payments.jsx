import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payments = () => {
  const location = useLocation();
  console.log(location)
  const course = location.state;
  return (
    <div>
      <h2>Payment: {course.name}</h2>
      <h2>Class Name: {course.price}</h2>
    
            <Elements stripe={stripePromise}>
        <CheckoutForm course={course} />
      </Elements>
    </div>
  );
};

export default Payments;
