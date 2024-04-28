import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

const {user,loading} =useContext(AuthContext);
const location = useLocation();
console.log(location.pathname);

if(loading){
    return <span className="loading loading-infinity loading-lg"></span>
}

if(user){
    return children;
}
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;