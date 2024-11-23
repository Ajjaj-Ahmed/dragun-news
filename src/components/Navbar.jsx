import { Link } from "react-router-dom";
import userPic from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const {user,logOutUser} = useContext(AuthContext);

    const handleSingOut =()=>{
        logOutUser()
        .then()
        .catch()
    }
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="space-x-3">
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Career</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/auth/register'}>Register</Link>
            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <img className="rounded-full" src={userPic} alt="" />
                </div>
                {
                    user ?
                    <button onClick={handleSingOut} className="btn btn-outline rounded-none">Log out</button>:
                    <Link to={'/auth/login'} className="btn rounded-none">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;