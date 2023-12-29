import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCheck, FaDatabase, FaHome, FaHourglass, FaPlus, FaUndoAlt } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const Dash = () => {
  // states and hooks
  const { user } = useAuth();

  // links
  const links = (
    <>
      <li>
        <NavLink to="taskDashboard">
          <FaDatabase></FaDatabase> Task Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="addTasks">
          <FaPlus></FaPlus>Add Tasks
        </NavLink>
      </li>
      <li>
        <NavLink to="todo">
          <FaHourglass></FaHourglass>To-do
        </NavLink>
      </li>
      <li>
        <NavLink to="ongoing">
          <FaUndoAlt></FaUndoAlt>On-going
        </NavLink>
      </li>
      <li>
        <NavLink to="completed">
          <FaCheck></FaCheck>Completed
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <FaHome></FaHome>Home Page
        </NavLink>
      </li>

    </>
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* dashboard sidebar */}
        <div className="hidden lg:flex">
          <div className="min-h-screen p-3 space-y-2 w-60 bg-gray-100 text-gray-800">
            <div className="flex items-center p-2 space-x-4">
              <img src={user.photoURL} alt="user_photo" className="w-12 h-12 rounded-full bg-gray-500" />
              <div>
                <h2 className="text-sm font-semibold">{user.displayName}</h2>
                <span className="flex items-center space-x-1">
                  <Link to="/profile" className="text-xs hover:underline text-gray-600">View profile</Link>
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-300">
              <ul
                id="link1"
                className="menu menu-vertical px-1 gap-4 text-gray-500"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
        <div className="dropdown bg-gray-200">
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

        {/* dashboard content */}
        <div className="flex-1 bg-gray-50 p-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dash;
