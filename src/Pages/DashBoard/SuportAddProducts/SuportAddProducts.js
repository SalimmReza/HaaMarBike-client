import React, { useEffect, useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';

const SuportAddProducts = () => {


    const [emails, setEmails] = useState({});
    useEffect(() => {
        fetch(`https://assignment-12-server-one.vercel.app/users`)
            .then(res => res.json())
            .then(data => setEmails(data))

    }, [])
    return (
        <div>
            {
                emails.map(email => <AddProducts
                    key={email._id}
                    email={email}
                ></AddProducts>)
            }

        </div>
    );
};

export default SuportAddProducts;