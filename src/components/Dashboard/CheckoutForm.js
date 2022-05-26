import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import { baseUrl } from '../../api/constant';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const {_id, price, name, email } = order;
  
  useEffect(() => {
    fetch(`${baseUrl}/create-payment-intents`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({price})

    })
    .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
         setClientSecret(data.clientSecret)
       }
    })
  },[price])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card

        });

    
      setCardError(error?.message || '');
      setSuccess('')
      setProcessing(true);
      
      // confirm card payment
      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name:name,
              email:email, 
            },
          },
        },
      );
     
      if (intentError) {
        setCardError(intentError?.message);
        setProcessing(false);
        
      }
      else {
        setCardError('');
        setTransactionId(paymentIntent.id)
        

        setSuccess('Congrats! Your Payment is completed.');
        //  store payment on database
        const payment = {
        //  
          transactionId:paymentIntent.id

        }
        fetch(`${baseUrl}/payment/${_id}`, {
          method: 'PATCH',
          headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(payment)

        }).then(res => res.json())
          .then(data => {
            setProcessing(false)
          
        })
      }
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
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
      <button className='btn btn-success btn-sm mt-4 ' type="submit" disabled={!stripe || !clientSecret||transactionId}>
        Pay
      </button>
    </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
        }
            {
          success && <div className='text-success'>
           <p>{success}</p> 
            <p>Your transaction Id: <span className='text-orange-500'>{ transactionId}</span> </p>
          </div>
        }
        </>
    );
};

export default CheckoutForm;