
import { Link, useRouteError } from "react-router-dom";
import 'animate.css';
import { useEffect } from "react";
// import Lottie from "lottie-react";

// import errorData from "./error.json"


const ErrorPage = () => {
    useEffect(() => {
        document.title = 'Error';
    }, []);

    const error = useRouteError();

  

    return (
        <div className="animate__animated animate__zoomIn text-white bg-slate-700 card w-1/2 mt-28 mx-auto p-5 lg:mt-52 items-center justify-center text-center border lg:h-[50vh]">

            {
                error.status === 404 && <div >


                   
                    <h3 className="lg:text-5xl font-semibold">Page is not found !!!</h3>
                    <p className="py-5 lg:text-2xl font-medium">Go back where you from</p>
                    <Link to="/"><button className="btn btn-success text-white hover:btn-info px-6">Home</button></Link>

                </div>
            }
        </div>
    );
};

export default ErrorPage;