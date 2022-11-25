import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const { data: category = [] } = useQuery({
        queryKey: ['category', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category?email=${user?.email}`)
            const data = await res.json()
            // console.log(category);
            return data;
        }
    })


    return (
        <div className='lg:w-[50%] lg:mx-auto'>
            <h1>My Products</h1>


            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>

                                <th>Item Name</th>
                                <th>Price</th>
                                <th>seller Name</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category &&
                                category?.map((category, i) => <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{category?.item_name}</div>

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
                                        <button className="btn btn-ghost btn-xs">Pay</button>
                                    </th>
                                </tr>)

                            }




                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;