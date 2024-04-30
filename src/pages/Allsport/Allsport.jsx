import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllSpotCard from "./AllSoptCard";

const Allsport = () => {

  useEffect(() => {
    document.title = 'All Tourist Spot';
}, []);

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
      <h1 className="text-xl bg-white lg:text-5xl text-center font-semibold py-5">
        All Sport Data
      </h1>

      <div className="text-center bg-white  lg:pb-5">
        <select className="select bg-white select-accent lg:text-lg w-full max-w-xs" onChange={handleValue}>
          <option disabled selected>
            Sort By 
          </option>
          <option>Average cost</option>
          
        </select>
      </div>

      <div className=" card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        {sortData.map((spot) => (
          <AllSpotCard key={spot._id} allspot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default Allsport;
