import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../Home/CategoryDetails/CategoryDetails";
import Home from "../Home/Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Report from "../Pages/DashBoard/Report/Report";
import Login from "../Pages/Login/Login/Login";
import Register from '../Pages/Login/Register/Register'
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: 'categoryDetails',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,

            }
        ]
    },

    {
        path: '/dashBoard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashBoard',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/dashBoard/addProducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/dashBoard/myProducts',
                element: <PrivateRoute> <MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: '/dashBoard/allSellers',
                element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
            },
            {
                path: '/dashBoard/AllBuyers',
                element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
            },


            {
                path: '/dashBoard/wishlist',
                element: <PrivateRoute><Report></Report></PrivateRoute> //report = wishlist
            },
            {
                path: '/dashBoard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }




])