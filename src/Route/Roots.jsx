import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dash from "../Layout/Dash";
import TaskDashboard from "../Pages/Dashboard/TaskDashboard/TaskDashboard"
import AddTasks from "../Pages/Dashboard/AddTasks/AddTasks"
import ToDo from "../Pages/Dashboard/ToDo/ToDo"
import OnGoing from "../Pages/Dashboard/OnGoing/OnGoing"
import Completed from "../Pages/Dashboard/Completed/Completed"
import AboutUs from "../Pages/AboutUs/AboutUs"
import ContactUs from "../Pages/ContactUs/ContactUs"
import ErrorPage from "../Components/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/taskDashboard",
                element: <TaskDashboard></TaskDashboard>
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
            },
            {
                path: "todo",
                element: <ToDo></ToDo>
            },
            {
                path: "ongoing",
                element: <OnGoing></OnGoing>
            },
            {
                path: "completed",
                element: <Completed></Completed>
            }
        ]
    }
])