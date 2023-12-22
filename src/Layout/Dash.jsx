import { NavLink, Outlet } from "react-router-dom";
import { FaCircleNotch, FaHome, FaUserPlus } from "react-icons/fa";

const Dash = () => {
  const links = (
    <>
      <li>
        <NavLink to="taskDashboard">
          <FaCircleNotch></FaCircleNotch> Task Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="addTasks">
          <FaUserPlus></FaUserPlus>Add Tasks
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
      <div className="flex">
        {/* dashboard sidebar */}
        <div className="min-h-screen p-3 space-y-2 w-60 bg-gray-100 text-gray-800">
          {/* <div className="flex items-center p-2 space-x-4">
            <img
              src={image}
              alt="user_photo"
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{name}</h2>
              <span className="flex items-center space-x-1">
                <Link
                  to="/profile"
                  className="text-xs hover:underline text-gray-600"
                >
                  View profile
                </Link>
              </span>
            </div>
          </div> */}
          <div className="divide-y divide-gray-300">
            <ul
              id="link1"
              className="menu menu-vertical px-1 gap-2 text-gray-500"
            >
              {links}
            </ul>
            {/* <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <button
                  onClick={() => logout()}
                  rel="noopener noreferrer"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaSignOutAlt></FaSignOutAlt>
                  <span>Logout</span>
                </button>
              </li>
            </ul> */}
          </div>
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
