import React, { useEffect, useState } from 'react';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import Button from '../../Components/Button/Button';

const CategoryDetails2 = ({ CD, setDetails }) => {

    console.log(CD);
    const { category_id,
        category_name,
        image,
        item_name,
        sellers_location,
        resale_price,
        original_price,
        year_of_use,
        time_posted,
        advertise,
        sellers_name } = CD;

    // console.log();



    return (
        <div>

            {

                CD?.paid ? "" :

                    < div className="card bg-slate-100 shadow-xl">
                        <figure><img
                            className='h-[350px] w-full'
                            src={image} alt="" /></figure>
                        <div className="card-body text-black">
                            <h2 className="card-title">
                                {item_name}
                                <div className="badge badge-secondary">Years Used : <span className='text-red-500 font-bold text-2xl'>{year_of_use}</span> </div>
                            </h2>
                            {/* <p>{email.email}</p> */}
                            <p className='font-bold'>Sellers Name: {sellers_name}</p>
                            <p className='font-bold'>Location: {sellers_location}</p>
                            <p className='font-bold'>Time Posted: {time_posted}</p>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-outline">Original Price: $  {original_price}</div>
                                <div className="badge badge-outline">Resale Price: $  {resale_price}</div>
                            </div>


                            <Button
                                classes='px-10 mt-6'
                            > <label
                                onClick={() => setDetails(CD)}
                                htmlFor="book-nowModal"
                            >Book Now</label></Button>
                        </div>
                    </div>
            }


        </div >
    );
};

export default CategoryDetails2;