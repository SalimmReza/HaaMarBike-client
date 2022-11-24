import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="hero h-[70vh] w-full" style={{ backgroundImage: `url("https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" w-[250px] lg:w-[700px]">
                    <h1 className="mb-5 text-5xl font-bold">Close To Nature</h1>
                    <p className="mb-5">Welcome To Our Website. We provide experienced photographers for wild live photography. We have many options, you can check out our services and the reviews of out customers. Lets explore the wildLife together!
                    </p>
                    <Link to='/services'><button
                        className="btn btn-primary px-10">Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;