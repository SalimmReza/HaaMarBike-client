import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-2xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Bookings</Link></li>
                        <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;