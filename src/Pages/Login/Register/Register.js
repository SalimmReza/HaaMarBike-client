import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'


    const provider = new GoogleAuthProvider();
    const handleGoogleClick = () => {
        googleSignIn(provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setError('');
                // navigate(from, { replace: true });
                navigate('/')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage);

            });
    }


    const handleRegister = e => {
        e.preventDefault();
        setError('');
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const accountType = form.account.value;
        const password = form.password.value;
        // const user = { name, email, password, accountType }

        // console.log(user);

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                form.reset();
                toast.success('user created successfully')
                setError('');
                const userInfo = {
                    displayName: name,
                    accountType: accountType
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        sendUserToDB(name, email, accountType);
                        navigate(from, { replace: true });
                    })
                    .catch(err => console.log("1", err));


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError("2", errorMessage)
                // ..
            });



    }

    const sendUserToDB = (name, email, accountType) => {
        const user = { name, email, accountType }
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }







    return (
        <div>
            <div className="hero bg-base-200 p-10">

                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Register now!</h1>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label for="account" className='font-medium'>Select Your Account Type:</label>
                            <select name="account" id="account" className='border-2 rounded-lg'>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>

                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" />

                        </div>
                        {/* <p className='text-red-700'>{error}</p> */}
                        <div className="form-control mt-6">
                            <Button
                                type='submit'
                                classes='px-24'
                            >Register</Button>
                            <p className='mt-2 text-[15px] font-medium'>or Login With</p>
                        </div>

                        <div className="avatar gap-4 flex justify-center cursor-pointer">

                            <div
                                onClick={handleGoogleClick}
                                className="w-9 h-9 rounded-full">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt='' />
                            </div>
                            {/* <div className="w-9 h-9 rounded-full">
                            <img className=''
                                src="https://www.pngitem.com/pimgs/m/0-6762_circle-fb-logo-icon-photos-facebook-circle-fb.png" alt='' />
                        </div>
                        <div className="w-9 h-9 rounded-full">
                            <img className=''
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' />
                        </div> */}

                        </div>

                        <div className='mt-2 text-[15px] font-medium'>
                            <p>Already have an Account! <Link to='/login'><span className='text-red-600'>Login</span></Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;