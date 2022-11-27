import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const WishlistDetails = ({ wishlist }) => {
    console.log(wishlist);
    const { _id, category_name, image, item_name } = wishlist;
    const navigate = useNavigate();


    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/wishlist/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    // refetch();
                    toast.success(`Deleted Successful`)


                }
            })
    }

    // const handleBookNow = (id) => {
    //     navigate(`/`)
    // }
    return (
        <div>
            <div className="card card-compact w-80 bg-white text-black shadow-xl">
                <figure><img
                    className='h-[200px] w-full'
                    src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p>Category Name: {category_name}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500 text-white">Remove</button>
                        {/* <button
                            onClick={() => handleBookNow(_id)}
                            className="btn bg-red-500 text-white">Book Now</button> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WishlistDetails;