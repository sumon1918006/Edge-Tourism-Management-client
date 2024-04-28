import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import MyList from "../pages/MyList/MyList";
import AddSpot from "../pages/AddSpot/AddSpot";
import Allsport from "../pages/Allsport/Allsport";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DetailsSpot from "../pages/DetailsSpot/DetailsSpot";
import PrivateRoutes from "./PrivateRoutes";



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/mylist',
                element:<PrivateRoutes><MyList></MyList></PrivateRoutes>
            },
            {
                path:'/all',
                element:<Allsport></Allsport>,
                loader: () => fetch('http://localhost:5000/addspot')
            },
            {
                path:'/add',
                element:<PrivateRoutes><AddSpot></AddSpot></PrivateRoutes>
            },
            {
                path:'details/:id',
                element:<PrivateRoutes><DetailsSpot></DetailsSpot></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/addspot/${params.id}`),
            },
          
        ]
    }
]);
export default routes;