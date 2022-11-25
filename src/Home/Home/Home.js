import React, { useEffect, useState } from 'react';
import CategoryName from '../CategoryName/CategoryName';
import HomeBanner from '../HomeBanner/HomeBanner';
import Advertise from './Advertise/Advertise';

const Home = () => {

    const [categoryNames, setCategoryName] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categoryName`)
            .then(res => res.json())
            .then(data => setCategoryName(data))
    }, [])
    const [advertises, setAdvertises] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => setAdvertises(data))

    }, [])


    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className='w-[80%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {
                        categoryNames.map(categoryName => <CategoryName
                            key={categoryName._id}
                            categoryName={categoryName}
                        ></CategoryName>)
                    }

                </div>
                {
                    advertises.map(advertise => <Advertise
                        key={advertise._id}
                        advertises={advertise}
                    ></Advertise>)
                }
            </div>


        </div>
    );
};

export default Home;