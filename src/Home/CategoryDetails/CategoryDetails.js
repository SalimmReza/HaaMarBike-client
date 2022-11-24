import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryDetails2 from './CategoryDetails2';

const CategoryDetails = () => {
    const { state } = useLocation();
    console.log(state.id);
    const [categoryDetails, setCategoryDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category?category_id=${state.id}`)
            .then(res => res.json())
            .then(data => setCategoryDetails(data))

    }, [state])

    // console.log(categoryDetails[0].category_name);


    // console.log(categoryDetails.resale_price);
    return (
        <div>
            <h1 className='my-10 text-white text-4xl font-semibold'>{categoryDetails[0]?.category_name}</h1>
            <div className='w-[80%] mx-auto grid grid-cols-2 gap-10'>
                {
                    categoryDetails.map(CD => <CategoryDetails2
                        key={CD._id}
                        CD={CD}
                    ></CategoryDetails2>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;