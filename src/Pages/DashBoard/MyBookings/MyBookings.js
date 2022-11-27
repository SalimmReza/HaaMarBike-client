import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyBookings = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [], refetch
    } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            const data = await res.json()
            // console.log(bookings);
            return data;
        }
    })


    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Deleted Successful`)

                }
            })
    }

    return (
        <div className='lg:w-[70%] lg:mx-auto bg-white'>

            <h1 className='text-black font-semibold text-2xl my-10'>My Bookings</h1>
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
                                            {/* <div className="font-bold">{booking?._id}</div> */}

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.resalePrice}
                                    <br />

                                </td>
                                <td>{booking?.sellerName}</td>
                                <th>



                                    {
                                        booking?.paid ?
                                            <>
                                                <Link to={`/dashBoard/payment/${booking._id}`}> <button className="btn bg-green-400 text-white btn-xs">Paid</button></Link>
                                            </>
                                            :

                                            <>
                                                <button
                                                    onClick={() => handleDelete(booking?._id)}
                                                    className="btn bg-red-600 btn-xs text-white">Remove</button>
                                                <Link to={`/dashBoard/payment/${booking._id}`}> <button className="btn bg-red-500 text-white btn-xs">Pay</button></Link>
                                            </>


                                    }

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