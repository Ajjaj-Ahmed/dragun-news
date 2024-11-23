import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {setUser,createNewUser} = useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name,photo,email,password})

        createNewUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-md rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center pt-3'>Register Here</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">User Name</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input name='name' type="text" className="grow" placeholder="Username" />
                            </label>

                            <label className="label">Photo URL</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input name='photo' type="text" className="grow" placeholder="Photo URL" />
                            </label>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-sm'>Already have account !
                        <Link className='text-red-400 ml-3' to={'/auth/login'}>Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;