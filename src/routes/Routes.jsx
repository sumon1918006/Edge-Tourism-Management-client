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
import Update from "../pages/Update/Update";
import Bangladesh from "../pages/Category/Bangladesh";
import Indonesia from "../pages/Category/Indonesia";
import Malaysia from "../pages/Category/Malaysia";
import Vietnam from "../pages/Category/Vietnam";
import Thailand from "../pages/Category/Thailand";
import Cambodia from "../pages/Category/Cambodia";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://b9-a10-tourism-management-server.vercel.app/addspot"),
      },
      {
        path: "/all",
        element: <Allsport></Allsport>,
        loader: () =>
          fetch("https://b9-a10-tourism-management-server.vercel.app/addspot"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <AddSpot></AddSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoutes>
            <DetailsSpot></DetailsSpot>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9-a10-tourism-management-server.vercel.app/addspot/${params.id}`
          ),
      },

      {
        path: "touristDetails/:id",
        element: (
          <PrivateRoutes>
            <DetailsSpot></DetailsSpot>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9-a10-tourism-management-server.vercel.app/touristSpot/${params.id}`
          ),
      },

      {
        path: "subcategoryCountryDetails/:id",
        element: (
          <PrivateRoutes>
            <DetailsSpot></DetailsSpot>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9-a10-tourism-management-server.vercel.app/categoryCountry/${params.id}`
          ),
      },

      {
        path: "update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b9-a10-tourism-management-server.vercel.app/addspot/${params.id}`
          ),
      },
      {
        path: "/bangladesh",
        element: <Bangladesh></Bangladesh>,
      },
      {
        path: "/indonesia",
        element: <Indonesia></Indonesia>,
      },
      {
        path: "/malaysia",
        element: <Malaysia></Malaysia>,
      },
      {
        path: "/vietnam",
        element: <Vietnam></Vietnam>,
      },
      {
        path: "/thailand",
        element: <Thailand></Thailand>,
      },
      {
        path: "/cambodia",
        element: <Cambodia></Cambodia>,
      },
    ],
  },
]);
export default routes;
