import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const BookNowModal = ({ details, setDetails }) => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext)
    // displayName, email
    // console.log(details);
    const { category_id,
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
        navigate('/')
    }
    return (
        <div>

            <input type="checkbox" id="book-nowModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-[40%] max-w-5xl">

                    <form onSubmit={handleBookNowSubmit}>
                        <div className="hero  bg-base-200">
                            <div className="hero-content">
                                <div className="card  w-full  shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">User Name</span>
                                                </label>
                                                <input type="text"
                                                    defaultValue={user?.displayName}
                                                    disabled
                                                    className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text"
                                                    defaultValue={user?.email}
                                                    disabled
                                                    className="input input-bordered" />
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Item Name</span>
                                                </label>
                                                <input type="text" defaultValue={item_name} disabled className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Original Price</span>
                                                </label>
                                                <input type="text" defaultValue={original_price} disabled className="input input-bordered" />
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Resale Price</span>
                                                </label>
                                                <input type="text" defaultValue={resale_price} disabled className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Sellers Name</span>
                                                </label>
                                                <input type="text" defaultValue={sellers_name} disabled className="input input-bordered" />
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Phone Number</span>
                                                </label>
                                                <input type="text" placeholder="Phone Number" className="input input-bordered" />
                                            </div>

                                            <div>
                                                <label className="label">
                                                    <span className="label-text">Meeting Location</span>
                                                </label>
                                                <input type="text" placeholder="Meeting Location" className="input input-bordered" />
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