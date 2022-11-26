import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../Home/CategoryDetails/CategoryDetails";
import Home from "../Home/Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../Pages/DashBoard/Payment/Payment";
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
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'categoryDetails',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,

            }
        ]
    },

    {
        path: '/dashBoard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashBoard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashBoard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashBoard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashBoard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashBoard/AllBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashBoard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }




])