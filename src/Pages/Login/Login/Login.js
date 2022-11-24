import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/'


    const { loginIn, googleSignIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginIn(email, password)

            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setError('');
                // navigate(from, { replace: true });
                navigate('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);

            });

    }

    return (
        <div >
            <div className="hero bg-base-200 p-10">
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* <p className='text-red-700'>{error}</p> */}
                        <div className="form-control mt-6">
                            <Button
                                type='submit'
                                classes='px-24'
                            >Login</Button>

                            <p className='mt-2 text-[15px] font-medium'>or Register With</p>
                        </div>

                        <div className="avatar gap-4 flex justify-center cursor-pointer">

                            <div className="w-9 h-9 rounded-full">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt='' />
                            </div>
                            {/* <div
                            className="w-9 h-9 rounded-full">
                            <img className=''
                                src="https://www.pngitem.com/pimgs/m/0-6762_circle-fb-logo-icon-photos-facebook-circle-fb.png" alt='' />
                        </div>
                        <div className="w-9 h-9 rounded-full">
                            <img className=''
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' />
                        </div> */}

                        </div>

                        <div className='mt-2 text-[15px] font-medium'>
                            <p>Don't have an Account!<Link to='/register'><span className='text-red-600'>Register</span></Link></p>
                        </div>


                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;