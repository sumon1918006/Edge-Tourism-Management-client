import { useEffect, useState } from "react";
import AddSpotCard from "../AddSpotCard/AddSpotCard";

const Vietnam = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('https://b9-a10-tourism-management-server.vercel.app/categoryCountry')
        .then(res => res.json())
        .then(datas =>{
            const matchData = datas.filter(data => data.subcategory_name === "Vietnam");
            setData(matchData);
        })
    },[])

    console.log(data);
    return (
        <div>
        <h1 className="text-xl lg:text-5xl text-center font-semibold py-5">
        Vietnam Tourist Spot
 </h1>
      <div className=" card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        
      {
      data.map((spot) => (
     <AddSpotCard key={spot._id} allspot={spot}></AddSpotCard>
   ))}

 </div>
 </div>
    );
};

export default Vietnam;