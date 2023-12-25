/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Puff } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    // hooks and states
    const { user, loading } = useAuth();
    const location = useLocation();

    // if loading true
    if (loading) {
        return <div className="flex justify-center mt-28 mb-28 lg:mt-80 lg:mb-60">
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    }

    // if user found then return the element
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoute;