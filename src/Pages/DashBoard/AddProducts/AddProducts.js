import userEvent from '@testing-library/user-event';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProducts = ({ email }) => {

    // console.log(email);
    const navigate = useNavigate();





    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleBookNowSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value
        const image = form.image.value
        const year_of_use = form.year_of_use.value
        const email = form.email.value
        const sellers_location = form.sellers_location.value
        const original_Price = form.original_Price.value
        const resale_price = form.resale_price.value
        const sellers_name = form.sellers_name.value
        const category_id = form.category_id.value
        const condition = form.condition.value
        const phone = form.phone.value
        const category_name = form.category_name.value
        const description = form.description.value

        const Product = {
            email,
            image,
            item_name, year_of_use, sellers_location, original_Price, resale_price, sellers_name, category_id, condition, phone, category_name, description
        }



        fetch(`http://localhost:5000/category`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booked')
                    navigate('/dashboard/myProducts')
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <div>
            <h1>Add Products</h1>


            <form onSubmit={handleBookNowSubmit}>
                <div className="hero  bg-base-200">
                    <div className="hero-content">
                        <div className="card  w-full  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="lg:flex gap-6">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>
                                        <input type="text"
                                            name='item_name'
                                            placeholder='Item Name'
                                            className="input input-bordered" required />
                                    </div>
                                    <div className='hidden'>
                                        <label className="label">
                                            <span className="label-text">email</span>
                                        </label>
                                        <input type="text"
                                            name='email'
                                            placeholder='Item Name'
                                            defaultValue={user?.email}
                                            className="input input-bordered" required />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text"
                                            name='image'
                                            placeholder='URL'
                                            //kaj pore hobe
                                            className="input input-bordered" required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Years of use</span>
                                        </label>
                                        <input type="text"
                                            name='year_of_use'
                                            className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="lg:flex gap-6">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Seller Location</span>
                                        </label>
                                        <input type="text"
                                            placeholder='Seller Location'
                                            name='sellers_location'
                                            className="input input-bordered" required />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Original Price: $ </span>
                                        </label>
                                        <input type="number" name='original_Price'
                                            placeholder='Original Price'
                                            className="input input-bordered" required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Resale Price: $ </span>
                                        </label>
                                        <input type="number"
                                            placeholder='Resale Price'
                                            name='resale_price' className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="lg:flex gap-6">

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Sellers Name</span>
                                        </label>

                                        <input type="text"
                                            placeholder='Sellers Name'
                                            name='sellers_name' className="input input-bordered" required />


                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Category </span>
                                        </label>
                                        <select name="category_id" id="account" className='border-2 rounded-lg w-[220px]'>
                                            <option value="01">01 Sports</option>
                                            <option value="02">02 Naked</option>
                                            <option value="03">03 Mountain</option>

                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Condition</span>
                                        </label>
                                        <select name="condition" id="account" className='border-2 rounded-lg w-[220px]'>
                                            <option value="Excellent">Excellent</option>
                                            <option value="Good">Good</option>
                                            <option value="Fair">Fair</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="lg:flex gap-6">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Category Name</span>
                                        </label>
                                        <input type="text"
                                            name='category_name'
                                            placeholder='Sports Bike or Naked Bike or Mountain'
                                            className="input input-bordered lg:w-[450px]" required />
                                    </div>


                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" maxLength='70' required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-active btn-secondary w-full ">Submit</button>


            </form>



        </div>

    );
};

export default AddProducts;