import { stringify } from '@firebase/util';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const BookNowModal = ({ details, setDetails }) => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext)
    // displayName, email
    // console.log(details);
    const {
        _id,
        category_id,
        category_name,
        image,
        item_name,
        sellers_location,
        resale_price,
        original_price,
        year_of_use,
        time_posted,
        sellers_name } = details;


    const handleBookNowSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const image = form.image.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const sellerName = form.sellerName.value;
        const phone = form.phone.value;
        const location = form.location.value;


        // const result = { userName, email, itemName, originalPrice, resalePrice, sellerName, phone, location }
        // console.log(result);

        const booking = {
            categoryId: _id,
            userName,
            image,
            email,
            itemName,
            originalPrice,
            resalePrice,
            sellerName,
            phone,
            location
        }

        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booked')
                    navigate('/dashBoard')


                }
                else {
                    toast.error(data.message)
                }
            })



    }
    return (
        <div>

            <input type="checkbox" id="book-nowModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-[90%] lg:w-[40%] max-w-5xl">

                    <form onSubmit={handleBookNowSubmit}>
                        <div className="hero  bg-base-200">
                            <div className="hero-content">
                                <div className="card  w-full  shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="lg:flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">User Name</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name='image'
                                                    defaultValue={image}
                                                    disabled
                                                    className="input input-bordered hidden" />
                                                <input type="text"
                                                    name='userName'
                                                    defaultValue={user?.displayName}
                                                    disabled
                                                    className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text"
                                                    name='email'
                                                    defaultValue={user?.email}
                                                    disabled
                                                    className="input input-bordered" />
                                            </div>
                                        </div>

                                        <div className="lg:flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Item Name</span>
                                                </label>
                                                <input type="text" name='itemName' defaultValue={item_name} disabled className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Original Price: $ </span>
                                                </label>
                                                <input type="text" name='originalPrice' defaultValue={original_price} disabled className="input input-bordered" />
                                            </div>
                                        </div>

                                        <div className="lg:flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Resale Price: $ </span>
                                                </label>
                                                <input type="text" name='resalePrice' defaultValue={resale_price} disabled className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Sellers Name</span>
                                                </label>
                                                <input type="text" name='sellerName' defaultValue={sellers_name} disabled className="input input-bordered" />
                                            </div>
                                        </div>
                                        <div className="lg:flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Phone Number</span>
                                                </label>
                                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Meeting Location</span>
                                                </label>
                                                <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered" />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            user?.uid ? <button className="btn btn-active btn-secondary w-full ">Submit</button>
                                :
                                <h1>login</h1>
                        }
                    </form>



                </div>
            </div>
        </div>
    );
};

export default BookNowModal;