import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const CategoryName = ({ categoryName }) => {
    console.log(categoryName);

    const navigate = useNavigate();


    const { category_id, category, img } = categoryName;



    const handleDetails = (id) => {
        navigate('/categoryDetails', { state: { id } })

    }


    return (
        <div >
            <div

                className="card w-full shadow-lg image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body mt-10">
                    <h2 className="text-center font-extrabold text-3xl">{category}</h2>
                    <Button
                        classes='px-10'
                        handler={() => handleDetails(category_id)}
                    >Click To View Items</Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryName;