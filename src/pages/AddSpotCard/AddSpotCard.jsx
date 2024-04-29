

import { IoMdPeople } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddSpotCard = ({allspot} ) => {


    const {name, image,_id, location, cost, visitor, user_name, user_email, subcategory_name, season, time} = allspot;

    // console.log(allspot);

    return (

        <div data-aos="zoom-in" data-aos-duration="1000" className="  lg:h-[500px] card w-full lg:w-96 bg-base-100 shadow-xl border border-[#d8c7c7]">
        <figure><img className="w-[400px] h-[400px] rounded" src={image} alt="Shoes" /></figure>
        <div className="card-body mr-4 lg:mr-0">
            <h2 className="text-[18px] font-bold text-center lg:font-bold text-4xl">{name}</h2>
            <div className='flex justify-between py-3'>
                <h1 className='font-bold'>Average Cost: {cost}$</h1>
                <div className="flex items-center gap-2 font-bold">
                    <IoTime />
                    <h1 >Time: {time}</h1>
                    </div>
                    
            </div>
            <div className="font-bold">
                
            <h2 className="flex items-center gap-2">Total Visitors Per Year: {visitor} <IoMdPeople /></h2>
                    </div>
                    <h3 className="font-bold">Season: {season}</h3>

            <div className="flex items-center justify-center mt-5">
               
                <Link to={`/details/${_id}`} className="btn btn-success text-white hover:btn-primary  hover:text-white">View Details</Link>
            </div>
        </div>
    </div>
  );
};

export default AddSpotCard;
