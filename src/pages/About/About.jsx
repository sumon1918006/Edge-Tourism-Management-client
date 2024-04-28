import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import 'animate.css';
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    document.title = 'About';
}, []);
    return (
        <div className="animate__animated animate__zoomIn card w-[300px] lg:w-1/2  mx-auto mt-10 mb-10 text-white bg-gray-700 shadow-xl">
      
        <div className="card-body items-center text-center">
          <h2 className="text-3xl lg:text-6xl font-semibold mb-5">Office Address</h2>
          <h2 className=" text-[14px] lg:text-xl">Level-4, 34, Awal Centre, Banani, Dhaka</h2>
          <h2 className="text-[14px] lg:text-xl">Support: web@romanhaven.com</h2>
          <h2 className="text-[14px] lg:text-xl">Helpline: 01322901105</h2>
            <div className="flex gap-5 mt-5">
            <FaFacebookF className="size-6 lg:size-9" />
            <FaTelegramPlane className="size-7 lg:size-10" />
            <FaTwitter className="size-7 lg:size-10"/>

            </div>
        </div>
      </div>
    );
};

export default About;