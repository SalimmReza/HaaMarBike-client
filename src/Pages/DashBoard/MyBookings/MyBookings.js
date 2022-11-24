import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBookings = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            const data = await res.json()
            console.log(bookings);
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Price</th>
                            <th>seller Name</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking?.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking?.itemName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.resalePrice}
                                    <br />

                                </td>
                                <td>{booking?.sellerName}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pay</button>
                                </th>
                            </tr>)

                        }




                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyBookings;