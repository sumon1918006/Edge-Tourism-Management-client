import { IoMdPeople } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddSpotCard = ({ allspot }) => {
  const { name, image, _id,subcategory_name, cost, visitor, season, time } = allspot;

  // console.log(allspot);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="  lg:h-[500px] card w-full lg:w-96 bg-base-100 shadow-xl border border-[#d8c7c7]"
    >
      <figure>
        <img className="w-[400px] h-[400px] rounded" src={image} alt="Shoes" />
      </figure>
      <div className="card-body mr-4 lg:mr-0">
        <h2 className="text-[18px] font-bold text-center lg:font-bold text-4xl">
          {name}
        </h2>
        <div className="flex justify-between  ">
          <h1 className="font-bold">Average Cost: {cost}$</h1>
          <div className="flex items-center gap-2 font-bold">
            <IoTime />
            <h1>Time: {time}</h1>
          </div>
        </div>
        <div className="font-bold">
          <h2 className="flex items-center  gap-2">
            Total Visitors Per Year: {visitor} <IoMdPeople />
          </h2>
        </div>
        <div className="flex justify-between">
        <h3 className="text-start font-bold">Season: {season}</h3>
        <h3 className="text-start font-bold">Country: {subcategory_name}</h3>
        </div>


        <div className="flex items-center justify-center mt-5">
          <Link
            to={`/subcategoryCountryDetails/${_id}`}
            className="btn btn-success text-white hover:btn-primary  hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddSpotCard;
