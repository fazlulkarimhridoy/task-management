import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../Hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  // states and hooks
  const { user, logout } = useAuth();

  // handle logout
  const handleLogout = () => {
    logout()
      .then(res => {
        const user = res.user;
        console.log(user);
      })
  };

  //links
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/aboutUs">About us</NavLink></li>
      <li> <NavLink to="/contactUs">Contact</NavLink></li>
      {user && (
        <li><NavLink to="/dashboard/taskDashboard">Dashboard</NavLink></li>
      )}
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="link1"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-lg font-bold ml-4">Task Management</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          id="link2"
          className="flex flex-row items-center px-2 gap-6 text-gray-600 font-semibold"
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end mr-4">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end z-10">
            <label tabIndex={0} className="">
              <button>
                <img
                  className="w-[40px] h-[40px] mr-2 rounded-full border-2"
                  src={user.photoURL}
                  alt="user_photo"
                />
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-4 shadow bg-gray-50 rounded-box w-40 mt-2"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="btn w-full bg-red-700 text-white hover:bg-orange-500"
                >
                  <FaSignOutAlt></FaSignOutAlt>
                  Signout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <button>
              <Link
                to="/login"
                className="bg-white text-sky-500 border border-sky-500 py-2 px-6 mr-2 rounded-lg hover:bg-sky-500 hover:text-white hover:transition duration-200"
              >
                Sign In
              </Link>
            </button>
            <button>
              <Link
                to="/register"
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-white hover:border-green-500 hover:text-green-500 hover:border hover:transition duration-200"
              >
                Sign Up
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
