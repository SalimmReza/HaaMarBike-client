import React, { useEffect, useState } from 'react';
import CategoryName from '../CategoryName/CategoryName';
import HomeBanner from '../HomeBanner/HomeBanner';
import Advertise from './Advertise/Advertise';
import Carousel from './Carousel/Carousel';

const Home = () => {

    const [categoryNames, setCategoryName] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/categoryName`)
            .then(res => res.json())
            .then(data => setCategoryName(data))
    }, [])
    const [advertises, setAdvertises] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/category`)
            .then(res => res.json())
            .then(data => setAdvertises(data))

    }, [])


    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className='w-[80%] mx-auto'>
                <div>
                    <h1 className='my-16 font-extrabold text-4xl'>Categories</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                        {
                            categoryNames.map(categoryName => <CategoryName
                                key={categoryName._id}
                                categoryName={categoryName}
                            ></CategoryName>)
                        }

                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>


                    {
                        advertises.map(advertise => <Advertise
                            key={advertise._id}
                            advertises={advertise}
                        ></Advertise>).reverse()
                    }
                </div>




            </div>
            <Carousel></Carousel>
        </div>



    );
};

export default Home;