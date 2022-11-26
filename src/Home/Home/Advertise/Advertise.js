import React from 'react';

const Advertise = ({ advertises }) => {
    console.log(advertises);
    const { image, category_name, item_name } = advertises
    return (
        <div>

            {
                advertises.advertise &&
                <div className="card w-96 bg-black shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Category: {category_name}</h2>
                        <p>Item Name: {item_name}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Advertising</button>
                        </div>
                    </div>
                </div>
            }

        </div>


    );
};

export default Advertise;