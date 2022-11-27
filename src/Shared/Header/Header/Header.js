import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import img from '../../../Assets/cycling.png'
const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    const items = <>
        <li className='font-extrabold text-white  lg:text-black'><Link to='/'>Home</Link></li>
        <li className='font-extrabold text-white lg:text-black'><Link to='/login'>Login</Link></li>
        <li className='font-extrabold text-white lg:text-black'><Link to='/DashBoard'>DashBoard</Link></li>
        <li className='font-extrabold text-white lg:text-black'><Link to='/blog'>Blogs</Link></li>
        {
            user?.email ?
                <li className='font-extrabold text-black block lg:hidden'><Link><button
                    onClick={handleLogOut}
                    className="btn btn-ghost font-extrabold text-white lg:text-black">LogOut</button></Link></li> : ""

        }


    </>


    return (
        <div className="navbar bg-gray-400 flex justify-between sticky top-0 z-50 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <img
                    className='w-10 h-10'
                    src={img} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">HaaMarBike</Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-end  hidden lg:block ">
                {
                    user?.email ?
                        <li className='font-extrabold text-black'><Link><button
                            onClick={handleLogOut}
                            className="btn btn-ghost font-extrabold text-black">LogOut</button></Link></li> : ""

                }
            </div>
        </div>
    );
};

export default Header;