
import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { resalePrice, email, UserName, _id, categoryId } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment-12-server-one.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setError(error.message);
        }
        else {
            setError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: UserName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message);
            return;
        }
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {

            // console.log('card info', card);
            // store payment info in the database
            // setSuccess('congo');
            // setTransactionId(paymentIntent.id)
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
                categoryId,
            }
            fetch('https://assignment-12-server-one.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },

                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                }).catch(err => console.log(err))
        }
        setProcessing(false);


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
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{error}</p>
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;