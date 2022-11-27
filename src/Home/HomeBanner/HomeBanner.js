import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="hero h-[70vh] w-full" style={{ backgroundImage: `url("https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" w-[250px] lg:w-[700px] text-white">
                    <h1 className="mb-5 text-5xl font-bold">Our Old Bikes</h1>
                    <p className="mb-5 text-lg">Welcome To Our Website. We provide experienced different type of old bikes you can directly connect with the seller to check and buy your bikes!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;