import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutUs">About us</NavLink></li>
            <li><NavLink to="/contactUs">Contact</NavLink></li>
            <li><NavLink to="/dashboard/taskDashboard">Dashboard</NavLink></li>
        </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul id="link1" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-lg font-bold ml-4">Task Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="link2" className="flex flex-row items-center px-2 gap-6 text-gray-600 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end mr-4">
                <button><Link className="bg-green-500 text-white py-2 px-6 mr-2 rounded-lg hover:bg-white hover:border hover:border-green-500 hover:text-green-500 hover:transition duration-500">Sign Up</Link></button>
                <button><Link className="bg-sky-500 text-white py-2 px-6 rounded-lg hover:bg-blue-500 hover:transition duration-500">Sign In</Link></button>
            </div>
        </div>
    );
};

export default Navbar;