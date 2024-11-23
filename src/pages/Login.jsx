import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {SignInUser,setUser} = useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        SignInUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user)
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center pt-3'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
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
                <p className='text-center text-sm'>Don't have account ! 
                    <Link className='text-red-400 ml-3' to={'/auth/register'}>Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;