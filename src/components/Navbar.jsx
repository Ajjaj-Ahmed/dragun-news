import { Link } from "react-router-dom";
import userPic from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
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
                <Link to={'/auth/login'} className="btn rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;