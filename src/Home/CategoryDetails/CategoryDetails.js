import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import CategoryDetails2 from './CategoryDetails2';

const CategoryDetails = () => {
    const [details, setDetails] = useState(null)
    const { state } = useLocation();
    // console.log(state.id);
    const [categoryDetails, setCategoryDetails] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/category?category_id=${state?.id}`)
            .then(res => res.json())
            .then(data => setCategoryDetails(data))

    }, [state?.id])

    // console.log(categoryDetails[0].category_name);


    // console.log(categoryDetails.resale_price);


    const [emails, setEmail] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/users`)
            .then(res => res.json())
            .then(data => setEmail(data))
    }, [])
    return (
        <div>
            <h1 className='my-10 text-white text-4xl font-semibold'>{categoryDetails[0]?.category_name}</h1>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    categoryDetails.map(CD => <CategoryDetails2
                        key={CD._id}
                        CD={CD}
                        setDetails={setDetails}
                    ></CategoryDetails2>)
                }
                {/* {
                    emails.map(email => <CategoryDetails2
                        key={email._id}
                        email={email}
                    ></CategoryDetails2>)
                } */}
            </div>
            {
                details &&
                <BookNowModal
                    details={details}
                    setDetails={setDetails}
                // refetch={refetch}
                ></BookNowModal>
            }
        </div>
    );
};

export default CategoryDetails;