import { useQuery } from '@tanstack/react-query';
import { SAMLAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import useSeller from '../Hooks/UseSeller';
import useUser from '../Hooks/UseUser';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header/Header';

const DashBoardLayout = ({ sel }) => {
    // console.log(sel);

    const { user } = useContext(AuthContext);
    // console.log(user.emailVerified);
    const [checkUsers, setCheckUsers] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckUsers(data))
    }, [user?.email])







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


                        <li><Link to='/dashboard/allBuyers'>all</Link></li>
                        {/* {
                            checkUsers.isSeller &&

                            <li><Link to='/dashboard/allBuyers'>seller</Link></li>
                        }
                        {
                            checkUsers.isUser &&
                            <li><Link to='/dashboard/allBuyers'>user</Link></li>
                        }

                        {
                            checkUsers.isAdmin &&
                            <li><Link to='/dashboard/allBuyers'>Admin</Link></li>
                        }

                        {
                            user?.emailVerified ? <>
                                <li><Link to='/dashboard/allBuyers'>user</Link></li>
                            </> :
                                ""

                        } */}












                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;