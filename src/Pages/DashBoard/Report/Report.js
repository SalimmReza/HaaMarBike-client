import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import WishlistDetails from './WishlistDetails';

const Report = () => {

    const { user } = useContext(AuthContext);

    const { data: wishlists = [], refetch
    } = useQuery({
        queryKey: ['wishilists', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
            const data = await res.json()
            // console.log(bookings);
            return data;
        }
    })






    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10  p-20'>
            {
                wishlists &&
                wishlists?.map(wishlist => <WishlistDetails
                    key={wishlist._id}
                    wishlist={wishlist}
                ></WishlistDetails>)

            }

        </div>
    );
};

export default Report;