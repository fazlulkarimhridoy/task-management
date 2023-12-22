import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/aboutUs">About us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>
    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul id="link1" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-xl">Task Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="link2" className="menu menu-horizontal px-2 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-success text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;