import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../../Components/Button/Button';

const AllSellers = () => {


    const [sellers, setSellers] = useState([]);

    // console.log(type);

    // const [accountType, setAccountType] = useState('User')
    useEffect(() => {
        fetch(`http://localhost:5000/users?accountType=seller`)
            .then(res => res.json())
            .then(data => setSellers(data))

    }, [sellers])


    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
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
            <h1 className='text-white font-semibold text-2xl my-10'>All Sellers</h1>

            <div className='grid  grid-cols-1  lg:grid-cols-4 '>
                {
                    sellers.map(seller => <div
                        className="card w-[300px] bg-base-100 shadow-xl"
                        key={sellers._id}
                    >
                        <div className=" bg-white rounded">
                            <h2 className=" text-black">{seller.name}</h2>
                            <p className=" text-black">{seller.email}</p>
                            <div className="flex my-4 gap-10 justify-center">
                                <Button
                                    handler={() => handleDelete(seller._id)}
                                    className="btn btn-primary">Delete</Button>
                                <Button className="btn btn-primary">Verify</Button>

                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default AllSellers;