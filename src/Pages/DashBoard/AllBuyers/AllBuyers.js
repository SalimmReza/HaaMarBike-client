import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../../Components/Button/Button';
import { AuthContext } from '../../../Context/AuthProvider';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/users?accountType=user`)
            .then(res => res.json())
            .then(data => setBuyers(data))

    }, [buyers])



    const handleDelete = id => {
        console.log(id);
        fetch(`https://assignment-12-server-one.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // refetch();
                    toast.success(`Deleted Successful`)

                }
            })
    }
    return (
        <div className='p-10' >
            <h1 className='text-white font-semibold text-2xl my-10'>All Buyers</h1>

            <div className='grid  grid-cols-1  lg:grid-cols-4 '>
                {
                    buyers?.length === 0 ?
                        <>
                            <h1 className='text-white'>No Buyers</h1>
                        </>
                        :
                        <>
                            {
                                buyers.map(buyer => <div
                                    className="card w-[300px] bg-base-100 shadow-xl mb-7"
                                    key={buyer._id}
                                >
                                    <div className=" bg-white rounded mb-3">
                                        <h2 className=" text-black">{buyer.name}</h2>
                                        <p className=" text-black">{buyer.email}</p>
                                        <div className="flex my-4 gap-10 justify-center">
                                            <Button
                                                handler={() => handleDelete(buyer._id)}
                                                className="btn btn-primary">Delete</Button>


                                        </div>
                                    </div>
                                </div>)
                            }
                        </>
                }
            </div>



        </div>
    );
};

export default AllBuyers;