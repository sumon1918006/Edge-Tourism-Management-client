import { useLoaderData } from "react-router-dom";
import AddSpotCard from "../AddSpotCard/AddSpotCard";
import { useState } from "react";

const Allsport = () => {

  const allspot = useLoaderData();
  const [sortData, setSortData] = useState(allspot);

  const handleValue = () =>{
    console.log('connect');

    const costs = allspot.filter(spot => spot.cost >=0);
    const sortByCost = costs.sort((a,b) => b.cost - a.cost);
    setSortData(sortByCost);
  }

  return (
    <div>
      <h1 className="text-xl lg:text-5xl text-center font-semibold py-5">
        All Sport Data
      </h1>

      <div className="text-center lg:pb-5">
        <select className="select select-accent lg:text-lg w-full max-w-xs" onChange={handleValue}>
          <option disabled selected>
            Sort By 
          </option>
          <option>Average cost</option>
          
        </select>
      </div>

      <div className=" card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        {sortData.map((spot) => (
          <AddSpotCard key={spot._id} allspot={spot}></AddSpotCard>
        ))}
      </div>
    </div>
  );
};

export default Allsport;
