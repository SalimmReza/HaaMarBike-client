import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const { data: category = [], refetch } = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-one.vercel.app/category?email=${user?.email}`)
            const data = await res.json()
            console.log(category);

            return data;

        }
    })


    const handleDelete = id => {
        console.log(id);
        fetch(`https://assignment-12-server-one.vercel.app/category/${id}`, {
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

    const handleAdvertise = (id) => {
        console.log(id);
        fetch(`https://assignment-12-server-one.vercel.app/category/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('Advertise Successful')

                }
            })
    }


    return (
        <div className='lg:w-[70%] lg:mx-auto bg-white'>
            <h1 className='text-black font-semibold text-2xl my-10'>My Products</h1>


            <div className=''>
                <div className="overflow-x-auto w-[400px] lg:w-full">
                    <table className="table w-[100px] lg:w-full">

                        <thead>
                            <tr>

                                <th>Item Name</th>
                                <th>Price</th>
                                <th>seller Name</th>
                                <th>Phone Number</th>
                                <th>Delete</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody className='mb-10'>
                            {
                                category?.length === 0 ?
                                    <>
                                        <h1 className='text-black'>No Products</h1>
                                    </>
                                    :
                                    <>

                                        {
                                            category &&
                                            category?.map((category, i) => <tr>

                                                <td>
                                                    <div className="flex items-center space-x-3">

                                                        <div>
                                                            <div className="font-bold">{category?.item_name}</div>
                                                            <div className="font-bold">{category?._id}</div>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {category?.resale_price}
                                                    <br />

                                                </td>
                                                <td>{category?.sellers_name}</td>
                                                <td>{category?.phone}</td>
                                                <th>
                                                    <button
                                                        onClick={() => handleDelete(category._id)}
                                                        className="btn bg-red-600 btn-xs">Delete</button>
                                                </th>
                                                <th>
                                                    {/* <button className="btn bg-yellow-600 btn-xs">Advertised</button> */}




                                                    {
                                                        category?.advertise ?
                                                            <>
                                                                {
                                                                    category?.paid ?
                                                                        <>
                                                                            <button className="btn bg-yellow-600 btn-xs">Sold</button>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <button className="btn bg-yellow-600 btn-xs">Advertised</button>
                                                                        </>
                                                                }
                                                            </>
                                                            :
                                                            <>
                                                                <button

                                                                    className="btn bg-green-600 btn-xs">Unsold</button>

                                                                <button
                                                                    onClick={() => handleAdvertise(category._id)}
                                                                    className="btn bg-green-600 btn-xs">Advertise</button>
                                                            </>

                                                    }



                                                </th>
                                            </tr>)

                                        }

                                    </>
                            }




                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;