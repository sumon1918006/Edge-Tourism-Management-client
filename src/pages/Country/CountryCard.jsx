
import { Link } from "react-router-dom";

const Card = ({ allspot }) => {
  const {routes, image, _id,subcategory_name,short_description} = allspot;

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
      <div className="card-body bg-white mr-4 lg:mr-0">
        <h2 className="text-[18px] font-bold text-center lg:font-bold text-4xl">
          {subcategory_name}
        </h2>
        <p className="text-center">{short_description}</p>
        
        


        <div className="flex items-center justify-center mt-5">
          <Link
            to={`/${routes}`}
            className="btn btn-success text-white hover:btn-primary  hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
