import React, { useEffect, useState } from 'react';

const AllSellers = () => {


    const [sellers, setSellers] = useState([]);
    const type = sellers[0]?.accountType;
    console.log(type);

    // const [accountType, setAccountType] = useState('User')
    useEffect(() => {
        fetch(`http://localhost:5000/users?accountType=seller`)
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])




    return (
        <div>
            all sellers



            {
                sellers.map(selller => <div className="card w-96 bg-base-100 shadow-xl"
                    key={sellers._id}
                >
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default AllSellers;