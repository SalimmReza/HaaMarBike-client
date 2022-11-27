import React from 'react';

const Advertise = ({ advertises }) => {
    console.log("advertise", advertises);
    const { image, category_name, item_name } = advertises



    // <div className="card  bg-black shadow-xl">
    //                     <div className="card-body">
    //                         <h2 className="card-title">Category: {category_name}</h2>
    //                         <p>Item Name: {item_name}</p>
    //                         <div className="card-actions justify-end">
    //                             <button className="btn btn-primary">Advertising</button>
    //                         </div>
    //                     </div>
    //                 </div>
    return (
        <div >
            {
                advertises?.advertise ?
                    <>
                        {
                            advertises?.paid ?
                                <>

                                </>
                                :
                                <> <div className="card  bg-black shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Category: {category_name}</h2>
                                        <p>Item Name: {item_name}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Advertising</button>
                                        </div>
                                    </div>
                                </div></>

                        }
                    </>
                    :
                    <></>
            }

        </div>


    );
};

export default Advertise;