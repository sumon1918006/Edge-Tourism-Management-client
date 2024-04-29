import { Link, useLoaderData } from "react-router-dom";

const DetailsSpot = () => {
  const detailSopt = useLoaderData();
  console.log(detailSopt);

  const {
    name,
    image,
    location,
    cost,
    visitor,
    subcategory_name,
    season,
    time,
    short_description,
  } = detailSopt;

  return (
    <div className="border rounded mx-20 mt-10 mb-32 p-8 bg-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section className=" lg:h-[670px]  w-full rounded-2xl ">
        <img className="w-full h-full rounded-md" src={image} alt="" />
      </section>

      <section className="bg-white rounded-md px-12 pb-3 pt-6">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl font-medium py-4">Country : {subcategory_name}</p>

        <div className="text-xl font-medium pb-6 pt-3 border-y-2 space-y-3">
          <p className="pt-2">Average Cost : {cost}$</p>
          <div className="flex items-center gap-2 ">
            <p className="">Location : {location}</p>
          </div>
          <p> Total Visitors PerYear : {visitor}</p>
          <p> Season: {season}</p>
          <p>Travel Time : {time}</p>
        </div>

        <div className="py-5 text-lg">
          <p className="text-xl font-bold pb-2">Description :</p>
          {short_description}
        </div>

        {(detailSopt.user_name && detailSopt.user_email) && (
          <div className="text-xl font-medium pb-4 pt-4 border-t-2 space-y-3">
            <p> Creator Name : {detailSopt?.user_name}</p>
            <p> Creator Email : {detailSopt?.user_email}</p>
          </div>
        )}

        <Link to="/all" className="mt-2 ">
          <button className="btn btn-success text-white">
            Back to All Tourist Spot
          </button>
        </Link>
      </section>
    </div>
  );
};

export default DetailsSpot;
