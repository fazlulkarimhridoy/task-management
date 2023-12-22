import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dash from "../Layout/Dash";
import TaskDashboard from "../Pages/Dashboard/TaskDashboard/TaskDashboard"
import AddTasks from "../Pages/Dashboard/AddTasks/AddTasks"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h1>Error found</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dash></Dash>,
        children: [
            {
                path: "taskDashboard",
                element: <TaskDashboard></TaskDashboard>
            },
            {
                path: "addTasks",
                element: <AddTasks></AddTasks>
            }
        ]
    }
])