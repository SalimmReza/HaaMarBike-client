import React, { useEffect, useState } from 'react';
import CategoryName from '../CategoryName/CategoryName';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {

    const [categoryNames, setCategoryName] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categoryName`)
            .then(res => res.json())
            .then(data => setCategoryName(data))
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
            </div>


        </div>
    );
};

export default Home;