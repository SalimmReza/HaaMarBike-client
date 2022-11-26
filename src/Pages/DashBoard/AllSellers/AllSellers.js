import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../../Components/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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

    const handleVerify = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Verify Successful')

                }
            })
    }




    return (
        <div className='p-10' >
            <h1 className='text-white font-semibold text-2xl my-10'>All Sellers</h1>

            <div className='grid  grid-cols-1 md:grid-cols-3  lg:grid-cols-4 mb-10 '>
                {
                    sellers.map(seller => <div
                        className="card w-[300px] bg-base-100 mb-7 shadow-xl"
                        key={sellers._id}
                    >
                        <div className=" bg-white rounded">
                            <h2 className=" text-black">{seller.name}</h2>
                            <p className=" text-black">{seller.email}</p>
                            <div className="flex my-4 gap-10 justify-center">


                                <Button
                                    handler={() => handleDelete(seller._id)}
                                    className="btn btn-primary">Delete</Button>

                                {
                                    seller.verified ?
                                        <Button
                                            className="btn btn-primary bg-yellow-400">Verified <FontAwesomeIcon className='text-green-400 ml-2' icon={faCheckCircle}></FontAwesomeIcon></Button>

                                        :
                                        <Button
                                            handler={() => handleVerify(seller._id)}
                                            className="btn btn-primary">UnVerified</Button>
                                }



                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default AllSellers;