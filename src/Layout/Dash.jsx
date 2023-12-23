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
          <div className="divide-y divide-gray-300 pt-10">
            <ul
              id="link1"
              className="menu menu-vertical px-1 gap-4 text-gray-500"
            >
              {links}
            </ul>
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
