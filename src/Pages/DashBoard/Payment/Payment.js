import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import Spinner from '../../../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M6rreDqhhuKg9hd1lKHebuB3XUQpeFP9DbdWkYQUgrBx0XySdzLUziBryUg3QDhmhL2M5QPLlv3Wa35NbvkG1YX00jHYlubc1');



const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const navigation = useNavigation();
    const { itemName, resalePrice, location } = booking;
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>

            <h3 className="text-3xl">Payment for {itemName}</h3>
            <p className="text-xl">Please pay <strong>${resalePrice}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;