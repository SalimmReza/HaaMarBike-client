import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../Home/CategoryDetails/CategoryDetails";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
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
    }




])