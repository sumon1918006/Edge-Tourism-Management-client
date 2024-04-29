import Lottie from "lottie-react";
import contract from "../../assets/contract.json"
import { Link } from "react-router-dom";
const Contract = () => {


    // const style ={
    //     width : "300px",
        
    // }
    return (
        <div className="mt-10 shadow-2xl  mx-auto rounded-2xl border border-[#cbbcbc] bg-gray-100 ">
        <h2 className="text-4xl  font-bold mt-10 mb-10">Contract Us !</h2>
            <div className="flex justify-center">
            <Lottie className="rounded-xl w-800px]"  animationData={contract} />
            </div>
            <Link to="/about"><button className="btn btn-success text-white my-3">Contract</button></Link>
        </div>
    );
};

export default Contract;